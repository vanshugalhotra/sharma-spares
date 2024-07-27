const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  logo: {
    name: { type: String },
    url: { type: String },
  },
});

const Brand = mongoose.models.Brand || mongoose.model("Brand", brandSchema);
module.exports = Brand;
