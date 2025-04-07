import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Text */}
        <p className="text-sm mb-4 md:mb-0">
          © 2023 Anima's Landing Page UI Kit.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500 transition"
          >
            <FaYoutube size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500 transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500 transition"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500 transition"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
