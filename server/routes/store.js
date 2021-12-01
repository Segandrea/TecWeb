const express = require("express");
const passport = require("passport");
const User = require("../models/user.js").User;

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

router.get("/ping", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
