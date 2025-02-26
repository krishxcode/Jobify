import { motion } from "framer-motion";
import { BriefcaseIcon, UsersIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import image from "/Images/men.webp"
const stats = [
  { label: "Active Jobs", value: "10K+", icon: BriefcaseIcon },
  { label: "Companies", value: "2K+", icon: UsersIcon },
  { label: "Successful Placements", value: "5K+", icon: CheckCircleIcon },
];

export default function AboutPage() {
  return (
    <div className="w-full min-h-[90vh] bg-gray-50 flex items-center justify-center py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900"><span className="text-orange-500 underline">About Us</span></h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting job seekers with top companies, making the hiring process seamless and efficient.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={image}
              alt="Job Search Illustration"
              className="w-full max-w-md lg:max-w-lg drop-shadow-xl"
            />
          </motion.div>

          {/* Right: Content Section */}
          <motion.div 
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Jobhire is a platform that connects job seekers with top companies. We make the hiring process smoother for both candidates and recruiters with our advanced tools and features.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                  <stat.icon className="h-10 w-10 text-orange-500" />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.button 
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
