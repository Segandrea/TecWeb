const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/nolonoloplus");

  const customerSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
  });

  const Customer = mongoose.model("Customer", customerSchema);
  const customers = await Customer.find();
  console.log(customers);
}

main().catch((err) => console.log(err));
