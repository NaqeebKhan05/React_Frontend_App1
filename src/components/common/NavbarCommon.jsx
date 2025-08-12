import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const linkStyle = (to) =>
    `hover:text-yellow-300 transition-colors ${
      pathname === to ? "text-yellow-300 underline" : ""
    }`;

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">🌐Normal Website</div>
        <div className="space-x-6">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/about" className={linkStyle("/about")}>
            About Us
          </Link>
          <Link to="/user" className={linkStyle("/user")}>
            Users
          </Link>
          <Link to="/contact" className={linkStyle("/contact")}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
