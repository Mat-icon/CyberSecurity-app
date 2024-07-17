import React from "react";

const Service1 = ({ serviceContent }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center p-12 relative"   style={{
        backgroundImage: `url(${serviceContent.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        padding: '20px'
      }}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="mt-20 w-full text-center relative">
        <h1 className=" text-5xl font-bold">{serviceContent.title}</h1>
        <p className=" mt-12 text-xl leading-9">{serviceContent.description}</p>
      </div>
    </div>
  );
};

export default Service1;
