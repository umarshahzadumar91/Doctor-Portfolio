import React from "react";

const EducationCertifications = () => {
  const items = [
    {
      icon: "🎓",
      title: "MBBS",
      subtitle: "Doctor of Medicine (MD)",
      institute: "Liaquat University of Medical & Health Sciences, Pakistan",
      border: "border-l-4 border-cyan-500",
    },
    {
      icon: "📘",
      title: "Residency",
      subtitle: "Internal Medicine & Gestroenterology",
      institute: "Services Hospital / College of Physcians & Surgeons Pakistan",
      border: "border-l-4 border-emerald-500",
    },
    {
      icon: "🏅",
      title: "Fellowship",
      subtitle: "Gestroenterology,Hapatology",
      institute: "Services Hospital / College of Physcians & Surgeons Pakistan",
      border: "border-l-4 border-cyan-500",
    },
     {
      icon: "🏅",
      title: "Special Traning",
      subtitle: "Advance Endoscopy",
      institute: "Dr. Ruth K. M. Pfau Civil Hospital Karachi (CHK)",
      border: "border-l-4 border-cyan-500",
    },
    {
      icon: "🔰",
      title: "Certification",
      subtitle: "Certificate in Health Professtional Education",
      institute: "Baqai Medical University.",
      border: "border-l-4 border-emerald-500",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#f5fcff] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Education & Certifications
      </h2>
      <p className="mt-2 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
        Excellence in medical education and continuous professional development
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-sm hover:shadow-xl transition p-5 text-left bg-white ${item.border}`}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.subtitle}</p>
            <p className="text-cyan-600 font-medium mt-2">{item.institute}</p>
            <p className="text-gray-500 text-xs mt-1">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCertifications;
