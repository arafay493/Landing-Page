import React from "react";
import { Twitter, Instagram, Globe } from "lucide-react";

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

const TeamSection = () => {
  return (
    <div className="bg-[#f9f9fc] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Meet our team</h2>
      <p className="text-gray-500 mb-12">
        Get to know the faces behind the scenes and learn about the values that
        drive us.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
