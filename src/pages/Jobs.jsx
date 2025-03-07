import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import JobCard from "../components/JobCard";
import axios from "axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    salary: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://jobify-backend-05by.onrender.com/api/jobs/");
      if (response.data.success) {
        setJobs(response.data.jobs || []);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = !filters.type || job.type === filters.type;
    const matchesLocation = !filters.location || job.location === filters.location;
    const matchesSalary = !filters.salary || (job.salary && job.salary >= Number(filters.salary));

    return matchesSearch && matchesType && matchesLocation && matchesSalary;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3">🚀 Find Your Dream Job</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Browse thousands of job opportunities from top companies. Your next career move is just a click away.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 mb-10"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                placeholder="Search jobs by title, company, or location..."
                className="w-full border border-gray-300 rounded-lg p-3 pl-12 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <motion.select
                whileFocus={{ scale: 1.05 }}
                className="border border-gray-300 rounded-lg p-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="">Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </motion.select>

              <motion.select
                whileFocus={{ scale: 1.05 }}
                className="border border-gray-300 rounded-lg p-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">Location</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </motion.select>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition-all shadow-md hover:bg-blue-700"
              >
                <FunnelIcon className="h-5 w-5 mr-2" />
                Apply Filters
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        {loading ? (
          <motion.div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="mx-auto w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            ></motion.div>
            <p className="mt-4 text-gray-600">Loading jobs...</p>
          </motion.div>
        ) : filteredJobs.length === 0 ? (
          <motion.div className="text-center py-12">
            <p className="text-gray-600 text-lg">⚠️ No jobs found matching your criteria.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
