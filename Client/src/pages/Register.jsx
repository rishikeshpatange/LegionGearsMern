import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const URI = "https://legiongearsmern.onrender.com/api/auth/register";
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
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("Register Error:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Phone Image */}
      <div className="hidden md:block w-1/2 bg-gray-100">
        <div className="h-full flex items-center justify-center ">
          <img 
            src="//www.alpinestars.com/cdn/shop/files/Figma_afbeelding.jpg?v=1713434062&width=1440" 
            alt="Mobile phone"
            className="h-auto max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>
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
                className="w-full px-4 py-3 border rounded-xl focus:outline-none "
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
                className="w-full px-4 py-3 border rounded-xl focus:outline-none "
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
                className="w-full px-4 py-3 border rounded-xl focus:outline-none "
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
                className="w-full px-4 py-3 border rounded-xl focus:outline-none "
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
    </div>
  );
};

export default Register;