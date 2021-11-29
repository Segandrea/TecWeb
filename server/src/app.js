const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = 8000;

// !!! DO NOT CHANGE THE ORDER OF THE FOLLOWING LINES !!!

// setup static folders
app.use(express.static("public"));

// setup express session backend
app.use(
  session({ secret: "<FIXME>", resave: false, saveUninitialized: false })
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
    authUser
  )
);

// session user deserializer
passport.deserializeUser(deserializeUser);

// session user serializer
passport.serializeUser(serializeUser);

// register store routes
app.use("/api/store", require("./store"));

// start server at the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
 * passport callbacks
 */
function authUser(req, email, password, done) {
  switch (email) {
    case "admin@email.com": {
      const user = { id: "adminId", role: "admin" };
      return done(null, user);
    }
    case "employee@email.com": {
      const user = { id: "employeeId", role: "employee" };
      return done(null, user);
    }
    case "customer@email.com": {
      const user = { id: "customerId", role: "customer" };
      return done(null, user);
    }
    default: {
      return done(null, false, { message: "invalid credentials" });
    }
  }
}

function serializeUser(user, done) {
  done(null, { id: user.id, role: user.role });
}

function deserializeUser(user, done) {
  // TODO: retrieve the user
  /*
  swith (user.role) {
    case "admin": {
      Admin.findById(user.id, (err, admin) => {
          done(err, admin);
      });
      break;
    }
    case "employee": {
      Employee.findById(user.id, (err, employee) => {
          done(err, employee);
      });
      break;
    }
    case "customer": {
      Customer.findById(user.id, (err, customer) => {
          done(err, customer);
      });
      break;
    }
    default: {
      let err = ...;
      done(err);
      break;
    }
  }
   */

  done(null, user);
}
