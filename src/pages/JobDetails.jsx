import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

export default function JobDetails() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Get Token from Cookies or Local Storage
  const getToken = () => Cookies.get("jwt") || localStorage.getItem("authToken");

  // Fetch Job Details
  const fetchJob = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/jobs/${id}`);
      setJob(response.data.job);
    } catch (error) {
      toast.error("Failed to fetch job details");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  // Handle Job Application
  const handleApply = async () => {
    const token = getToken();
    if (!token) {
      toast.error("Please log in to apply for jobs");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `http://localhost:8000/api/jobs/${id}/apply`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Successfully applied for the job");
      fetchJob(); // Refresh job details after applying
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to apply for the job");
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!job) return <div className="text-center py-10">Job not found</div>;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-6 sm:px-6">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900">{job.title}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              {job.company} • {job.location}
            </p>
          </div>
          <div className="border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {[
                { label: "Job Type", value: job.type },
                { label: "Salary", value: job.salary },
                { label: "Experience", value: job.experience },
                { label: "Description", value: job.description },
              ].map(({ label, value }) => (
                <div key={label} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
                </div>
              ))}

              {/* Required Skills */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Required Skills</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.length > 0 ? (
                      job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      "Not specified"
                    )}
                  </div>
                </dd>
              </div>

              {/* Requirements */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Requirements</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul className="list-disc pl-5 space-y-2">
                    {job.requirements?.length > 0 ? (
                      job.requirements.map((req, index) => <li key={index}>{req}</li>)
                    ) : (
                      "Not specified"
                    )}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          {/* Apply Button */}
          <div className="px-4 py-6 sm:px-6">
            {user?.role === "student" && (
              <button
                onClick={handleApply}
                className={`btn btn-primary w-full sm:w-auto ${
                  job?.applications?.some((app) => app.student?._id === user?._id)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={job?.applications?.some((app) => app.student?._id === user?._id)}
              >
                {job?.applications?.some((app) => app.student?._id === user?._id)
                  ? "Already Applied"
                  : "Apply Now"}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
