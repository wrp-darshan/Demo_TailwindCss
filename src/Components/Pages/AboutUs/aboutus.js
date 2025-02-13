import React from "react";
import Heading from "../../Common/Heading/heading";
import Subtitle from "../../Common/SubTitles/subtitle";
import { FaCheck } from "react-icons/fa6";

function AboutUs() {
  const companyinfo = [
    {
      icon: <FaCheck className="text-blue text-2xl" />,
      title: "Cold Chain Logistics",
      info: "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. Lorem Ipsum is simply text of the printing",
    },
    {
      icon: <FaCheck className="text-blue text-2xl" />,
      title: "Project Cargo Handling",
      info: "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. Lorem Ipsum is simply text of the printing",
    },
  ];
  return (
    <section className="pt-4 lg:pb-[140px] sm:pb-24 xs:pb-16 pb-10 overflow-hidden">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:justify-items-start justify-items-center">
          <div className="relative xl:max-w-[500px] md:max-w-[600px] max-w-[500px] w-full before:content-[''] before:absolute sm:before:top-[-17px] before:top-[-12px] sm:before:left-[110px] before:left-[70px] sm:before:right-[-17px] before:right-[-12px] before:bottom-10 before:rounded-md before:bg-yellow before:-z-[2]">
            <div className="overflow-hidden">
              <img src="./img/about-one.png" alt="About One" className="w-full"/>
            </div>
            <div className="absolute lg:-right-[102px] md:-right-[80px] right-5 bottom-5 md:bottom-10 rounded-md bg-white sm:pt-8 pt-6 sm:px-10 px-7 sm:pb-6 pb-6 text-center">
              <Heading heading={"10+"} classname={"pb-4 tracking-widest"} />
              <p className="mb-0 text-[#616670] font-rubik">
                Years of experiences
              </p>
            </div>
          </div>
          <div className="xl:mt-0 mt-14 xl:max-w-max md:max-w-[700px]">
            <div className="mb-5">
              <Subtitle subtitle={"About us"} classname={"text-blue"} />
              <Heading
                heading={
                  <>
                    Delivering efficiency one <br className="sm:block hidden "/> mile at a time
                  </>
                }
              />
            </div>
            <p className="text-[#616670] font-rubik">
              It is a long established fact that a reader will be distracted by
              the content of a page when looking at its layout. Lorem Ipsum is
              simply text of the printing
            </p>
            <div className="mt-10">
              {companyinfo.map((info, index) => (
                <div key={index} className="flex mt-7">
                  <div className="pr-5 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold pb-3">{info.title}</h3>
                    <p className="text-[#616670] font-rubik">{info.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
