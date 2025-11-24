import React from "react";

const AreasOfExpertise = () => {
  const items = [
    "Preventive Cardiology",
    "Heart Failure Management",
    "Coronary Artery Disease",
    "Hypertension Treatment",
    "Cardiac Imaging & Diagnostics",
    "Interventional Cardiology",
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#f5fcff] text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Areas of Expertise
      </h2>
      <p className="mt-2 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
        Comprehensive cardiovascular care with specialized focus
      </p>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 border border-gray-200 flex flex-col items-center"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-50 border border-cyan-200">
              <span className="text-cyan-500 text-xl">💙</span>
            </div>

            {/* Text */}
            <p className="mt-4 text-gray-800 font-medium text-sm md:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasOfExpertise;
