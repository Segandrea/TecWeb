const db = require("../db");
const User = require("../models/user").User;

async function main() {
  db.connect();

  const userData = JSON.parse(process.argv[2]);
  if (userData.role === "customer" && !userData.customer) {
    console.error("Missing customer data");
    process.exit(1);
  }

  await User.create(userData);
  process.exit(0);
}

main();
