"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin, FiDownload, FiPhone } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Call to Action */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Taqi
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Passionate developer creating innovative solutions. Interested in working together?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Blog
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:taqi@example.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group"
              >
                <FiMail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                taqi@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group"
              >
                <FiPhone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                +1 (234) 567-8900
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group"
              >
                <FiDownload className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/taqi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/taqi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:bg-blue-600 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/taqi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:bg-blue-400 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} portfolio0taqi0. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;