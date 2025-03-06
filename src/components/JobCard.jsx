import { Link } from 'react-router-dom';
import { CalendarIcon, CurrencyDollarIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export default function JobCard({ job }) {
  if (!job || !job._id) {
    console.error("Job ID is missing:", job);
    return null; // Prevent rendering if job data is invalid
  }

  return (
    <div className="card card-hover animate-fade-in min-h-[350px] flex flex-col justify-between p-6 shadow-md rounded-lg border border-gray-200 bg-white">
      <div className="flex-1">
        {/* Ensure Job ID is passed correctly */}
        <Link to={`/jobs/${job._id}`} className="block">
          <h3 className="text-xl font-semibold mb-1 hover:text-orange-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-600 mb-4">{job.company}</p>
        </Link>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-500">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <BriefcaseIcon className="h-5 w-5 mr-2 text-gray-400" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <CurrencyDollarIcon className="h-5 w-5 mr-2 text-gray-400" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
            <span>{new Date(job.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {Array.isArray(job.skills) &&
            job.skills.map((skill, index) => (
              <span key={index} className="badge badge-info">
                {skill}
              </span>
            ))}
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-auto">
        <span 
          className={`badge ${
            job.status === 'active' 
              ? 'bg-green-500 text-white' 
              : job.status === 'pending' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-red-500 text-white'
          } p-1 rounded-md`}
        >
          {job.status}
        </span>
      </div>
    </div>
  );
}
