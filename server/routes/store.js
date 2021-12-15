const express = require("express");
const passport = require("passport");

const ObjectId = require("mongoose").Types.ObjectId;

const User = require("../models/user.js").User;
const Order = require("../models/order.js").Order;
const Review = require("../models/review.js").Review;
const Product = require("../models/product.js").Product;
const Discount = require("../models/discount.js").Discount;

const router = express.Router();

// require customer authentication
function restrict(req, res, next) {
  if (req.user && req.user.role === "customer") {
    return next();
  } else {
    req.session.returnTo = req.originalUrl;
    return res.redirect("/store/auth/signin?error=required");
  }
}

router.post("/signup", async (req, res) => {
  const alreadyRegistered = await User.exists({
    role: "customer",
    email: req.body.email,
  });

  if (alreadyRegistered) {
    return res.redirect("/store/auth/signup?error=invalid");
  }

  const user = new User({
    role: "customer",
    email: req.body.email,
    password: req.body.password,
    customer: {
      username: req.body.username,
    },
  });

  user
    .save()
    .then((user) => {
      res.redirect("/store/auth/signin?error=required");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post("/signin", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect("/store/auth/signin?error=invalid");
    }

    req.login(user, function (err) {
      if (err) {
        return next(err);
      }

      const returnTo = req.session.returnTo || "/store";
      delete req.session.returnTo;

      return res.redirect(returnTo);
    });
  })(req, res, next);
});

router.get("/signout", (req, res) => {
  req.logout();
  res.redirect("/store");
});

router.get("/secret", restrict, (req, res) => {
  res.json({ user: req.user });
});

router.get("/products/:productId", (req, res) => {
  const productId = ObjectId(req.params.productId);
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

// TODO: move to backoffice
router.post("/products", (req, res) => {
  Product.create(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
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
  const discountId = ObjectId(req.params.discountId);
  Discount.findById(discountId)
    .lean()
    .then((discount) => res.json({ discount }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

// TODO: move to backoffice
router.get("/discounts", restrict, (req, res) => {
  Discount.find({})
    .lean()
    .then((discounts) => res.json({ discounts }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

router.get("/orders", restrict, (req, res) => {
  const user = req.user;
  Order.find({ userId: user._id })
    .lean()
    .then((orders) => res.json({ orders }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

router.post("/orders", restrict, (req, res) => {
  // TODO
});

router.get("/profile", restrict, (req, res) => {
  const user = req.user;
  res.json({
    email: user.email,
    avatar: user.customer.avatar,
    username: user.customer.username,
  });
});

router.get("/ping", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
