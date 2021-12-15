const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: { type: String, required: true },
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  images: [ImageSchema],
  status: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    required: true,
  },
  visible: { type: Boolean, required: true },
  description: { type: String, required: true },
  basePrice: { type: Number, min: 0, required: true },
  dailyPrice: { type: Number, min: 0, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0, required: true },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };