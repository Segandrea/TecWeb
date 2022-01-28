const express = require("express");
const passport = require("passport");

const handler = require("./handler");
const mongoose = require("mongoose");

const User = require("../models/user").User;
const Order = require("../models/order").Order;
const Coupon = require("../models/coupon").Coupon;
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
      customerId: req.user._id,
    }),
    serialize: serializeOrder,
  })
);
router.get(
  "/orders",
  restrict,
  handler.listAll(Order, "orders", {
    filter: (req) => ({ customerId: req.user._id }),
    serialize: serializeOrder,
    sort: { startDate: -1, state: -1 },
  })
);
router.post("/orders", restrict, createOrder);

router.post("/products/:id/reviews", restrict, createReview);
router.get("/products/:id", handler.byId(Product));
router.get("/products", listProducts);
router.delete("/orders/:id", restrict, deleteOrder);

router.get(
  "/coupons/:code",
  restrict,
  handler.oneByFilter(Coupon, { filter: (req) => ({ code: req.params.code }) })
);

module.exports = router;

/**
 *
 */
function createReview(req, res) {
  const productId = req.params.id;
  const username = req.user.customer.username;
  const { content, rating } = req.body;

  Product.findById(productId)
    .then((product) => {
      if (product) {
        product.reviews.push({ username, content, rating });
        return product
          .save()
          .then((product) => res.json(product))
          .catch((err) => {
            console.log(err);
            return res.sendStatus(500);
          });
      } else {
        return res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}

async function createOrder(req, res) {
  const user = req.user;
  let { products, coupons, startDate, endDate } = req.body;
  const [productsLen, couponsLen] = [products.length, coupons.length];

  if (productsLen <= 0) {
    return res.sendStatus(400);
  }
  products = await Product.find({ _id: { $in: products }, visible: true })
    .lean()
    .then((products) =>
      products.map((product) => ({
        productId: product._id,
        name: product.name,
        imageUrl: product.images[0].url,
        basePrice: product.basePrice,
        dailyPrice: product.dailyPrice,
        discountPrice: product.discountPrice,
      }))
    );
  if (products.length !== productsLen) {
    return res.sendStatus(400);
  }

  coupons = await Coupon.find({ _id: { $in: coupons } }).lean();
  if (coupons.length !== couponsLen) {
    return res.sendStatus(400);
  }
  await Coupon.deleteMany({
    _id: { $in: coupons.map((coupon) => coupon._id) },
  });

  return Order.create({
    customerId: user._id,
    state: "open",
    startDate,
    endDate,
    products,
    coupons,
  })
    .then((order) => res.status(201).json(serializeOrder(order)))
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
}

function serializeOrder(order) {
  delete order.employeeId;
  return order;
}

function listProducts(req, res) {
  const params = JSON.parse(req.query.params || "{}");
  const filter = mongoose.sanitizeFilter(JSON.parse(req.query.filter || "{}"));

  if (req.user && params.rentalPeriod && params.rentalPeriod.length === 2) {
    const [start, end] = params.rentalPeriod.map((s) => new Date(s));

    return rentedProducts(start, end)
      .then((products) =>
        Product.find({
          ...filter,
          visible: true,
          _id: { $nin: products },
        }).sort({ name: 1, status: 1, basePrice: -1, dailyPrice: -1 })
      )
      .then((products) => res.json({ products }))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }

  /*
    db.products.aggregate([
        { $sort: { name: -1, status: 1, basePrice: -1, dailyPrice: -1 }},
        { $group: { _id: "$name", group: { $addToSet: "$_id" }}},
    ]).map((res) => db.products.findOne(res.group[0]))
   */
  // TODO: filter by visibility
  return Product.aggregate([
    { $sort: { name: 1, status: 1, basePrice: -1, dailyPrice: -1 } },
    { $group: { _id: "$name", group: { $push: "$_id" } } },
  ])
    .then((res) =>
      Product.find({
        ...filter,
        visible: true,
        _id: { $in: res.map((a) => a.group[0]) },
      })
    )
    .then((products) => res.json({ products }))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}

function rentedProducts(start, end) {
  return Order.find(
    {
      state: "open",
      startDate: { $lte: end },
      endDate: { $gte: start },
    },
    "-_id products.productId"
  )
    .lean()
    .then(
      (orders) =>
        orders //                                 [{ "products": [{ "productId": "..." }] }, ]
          .map((order) => order.products) //      [[{ "productId": "..." }], ]
          .flat() //                              [{ "productId": "..." }, ]
          .map((product) => product.productId) // ["...", ]
    );
}

function deleteOrder(req, res) {
  const { id } = req.params;
  const today = new Date();
  Order.deleteOne({ _id: id, state: "open", startDate: { $gt: today } })
    .then(({ deletedCount }) => {
      if (deletedCount === 1) {
        return res.sendStatus(200);
      } else {
        return res.sendStatus(422);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}
