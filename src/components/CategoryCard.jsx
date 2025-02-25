import React from "react";
import { Lightbulb, Globe2, Code2, Hash } from "lucide-react";

// CategoryCard component
function CategoryCard({ icon, title, positions }) {
  return (
    <div className="bg-white rounded-lg p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 flex items-center justify-center text-emerald-500">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{positions} open positions</p>
      </div>
    </div>
  );
}

// JobCategories component
export default function JobCategories() {
  const categories = [
    {
      icon: <Lightbulb size={32} />,
      title: "Designs & Art",
      positions: 653,
    },
    {
      icon: <Globe2 size={32} />,
      title: "Education",
      positions: 109,
    },
    {
      icon: <Code2 size={32} className="text-yellow-400" />,
      title: "Web Development",
      positions: 870,
    },
    {
      icon: <Hash size={32} />,
      title: "Digital Marketing",
      positions: 360,
    },
  ];

  return (
    <div className="bg-[#e8f4f4] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Thousands of dream jobs available now
        </h2>
        <p className="text-gray-600 mb-12">Browse some featured jobs</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              positions={category.positions}
            />
          ))}
        </div>

        <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium">
          Browse more Categories
        </button>
      </div>
    </div>
  );
}
