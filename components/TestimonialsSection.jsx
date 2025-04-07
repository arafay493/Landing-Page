import React from "react";
import { Star } from "lucide-react";

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

const TestimonialsSection = () => {
  return (
    <div className="bg-[#f9f9fc] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Real Stories from Satisfied Customers</h2>
      <p className="text-gray-500 mb-12">
        See how our landing page ui kit is making an impact.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
