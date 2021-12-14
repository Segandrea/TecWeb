const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductFreezeSchema = new Schema({
  // TODO: productId will be of type mongoose.ObjectId
  productId: { type: String, required: true },
  name: { type: String, required: true },
  // TODO: Image will be an actual image
  image: { type: String, required: true },
  basePrice: { type: Number, min: 0 },
  dailyPrice: { type: Number, min: 0 },
  rating: { type: Number, min: 0, max: 5 },
  initialStatus: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    requred: true,
  },
  returnalStatus: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    requred: true,
  },
});

const DiscountFreezeSchema = new Schema({
  // TODO: code will be mongoose.ObjectId (or is it a string?)
  code: { type: String, required: true },
  discount: { type: Number, min: 0 },
});

const OrderSchema = new Schema({
  // TODO: userId, will be of mongoose.ObjectId
  userId: { type: String, required: true },
  products: [ProductFreezeSchema],
  discounts: [DiscountFreezeSchema],
  issuedAt: { type: Date, required: true },
  returnalDate: { type: Date, required: true },
});

const Order = mogoose.model("Order", OrderSchema);

module.exports = { Order };
