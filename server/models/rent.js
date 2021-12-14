const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentSchema = new Schema({
  // TODO: orderId and productId are strings but will be mongoose.ObjectId
  orderId: { type: String, required: true },
  productIds: { type: [String] },
  rentalDate: { type: Date, required: true },
});

const Rent = mongoose.model("Rent", RentSchema);

module.exports = { Rent };
