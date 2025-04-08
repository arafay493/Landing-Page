import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  return (
    <motion.div
      className="bg-[#F9F9FF] flex justify-center items-center px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="bg-[#F5C4B4] rounded-3xl flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl relative overflow-hidden">
        
        {/* Left Section */}
        <motion.div
          className="max-w-lg text-center lg:text-left p-10"
          variants={textVariants}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight">
            Get Landing Page <br />
            UI Kit Today!
          </h1>
          <p className="text-[#3A3A3A] mt-4 text-lg">
            Break the Figma limits and explore the endless possibilities with Anima.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#009379] hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex justify-center items-center gap-2 w-full md:w-auto"
          >
            Get Started <span>→</span>
          </motion.button>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          variants={imageVariants}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/Mockup.png" alt="Mockup" className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
