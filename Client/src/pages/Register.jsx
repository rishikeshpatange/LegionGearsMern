import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const Register = () => {
  const URI = "http://localhost:5000/api/auth/register";
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Account created successfully! 🎉"); 
        navigate("/login");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message)
      }
    } catch (error) {
      console.error("Register Error:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800 px-6">
      <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-8">Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              required
              value={user.username}
              onChange={handleInput}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              value={user.email}
              onChange={handleInput}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              required
              value={user.phone}
              onChange={handleInput}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              value={user.password}
              onChange={handleInput}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
