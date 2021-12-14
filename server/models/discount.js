const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
  // TODO: code will be mongoose.ObjectId (or is it a string?)
  code: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});

const Discount = mongoose.model("Discount", DiscountSchema);

module.exports = { Discount };
