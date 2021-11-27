const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const auth = require("./auth");
const router = express.Router();

passport.use(new LocalStrategy({ usernameField: "email" }, auth));

const restrict = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/signin.html");
  }
};

router.get("/ping", (req, res) => {
  res.json({ status: "active" });
});

router.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/hello.html",
    failureRedirect: "/error401.html",
    failureMessage: true,
  })
);

router.get("/signout", (req, res, next) => {
  req.logout();
  res.redirect("/signin.html");
});

router.get("/secret", restrict, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
