import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full min-h-screen  flex flex-col items-center px-4 py-16"
    >
      <div className="w-full max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-2"><span className="text-orange-500 underline">Contact  Us</span></h1>
          <p className="text-gray-600">Send us a message or get in touch.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {["firstName", "lastName"].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="space-y-2"
              >
                <label htmlFor={field} className="font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <motion.input
                  id={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  value={formData[field]}
                  whileFocus={{ scale: 1.05 }}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {["email", "phone"].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1, duration: 0.4 }}
                className="space-y-2"
              >
                <label htmlFor={field} className="font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <motion.input
                  id={field}
                  type={field === "email" ? "email" : "tel"}
                  placeholder={field === "email" ? "you@company.com" : "Phone Number"}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  value={formData[field]}
                  whileFocus={{ scale: 1.05 }}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="space-y-2"
          >
            <label htmlFor="message" className="font-medium">
              What would you like us to know about you?
            </label>
            <motion.textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
              value={formData.message}
              whileFocus={{ scale: 1.05 }}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </motion.div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="px-8 py-4 text-base bg-orange-500 hover:bg-orange-400 text-white rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
