import { CiYoutube } from "react-icons/ci"
import { FaTelegram } from "react-icons/fa6"
import { GoDatabase } from "react-icons/go"
import { LuGithub } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md"

export const FooterPage = ()=>{
    return(<>
    <footer className="p-3 pt-10 md:p-10  bg-[#111827] text-white inter">
  <div className="space-y-5 md:space-y-0 md:flex items-center justify-between md:px-10">
    {/* company logo */}
  <div>
      <div className="flex items-center gap-2 font-semibold">
      <GoDatabase className="bgLogo p-2 rounded-full text-4xl text-white font-bold" />
      <p className="text-2xl">SQLConverter</p>
    </div>
    <p className="mt-4 text-gray-500 font-semibold text-[14px] max-w-[420px]">
      The most reliable platform for converting SQL data to multiple formats. Fast, secure, and completely free.
    </p>
    <div className="flex gap-2 mt-4 text-2xl text-gray-500">
      <LuGithub className="hover:text-white duration-300"/>
      <FaTelegram className="hover:text-white duration-300"/>
      <CiYoutube className="hover:text-white duration-300"/>
      <MdOutlineEmail className="hover:text-white duration-300"/>
    </div>
  </div>
  {/* seervice */}
  <div className="space-y-4">
    <h1 className="text-2xl font-bold inter">Service</h1>
    <div className="text-gray-500 text-[14px] inter font-semibold flex flex-col gap-1">
      <p className="hover:text-white duration-300">SQL to JSON</p>
      <p className="hover:text-white duration-300">SQL to HTML</p>
      <p className="hover:text-white duration-300">SQL to PDF</p>
      <p className="hover:text-white duration-300">SQL to PNG</p>
      <p className="hover:text-white duration-300">Excel to JSON</p>
    </div>
  </div>
  {/* company */}
  <div className="space-y-4">
    <h1 className="text-2xl font-bold inter">Company</h1>
    <div className="text-gray-500 text-[14px] inter font-semibold flex flex-col gap-1">
      <p className="hover:text-white duration-300">About Us</p>
      <p className="hover:text-white duration-300">Services</p>
      <p className="hover:text-white duration-300">Contact</p>
      <p className="hover:text-white duration-300">Privacy Policy</p>
      <p className="hover:text-white duration-300">Terms of Service</p>
    </div>
  </div>
  {/* resources */}
  <div className="space-y-4">
    <h1 className="text-2xl font-bold inter">Resources</h1>
    <div className="text-gray-500 text-[14px] inter font-semibold flex flex-col gap-1">
      <p className="hover:text-white duration-300">Documentation</p>
      <p className="hover:text-white duration-300">API Reference</p>
      <p className="hover:text-white duration-300">Contact</p>
      <p className="hover:text-white duration-300">Blog</p>
      <p className="hover:text-white duration-300">Support</p>
    </div>
  </div>
 
  </div>

<div className="mt-4">
  <hr className="text-gray-500"/>
  <div className="p-10 md:flex justify-between mt-2 md:p-3 ">
    <p className="text-gray-500 text-center">©{new Date().getFullYear()} SQLConverter. All rights reserved.</p>
    <p className="text-gray-500 text-center">Made with ❤️ for Mucaawiye developer</p>
  </div>
</div>

</footer>
    </>)
}


