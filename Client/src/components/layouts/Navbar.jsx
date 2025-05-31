import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { IoBagOutline } from "react-icons/io5";

export default function Navbar({ toggleCart, cartItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-black shadow-md w-full">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-18">
          {/* Left - Logo */}
          <NavLink to="/" className="text-white ">
            <div className="text-xl font-medium text-white">LEGION</div>
          </NavLink>

          {/* Center - Navigation (desktop only) */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/Helmets" className="text-white ">
              Helmets
            </NavLink>

            <NavLink to="/jackets" className="text-white ">
              Jackets
            </NavLink>
            <NavLink to="/admin/users" className="text-white ">
              Admin
            </NavLink>

            {/* Cart Icon - desktop only */}
            <button
              onClick={toggleCart}
              className="relative text-white "
            >
              <IoBagOutline size={20} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems?.length || 0}
              </span>
            </button>

            <div className="flex gap-2 md:gap-3">
              {isLoggedIn ? (
                <NavLink
                  to="/logout"
                  className="px-5 py-1.5 md:px-4 md:py-1 bg-white text-black font-medium shadow-lg text-sm md:text-sm"
                >
                  Logout
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="px-5 py-1.5 md:px-4 md:py-1 bg-white text-black font-medium shadow-lg text-sm md:text-sm"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="px-5 py-1.5 md:px-4 md:py-1 bg-white text-black font-medium shadow-lg text-sm md:text-sm"
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
              className="relative text-white "
            >
              <IoBagOutline size={20} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems?.length || 0}
              </span>
            </button>

            {/* Hamburger button */}
            <button
              className="text-white "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          {/* Header with Logo and Close button */}
          <div className="flex justify-between items-center mb-8">
            <NavLink 
              to="/" 
              className="text-xl font-medium text-black"
              onClick={() => setIsOpen(false)}
            >
              LEGION
            </NavLink>
            <button
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="text-gray-800" />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col space-y-6 flex-grow">
            <NavLink
              to="/Helmets"
              className="flex justify-between items-center py-3 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl font-medium text-gray-800">Helmets</span>
              <ChevronRight size={24} className="text-gray-500" />
            </NavLink>

            <NavLink
              to="/jackets"
              className="flex justify-between items-center py-3 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl font-medium text-gray-800">Jackets</span>
              <ChevronRight size={24} className="text-gray-500" />
            </NavLink>

            <NavLink
              to="/admin/users"
              className="flex justify-between items-center py-3 border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl font-medium text-gray-800">Admin</span>
              <ChevronRight size={24} className="text-gray-500" />
            </NavLink>

            {/* Cart item */}
            <button
              onClick={() => {
                toggleCart();
                setIsOpen(false);
              }}
              className="flex justify-between items-center py-3 border-b border-gray-200"
            >
              <span className="text-xl font-medium text-gray-800">Cart ({cartItems?.length || 0})</span>
              <ChevronRight size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Auth buttons */}
          <div className="mt-auto pt-8">
            {isLoggedIn ? (
              <NavLink
                to="/logout"
                className="flex justify-between items-center py-3 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl font-medium text-gray-800">Logout</span>
                <ChevronRight size={24} className="text-gray-500" />
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className="flex justify-between items-center py-3 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl font-medium text-gray-800">Register</span>
                  <ChevronRight size={24} className="text-gray-500" />
                </NavLink>
                <NavLink
                  to="/login"
                  className="flex justify-between items-center py-3 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl font-medium text-gray-800">Login</span>
                  <ChevronRight size={24} className="text-gray-500" />
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}