const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/orderController');

// Use the relative path to avoid duplication of '/api/orders'
router.post('/', placeOrder);

module.exports = router;
