import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50 px-4 py-10 md:py-16 flex justify-center">
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
    
    
        <div className="grid md:grid-cols-2 h-full">
          
          {/* LEFT — IMAGE */}
          <div className="relative h-full">
            <img
              src="https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk="
              alt="Doctor"
              className="w-full h-full object-cover"
            />

            {/* FLOATING RATING CARD */}
            <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-yellow-400 text-2xl">★</span>
              <div>
                <p className="text-2xl font-bold leading-none">4.9</p>
                <p className="text-gray-500 text-sm">Patient Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white h-full">

            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit">
              Board Certified Specialist
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Dr. Ghulam Abbas
            </h1>

            <p className="text-blue-600 font-medium mt-2 mb-5 text-lg">
              MD, FACC — Cardiology Specialist
            </p>

            <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
              With over 15 years of dedicated experience in cardiovascular medicine,
              Dr. Mitchell combines cutting-edge medical expertise with
              compassionate, patient-centered care. Her commitment to excellence
              has made her one of the most trusted cardiologists in the region.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
              <div className="bg-blue-50 rounded-xl py-6 px-6">
                <p className="text-blue-600 text-3xl font-bold">15+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>

              <div className="bg-green-50 rounded-xl py-6 px-6">
                <p className="text-green-600 text-3xl font-bold">10K+</p>
                <p className="text-gray-600 text-sm">Patients Treated</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
