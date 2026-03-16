const Customer = require("../models/Customer");
const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

const getCounts = async (req, res) => {
  try {
    const customerCount = await Customer.countDocuments();
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();
    const userCount = await User.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        customers: customerCount,
        products: productCount,
        orders: orderCount,
        users: userCount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getCounts };
