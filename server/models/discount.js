const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
  // TODO: code will be mongoose.ObjectId (or is it a string?)
  code: { type: String, required: true },
  discount: { type: Number, min: 0 },
});

const Discount = mongoose.model("Discount", DiscountSchema);

module.exports = { Discount };
