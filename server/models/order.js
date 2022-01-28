const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user").User;
const Product = require("./product").Product;

const ProductFreezeSchema = new Schema({
  productId: {
    type: mongoose.ObjectId,
    required: true,
    ref: "Product",
    validate: {
      validator: (id) => Product.findById(id).then((p) => !!p),
      message: (props) => `Invalid product: ${props.value}`,
    },
  },
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

const OrderSchema = new Schema({
  customerId: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
    validate: {
      validator: (id) => User.findById(id).then((u) => !!u),
      message: () => "Invalid customer",
    },
  },
  employeeId: {
    type: mongoose.ObjectId,
    required: false,
    ref: "User",
    validate: {
      validator: (id) => User.findById(id).then((u) => !!u),
      message: () => "Invalid employee",
    },
  },
  state: { type: String, enum: ["open", "closed"], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  days: { type: Number, default: 0, required: true },
  products: [ProductFreezeSchema],
  coupons: [CouponFreezeSchema],
  subtotalPrice: { type: Number, min: 0, required: true, default: 0 },
  discountsPrice: { type: Number, min: 0, required: true, default: 0 },
  couponsPrice: { type: Number, min: 0, required: true, default: 0 },
  penaltyPrice: { type: Number, min: 0, required: true, default: 0 },
  totalPrice: { type: Number, min: 0, required: true, default: 0 },
});

const MS_PER_DAY = 24 * 60 * 60 * 1000;

OrderSchema.pre("save", function (next) {
  const isModified = [
    "startDate",
    "endDate",
    "days",
    "products",
    "coupons",
    "subtotalPrice",
    "discountsPrice",
    "couponsPrice",
    "penaltyPrice",
    "totalPrice",
  ].some((f) => this.isModified(f));

  if (isModified || this.isNew) {
    const days = Math.round(
      (this.endDate.getTime() - this.startDate.getTime()) / MS_PER_DAY
    );

    const subtotalPrice = this.products
      .map((p) => p.basePrice + p.dailyPrice * days)
      .reduce((acc, val) => acc + val, 0);

    const discountsPrice = this.products
      .map((p) => p.discountPrice)
      .reduce((acc, val) => acc + val, 0);

    const couponsPrice = this.coupons
      .map((c) => c.value)
      .reduce((acc, val) => acc + val, 0);

    const totalPrice = Math.max(
      subtotalPrice + this.penaltyPrice - (discountsPrice + couponsPrice),
      0
    );

    this.days = days;
    this.subtotalPrice = subtotalPrice;
    this.discountsPrice = discountsPrice;
    this.couponsPrice = couponsPrice;
    this.totalPrice = totalPrice;
  }

  return next();
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
