const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerAuthSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
});

const CustomerAuth = mongoose.model("CustomerAuth", CustomerAuthSchema);

module.exports = { CustomerAuth };
