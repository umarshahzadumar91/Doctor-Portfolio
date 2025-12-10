import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import AppointmentModal from "./AppointmentModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/shutterstock/videos/21346564/thumb/1.jpg?ip=x480')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 text-white max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
         Professional,Precise<br/>Patient-Focused
        </h1>

        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200 drop-shadow-md max-w-xl">
          My Profession is My Passion — Gastroenterologist, Hepatologist & Interventional Endoscopist
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full font-semibold text-white shadow-lg text-sm sm:text-base"
        >
          Book an Appointment
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm sm:text-base text-gray-200 justify-between">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl"><IoLocation /></span>
          <p>1234 Washington Ave, Manchester, KY 39495</p>
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <span className="text-xl"><FaPhoneAlt /></span>
          <p>(406) 555-0121</p>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
