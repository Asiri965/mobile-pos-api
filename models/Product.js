const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    unitPrice: {
      type: Number,
      required: [true, "Please add a unit price"],
      min: 0,
    },
    qtyOnHand: {
      type: Number,
      required: [true, "Please add a quantity on hand"],
      min: 0,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
