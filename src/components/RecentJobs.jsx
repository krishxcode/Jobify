import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "The Simpsons",
    companyLogo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20095639-2pukpP8I2yKza9pPl6kAK8ngmGaFbA.png",
    type: "Contract",
    location: "San Francisco",
    salary: "$1500-$3600",
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "Acme Corporation",
    companyLogo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20095639-2pukpP8I2yKza9pPl6kAK8ngmGaFbA.png",
    type: "Remote",
    location: "Herzegovina",
    salary: "$800-$2000",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Soylent Corp",
    companyLogo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20095639-2pukpP8I2yKza9pPl6kAK8ngmGaFbA.png",
    type: "Contract",
    location: "Luxembourg",
    salary: "$1250-$3000",
  },
  {
    id: 4,
    title: "Content Writer",
    company: "Umbrella Corporation",
    companyLogo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20095639-2pukpP8I2yKza9pPl6kAK8ngmGaFbA.png",
    type: "Remote",
    location: "New York, NY",
    salary: "$3500-$4600",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Massive Dynamic",
    companyLogo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20095639-2pukpP8I2yKza9pPl6kAK8ngmGaFbA.png",
    type: "Remote",
    location: "Silicon Valley",
    salary: "$2000-$3600",
  },
  {
    id: 6,
    title: "SEO Specialist",
    company: "Capital Partners",
    companyLogo:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20095639-2pukpP8I2yKza9pPl6kAK8ngmGaFbA.png",
    type: "Remote",
    location: "Bay Area",
    salary: "$3500-$4500",
  },
];

export default function JobListings() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Recent Available Jobs</h1>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-orange-500 hover:text-white duration-300 transition-colors">
            Contract
          </button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-orange-500 hover:text-white duration-300 transition-colors">
            Remote
          </button>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-gray-300 rounded-lg hover:bg-orange-500 hover:text-white duration-300 transition-colors">
            Popular
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white cursor-pointer hover:scale-105 duration-300 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Job Info */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="font-semibold text-base sm:text-lg">{job.title}</h3>
                <p className="text-orange-500 text-sm sm:text-base">{job.company}</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 sm:mt-0 w-full sm:w-auto">
              <span className="text-gray-600 text-sm sm:text-base">{job.type}</span>
              <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                {job.location}
              </div>
              <span className="text-gray-600 text-sm sm:text-base">{job.salary}</span>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-orange-500 hover:text-white duration-300 transition-colors w-full sm:w-auto">
                Apply
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Browse More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors">
          Browse more Jobs
        </button>
      </div>
    </div>
  );
}