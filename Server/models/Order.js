const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cartItems: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: String,
      price: Number,
      quantity: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
