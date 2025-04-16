import React from 'react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ cartItems, toggleCart, isOpen, clearCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>

      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 h-full bg-white w-80 p-6 shadow-xl transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-xl">×</button>
        </div>
        <ol className="space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            cartItems.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">Price: ₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="text-gray-500"
                    onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="text-gray-500"
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))
          )}
        </ol>
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-bold">Subtotal: ₹{total}</h3>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link to="/checkout">
            <button
              className={`flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
