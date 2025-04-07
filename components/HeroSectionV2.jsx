import React from "react";

const HeroSectionV2 = () => {
  return (
    <div className="bg-[#F9F9FF] flex justify-center items-center py-16 px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative">
        {/* Left - Image */}
        <div className="relative w-full max-w-md flex justify-center">
          <img
            src="/images/banner2_img.png"
            alt="Phone Mockup"
            className="h-auto rounded-2xl"
          />
        </div>

        {/* Right - Text content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight">
            Get Landing Page UI Kit Today!
          </h1>
          <p className="text-[#3A3A3A] mt-4 text-lg">
            Break the Figma limits and explore the endless possibilities with
            Anima.
          </p>
          <button className="mt-6 bg-[#009379] hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex items-center gap-2">
            Get Started <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionV2;
