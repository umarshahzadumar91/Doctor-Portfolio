import React from "react";

const EducationCertifications = () => {
  const items = [
    {
      icon: "🎓",
      title: "Medical Degree",
      subtitle: "Doctor of Medicine (MD)",
      institute: "Harvard Medical School",
      details: "2005 - 2009 | Magna Cum Laude",
      border: "border-l-4 border-cyan-500",
    },
    {
      icon: "📘",
      title: "Residency",
      subtitle: "Internal Medicine",
      institute: "Johns Hopkins Hospital",
      details: "2009 - 2012 | Chief Resident",
      border: "border-l-4 border-emerald-500",
    },
    {
      icon: "🏅",
      title: "Fellowship",
      subtitle: "Cardiovascular Disease",
      institute: "Mayo Clinic",
      details: "2012 - 2015 | Research Fellow",
      border: "border-l-4 border-cyan-500",
    },
    {
      icon: "🔰",
      title: "Board Certification",
      subtitle: "American Board of Cardiology",
      institute: "Fellow, ACC (FACC)",
      details: "Certified 2015 | Recertified 2022",
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
