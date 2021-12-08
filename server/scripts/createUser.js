const db = require("../db.js");
const User = require("../models/user.js").User;

db.connect();

const [role, email, password] = process.argv.slice(2);
User.create({ role, email, password })
  .then(() => {
    console.log("done");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
