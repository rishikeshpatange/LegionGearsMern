// controllers/orderController.js

const Order = require('../models/Order');  // Assuming you have an Order model

const placeOrder = async (req, res) => {
  try {
    const { name, address, phone, cartItems } = req.body;

    // Check if all necessary data is provided
    if (!name || !address || !phone || !cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: 'Missing required fields or empty cart' });
    }

    // You can add user validation here if needed (since you may be using auth middleware later)

    // Create a new order in the database
    const order = new Order({
      name,
      address,
      phone,
      cartItems,
    });

    // Save the order in the database
    await order.save();

    res.status(201).json({ message: 'Order placed successfully!', orderId: order._id });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Error placing order. Try again.' });
  }
};

module.exports = { placeOrder };
