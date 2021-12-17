const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
  code: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});

const Discount = mongoose.model("Discount", DiscountSchema);

module.exports = { Discount };
