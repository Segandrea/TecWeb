// FIXME: real authentication system
const verify = (email, password, done) => {
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
};

module.exports = verify;
