const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user").User;

const ValiditySchema = new Schema({
  start: { type: Date, required: false },
  end: { type: Date, required: false },
});

const CouponSchema = new Schema({
  code: { type: String, index: true, unique: true, required: true },
  value: { type: Number, min: 0, required: true },
  customerId: {
    type: mongoose.ObjectId,
    required: false,
    ref: "User",
    validate: {
      validator: (id) => User.findById(id).then((p) => !!p),
      message: (props) => `Invalid customer: ${props.value}`,
    },
  },
  validity: { type: ValiditySchema, required: false },
});

const Coupon = mongoose.model("Coupon", CouponSchema);

module.exports = { Coupon };
