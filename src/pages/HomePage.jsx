import { FaArrowRightLong } from "react-icons/fa6";

export const HomePage = () => {
  return (
    <>
      <section className="h-screen flex bg-gradient-to-tl from-[#b60192] to-[#113ff6] justify-center items-center">
        
             <p className="testAnim  w-[10px] h-[10px]  absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim left-[20%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>
           
            <p className="testAnim right-[20%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>
           
            <p className="testAnim bottom-0 right-[5%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 right-[10%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 right-[2%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>
           
            <p className="testAnim bottom-0 left-[35%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 left-[30%] w-[5px] h-[5px] top-[35%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 left-[20%] w-[10px] h-[10px] top-[35%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 left-[35%] w-[5px] h-[5px] top-[0%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 left-[40%] w-[5px] h-[5px] top-[10%] absolute bg-gray-400 rounded-full"></p>
            <p className="testAnim bottom-0 left-[50%] w-[10px] h-[10px] top-[15%] absolute bg-gray-400 rounded-full"></p>
           


        <div className="flex flex-col gap-5 justify-center  inter">
          <h1 className="text-6xl font-extrabold text-center text-white">Convert SQL Data <br /> <span className="instantText">Instantly</span> </h1>
          <p className="text-[20px] font-semibold p-3 md:text-center text-white">Transform your SQL 
            queries and Excel files into JSON, HTML, PDF, <br /> PNG and more. Fast, secure, and completely free.</p>
        <div className="grid md:grid-cols-2 gap-5 p-3">
            <button className="flex items-center font-semibold gap-3 bg-white rounded text-2xl justify-around px-5 py-2"><p>Start Converting</p>
                <FaArrowRightLong />
            </button>
            <button className="border-2 text-white duration-300 rounded text-2xl py-2 px-5 font-semibold hover:bg-white hover:text-gray-500">View Services</button>
        </div>
        </div>
      </section>
    </>
  );
};
