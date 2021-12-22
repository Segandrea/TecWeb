const express = require("express");
const passport = require("passport");

const utils = require("./utils");

const User = require("../models/user").User;
const Order = require("../models/order").Order;
const Review = require("../models/review").Review;
const Product = require("../models/product").Product;
const Coupon = require("../models/coupon").Coupon;

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
    return res.sendStatus(409);
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
  utils.byIdAndUpdate(
    User,
    (user) => ({
      _id: user._id,
      email: user.email,
      username: user.customer.username,
      billingAddress: user.customer.billingAddress || "",
    }),
    (req) => ({
      email: req.body.email,
      customer: {
        username: req.body.username,
        billingAddress: req.body.billingAddress,
      },
    }),
    (req) => req.user._id
  )
);

router.get(
  "/orders/:id",
  restrict,
  utils.oneByQuery(Order, undefined, (req) => ({
    _id: req.params.id,
    userId: req.user._id,
  }))
);

router.get(
  "/orders",
  restrict,
  utils.listAll(Order, "orders", undefined, (req) => ({ userId: req.user._id }))
);

router.post("/orders", restrict, (req, res) => {
  Order.create(req.body)
    .then((order) => res.status(201).json(order))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

// TODO: change conventions
router.get(
  "/products/:id",
  utils.byId(Product, (product) => ({ product }))
);

router.get(
  "/products",
  utils.listAll(Product, "products", undefined, () => ({ visible: true }))
);

router.post("/reviews", restrict, (req, res) => {
  Review.create(req.body)
    .then((review) => res.status(201).json(review))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/reviews", utils.listAll(Review, "reviews"));

router.get(
  "/coupons/:code",
  restrict,
  utils.oneByQuery(Coupon, undefined, (req) => ({ code: req.params.code }))
);

router.get("/ping", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
