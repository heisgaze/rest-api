const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter the product name"],
      trim: true,
      minlength: [3, "Product name must be at least 3 characters"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Quantity cannot be negative"],
    },

    price: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Price cannot be negative"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
