import { Link } from 'react-router-dom';
import { CalendarIcon, CurrencyDollarIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export default function JobCard({ job }) {
  return (
    <div className="card card-hover animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Link to={`/jobs/${job._id}`} className="block">
            <h3 className="heading-3 mb-1 hover:text-orange-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-body mb-4">{job.company}</p>
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
            {job.skills.map((skill, index) => (
              <span key={index} className="badge badge-info">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="ml-4">
          <span 
            className={`badge ${
              job.status === 'active' 
                ? 'badge-success' 
                : job.status === 'pending' 
                ? 'badge-warning' 
                : 'badge-error'
            }`}
          >
            {job.status}
          </span>
        </div>
      </div>
    </div>
  );
}
