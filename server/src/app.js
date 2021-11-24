const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;
const store = require("./store");

// !!! DO NOT CHANGE THE ORDER OF THE FOLLOWING LINES !!!
app.use(express.static("public"));
app.use(
  session({ secret: "<FIXME>", resave: false, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, { id: user.id, role: user.role });
});

passport.deserializeUser((user, done) => {
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
});

app.use("/store", store);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
