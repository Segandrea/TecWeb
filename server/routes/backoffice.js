const express = require("express");
const passport = require("passport");
const User = require("../models/user.js").User;

const router = express.Router();

function restrict(req, res, next) {
  if (req.user && req.user.role === "employee") {
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

      return res.json({ _id: user._id });
    });
  })(req, res, next);
});

router.post("/signout", restrict, (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.put("/customers/:customerId", restrict, (req, res) => {
  let body = req.body;

  User.findByIdAndUpdate(
    req.params.customerId,
    { email: body.email, customer: { username: body.username } },
    { lean: true, returnDocument: "after" }
  )
    .then((user) =>
      res.json({
        _id: user._id,
        email: user.email,
        username: user.customer.username,
      })
    )
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/customers/:customerId", restrict, (req, res) => {
  User.findById(req.params.customerId)
    .lean()
    .then((user) =>
      res.json({
        _id: user._id,
        email: user.email,
        username: user.customer.username,
      })
    )
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/customers", restrict, (req, res) => {
  User.find({ role: "customer" })
    .lean()
    .then((users) => {
      const customers = users.map((user) => ({
        _id: user._id,
        email: user.email,
        username: user.customer.username,
      }));

      res.json({ customers });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post("/products", restrict, (req, res) => {
  Product.create(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/discounts", restrict, (req, res) => {
  Discount.find({})
    .lean()
    .then((discounts) => res.json({ discounts }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
