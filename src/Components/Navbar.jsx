import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add shadow + fixed position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-lg  ${
        scroll ? "bg-white shadow-lg py-3" : "bg-transparent border-b border-gray-200/20 py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* ---- LOGO ---- */}
        <div className="flex items-center gap-2">
          <img
            src="https://dummyimage.com/50x50/1e40af/ffffff&text=Dr"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <h1 className="text-xl font-bold text-blue-700 tracking-wide">
            MEDICARE
          </h1>
        </div>

        {/* ---- DESKTOP NAVIGATION ---- */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium z-999">
          <a href="#" className="hover:text-blue-600 ">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* ---- APPOINTMENT BUTTON (DESKTOP) ---- */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:block bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Appointment
        </button>

        {/* ---- MOBILE MENU BUTTON ---- */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ---- MOBILE MENU ---- */}
      {isOpen && (
        <div className="md:hidden border border-amber-200 bg-white shadow-md space-y-4 p-4 t-0">
          <a href="#" className="block text-gray-800 text-center hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-800 text-center hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-800 text-center hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-800 text-center hover:text-blue-600">Contact</a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-full shadow hover:bg-blue-700"
          >
            Appointment
          </button>
        </div>
      )}

      {/* ---- APPOINTMENT MODAL ---- */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Navbar;
