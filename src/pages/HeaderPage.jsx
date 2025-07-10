import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars, FaRegMoon } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const HeaderPage = ()=>{

 const [darkMode,setDarkMode] = useState(false)
 const [isClickMenu,setIsClickMenu] = useState(false)

 return(  <>
<header className="p-3 bg-[#0c0c0e] text-white">
    <div className="flex justify-around items-center">
       <div className="flex gap-2 text-2xl font-bold items-center">
         <GoDatabase className="bgLogo p-2 rounded-full text-4xl text-white font-bold" />
        <h1 className="TextbgLogo font-bold">SQLConvert</h1>
       </div>
       {/* desktop menu */}
        <nav className="hidden lg:flex gap-5 font-semibold text-[17px]">
            <NavLink>Home</NavLink>
            <NavLink>SQL to JSON</NavLink>
            <NavLink>SQL to HTML</NavLink>
            <NavLink>SQL to PDF</NavLink>
            <NavLink>SQL to PNG</NavLink>
            <NavLink>Excel to JSON</NavLink>
            <NavLink>Services</NavLink>
        </nav>
    <div className="flex items-center gap-5 text-[20px]">
        <FaRegMoon />
       <div className="lg:hidden">
         {
            isClickMenu ? ( <IoMdCloseCircleOutline className="text-3xl" onClick={()=>setIsClickMenu(false)} />):
            ( <FaBars className="text-3xl" onClick={()=>setIsClickMenu(true)}/>)
        }
       </div>
         {/* mobile menu */}
        <nav className={`flex flex-col top-[7.95%] right-0 sm:top-[8%] z-10 
             duration-600 ${isClickMenu ? "w-[80%]"  :"w-0 opacity-0"}
              p-5 h-screen bg-[#0c0c0e] absolute lg:hidden gap-2 font-semibold text-[17px]`}>
            <NavLink className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]">Home</NavLink>
            <NavLink className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]">SQL to JSON</NavLink>
            <NavLink className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]">SQL to HTML</NavLink>
            <NavLink className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]">SQL to PDF</NavLink>
            <NavLink className="p-2   rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]">SQL to PNG</NavLink>
            <NavLink className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]">Excel to JSON</NavLink>
            <NavLink className="p-2  rounded duration-500
            hover:bg-gradient-to-bl  from-[#8614c8] to-[#4c74f4]"> Services</NavLink>
        </nav>
    </div>
    </div>
</header>


</>
 )

}