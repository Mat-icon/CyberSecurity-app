import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FiMail } from "react-icons/fi";
import { FaAddressCard, FaPhone, FaWhatsapp } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className=" w-full h-auto p-12 bg-slate-50 flex justify-center pt-16">
      <div className="contacts w-2/4 flex flex-col">
        <h1 className=" text-6xl">contact-us</h1>
        <div className="add space-y-10 text-gray-800 mt-10 text-xl">
            <p><FaAddressCard/> </p>
        <p><FaPhone/> </p>
        <p><FaWhatsapp/></p>
        </div>
        
      </div>

      <div className=" w-2/4 flex flex-col items-center ">
        <div className="w-full bg-slate-200 p-2 rounded-md">
          <div className="flex items-center justify-between p-3">
            <p className="text-xs font-semibold ">write-me</p>
            <div className="flex space-x-4 text-gray-500   text-xs">
              <FontAwesomeIcon
                icon={faMinus}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
              <div
                className="w-2.5 h-2.5 border border-gray-500 rounded-sm hover:border-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              ></div>
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-white cursor-pointer"
                style={{ transition: "ease-in 0.5s" }}
              />
            </div>
          </div>
          <form
            action="/submit"
            method="post"
            className="space-y-6  p-6 flex flex-col md:ml-10"
          >
            <div>
              <label
                htmlFor="full-name"
                className="block text-xs font-semibold "
              >
                <span className=" text-gray-600 text-sm">01</span> full-name{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                className="mt-4 text-white block md:w-11/12 w-full   px-3 py-4 rounded-md  focus:border-sky-500"
                style={{ background: "#101010d3" }}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs font-semibold ">
                <span className=" text-gray-600 text-sm">02</span> company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-4 text-white  block md:w-11/12 w-full  px-3 py-4 border border-gray-700 rounded-md   focus:border-yellow-800"
                style={{ background: "#101010d3" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold ">
                <span className=" text-gray-600 text-sm">03</span> email{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-4 text-white  block md:w-11/12 w-full  px-3 py-4 border border-gray-700 rounded-md    focus:border-yellow-800"
                style={{ background: "#101010d3" }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold ">
                <span className=" text-gray-600 text-sm">04</span> your-message{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={7}
                id="message"
                name="message"
                required
                className="mt-4 text-white  block md:w-11/12 w-full px-3 py-4 border border-gray-700 rounded-md   focus:border-yellow-800"
                style={{ background: "#101010d3" }}
              ></textarea>
            </div>
            <button
              type="submit"
            
              className="material-bubble bg-green-400 w-full md:w-7/12 lg:w-6/12 p-4 lg:px-4 rounded-md   border border-gray-600 text-center lg:text-center text-sm flex items-center  justify-center"
            >
              submit-message
              <FiMail className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
