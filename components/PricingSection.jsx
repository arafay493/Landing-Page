import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const PricingSection = () => {
  return (
    <motion.div
      className="py-16 px-4 bg-[#f9f9fc] text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        Pick Your Perfect Plan
      </motion.h2>
      <motion.p
        className="text-gray-500 mb-12"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Find the perfect plan for your business with our flexible pricing
        options.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-8 shadow-md text-left flex flex-col justify-between ${
              plan.highlight
                ? "bg-[#009379] text-white"
                : "bg-white text-gray-800"
            }`}
            variants={cardVariants}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: plan.highlight ? "spring" : "tween",
              bounce: plan.highlight ? 0.3 : 0,
            }}
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
            <button
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-white text-[#009379] hover:bg-gray-100"
                  : "bg-emerald-100 text-[#009379] hover:bg-emerald-200"
              }`}
            >
              Get Started
              {plan.highlight && <span className="ml-1">→</span>}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingSection;
