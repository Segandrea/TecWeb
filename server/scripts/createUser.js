const db = require("../db.js");
const User = require("../models/user.js").User;

async function main() {
  db.connect();

  const userData = JSON.parse(process.argv[2]);
  if (userData.role === "customer" && userData.customer) {
    await User.create(userData);
    process.exit(0);
  } else {
    console.error("Missing customer data");
    process.exit(1);
  }
}

main();
