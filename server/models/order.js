const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductFreezeSchema = new Schema({
  productId: { type: mongoose.ObjectId, required: false, ref: "Product" },
  name: { type: String, required: true },
  basePrice: { type: Number, min: 0, required: true },
  dailyPrice: { type: Number, min: 0, required: true },
  discountPrice: { type: Number, min: 0, required: false },
});

const CouponFreezeSchema = new Schema({
  code: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});

const OrderSchema = new Schema({
  customerId: { type: mongoose.ObjectId, required: true, ref: "User" },
  employeeId: { type: mongoose.ObjectId, required: false, ref: "User" },
  state: { type: String, enum: ["open", "closed"], required: true },
  products: [ProductFreezeSchema],
  coupons: [CouponFreezeSchema],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  penalty: { type: Number, min: 0, required: false},
});

// TODO: subtotal, discount (products.discounts + coupons), total (+ penalties) virtual getters

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
