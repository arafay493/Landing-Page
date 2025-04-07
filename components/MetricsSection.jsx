import React from 'react';

const metrics = [
  { value: '10k+', label: 'Website launched' },
  { value: '931k+', label: 'Projects created with Anima' },
  { value: '240k+', label: 'New users joined Anima' },
  { value: '12k+', label: 'Teams used Anima' },
];

const MetricsSection = () => {
  return (
    <div className="py-16 px-4 bg-[#f9f9fc] text-center">
      <h2 className="text-3xl font-bold mb-4">Our Metrics Tell the Story</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white py-15 shadow-sm border-b-4 border-[#ffddd1] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
            <p className="text-gray-600 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
