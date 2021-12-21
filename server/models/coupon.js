const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  code: { type: String, index: true, required: true },
  value: { type: Number, min: 0, required: true },
});

const Coupon = mongoose.model("Coupon", CouponSchema);

module.exports = { Coupon };
