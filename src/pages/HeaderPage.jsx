import { useState } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { FaBars, FaRegMoon } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeaderPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isClickMenu, setIsClickMenu] = useState(false);

  return (
    <div className="w-full relative">
      <header className="py-4 sm:py-2 bg-[#0c0c0e] relative w-full text-white">
        <div className="flex px-2  justify-between  sm:justify-around  relative items-center">
          <div className="flex gap-2 text-2xl font-bold items-center">
            <GoDatabase className="bgLogo p-2 rounded-full text-4xl text-white font-bold" />
            <h1 className="TextbgLogo font-bold">SQLConvert</h1>
          </div>
          {/* desktop menu */}
          <nav className="hidden lg:flex gap-5 p-3 font-semibold text-[17px]">
            <NavLink>Home</NavLink>
            <NavLink>SQL to JSON</NavLink>
            <NavLink>SQL to HTML</NavLink>
            <NavLink>SQL to PDF</NavLink>
            <NavLink>SQL to PNG</NavLink>
            <NavLink>Excel to JSON</NavLink>
            <NavLink>Services</NavLink>
          </nav>

          <div className="flex items-center gap-3  justify-end  text-[20px]">
            <FaRegMoon />
            <div className="lg:hidden px-2">
              <motion.div
                initial={{ opacity: 1 }}
                whileTap={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {isClickMenu ? (
                  <IoMdCloseCircleOutline
                    className="text-3xl"
                    onClick={() => setIsClickMenu(false)}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <FaBars
                      className="text-3xl"
                      onClick={() => setIsClickMenu(true)}
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`bg-red-500 absolute duration-600 z-100
      ${isClickMenu ? "w-[80%] opacity-100 " : "w-[0%] opacity-0 "} `}
        >
          <nav
            className={`flex flex-col top-[148%]  
        sm:top-[8%] z-100   
              p-5 h-screen bg-[#0c0c0e] lg:hidden gap-2 font-semibold text-[17px]`}
          >
            <NavLink
              className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              Home
            </NavLink>
            <NavLink
              className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              SQL to JSON
            </NavLink>
            <NavLink
              className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              SQL to HTML
            </NavLink>
            <NavLink
              className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              SQL to PDF
            </NavLink>
            <NavLink
              className="p-2   rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              SQL to PNG
            </NavLink>
            <NavLink
              className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              Excel to JSON
            </NavLink>
            <NavLink
              className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"
            >
              {" "}
              Services
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};
