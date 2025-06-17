"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaCog, FaEnvelope, FaFileAlt, FaQuoteLeft, FaBlog, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaUser },
    { href: "/portfolio", label: "Portfolio", icon: FaBriefcase },
    { href: "/skills", label: "Skills", icon: FaCog },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
    { href: "/resume", label: "Resume", icon: FaFileAlt },
    { href: "/testimonials", label: "Testimonials", icon: FaQuoteLeft },
    { href: "/blog", label: "Blog", icon: FaBlog },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Taqi
              </span>
              <span className="text-gray-600 ml-1 text-sm font-medium">
                Portfolio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
              >
                <item.icon className="mr-2 text-sm group-hover:scale-110 transition-transform duration-200" />
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ml-4"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600 p-2 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group"
              >
                <item.icon className="mr-3 text-base group-hover:scale-110 transition-transform duration-200" />
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 mt-4 hover:from-indigo-700 hover:to-purple-700"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;