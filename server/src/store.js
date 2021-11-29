const express = require("express");
const passport = require("passport");

const router = express.Router();

// require customer authentication
function restrict(req, res, next) {
  if (req.user && req.user.role == "customer") {
    next();
  } else {
    res.redirect("/signin.html");
  }
}

router.get("/ping", (req, res) => {
  res.status(200);
});

router.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/hello.html",
    failureRedirect: "/error401.html",
  })
);

router.get("/signout", (req, res) => {
  req.logout();
  res.redirect("/signin.html");
});

router.get("/secret", restrict, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
