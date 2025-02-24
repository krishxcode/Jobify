import { CheckCircleIcon } from '@heroicons/react/24/solid';

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
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're dedicated to connecting talented professionals with their dream jobs. Our platform
            leverages cutting-edge technology to make job searching and hiring more efficient and effective.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="rounded-2xl border border-white/10 p-6 text-base leading-7 text-gray-300">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-6 w-5 flex-none text-primary-400" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Our Impact</h3>
              <dl className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="text-sm leading-6 text-gray-300">{stat.label}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
