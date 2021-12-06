const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const logger = require("morgan");

const config = require("./config.js");

const db = require("./db.js");
const User = require("./models/user.js").User;

// setup MongoDB
db.connect();

const app = express();
const port = 8000;

// !!! DO NOT CHANGE THE ORDER OF THE FOLLOWING LINES !!!

// setup morgan logger for logging requests and responses
app.use(logger("dev"));

// setup static folders
app.use("/backoffice", express.static(config.backoffice.staticPath));
app.use("/backoffice/*", (req, res) =>
  res.sendFile(config.backoffice.fallbackPage)
);

app.use("/store", express.static(config.store.staticPath));

app.use(express.static("./public"));

// setup express session backend
app.use(
  session({
    secret: config.session.secret,
    resave: false,
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
  })
);

// setup incoming request body parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// setup local strategy for authenticating with username and password
passport.use(
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    authenticateUser
  )
);

// session user deserializer
passport.deserializeUser(deserializeUser);

// session user serializer
passport.serializeUser(serializeUser);

// register store routes
app.use("/api/store", require("./routes/store"));

// start server at the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
 * passport callbacks
 */
function authenticateUser(req, email, password, done) {
  const role = req.body.role;

  User.findOne({ email, role }, (err, user) => {
    if (err) {
      console.error(err);
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: "invalid credentials" });
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        console.error(err);
        return done(null, false, { message: "invalid credentials" });
      }

      if (!isMatch) {
        return done(null, false, { message: "invalid credentials" });
      }

      return done(null, user);
    });
  });
}

function serializeUser(user, done) {
  done(null, { id: user.id, role: user.role });
}

function deserializeUser(user, done) {
  // TODO: load actual user data: e.g. Customer, Employee, Admin
  User.findById(user.id, (err, user) => {
    done(err, user);
  });
}
