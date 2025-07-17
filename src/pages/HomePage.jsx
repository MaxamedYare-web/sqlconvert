import { FaArrowRight, FaArrowRightLong, FaHtml5, FaTelegram } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GoDatabase } from "react-icons/go";
import { VscFilePdf, VscWorkspaceTrusted } from "react-icons/vsc";
import { BsFiletypePng } from "react-icons/bs";
import { LuFileJson, LuGithub } from "react-icons/lu";
import { useState } from "react";
import { RxLightningBolt } from "react-icons/rx";
import { TbClockHour4 } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FooterPage } from "./FooterPage";

export const HomePage = () => {
  const [getId, setGetId] = useState(0);

  const sqlCard = [
    {
      id: 1,
      icon: <GoDatabase />,
      bgColor: "bg-gradient-to-bl from-[#4c74f4] to-[#8614c8]",
      title: "SQL to JSON",
      des: "convert SQL queries and results to JSON format instant",
    },
    {
      id: 2,
      icon: <FaHtml5 />,
      bgColor: "bg-gradient-to-bl from-[#25bd72] to-[#388ae5]",
      title: "SQL to HTML",
      des: "Transform SQL data into beautiful HTML tables",
    },
    {
      id: 3,
      icon: <VscFilePdf />,
      bgColor: "bg-gradient-to-bl from-[#113ff6] to-[#b60192]",
      title: "SQL to PDF",
      des: "Generate professional PDF reports from SQL data",
    },
    {
      id: 4,
      icon: <BsFiletypePng />,
      bgColor: "bg-gradient-to-bl from-[#F0493F] to-[#f0493f]",
      title: "SQL to PNG",
      des: "Create visaul representations of you SQL data",
    },
    {
      id: 5,
      icon: <LuFileJson />,
      bgColor: "bg-gradient-to-bl from-[#20c367] to-[#126654]",
      title: "Excel to JSON",
      des: "convert Excel files to JSON arrays effortlessly",
    },
  ];

  const hadleMoveEnter = (id) => {
    setGetId(id);
  };

  return (
    <div className="w-full">
      <section className="h-screen flex bg-gradient-to-tl from-[#b60192] to-[#113ff6] justify-center items-center">
        <p className="testAnim   sm:flex w-[10px] h-[10px]  absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim  sm:flex left-[20%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>

        <p className="testAnim hidden sm:flex right-[20%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>

        <p className="testAnim hidden sm:flex bottom-0 right-[5%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim hidden sm:flex bottom-0 right-[10%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim hidden sm:flex bottom-0 right-[2%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>

        <p className="testAnim  sm:flex bottom-0 left-[35%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim  sm:flex bottom-0 left-[30%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim  sm:flex bottom-0 left-[20%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim  sm:flex bottom-0 left-[35%] w-[5px] h-[5px] top-[0%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim  sm:flex bottom-0 left-[40%] w-[5px] h-[5px] top-[10%] absolute bg-gray-400 rounded-full"></p>
        <p className="testAnim  sm:flex bottom-0 left-[50%] w-[10px] h-[10px] top-[15%] absolute bg-gray-400 rounded-full"></p>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, animation: Infinity, x: 300, y: 200 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <p
            className="sm:flex bottom-0 left-[30%] w-[30px] h-[30px] top-[35%] 
          absolute bg-gray-400 rounded-full"
          ></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, animation: Infinity, x: 3, y: -300 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <p className="sm:flex right-[4%] w-[30px] h-[30px] top-[3%] absolute bg-gray-400 rounded-full"></p>
        </motion.div>

        <div className="flex flex-col gap-5 justify-center homepage  inter">
          <h1 className="text-6xl font-extrabold text-center text-white">
            Convert SQL Data <br />{" "}
            <span className="instantText">Instantly</span>{" "}
          </h1>
          <p className="text-[20px] font-semibold p-3 md:text-center text-white">
            Transform your SQL queries and Excel files into JSON, HTML, PDF,{" "}
            <br /> PNG and more. Fast, secure, and completely free.
          </p>
          <div className="grid md:grid-cols-2 gap-5 p-3">
            <button className="flex items-center font-semibold gap-3 bg-white rounded text-2xl justify-around px-5 py-2">
              <p>Start Converting</p>
              <FaArrowRightLong />
            </button>
            <button className="border-2 text-white duration-300 rounded text-2xl py-2 px-5 font-semibold hover:bg-white hover:text-gray-500">
              View Services
            </button>
          </div>
        </div>
      </section>

      <div className="bg-[#111827] h-70 md:h-50 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.8 }}
          className="text-center  "
        >
          <div className="grid py-4 grid-cols-2  space-y-10 md:flex justify-around w-full ">
            <motion.div
              initial={{ opacity: 0,  x: -3 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-[#60a5fa] inter text-3xl md:text-5xl font-bold text-center">
                1M+
              </h1>
              <p className="text-gray-500 text-[20px] text-center font-semibold">
                Conversions Processed
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-[#60a5fa] inter text-3xl md:text-5xl font-bold text-center">
                50K+
              </h1>
              <p className="text-gray-500 text-[20px] text-center font-semibold">
                Happy Users
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-[#60a5fa] inter text-3xl md:text-5xl font-bold text-center">
                99.9%
              </h1>
              <p className="text-gray-500 text-[20px] text-center font-semibold">
                Uptime
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-[#60a5fa] inter text-3xl md:text-5xl font-bold text-center">
                10+
              </h1>
              <p className="text-gray-500 text-[20px] font-semibold">
                Formats Supported
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Powerful Conversion Tools */}
      <section
        className="flex justify-center flex-col p-10 
       items-center text-white bg-[#121212]"
      >
        <motion.div
          initial={{ opacity: 0,y:10 }}
          whileInView={{ opacity: 1 ,y:0 }}
          transition={{ duration: 3 }}
          className="flex flex-col justify-center items-center mt-10 md:mt-3 gap-4"
        >
          <h1 className="text-4xl text-wrap md:text-5xl font-bold text-center">
            Powerful Conversion Tools
          </h1>
          <p className="text-gray-500 md:max-w-[650px] text-center text-[20px] font-semibold">
            Choose from our comprehensive suite of conversion tools designed for
            developers, analysts, and data professionals.
          </p>
        </motion.div>

        <div className="mt-8 w-full md:w-[80%]">
          <motion.div className="space-y-4  md:grid md:grid-cols-2 lg:grid-cols-3
           gap-4 md:space-y-0">
            {sqlCard.map((card) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, translateY: 0 }}
                transition={{ duration: 1 }}
                onMouseEnter={() => hadleMoveEnter(card.id)}
                onMouseLeave={() => setGetId(0)}
                className="bg-[#18212f]    p-6 rounded text-white duration-500 
                hover:-translate-y-2"
                key={card.id}
              >
                <p
                  className={`text-4xl ${card.bgColor} duration-400 ${
                    card.id == getId ? "scale-105" : "scale-100"
                  } flex justify-center items-center rounded-[10px] w-[55px] h-[55px] p-2 `}
                >
                  {card.icon}
                </p>
                <h1 className="font-bold text-2xl mt-3">{card.title}</h1>
                <p className="text-gray-500 mt-3 font-semibold max-w-[300px]">
                  {card.des}
                </p>
                <NavLink
                  className={`flex text-blue-500 duration-400 ${
                    card.id == getId ? "translate-x-2" : "translate-x-0"
                  } font-semibold items-center mt-5 gap-3`}
                >
                  Try it now <FaArrowRightLong />
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Why Choose Our Platform? */}
      <section className="p-10 bg-gradient-to-tr flex justify-center flex-col items-center lg:pt-10 from-[#1F2937] to-[#1f2937] text-white">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl text-center leading-12 lg:text-5xl font-bold mt-3 lg:mt-10">
            Why Choose Our Platform?
          </h1>
        </motion.header>
        <div className="md:flex justify-center items-center p-2 lg:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center gap-3 items-center mt-5"
          >
            <h1 className="bg-gradient-to-tl w-[55px] h-[55px] flex justify-center items-center rounded-full from-blue-500 to-fuchsia-600 text-4xl">
              <RxLightningBolt />
            </h1>
            <h1 className="text-2xl font-bold">Lightning Fast</h1>
            <p className="max-w-[350px] text-gray-400 text-center font-semibold">
              Convert your data in seconds with our optimized processing engine
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center gap-3 items-center mt-5"
          >
            <h1 className="bg-gradient-to-tl w-[55px] h-[55px] flex justify-center items-center rounded-full from-blue-500 to-fuchsia-600 text-4xl">
              {" "}
              <VscWorkspaceTrusted />{" "}
            </h1>
            <h1 className="text-2xl font-bold">Secure & Private</h1>
            <p className="max-w-[350px] text-gray-400 text-center font-semibold">
              Your data is processed securely and never stored on our servers
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center gap-3 items-center mt-5"
          >
            <h1 className="bg-gradient-to-tl w-[55px] h-[55px] flex justify-center items-center rounded-full from-blue-500 to-fuchsia-600 text-4xl">
              <TbClockHour4 />
            </h1>
            <h1 className="text-2xl font-bold">24/7 Available</h1>
            <p className="max-w-[350px] text-gray-400 text-center font-semibold">
              Access our conversion tools anytime, anywhere, from any device
            </p>
          </motion.div>
        </div>
      </section>

{/* ready to start */}
<section className="p-5 flex  bg-gradient-to-l from-[#8f35ea] to-[#2b60eb] h-100  lg:h-80">
  <motion.div
  initial={{opacity:0,y:30}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:1}}
  className="flex p-5 flex-col w-full gap-5 lg:gap-7 justify-center items-center">
    <h1 className="text-center text-4xl font-bold text-white lg:text-6xl">Ready to Get Started?</h1>
    <p className="font-semibold text-center text-[18px] text-gray-100 lg:text-2xl">Join thousands of developers and analysts who trust our conversion tools</p>
    <button className="flex justify-center font-semibold text-[#2b60eb] py-2 rounded items-center bg-white px-5 text-2xl gap-3">Start Converting Now <FaArrowRight /></button>
  </motion.div>
</section>

{/* footer */}
<FooterPage/>

    </div>
  );
};
