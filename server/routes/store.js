const express = require("express");
const passport = require("passport");
const User = require("../models/user.js").User;
const Product = require("../models/product.js").Product;
const Review = require("../models/review.js").Review;

const router = express.Router();

// require customer authentication
function restrict(req, res, next) {
  if (req.user && req.user.role == "customer") {
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
  });

  user
    .save()
    .then(() => res.redirect("/store/auth/signin?error=required"))
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
  res.json({
    id: req.param.productId,
    imageUrl: "fixmeImageUrl",
    name: "fixmeSpecifiedName",
    description: "fixmeDescription",
    basePrice: "fixmeBasePrice",
    dailyPrice: "fixmeDailyPrice",
    rating: "fixmeRating",
  });
});

router.get("/products", (req, res) => {
  Product.find({})
         .lean()
         .then(products => res.json({ products }))
         .catch(err => {
             console.error(err);
             res.sendStatus(500);
         })
});

router.post("/products", (req, res) => {
  Product.create(req.body)
         .then(product => res.status(201).json(product))
         .catch(err => {
             console.error(err);
             res.sendStatus(400);
         })
});

router.post("/reviews", (req, res) => {
  Review.create(req.body)
         .then(review => res.status(201).json(review))
         .catch(err => {
             console.error(err);
             res.sendStatus(400);
         })
})

router.get("/reviews", (req, res) => {
  const productId = req.query.productId;
  if (productId) {
    // reviews for productId
    return  Review.find({ productId: productId})
                  .lean()
                  .then(reviews => res.json({ reviews }))
                  .catch(err => {
                      console.error(err);
                      res.sendStatus(500);
                  })
  }
  // return all reviews
  Review.find({})
        .lean()
        .then(reviews => res.json({ reviews }))
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
});

router.get("/discounts", (req, res) => {
  res.json({
    discountCodes: [
      {
        code: "fixmeCode",
        discount: "fixmeDiscount",
      },
    ],
  });
});

router.get("/orders", (req, res) => {
  res.json({
    orders: [
      {
        id: "fixmeId",
        price: "fixmePrice",
        status: "fixmeStatus",
        issuedAt: "fixmeIssuedAt",
        productId: "fixmeProductId",
      },
    ],
  });
});

router.get("/cart", (req, res) => {
  res.json({
    id: "fixmeId",
    rentalPeriod: "fixmeRentalPeriod",
    days: "fixmeDays",
    discountPrice: "fixmeDiscountPrice",
    subtotalPrice: "fixmeSubtotalPrice",
    totalPrice: "fixmeTotalPrice",
  });
});

router.get("/profile", (req, res) => {
  res.json({
    id: "fixmeId",
    email: "fixmeEmail",
    avatar: "fixmeAvatar",
    username: "fixmeUsername",
  });
});

router.get("/ping", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
