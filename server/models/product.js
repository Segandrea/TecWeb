const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: { type: String, required: true },
});

const ProductSchema = new Schema({
  // TODO: id will be of type mongoose.ObjectId
  id: { type: String, required: true },
  name: { type: String, required: true },
  images: [ImageSchema],
  status: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    required: true,
  },
  availability: {
    type: String,
    enum: ["available", "hidden", "out"],
    required: true,
  },
  description: { type: String, required: true },
  basePrice: { type: Number, min: 0 },
  dailyPrice: { type: Number, min: 0 },
  rating: { type: Number, min: 0, max: 5 },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
