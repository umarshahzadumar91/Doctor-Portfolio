import React, { useState } from "react";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact=()=> {
  const [form, setForm] = useState({ name: "", email: "", message: "", terms: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "success" | "error"

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    setErrors((e) => ({ ...e, [name]: null }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message is required";
    if (!form.terms) errs.terms = "You must accept the terms";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      setStatus("error");
      return;
    }
    // Simulate form submit
    setStatus("success");
    setForm({ name: "", email: "", message: "", terms: false });
    setTimeout(() => setStatus(null), 3500);
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: rounded image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            <div
              className="w-full max-w-lg overflow-hidden"
              style={{
                // create the rounded-right semicircle look using large right radii
                borderTopRightRadius: "220px",
                borderBottomRightRadius: "220px",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="contact"
                className="w-full h-[420px] object-cover block"
              />
            </div>
          </motion.div>

          {/* RIGHT: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full mt-1 border-b px-1 py-2 placeholder-gray-400 focus:outline-none focus:ring-0 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  } bg-transparent`}
                  placeholder="Enter your Name"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full mt-1 border-b px-1 py-2 placeholder-gray-400 focus:outline-none focus:ring-0 ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  } bg-transparent`}
                  placeholder="Enter a valid email address"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full mt-1 border px-3 py-2 resize-none h-28 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200 ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Write your message..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-teal-600 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I accept the <span className="text-teal-500 underline">Terms of Service</span>
                </label>
              </div>
              {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}

              <div className="pt-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md"
                >
                  SUBMIT
                </motion.button>

                {/* status message */}
                {status === "success" && (
                  <div className="mt-3 text-sm text-green-600">Thanks — your message has been sent!</div>
                )}
                {status === "error" && Object.keys(errors).length > 0 && (
                  <div className="mt-3 text-sm text-red-600">Please fix the errors above.</div>
                )}
              </div>
            </form>

           
            
          </motion.div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="bg-blue-500 rounded-lg p-5 shadow-md flex items-start gap-4"
              >
                <div className="text-white text-2xl p-2 bg-white/10 rounded-md">
                  <FiPhone />
                </div>
                <div>
                  <div className="text-white font-semibold">CALL US</div>
                  <div className="text-white/90 text-sm mt-1">1 (234) 567-891, 1 (234) 987-654</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="bg-blue-500 rounded-lg p-5 shadow-md flex items-start gap-4"
              >
                <div className="text-white text-2xl p-2 bg-white/10 rounded-md">
                  <FiMapPin />
                </div>
                <div>
                  <div className="text-white font-semibold">LOCATION</div>
                  <div className="text-white/90 text-sm mt-1">
                    121 Rock Street, 21 Avenue, New York, NY 92103-9000
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="bg-blue-500 rounded-lg p-5 shadow-md flex items-start gap-4"
              >
                <div className="text-white text-2xl p-2 bg-white/10 rounded-md">
                  <FiClock />
                </div>
                <div>
                  <div className="text-white font-semibold">HOURS</div>
                  <div className="text-white/90 text-sm mt-1">
                    Mon - Fri: 11 am - 8 pm, Sat, Sun: 6 am - 8 pm
                  </div>
                </div>
              </motion.div>
            </div>
      </div>
    </div>
  );
}


export default Contact