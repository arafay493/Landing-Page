import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#F9F9FF] flex justify-center items-center px-6">
      <div className="bg-[#F5C4B4] rounded-3xl flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl relative overflow-hidden">
        
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left p-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight">
            Get Landing Page <br />
            UI Kit Today!
          </h1>
          <p className="text-[#3A3A3A] mt-4 text-lg">
            Break the Figma limits and explore the endless possibilities with Anima.
          </p>
          <button className="mt-6 bg-[#009379] hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex justify-center items-center gap-2 w-full md:w-auto">
            Get Started <span>→</span>
          </button>
        </div>

        {/* Right Section */}
        {/* <div className="mt-10 lg:mt-0 relative">
          <div className="absolute w-40 h-40 bg-[#00B389] rounded-full top-[-40px] right-[-40px] z-0"></div>
          <div className="absolute w-32 h-32 bg-[#FA5C45] rounded-full bottom-[-30px] left-[-30px] z-0 opacity-80"></div>
          <div className="relative bg-white rounded-3xl shadow-lg w-64 h-[400px] flex flex-col items-center justify-center overflow-hidden z-10">
            <div className="bg-black w-full h-full flex flex-col justify-center items-center text-white text-center p-6">
              <p className="text-xl font-medium">Upload your image here</p>
              <span className="text-2xl mt-2">↓</span>
            </div>
          </div>
        </div> */}
        <div className="">
          <img src="/images/Mockup.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
