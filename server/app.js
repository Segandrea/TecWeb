const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const logger = require("morgan");

const config = require("./config");

const db = require("./db");
const User = require("./models/user").User;

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
app.use("/store/*", (req, res) => res.sendFile(config.store.fallbackPage));

app.use(express.static("./public"));

// setup express session backend
app.use(
  session({
    secret: config.session.secret,
    resave: false,
    cookie: { maxAge: 7200000 },
    saveUninitialized: false,
  })
);

// setup incoming request body parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "1mb" }));

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
app.use("/api/backoffice", require("./routes/backoffice"));
app.use("/api/store", require("./routes/store"));
app.use("/media", require("./routes/media"));

// start server at the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} (${config.env})`);
});

/*
 * passport callbacks
 */
function authenticateUser(req, email, password, done) {
  const path = req.baseUrl + req.path;
  const role = {
    "/api/admindashboard/signin": "admin",
    "/api/backoffice/signin": "employee",
    "/api/store/signin": "customer",
  }[path];

  User.findOne({ email, role }, (err, user) => {
    if (err) {
      console.error(err);
      return done(err);
    }

    if (!user || user.blocked) {
      return done(null, false);
    }

    user.comparePassword(password, function (err, isEqual) {
      if (err) {
        console.error(err);
        return done(null, false);
      }

      if (!isEqual) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
}

function serializeUser(user, done) {
  done(null, { _id: user._id });
}

function deserializeUser(user, done) {
  User.findById(user._id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
}
