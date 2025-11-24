import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

export default function StatsCounters() {
  const stats = [
    { id: 1, label: "Years of Experience", value: 15, suffix: "+", icon: <FaClockRotateLeft className="text-[#1095c1]"/> },
    { id: 2, label: "Happy Patients", value: 10000, suffix: "+", icon: <ImUsers className="text-[#1abc9c]"/>},
    { id: 3, label: "Average Rating", value: 4, suffix: "", icon: <IoIosStar className="text-[#eab308]"/> },
    { id: 4, label: "Success Rate", value: 98, suffix: "%", icon: <BsGraphUpArrow className="text-[#1abc9c]"/> },
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center">
        <div ref={ref} className="w-[95%] flex flex-wrap justify-around gap-6 py-10 px-4 mb-2 ">
      {stats.map((item) => (
        <StatCard key={item.id} {...item} start={visible} />
      ))}
    </div>
    </div>
  );
}

function StatCard({ icon, label, value, suffix, start }) {
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (start) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

      let startTime = null;
      const duration = 1500;
      const easeOutQuad = (t) => t * (2 - t);

      const animateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = easeOutQuad(progress);
        setDisplayValue(Math.floor(eased * value));
        if (progress < 1) requestAnimationFrame(animateCounter);
      };

      requestAnimationFrame(animateCounter);
    }
  }, [start, value, controls]);

  return (
    <motion.div
    
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="w-[240px]  rounded-2xl shadow-md p-6 text-center border border-blue-300 bg-white hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="text-5xl mb-3 flex justify-center">{icon}</div>
      <div className="text-3xl font-semibold text-gray-900">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-gray-600 text-sm">{label}</p>
    </motion.div>
  );
}
