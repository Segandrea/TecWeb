const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  avatar: { type: String },
  username: { type: String, required: true },
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = { Customer };
