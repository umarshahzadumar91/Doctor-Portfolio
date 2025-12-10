import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-10 px-4">
      {/* Logo */}
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-semibold tracking-wide">
          Dr Ghulam Abbas
        </h2>
      </div>

      {/* Menu */}
      <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
        <a className="hover:text-green-400 cursor-pointer">HOME</a>
        <a className="hover:text-green-400 cursor-pointer">ABOUT</a>
        <a className="hover:text-green-400 cursor-pointer">CONTACT</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="w-10 h-10 cursor-pointer rounded-full border border-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition">
          <FaTwitter size={18} />
        </div>
        <div className="w-10 h-10 cursor-pointer rounded-full border border-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition">
          <FaFacebookF size={18} />
        </div>
        <div className="w-10 h-10 cursor-pointer rounded-full border border-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition">
          <FaInstagram size={18} />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400">
        Copyright ©2025 All rights reserved By<i class="fa fa-umbrella" aria-hidden="true"></i>
        <span className="text-green-400 cursor-pointer"> Umar</span>
      </p>
    </footer>
  );
};

export default Footer;
