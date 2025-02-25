import React from "react";
import image from "/Images/3d-render-person-working-computer-home-office-with-plants-bookshelves-cozy-workspace.png"
export default function JobSearchHero() {
  return (
    <div className="min-h-screen flex items-center px-4 md:px-10 lg:px-40 bg-gray-50 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Find Your Dream Job
              <br />
              and Build a Better Future
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Searching for the perfect job? We make it easy for you to find opportunities that match your skills and
              aspirations. Start your journey today!
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr,auto] gap-4">
              <input
                type="text"
                placeholder="Job title or keywords"
                className="h-12 sm:h-14 px-4 sm:px-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 text-base sm:text-lg"
              />
              <input
                type="text"
                placeholder="Location"
                className="h-12 sm:h-14 px-4 sm:px-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 text-base sm:text-lg"
              />
              <button className="h-12 sm:h-14 px-6 sm:px-10 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-base sm:text-lg font-semibold">
                Search
              </button>
            </div>

            <div>
              <span className="text-orange-500 font-medium text-base md:text-lg">Popular Keywords: </span>
              <div className="mt-2 md:mt-3 flex flex-wrap gap-2 md:gap-3">
                {["Remote", "Full-Time", "Developer", "Designer", "Marketing", "Engineer"].map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 rounded-full text-sm md:text-base text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={image}
              alt="Job search illustration"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}