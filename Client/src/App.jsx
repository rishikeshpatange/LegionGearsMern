import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import Logout from "./pages/Logout";
import Navbar from "./components/layouts/Navbar";
import CartDrawer from "./components/layouts/CartDrawer";
import Checkout from "./pages/Checkout";
import { useState, useEffect } from "react";
import HelmetPage from "./pages/HelmetPage";
import SingleProduct from "./components/SingleProduct";
import Jacket from "./pages/Jacket";
import Home from "./pages/Home";
import Fotter from "./components/layouts/Fotter";
import AdminLayout from "./components/layouts/Admin-layout";
import AdminUsers from "./pages/AdminUsers";
import AdminUpdate from "./pages/AdminUpdate";
import AdminOrder from "./pages/AdminOrder";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  // Fetch all products on load
  useEffect(() => {
    fetch("https://legiongearsmern.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Function to add to cart or update the quantity of the existing product
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      // Update the quantity if the product is already in the cart
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to the cart with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Toggle the cart visibility
  const toggleCart = () => setCartOpen(!cartOpen);

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <Navbar toggleCart={toggleCart} cartItems={cartItems} />
      <CartDrawer
        cartItems={cartItems}
        toggleCart={toggleCart}
        isOpen={cartOpen}
        clearCart={clearCart}
        updateQuantity={updateQuantity} // Pass updateQuantity as prop
      />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} updateCart={setCartItems} />}
        />
        <Route path="/helmets" element={<HelmetPage products={products} />} />
        <Route path="/jackets" element={<Jacket products={products} />} />
        <Route path="/jackets" element={<Jacket products={products} />} />
        <Route
          path="/product/:id"
          element={<SingleProduct addToCart={addToCart} />}
        />
         <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="orders" element={<AdminOrder />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>

      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
