const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductFreezeSchema = new Schema({
  name: { type: String, required: true },
  // TODO: Image will be an actual image
  image: { type: String, required: true },
  basePrice: { type: Number, min: 0, required: true },
  dailyPrice: { type: Number, min: 0, required: true },
  initialStatus: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    required: true,
  },
  returnalStatus: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    required: true,
  },
});

const DiscountFreezeSchema = new Schema({
  discount: { type: Number, min: 0, required: true },
});

const OrderSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  products: [ProductFreezeSchema],
  discounts: [DiscountFreezeSchema],
  issuedAt: { type: Date, required: true },
  returnalDate: { type: Date, required: true },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
