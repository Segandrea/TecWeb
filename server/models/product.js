const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: { type: String, required: true },
});

const ReviewSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, required: true },
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  images: [ImageSchema],
  status: {
    type: String,
    enum: ["brand-new", "refurbished", "damaged"],
    required: true,
  },
  category: {
    type: String,
    enum: ["party", "cards", "mistery", "puzzle", "dices"],
    required: true,
  },
  visible: { type: Boolean, required: true },
  description: { type: String, required: true },
  basePrice: { type: Number, min: 0, required: true },
  dailyPrice: { type: Number, min: 0, required: true },
  discountPrice: {
    type: Number,
    min: 0,
    default: 0,
    required: () => this.discountPrice <= this.basePrice,
  },
  reviews: [ReviewSchema],
  rating: { type: Number, min: 0, max: 5, default: 0, required: true },
});

ProductSchema.pre("save", function (next) {
  if (this.isModified("reviews") || this.isModified("rating") || this.isNew) {
    const reviews = this.reviews || [];
    const len = Math.max(reviews.length, 1);

    this.rating = reviews.reduce((acc, review) => acc + review.rating, 0) / len;
  }

  return next();
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
