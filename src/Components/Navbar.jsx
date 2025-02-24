import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { text: "Home", path: "/" },
    { text: "Gallery", path: "/gallery" },
    { text: "Experience", path: "/experience" },
  ];

  return (
    <nav className="bg-blue-100 shadow-lg py-4 px-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <a href="/" className="text-2xl font-bold text-blue-700 flex items-center">
          🎂 Mubasshir Ansari
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {routes.map((route, index) => (
            <li key={index}>
              <NavLink 
                to={route.path} 
                className={({ isActive }) => 
                  `hover:text-blue-500 transition ${isActive ? "text-blue-700 font-bold" : ""}`
                }
              >
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-700 text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col mt-2 bg-blue-50 py-4 px-6 space-y-4"
          >
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                className={({ isActive }) =>
                  `block text-gray-700 transition ${isActive ? "text-blue-700 font-bold" : "hover:text-blue-500"}`
                }
                onClick={() => setIsOpen(false)}
              >
                {route.text}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
