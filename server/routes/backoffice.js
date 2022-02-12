const express = require("express");
const passport = require("passport");

const handler = require("./handler");

const User = require("../models/user").User;
const Order = require("../models/order").Order;
const Coupon = require("../models/coupon").Coupon;
const Upload = require("../models/upload").Upload;
const Product = require("../models/product").Product;

const router = express.Router();

const ROLES = ["admin", "employee"];

function restrict(req, res, next) {
  if (req.user && ROLES.includes(req.user.role)) {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

function restrictAdmin(req, res, next) {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

function restrictEmployee(req, res, next) {
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

      return res.json({ _id: user._id, role: user.role });
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
  handler.oneByFilterAndUpdate(User, {
    filter: filterCustomer,
    body: deserializeCustomer,
    serialize: serializeCustomer,
  })
);

router.get(
  "/customers/:id",
  restrict,
  handler.oneByFilter(User, {
    filter: filterCustomer,
    serialize: serializeCustomer,
  })
);

router.get(
  "/customers",
  restrict,
  handler.listAll(User, "customers", {
    filter: (req) => {
      const filter = JSON.parse(req.query.filter || "{}");
      return { ...filter, role: "customer" };
    },
    serialize: serializeCustomer,
  })
);

router.delete("/products/:id", restrict, deleteProduct);
router.put("/products/:id", restrict, updateProduct);
router.get("/products/:id", restrict, handler.byId(Product));
router.get("/products", restrict, handler.listAll(Product, "products"));
router.post("/products", restrict, createProduct);

router.put("/coupons/:id", restrict, handler.byIdAndUpdate(Coupon));
router.get("/coupons/:id", restrict, handler.byId(Coupon));
router.get("/coupons", restrict, handler.listAll(Coupon, "coupons"));
router.post("/coupons", restrict, handler.create(Coupon));

router.put("/orders/:id", restrictEmployee, updateOrder);
router.delete("/orders/:id", restrict, deleteOrder);
router.get("/orders/:id", restrict, handler.byId(Order));
router.get(
  "/orders",
  restrict,
  handler.listAll(Order, "orders", { sort: { startDate: -1, state: -1 } })
);

router.put(
  "/employees/:id",
  restrictAdmin,
  handler.oneByFilterAndUpdate(User, {
    filter: filterEmployee,
    body: deserializeEmployee,
    serialize: serializeEmployee,
  })
);

router.get(
  "/employees/:id",
  restrict,
  handler.oneByFilter(User, {
    filter: filterEmployee,
    serialize: serializeEmployee,
  })
);

router.get(
  "/employees",
  restrict,
  handler.listAll(User, "employees", {
    filter: (req) => {
      const filter = JSON.parse(req.query.filter || "{}");
      return { ...filter, role: "employee" };
    },
    serialize: serializeEmployee,
  })
);

module.exports = router;

/**
 * utils
 */
function filterCustomer(req) {
  return { _id: req.params.id || null, role: "customer" };
}

function deserializeCustomer(req) {
  return {
    email: req.body.email,
    blocked: req.body.blocked,
    customer: {
      username: req.body.username,
      billingAddress: req.body.billingAddress,
    },
  };
}

function serializeCustomer(user) {
  return {
    _id: user._id,
    email: user.email,
    blocked: user.blocked,
    username: user.customer.username,
    billingAddress: user.customer.billingAddress,
  };
}

function updateProduct(req, res) {
  const productId = req.params.id;
  const body = req.body;

  upload(body.uploads)
    .then((images) => {
      delete body.uploads;

      if (body.images) {
        body.images.push(...images);
      } else {
        body.images = images;
      }

      return Product.findByIdAndUpdate(productId, body, {
        returnDocument: "after",
      }).then((product) => res.json(product));
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
}

function createProduct(req, res) {
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

function deleteProduct(req, res) {
  const id = req.params.id;
  Order.exists({ "products.productId": id })
    .then((found) => {
      if (found) {
        return res.sendStatus(409);
      } else {
        Product.findByIdAndDelete(id).then((product) => {
          if (!product) {
            return res.sendStatus(404);
          }
          return res.sendStatus(200);
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}

function updateOrder(req, res) {
  const id = req.params.id;
  const user = req.user;
  const body = req.body;

  Order.findById(id)
    .then((order) => {
      if (!order) {
        return res.sendStatus(404);
      }

      if (order.state !== "open") {
        return res.sendStatus(409);
      }

      order.billingAddress = body.billingAddress || "";
      order.startDate = body.startDate || order.startDate;
      order.endDate = body.endDate || order.endDate;

      if (body.state === "closed") {
        order.penaltyPrice = body.penaltyPrice || 0;
        order.employeeId = user._id;
        order.state = "closed";
      }

      return order.save().then((order) => res.json(order));
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
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

function filterEmployee(req) {
  return { _id: req.params.id || null, role: "employee" };
}

function deserializeEmployee(req) {
  return {
    email: req.body.email,
    blocked: req.body.blocked,
  };
}

function serializeEmployee(user) {
  return {
    _id: user._id,
    email: user.email,
    blocked: user.blocked,
  };
}
