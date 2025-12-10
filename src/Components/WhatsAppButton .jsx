import React from "react";
import { MdOutlineWhatsapp } from "react-icons/md";

const WhatsAppButton = ({ phone = "+923337223326" }) => {
  return (
    <a
      href={`https://wa.me/${phone.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3
                 bg-gradient-to-r from-green-500 to-green-600
                 text-white py-3 pl-5 pr-4 rounded-full shadow-2xl
                 animate-bounce-slow"
    >
      {/* Fancy Label */}
      <span className="font-semibold text-sm tracking-wide drop-shadow-md">
        Chat With Us
      </span>

      {/* WhatsApp Icon */}
      <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-md">
        <MdOutlineWhatsapp size={28} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
