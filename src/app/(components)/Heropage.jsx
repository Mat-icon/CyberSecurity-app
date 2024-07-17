import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
const Heropage = () => {
  return (
    <div className=" w-full h-screen hero relative">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="w-full flex flex-col items-center relative md:top-48 top-36  poppins text-slate-50 text-center">
          <h1 className="text-8xl  font-bold">
            Cyber Defense <br />
            <span className=" text-green-300">Nigeria</span>
          </h1>
          <p className=" text-sm md:text-base mt-4">
          Constant Vigilance, Unmatched Security By <br/>Building Barriers Against Cyber Threats
          </p>
          <Link
            href="/"
            className=" mt-4 border text-black border-gray-600 w-1/3 p-4 rounded-md bg-green-500 text-sm transition-all duration-300 ease-in hover:bg-slate-200 flex items-center justify-center"
          >
            
           <FiMail className=" mr-2"/>  contact-us 
          </Link>
        </div>
    </div>
  );
};

export default Heropage;
