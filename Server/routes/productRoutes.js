const express = require('express');
const { getAllProducts, addProduct, getProductById } = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);

// Get products by category
router.get('/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch category products', error });
  }
});


// Add this route to fetch a single product by its ID
router.get('/:id', getProductById);

module.exports = router;
