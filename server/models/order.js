const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductFreezeSchema = new Schema({
  productId: { type: mongoose.ObjectId, required: true, ref: "Product" },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  basePrice: { type: Number, min: 0, required: true },
  dailyPrice: { type: Number, min: 0, required: true },
  discountPrice: { type: Number, min: 0, required: true, default: 0 },
});

const CouponFreezeSchema = new Schema({
  code: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});

const OrderSchema = new Schema(
  {
    customerId: { type: mongoose.ObjectId, required: true, ref: "User" },
    employeeId: { type: mongoose.ObjectId, required: false, ref: "User" },
    state: { type: String, enum: ["open", "closed"], required: true },
    endDate: { type: Date, required: true },
    startDate: { type: Date, required: true },
    products: [ProductFreezeSchema],
    coupons: [CouponFreezeSchema],
    penaltyPrice: { type: Number, min: 0, required: true, default: 0 },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const MS_PER_DAY = 24 * 60 * 60 * 1000;

OrderSchema.virtual("days").get(function () {
  return Math.round(
    (this.endDate.getTime() - this.startDate.getTime()) / MS_PER_DAY
  );
});

OrderSchema.virtual("subtotalPrice").get(function () {
  const days = this.days;
  return this.products
    .map((p) => p.basePrice + p.dailyPrice * days)
    .reduce((acc, val) => acc + val, 0);
});

OrderSchema.virtual("discountsPrice").get(function () {
  return this.products
    .map((p) => p.discountPrice)
    .reduce((acc, val) => acc + val, 0);
});

OrderSchema.virtual("couponsPrice").get(function () {
  return this.coupons.map((c) => c.value).reduce((acc, val) => acc + val, 0);
});

OrderSchema.virtual("totalPrice").get(function () {
  const subtotalPrice = this.subtotalPrice;
  const discountsPrice = this.discountsPrice;
  const couponsPrice = this.couponsPrice;
  const penaltyPrice = this.penaltyPrice;

  return Math.max(
    subtotalPrice + penaltyPrice - (discountsPrice + couponsPrice),
    0
  );
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
