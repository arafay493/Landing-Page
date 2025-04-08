import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '10k+', label: 'Website launched' },
  { value: '931k+', label: 'Projects created with Anima' },
  { value: '240k+', label: 'New users joined Anima' },
  { value: '12k+', label: 'Teams used Anima' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MetricsSection = () => {
  return (
    <motion.div
      className="py-16 px-4 bg-[#f9f9fc] text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        variants={cardVariants}
      >
        Our Metrics Tell the Story
      </motion.h2>

      <motion.p
        className="text-gray-500 max-w-xl mx-auto mb-12"
        variants={cardVariants}
      >
        Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {metrics.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white py-15 shadow-sm border-b-4 border-[#ffddd1] transition duration-300"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
            <p className="text-gray-600 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MetricsSection;
