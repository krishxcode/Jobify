import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import image from "/Images/about.webp"
const stats = [
  { label: 'Active Jobs', value: '10K+' },
  { label: 'Companies', value: '2K+' },
  { label: 'Job Seekers', value: '50K+' },
  { label: 'Successful Placements', value: '5K+' },
];

const benefits = [
  'Advanced job matching algorithm',
  'Professional resume builder',
  'Interview preparation resources',
  'Career growth guidance',
  'Salary insights and negotiations',
  'Company culture information',
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 min-h-[90vh] flex items-center py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text & Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're dedicated to connecting talented professionals with their dream jobs. Our platform
            leverages cutting-edge technology to make job searching and hiring more efficient and effective.
          </p>

          {/* Benefits Section */}
          <div className="mt-10 rounded-2xl border border-white/10 p-6 text-base leading-7 text-gray-300 shadow-lg">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit} 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircleIcon className="h-6 w-5 flex-none text-orange-400" aria-hidden="true" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Statistics Section */}
          <div className="mt-10 rounded-2xl border border-white/10 p-6 shadow-lg">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Our Impact</h3>
            <dl className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <dt className="text-sm leading-6 text-gray-300">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src={image} 
            alt="Job Search Illustration" 
            className="w-full max-w-md lg:max-w-lg"
          />
        </motion.div>
        
      </div>
    </div>
  );
}
