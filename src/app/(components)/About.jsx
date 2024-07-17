import React from "react";

const About = () => {
  return (
    <div
      className="w-full relative h-screen bg-top bg-no-repeat bg-cover bg-slate-50 p-10 py-14 items-center text-white"
      style={{ backgroundImage: "url('/images/3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative text-center mt-8">
        <h2 className="text-5xl  text-white font-bold">Who We Are?</h2>

        <div className=" w-full h-full mt-4">
          <div className="text-xl">
            <p className=" leading-9">
              <span className=" font-bold">CyberDefense Nigeria</span> is a
              pioneering organization dedicated to transforming Nigeria&apos;s
              reputation in the global cyberspace and showcasing the
              contributions of Nigerians to global cybersecurity efforts. The
              organization aims to act as a unified platform to initiate and
              integrate cybersecurity efforts across sectors, ensuring that
              cybersecurity is an integral part of every digital initiative
              while fostering a culture of cybersecurity awareness. Our Vision
              and Mission Our vision is to make substantial impacts through
              innovative strategies and comprehensive service offerings. Our
              approach is all-encompassing, reaching individuals of all ages,
              businesses across diverse sectors, both profit and nonprofit
              organizations, and government and private entities. Our mission is
              to restore and uphold our nation&apos;s reputation, ensuring that
              the internet serves as a catalyst for national development rather
              than a deterrent. Our Team We are a dedicated team of
              cybersecurity professionals, fueled by a dream to create a secure
              digital world that reflects the true potential of our nation.
              Together, we will build a future where cybersecurity is the
              foundation of progress, and Nigeria stands tall in the
              global&nbsp;digital&nbsp;arena.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
