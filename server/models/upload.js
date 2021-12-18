const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  type: { type: String, enum: ["image/png", "image/jpeg"], required: true },
  data: { type: String, required: true },
});

const Upload = mongoose.model("Upload", UploadSchema);

module.exports = { Upload };
