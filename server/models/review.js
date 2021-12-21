const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  productId: { type: mongoose.ObjectId, required: true, ref: "Product" },
  username: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, required: true },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = { Review };
