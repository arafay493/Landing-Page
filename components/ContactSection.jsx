import React from "react";
import { Mail, Phone, User, AtSign } from "lucide-react";
import { FaInstagram, FaBehance, FaTwitter, FaDribbble } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-[#f9f9fc] py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Let’s get in touch!</h2>
            <p className="text-gray-600 mb-6">
              Got questions about the Landing Page UI Kit? Our team is here to
              help. Contact us for quick and friendly support.
            </p>

            <div className="flex items-center gap-3 text-gray-700 mb-3">
              <Phone className="text-[#009379]" size={18} />
              <span>+012 345 6789</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mb-6">
              <Mail className="text-[#009379]" size={18} />
              <span>Hello@animaapp.com</span>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect with us</h4>
              <div className="flex gap-4 text-gray-600">
                <a href="#" className="bg-teal-100 rounded-full p-2">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-teal-100 rounded-full p-2">
                  <FaDribbble />
                </a>
                <a href="#" className="bg-teal-100 rounded-full p-2">
                  <FaBehance />
                </a>
                <a href="#" className="bg-teal-100 rounded-full p-2">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 border-r border-gray-400">
                <User className="text-[#009379] pr-1" size={18} />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009379]"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 border-r border-gray-400">
                <AtSign className="text-[#009379] pr-1" size={18} />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#009379]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#009379] hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
