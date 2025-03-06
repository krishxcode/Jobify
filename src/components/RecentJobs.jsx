import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import JobCard from "./JobCard";
import { motion } from "framer-motion";

const RecentJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/jobs/");
                const data = await response.json();
                console.log("API Response:", data); // ✅ Debugging

                if (data.success && Array.isArray(data.jobs)) {
                    setJobs(data.jobs);
                    toast.success("Jobs loaded successfully!");
                } else {
                    toast.error("Failed to fetch jobs.");
                    setJobs([]);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                toast.error("An error occurred while fetching jobs.");
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-10 px-20">
            {/* Heading */}
            <motion.h2
                className="text-3xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                🚀 Recent Job Listings
            </motion.h2>

            {/* Loading State */}
            {loading ? (
                <motion.div className="text-center py-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-12 h-12 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-gray-600">Loading jobs...</p>
                </motion.div>
            ) : jobs.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                    {jobs.map((job, index) => (
                        <motion.div key={job._id || index} className="flex">
                            <JobCard job={job} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <motion.div className="text-center mt-10 text-gray-500">
                    <p className="text-lg">⚠️ No job listings available.</p>
                    <p className="mt-2">Check back later!</p>
                </motion.div>
            )}
        </section>
    );
};

export default RecentJobs;
