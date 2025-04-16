import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/orders", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to fetch orders.");
        return;
      }

      setOrders(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching orders.");
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="p-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-4xl font-semibold mb-8">Orders</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse shadow-lg rounded-lg border border-gray-300">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr className="h-16">
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Address</th>
              <th className="px-6 py-4 text-left">Items</th>
              <th className="px-6 py-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-50 transition duration-300 border-b border-gray-300 h-auto"
                >
                  <td className="px-6 py-4">{order.name}</td>
                  <td className="px-6 py-4">{order.phone}</td>
                  <td className="px-6 py-4">{order.address}</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc ml-4 text-sm">
                      {order.cartItems.map((item) => (
                        <li key={item._id}>
                          {item.name} (x{item.quantity}) - ₹{item.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
