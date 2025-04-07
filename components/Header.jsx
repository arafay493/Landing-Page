import React from "react";
import { LuRocket } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="flex gap-10 font-semibold text-[#009379] text-xl">
        <div>
          <button className="px-5 py-4 cursor-pointer">Contact</button>
        </div>
        <div>
          <button className="bg-green-600/10 px-10 py-4 cursor-pointer rounded-2xl">
            How it Works
          </button>
        </div>
        <div>
          <button className="text-white bg-[#009379] px-10 py-4 cursor-pointer rounded-2xl flex justify-center items-center gap-2">
            {" "}
            <LuRocket /> Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
