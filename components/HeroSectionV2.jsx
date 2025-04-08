import React from "react";
import { motion } from "framer-motion";

const HeroSectionV2 = () => {
  return (
    <div className="bg-[#F9F9FF] flex justify-center items-center py-16 px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative">
        
        {/* Left - Image with animation */}
        <motion.div
          className="relative w-full max-w-md flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/banner2_img.png"
            alt="Phone Mockup"
            className="h-auto rounded-2xl"
          />
        </motion.div>

        {/* Right - Text content with staggered animation */}
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            Get Landing Page UI Kit Today!
          </motion.h1>

          <motion.p
            className="text-[#3A3A3A] mt-4 text-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            Break the Figma limits and explore the endless possibilities with
            Anima.
          </motion.p>

          <motion.button
            className="mt-6 bg-[#009379] hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex justify-center items-center gap-2 w-full md:w-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            Get Started <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionV2;
