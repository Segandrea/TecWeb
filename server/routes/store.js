const express = require("express");
const passport = require("passport");

const handler = require("./handler");

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

  products = await Product.find({ _id: { $in: products } }).then((products) =>
    products.map((product) => ({
      productId: product._id,
      name: product.name,
      imageUrl: product.images[0].url,
      basePrice: product.basePrice,
      dailyPrice: product.dailyPrice,
      discountPrice: product.discountPrice,
    }))
  );

  // FIXME: delete used coupons
  coupons = await Coupon.find({ _id: { $in: coupons } }, "-_id").then(
    (coupons) => coupons
  );

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

  if (req.user && params.rentalPeriod && params.rentalPeriod.length === 2) {
    const [start, end] = params.rentalPeriod.map((s) => new Date(s));

    return rentedProducts(start, end)
      .then((products) =>
        Product.find({
          visible: true,
          _id: { $nin: products },
        }).then((products) => res.json({ products }))
      )
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }

  return handler.listAll(Product, "products", {
    filter: (req) => ({
      ...JSON.parse(req.query.filter || "{}"),
      visible: true,
    }),
  })(req, res);
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
