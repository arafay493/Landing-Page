import React from "react";
import { Sparkles, LayoutGrid, PartyPopper } from "lucide-react";

const features = [
  {
    icon: (
      <Sparkles size={32} className="text-red-400 bg-red-100 p-2 rounded-xl" />
    ),
    title: "Fast building",
    description:
      "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
  },
  {
    icon: (
      <LayoutGrid
        size={32}
        className="text-teal-500 bg-teal-100 p-2 rounded-xl"
      />
    ),
    title: "Responsive Design",
    description:
      "No need to worry about screen size. Anima’s Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
  {
    icon: (
      <PartyPopper
        size={32}
        className="text-yellow-500 bg-yellow-100 p-2 rounded-xl"
      />
    ),
    title: "No Code Needed",
    description:
      "Zero coding skills required. Anima’s Landing Page UI Kit empowers you to create stunning landing pages with ease.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 px-4 bg-[#f9f9fc] text-center">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        These are just a few features you’ll get using Anima Landing Page UI
        Kit.
      </p>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
            <a
              href="#"
              className="text-teal-600 font-semibold text-sm inline-flex items-center hover:underline"
            >
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
