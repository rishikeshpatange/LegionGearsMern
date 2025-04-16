import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { FaShoppingBag } from "react-icons/fa";

export default function Navbar({ toggleCart, cartItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <NavLink to="/" className="text-gray-600 hover:text-black">
            <div className="text-2xl font-bold text-gray-800">LEGIONGEARS</div>
          </NavLink>

          {/* Center - Navigation (desktop only) */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/Helmets" className="text-gray-600 hover:text-black">
              Helmets
            </NavLink>

            <NavLink to="/jackets" className="text-gray-600 hover:text-black">
              Jackets
            </NavLink>

            {/* Cart Icon - desktop only */}
            <button
              onClick={toggleCart}
              className="relative text-gray-600 hover:text-black"
            >
              <FaShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems?.length || 0}
              </span>
            </button>

            <div className="flex gap-4">
              {isLoggedIn ? (
                <NavLink
                  to="/logout"
                  className="px-6 py-2 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  Logout
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="px-6 py-2 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Right - Mobile: Cart + Hamburger */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Cart Icon - mobile only */}
            <button
              onClick={toggleCart}
              className="relative text-gray-600 hover:text-black"
            >
              <FaShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems?.length || 0}
              </span>
            </button>

            {/* Hamburger button */}
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-700 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-gray-600 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          <X size={36} />
        </button>

        <NavLink
          to="/Helmets"
          className="text-4xl font-semibold text-gray-800 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Helmets
        </NavLink>

        <NavLink
          to="/jackets"
          className="text-4xl font-semibold text-gray-800 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Jackets
        </NavLink>

        {/* Cart Icon on Mobile Menu */}
        <button
          onClick={() => {
            toggleCart();
            setIsOpen(false);
          }}
          className="text-4xl font-semibold text-gray-800 hover:text-black"
        >
          👜 View Cart ({cartItems?.length || 0})
        </button>

        <div className="flex flex-col gap-6">
          {isLoggedIn ? (
            <NavLink
              to="/logout"
              className="text-4xl font-semibold text-gray-800 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/register"
                className="text-4xl font-semibold text-gray-800 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="text-4xl font-semibold text-gray-800 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
