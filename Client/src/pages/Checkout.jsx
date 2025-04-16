import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to your cart.");
      return;
    }

    const orderData = {
      name: form.name,
      address: form.address,
      phone: form.phone,
      cartItems: cartItems.map(item => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    };

    try {
      setLoading(true);

      const token = localStorage.getItem('token'); // 👈 Your auth token

      const res = await fetch('https://legiongearsmern.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // 👈 Send token here
        },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Order placed successfully!');
        setForm({ name: '', address: '', phone: '' });
      } else {
        alert(`❌ Error: ${data.message}`);
      }

    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error placing order. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Checkout</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || cartItems.length === 0}
              className={`w-full py-3 text-white font-semibold rounded-md ${loading || cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'}`}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🛒 Products in Your Cart</h3>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item._id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gray-600">₹{item.price}</span>
                  <span className="text-gray-600">x {item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
