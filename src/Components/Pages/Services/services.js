import React from "react";
import Subtitle from "../../Common/SubTitles/subtitle";
import Heading from "../../Common/Heading/heading";
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  const servicedata = [
    {
      iocn: "/img/ferry-boat.png",
      arrow: <FaArrowRight className="text-blue duration-300"/>,
      title: "Swift Cargo",
      text: "Lorem Ipsum isly dummy text of the printing Lorem Ipsum is simply dummy text of the printing no one can",
    },
    {
      iocn: "/img/trolly.png",
      arrow: <FaArrowRight className="text-blue duration-300"/>,
      title: "Cargo Xpress",
      text: "Lorem Ipsum isly dummy text of the printing Lorem Ipsum is simply dummy text of the printing no one can",
    },
    {
      iocn: "/img/cardboard-box.png",
      arrow: <FaArrowRight className="text-blue duration-300"/>,
      title: "Aero Freight",
      text: "Lorem Ipsum isly dummy text of the printing Lorem Ipsum is simply dummy text of the printing no one can",
    },
  ];

  return (
    <section className="lg:pt-[140px] lg:pb-[100px] sm:py-24 xs:py-16 py-10">
      <div className="container">
        <div className="text-center sm:mb-14 mb-10">
          <Subtitle subtitle={"Latest Service"} classname={"text-blue"} />
          <Heading heading={<>Logistics made simple transportation<br/>made easy In Touch</>} />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {servicedata.map((service, index) => (
            <div key={index} className="rounded-md bg-white xs:pt-[42px] xs:pb-10 xs:px-10 p-[25px] lg:mb-10 mb-0">
              <div className="flex items-center justify-between ">
                <img
                  src={service.iocn}
                  alt="Service Icon"
                  className="w-[70px] h-auto object-contain"
                  />
                  <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#1037b633] rounded-full">
                     {service.arrow}
                  </div>
              </div>
              <div className="xs:mt-[32px] xs:pt-[35px] mt-[25px] pt-[25px] border-t border-blue">
              <h3 className="text-3xl font-bold pb-3">{service.title}</h3>
              <p className="text-[#616670] mb-0 font-rubik leading-[30px]">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
