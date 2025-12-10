import React from "react";

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 overflow-auto">
      <div className="bg-white p-6 z-999 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn border border-blue-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-700 text-2xl font-bold hover:text-blue-900"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          Book Appointment
        </h2>

        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name"
            className="p-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none w-full"
          />
          <input 
            type="email" 
            placeholder="Email Address"
            className="p-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none w-full"
          />
          <input 
            type="tel" 
            placeholder="Phone Number"
            className="p-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none w-full"
          />
          <input 
            type="date"
            className="p-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none w-full"
          />
          <textarea 
            placeholder="Additional Notes"
            className="p-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:outline-none resize-none w-full h-24 sm:h-32"
          />

          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
