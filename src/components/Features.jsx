import React from "react";
import { motion } from "framer-motion";
import { Check, ThumbsUp, User, BookOpen } from "lucide-react";
import image from "/Images/work.webp"
export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <img
            src={image}
            alt="Illustration of a professional with documents"
            className="w-[90%] h-auto"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Grow Your Career</h2>

          <p className="text-gray-600 text-lg md:text-xl">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "100% Verified Jobs",
              "One Profile, Unlimited Job Openings",
              "Get Personalized Job Recommendations",
              "Find Your Perfect Job Match",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-4 p-6 bg-[#f0f9f6] rounded-lg hover:bg-[#e0f0ea] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Check className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="text-lg font-medium text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className="mt-20 border rounded-2xl p-8 bg-white shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[  
            { icon: <User className="w-10 h-10 text-emerald-500" />, number: "35,000+", text: "Daily Active Users" },
            { icon: <ThumbsUp className="w-10 h-10 text-emerald-500" />, number: "69,000+", text: "Open Job Positions" },
            { icon: <BookOpen className="w-10 h-10 text-emerald-500" />, number: "68,500+", text: "Stories Shared" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.text} 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-[#f0f9f6] rounded-lg">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
