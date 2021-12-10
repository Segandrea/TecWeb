const express = require("express");
const passport = require("passport");
const User = require("../models/user.js").User;

const router = express.Router();

// require customer authentication
function restrict(req, res, next) {
  if (req.user && req.user.role == "employee") {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

router.post("/signin", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      console.error(err);
      return res.sendStatus(401);
    }

    if (!user) {
      return res.sendStatus(401);
    }

    req.login(user, function (err) {
      if (err) {
        console.error(err);
        return res.sendStatus(401);
      }

      return res.sendStatus(200);
    });
  })(req, res, next);
});

router.post("/signout", restrict, (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
