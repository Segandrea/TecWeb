const express = require("express");
const passport = require("passport");

const User = require("../models/user").User;
const Review = require("../models/review").Review;
const Upload = require("../models/upload").Upload;
const Product = require("../models/product").Product;
const Discount = require("../models/discount").Discount;
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

router.put("/customers/:customerId", restrict, (req, res) => {
  const body = req.body;

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

router.get("/products/:productId", restrict, (req, res) => {
  Product.findById(req.params.productId)
    .lean()
    .then((product) => res.json(product))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/products", restrict, (req, res) => {
  Product.find({})
    .lean()
    .then((products) => res.json({ products }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

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
      res.sendStatus(500);
    });
});

router.put("/discounts/:discountId", restrict, (req, res) => {
  const body = req.body;

  Discount.findByIdAndUpdate(
    req.params.discountId,
    {
      code: body.code,
      value: body.value,
    },
    { lean: true, returnDocument: "after" }
  )
    .then((discount) => res.json(discount))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/discounts/:discountId", restrict, (req, res) => {
  Discount.findById(req.params.discountId)
    .lean()
    .then((discount) => res.json(discount))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
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

router.post("/discounts", restrict, (req, res) => {
  Discount.create(req.body)
    .then((discount) => res.status(201).json(discount))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/reviews/:reviewId", restrict, (req, res) => {
  Review.findById(req.params.reviewId)
    .lean()
    .then((review) => res.json(review))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/reviews", restrict, (req, res) => {
  Review.find({})
    .lean()
    .then((reviews) => res.json({ reviews }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post("/orders", restrict, (req, res) => {
  Order.create(req.body)
    .then((order) => res.status(201).json(order))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

router.get("/orders/:orderId", restrict, (req, res) => {
  Order.findById(req.params.orderId)
    .lean()
    .then((order) => res.json(order))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/orders", restrict, (req, res) => {
  Order.find({})
    .lean()
    .then((orders) => res.json({ orders }))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
