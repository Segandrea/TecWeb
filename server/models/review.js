const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  productId: { type: mongoose.ObjectId, required: true },
  username: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = { Review };
