const express = require("express");
const passport = require("passport");

const User = require("../models/user.js").User;
const Order = require("../models/order.js").Order;
const Review = require("../models/review.js").Review;
const Product = require("../models/product.js").Product;
const Discount = require("../models/discount.js").Discount;

const router = express.Router();

function restrict(req, res, next) {
  if (req.user && req.user.role === "customer") {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

router.post("/signup", async (req, res) => {
  // TODO: validate req.body

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

  User
    .create({
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

        return res.json({ _id: user._id });
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

      return res.json({ _id: user._id });
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
    avatar: user.customer.avatar,
    username: user.customer.username,
  });
});

router.get("/orders", restrict, (req, res) => {
  const user = req.user;
  Order.find({ userId: user._id })
    .lean()
    .then((orders) => res.json({ orders }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post("/orders", restrict, (req, res) => {
  // TODO
});

router.get("/products/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .lean()
    .then((product) => res.json({ product }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

router.get("/products", (req, res) => {
  Product.find({ visible: true })
    .lean()
    .then((products) => res.json({ products }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

router.post("/reviews", restrict, (req, res) => {
  Review.create(req.body)
    .then((review) => res.status(201).json(review))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/reviews", (req, res) => {
  const productId = req.query.productId;
  if (productId) {
    // reviews for productId
    return Review.find({ productId: productId })
      .lean()
      .then((reviews) => res.json({ reviews }))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
  // return all reviews
  Review.find({})
    .lean()
    .then((reviews) => res.json({ reviews }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/discounts/:discountId", restrict, (req, res) => {
  const discountId = req.params.discountId;
  Discount.findById(discountId)
    .lean()
    .then((discount) => res.json({ discount }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

router.get("/ping", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
