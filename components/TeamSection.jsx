import React from "react";
import { Twitter, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah K.",
    role: "UX Designer",
    image: "/images/member1.png",
    socials: {
      twitter: "#",
      dribbble: "#",
      instagram: "#",
    },
  },
  {
    name: "Michael L.",
    role: "Lead Designer",
    image: "/images/member2.png",
    socials: {
      twitter: "#",
      dribbble: "#",
      instagram: "#",
    },
  },
  {
    name: "Lauren M.",
    role: "Product Designer",
    image: "/images/member3.png",
    socials: {
      twitter: "#",
      dribbble: "#",
      instagram: "#",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TeamSection = () => {
  return (
    <motion.div
      className="bg-[#f9f9fc] py-16 px-4 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-2"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        Meet our team
      </motion.h2>
      <motion.p
        className="text-gray-500 mb-12"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Get to know the faces behind the scenes and learn about the values that
        drive us.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover transition-transform duration-300"
              />
            </motion.div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 border-t-1 border-gray-300 pt-5">
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-100 rounded-full p-2"
                >
                  <Twitter
                    size={18}
                    className="text-gray-600 hover:text-blue-500"
                  />
                </a>
                <a
                  href={member.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-100 rounded-full p-2"
                >
                  <Globe
                    size={18}
                    className="text-gray-600 hover:text-pink-500"
                  />
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-100 rounded-full p-2"
                >
                  <Instagram
                    size={18}
                    className="text-gray-600 hover:text-pink-600"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamSection;
