import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#2C2C2C] text-white py-4 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Text */}
        <p className="text-sm mb-4 md:mb-0">
          © 2023 Anima's Landing Page UI Kit.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          {[FaYoutube, FaInstagram, FaGithub, FaLinkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              custom={i}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500 transition"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
