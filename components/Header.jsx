import React, { useState } from "react";
import { LuRocket } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi"; // Menu and close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="relative flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold">
          <img src="/images/logo.png" alt="Logo" className="w-32 md:w-40" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX size={30} className="text-[#009379]" />
            ) : (
              <HiMenu size={30} className="text-[#009379]" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-semibold text-[#009379] text-xl items-center">
          <button className="px-5 py-4 cursor-pointer">Contact</button>

          <button className="bg-green-600/10 px-10 py-4 cursor-pointer rounded-2xl">
            How it Works
          </button>

          <button className="text-white bg-[#009379] px-10 py-4 cursor-pointer rounded-2xl flex justify-center items-center gap-2">
            <LuRocket /> Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute bg-white p-10 flex flex-col md:hidden mt-4 gap-4 text-[#009379] font-semibold text-lg w-[300px]">
          <button className="px-4 py-3 text-left">Contact</button>

          <button className="bg-green-600/10 px-4 py-3 rounded-2xl text-left">
            How it Works
          </button>

          <button className="text-white bg-[#009379] px-4 py-3 rounded-2xl flex items-center gap-2 justify-center">
            <LuRocket /> Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
