const express = require("express");
const passport = require("passport");

const Order = require("../models/order").Order;
const Product = require("../models/product").Product;

const router = express.Router();

function restrict(req, res, next) {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

router.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      console.error(err);
      return res.sendStatus(401);
    }

    if (!user) {
      return res.sendStatus(401);
    }

    req.login(user, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }

      return res.json({ _id: user._id, role: user.role });
    });
  })(req, res, next);
});

router.post("/signout", restrict, (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get("/statistics", restrict, async (req, res) => {
  const mostPopularProducts = await Product.find({}, "_id name rating")
    .sort({ rating: -1 })
    .limit(3);

  const mostActiveCustomers = await Order.aggregate()
    .group({ _id: "$customerId", count: { $sum: 1 } })
    .sort({ count: -1 })
    .limit(3)
    .exec();

  const mostActiveEmployees = await Order.aggregate()
    .match({ employeeId: { $exists: true, $ne: null } })
    .group({ _id: "$employeeId", count: { $sum: 1 } })
    .sort({ count: -1 })
    .limit(3)
    .exec();

  const monthlyIncome = await Order.aggregate()
    .group({
      _id: { year: { $year: "$endDate" }, month: { $month: "$endDate" } },
      income: { $sum: "$totalPrice" },
      count: { $sum: 1 },
    })
    .exec();

  const averageRentalPeriod = await Order.aggregate()
    .group({
      _id: "",
      value: { $avg: "$days" },
    })
    .exec();

  return res.json({
    monthlyIncome,
    mostPopularProducts,
    mostActiveEmployees,
    mostActiveCustomers,
    averageRentalPeriod: averageRentalPeriod[0] ? averageRentalPeriod[0].value : 0,
  });
});

module.exports = router;
