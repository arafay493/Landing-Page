import React from "react";
import { LuRocket } from "react-icons/lu";

const Section1 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-auto lg:h-screen px-4 py-10 lg:py-0 gap-10">
      {/* Text Section */}
      <div className="flex flex-col gap-6 max-w-[500px] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Create Engaging <br className="hidden lg:block" /> Landing Pages
        </h1>

        <p className="text-gray-700">
          Build beautiful landing pages in record time with{" "}
          <span className="text-blue-500 cursor-pointer">Anima’s</span> Landing Page UI kit for Figma. No code
          required!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-semibold text-[#009379] text-lg sm:text-xl">
          <button className="text-white bg-[#009379] px-8 py-3 rounded-2xl flex justify-center items-center gap-2">
            <LuRocket /> Get Started
          </button>

          <button className="border-2 border-[#009379] px-8 py-3 rounded-2xl">
            How it Works
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[500px]">
        <img
          src="/images/banner_image.png"
          alt="Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Section1;
