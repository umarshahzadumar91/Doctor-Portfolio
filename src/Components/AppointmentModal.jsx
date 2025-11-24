import React from "react";

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-200"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Book an Appointment
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md border-none focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-md border-none focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 rounded-md border-none focus:outline-none"
          />
          <input
            type="date"
            className="p-3 rounded-md border-none focus:outline-none"
          />
          <textarea
            placeholder="Additional Notes"
            className="p-3 rounded-md border-none focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="mt-2 bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
