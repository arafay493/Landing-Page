import React from "react";
import { LuRocket } from "react-icons/lu";
const Section1 = () => {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">
          Create Engaging {"\n"} Landing Pages
        </h1>
        <p>
          Build beautiful landing pages in record time with{" "}
          <span className="text-blue-500 cursor-pointer"> Anima’s </span> Landing Page UI kit for Figma. No code
          required!
        </p>
        <div className="flex gap-5 font-semibold text-[#009379] text-xl">
          <div>
            <button className="text-white bg-[#009379] px-10 py-4 cursor-pointer rounded-2xl flex justify-center items-center gap-2">
              {" "}
              <LuRocket /> Get Started
            </button>
          </div>
          <div>
            <button className="border-2 border-[#009379] px-10 py-4 cursor-pointer rounded-2xl">
              How it Works
            </button>
          </div>
        </div>
      </div>
      <div >
        <img src="/images/banner_image.png" alt="" />
      </div>
    </div>
  );
};

export default Section1;
