import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Best for Small Teams or Individuals.",
    features: [
      "Write feature details here",
      "Write feature details here",
      "Write feature details here",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "$19",
    description: "Ideal for Growing Companies.",
    features: [
      "Write feature details here",
      "Write feature details here",
      "Write feature details here",
      "Write feature details here",
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "Ultimate for Enterprise Solutions.",
    features: [
      "Write feature details here",
      "Write feature details here",
      "Write feature details here",
    ],
    highlight: true,
  },
];

const PricingSection = () => {
  return (
    <div className="py-16 px-4 bg-[#f9f9fc] text-center">
      <h2 className="text-3xl font-bold mb-4">Pick Your Perfect Plan</h2>
      <p className="text-gray-500 mb-12">
        Find the perfect plan for your business with our flexible pricing
        options.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-md text-left flex flex-col justify-between ${
              plan.highlight
                ? "bg-[#009379] text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <div>
              <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-1">
                {plan.price}
                <span className="text-base font-normal"> / month</span>
              </div>
              <p className="mb-6 text-sm">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check
                      size={18}
                      className={`${
                        plan.highlight ? "text-white" : "text-emerald-600"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {index === 2 ? (
              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-emerald-600 hover:bg-gray-100"
                    : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                }`}
              >
                Get Started <span className="ml-1">→</span>
              </button>
            ) : (
              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-[#009379] hover:bg-gray-100"
                    : "bg-emerald-100 text-[#009379] hover:bg-emerald-200"
                }`}
              >
                Get Started
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
