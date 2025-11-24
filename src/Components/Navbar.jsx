import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <img
            src="data:image/png;base64,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"
            className="h-10 w-auto"
            alt="logo"
          />
          <div className="hidden sm:block leading-tight cursor-pointer">
            <span className="text-sm font-semibold text-gray-700 block">
              GHULAM
            </span>
            <span className="text-xs font-medium text-sky-600 block">
              ABBAS
            </span>
          </div>
        </div>

        {/* CENTER NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-sky-500">Home</a>
          <a className="text-sm text-gray-500 hover:text-sky-500 transition cursor-pointer">
            About Us
          </a>
          <a className="text-sm text-gray-500 hover:text-sky-500 transition cursor-pointer">
            Services
          </a>
          <a className="text-sm text-gray-500 hover:text-sky-500 transition cursor-pointer">
            Contact
          </a>
        </nav>

        {/* RIGHT BUTTON + MOBILE MENU */}
        <div className="flex items-center gap-4">
          <a
            className="hidden md:inline-flex px-4 py-2 text-sm cursor-pointer border border-sky-500 text-sky-600 rounded-md hover:bg-sky-50 transition"
          >
            Book an Appointment
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-white">
          <a className="block text-sky-500 font-medium">Home</a>
          <a className="block text-gray-700 font-medium">About Us</a>
          <a className="block text-gray-700 font-medium">Services</a>
          <a className="block text-gray-700 font-medium">Contact</a>

          <a
            className="block text-center px-4 py-2 border border-sky-500 text-sky-600 rounded-md hover:bg-sky-50 transition"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
