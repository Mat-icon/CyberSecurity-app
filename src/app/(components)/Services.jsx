import React from "react";
import { FaLocationArrow, FaUserSecret } from "react-icons/fa6";
import Link from "next/link";


const Services = () => {
  return (
    <div className=" w-full h-auto bg-slate-50 p-10 py-14 items-center flex flex-col ">
      <div className="w-full title poppins">
        <h2 className=" text-5xl">Our services We Offer</h2>
      </div>
      <div className="container grid grid-cols-2 gap-4 mt-20">
        <div className="card flex flex-col items-center justify-center space-y-4 h-96 bg-slate-100 hover:bg-slate-200 rounded-md p-6 shadow-md shadow-gray-200 ">
          <FaUserSecret className=" text-4xl" />
          <p className=" text-sm md:text-base mt-4 text-center">
            Start your daily shopping with our exclusive offers and enjoy
            unbeatable freshness.
          </p>
          <Link
            href="/"
            className=" border border-gray-600 w-2/3 p-4 rounded-md bg-sky-200 text-sm transition-all duration-300 ease-in hover:bg-slate-200 flex items-center justify-center"
          >
            <FaLocationArrow />
           view-services
          </Link>
        </div>
        <div className="card flex flex-col items-center justify-center space-y-4 h-96 bg-slate-100  hover:bg-slate-200 rounded-md p-6 shadow-md shadow-gray-200 ">
          <FaUserSecret className=" text-4xl" />
          <p className=" text-sm md:text-base mt-4 text-center">
            Start your daily shopping with our exclusive offers and enjoy
            unbeatable freshness.
          </p>
          <Link
            href="/"
            className=" border border-gray-600 w-2/3 p-4 rounded-md bg-sky-200 text-sm transition-all duration-300 ease-in hover:bg-slate-200 flex items-center justify-center"
          >
            <FaLocationArrow />
           view-services
          </Link>
        </div>
        <div className="card flex flex-col items-center justify-center space-y-4 h-96 bg-slate-100  hover:bg-slate-200 rounded-md p-6 shadow-md shadow-gray-200 ">
          <FaUserSecret className=" text-4xl" />
          <p className=" text-sm md:text-base mt-4 text-center">
            Start your daily shopping with our exclusive offers and enjoy
            unbeatable freshness.
          </p>
          <Link
            href="/"
            className=" border border-gray-600 w-2/3 p-4 rounded-md bg-sky-200 text-sm transition-all duration-300 ease-in hover:bg-slate-200 flex items-center justify-center"
          >
            <FaLocationArrow />
           view-services
          </Link>
        </div>
        <div className="card flex flex-col items-center justify-center space-y-4 h-96 bg-slate-100  hover:bg-slate-200 rounded-md p-6 shadow-md shadow-gray-200 ">
          <FaUserSecret className=" text-4xl" />
          <p className=" text-sm md:text-base mt-4 text-center">
            Start your daily shopping with our exclusive offers and enjoy
            unbeatable freshness.
          </p>
          <Link
            href="/"
            className=" border border-gray-600 w-2/3 p-4 rounded-md bg-sky-200 text-sm transition-all duration-300 ease-in hover:bg-slate-200 flex items-center justify-center"
          >
            <FaLocationArrow />
           view-services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
