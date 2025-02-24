import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social icons
import { NavLink } from "react-router-dom";

const Footer = () => {

  const routes = [
    { text: "Home", path: "/" },
    { text: "Gallery", path: "/gallery" },
    { text: "Experience", path: "/experience" },
  ];

  return (
    <footer className="bg-blue-100 text-blue-700 py-6 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Brand / Logo */}
        <div className="text-2xl font-bold">🎂 Pastry Chef</div>

        {/* Navigation Links */}
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

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-2xl hover:text-blue-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-blue-500 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 mt-4">
        &copy; {new Date().getFullYear()} Mubsshir Ansari - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
