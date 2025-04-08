import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah K.",
    role: "UX Designer @Brello",
    quote:
      "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
  },
  {
    name: "Michael L.",
    role: "Creative Director @Yo",
    quote:
      "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 4,
  },
  {
    name: "Lauren M.",
    role: "UI Designer @Boo",
    quote:
      "Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I’m working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    stars: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const TestimonialsSection = () => {
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
        Real Stories from Satisfied Customers
      </motion.h2>
      <motion.p
        className="text-gray-500 mb-12"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        See how our landing page ui kit is making an impact.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-sm text-gray-600 mb-6">"{testimonial.quote}"</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < testimonial.stars ? "gold" : "none"}
                  stroke="gold"
                  size={20}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
