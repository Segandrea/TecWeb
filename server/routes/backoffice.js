const express = require("express");
const passport = require("passport");

const utils = require("./utils");

const User = require("../models/user").User;
const Review = require("../models/review").Review;
const Upload = require("../models/upload").Upload;
const Product = require("../models/product").Product;
const Coupon = require("../models/coupon").Coupon;
const Order = require("../models/order").Order;

const router = express.Router();

const ROLES = ["admin", "employee"];

function restrict(req, res, next) {
  if (req.user && ROLES.includes(req.user.role)) {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

function upload(uploads) {
  if (uploads && uploads.length > 0) {
    return Upload.create(uploads).then((uploads) => uploads.map(toImage));
  } else {
    return Promise.resolve([]);
  }
}

function toImage(upload) {
  return { url: `/media/images/${upload._id}` };
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

router.put(
  "/customers/:id",
  restrict,
  utils.oneByQueryAndUpdate(
    User,
    (user) => ({
      _id: user._id,
      email: user.email,
      username: user.customer.username,
    }),
    (req) => ({ _id: req.params.id || null, role: "customer" }),
    (req) => ({
      email: req.body.email,
      customer: { username: req.body.username },
    })
  )
);

router.get(
  "/customers/:id",
  restrict,
  utils.oneByQuery(
    User,
    (user) => ({
      _id: user._id,
      email: user.email,
      username: user.customer.username,
    }),
    (req) => ({ _id: req.params.id || null, role: "customer" })
  )
);

router.get(
  "/customers",
  restrict,
  utils.listAll(
    User,
    "customers",
    (user) => ({
      _id: user._id,
      email: user.email,
      username: user.customer.username,
    }),
    (req) => ({ ...req.query, role: "customer" })
  )
);

router.put("/products/:productId", restrict, (req, res) => {
  const productId = req.params.productId;
  const body = req.body;

  upload(body.uploads)
    .then((images) => {
      delete body.uploads;

      if (body.images) {
        body.images.push(...images);
      } else {
        body.images = images;
      }

      Product.findByIdAndUpdate(productId, body, {
        returnDocument: "after",
        lean: true,
      }).then((product) => res.json(product));
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/products/:id", restrict, utils.byId(Product));

router.get("/products", restrict, utils.listAll(Product, "products"));

router.post("/products", restrict, (req, res) => {
  upload(req.body.uploads)
    .then((images) => {
      delete req.body.uploads;
      req.body.images = images;

      return Product.create(req.body).then((product) =>
        res.status(201).json(product)
      );
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.put("/coupons/:id", restrict, utils.byIdAndUpdate(Coupon));

router.get("/coupons/:id", restrict, utils.byId(Coupon));

router.get("/coupons", restrict, utils.listAll(Coupon, "coupons"));

router.post("/coupons", restrict, (req, res) => {
  Coupon.create(req.body)
    .then((coupon) => res.status(201).json(coupon))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/reviews/:id", restrict, utils.byId(Review));

router.get("/reviews", restrict, utils.listAll(Review, "reviews"));

//TODO: think about me
router.post("/orders", restrict, (req, res) => {
  Order.create(req.body)
    .then((order) => res.status(201).json(order))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/orders/:id", restrict, utils.byId(Order));

router.get("/orders", restrict, utils.listAll(Order, "orders"));

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
