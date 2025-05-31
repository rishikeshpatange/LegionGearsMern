import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const URI = "https://legiongearsmern.onrender.com/api/auth/login";
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Logged in Successfully!");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
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
          <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Welcome Back
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
                required
                value={user.password}
                onChange={handleInput}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-medium"
            >
              Login
            </button>

            {/* Credentials Note */}
            <p className="mt-4 text-sm text-gray-600 text-center">
              To access the admin panel, use: <br />
              <span className="font-medium">Email:</span> john@gmail.com <br />
              <span className="font-medium">Password:</span> john@123
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};