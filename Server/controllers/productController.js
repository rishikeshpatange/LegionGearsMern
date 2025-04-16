// server/controllers/productController.js
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
};


// New function to get a product by its ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch product', error });
  }
};



module.exports = {
  getAllProducts,
  addProduct,
  getProductById, 
};
