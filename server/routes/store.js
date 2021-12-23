const express = require("express");
const passport = require("passport");

const handler = require("./handler");

const User = require("../models/user").User;
const Order = require("../models/order").Order;
const Coupon = require("../models/coupon").Coupon;
const Review = require("../models/review").Review;
const Product = require("../models/product").Product;

const router = express.Router();

function restrict(req, res, next) {
  if (req.user && req.user.role === "customer") {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

router.post("/signup", async (req, res) => {
  if (req.body.password != req.body.confirm) {
    return res.sendStatus(400);
  }

  const alreadyRegistered = await User.exists({
    role: "customer",
    email: req.body.email,
  });

  if (alreadyRegistered) {
    return res.sendStatus(400);
  }

  User.create({
    role: "customer",
    email: req.body.email,
    password: req.body.password,
    customer: {
      username: req.body.username,
    },
  })
    .then((user) => {
      req.login(user, (err) => {
        if (err) {
          console.error(err);
          return res.sendStatus(500);
        }

        return res.json({ _id: user._id, role: user.role });
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

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

router.get("/profile", restrict, (req, res) => {
  const user = req.user;
  res.json({
    _id: user._id,
    email: user.email,
    username: user.customer.username,
    billingAddress: user.customer.billingAddress || "",
  });
});

router.put(
  "/profile",
  restrict,
  handler.byIdAndUpdate(User, {
    id: (req) => req.user._id,
    body: (req) => ({
      email: req.body.email,
      customer: {
        username: req.body.username,
        billingAddress: req.body.billingAddress,
      },
    }),
    serialize: (user) => ({
      _id: user._id,
      email: user.email,
      username: user.customer.username,
      billingAddress: user.customer.billingAddress || "",
    }),
  })
);

router.get(
  "/orders/:id",
  restrict,
  handler.oneByFilter(Order, {
    filter: (req) => ({
      _id: req.params.id,
      userId: req.user._id,
    }),
  })
);

router.get(
  "/orders",
  restrict,
  handler.listAll(Order, "orders", {
    filter: (req) => ({ userId: req.user._id }),
  })
);

router.post("/orders", restrict, handler.create(Order));

router.get("/products/:id", handler.byId(Product));

router.get(
  "/products",
  handler.listAll(Product, "products", { filter: () => ({ visible: true }) })
);

router.post("/reviews", restrict, handler.create(Review));
router.get("/reviews", handler.listAll(Review, "reviews"));

router.get(
  "/coupons/:code",
  restrict,
  handler.oneByFilter(Coupon, { filter: (req) => ({ code: req.params.code }) })
);

module.exports = router;
