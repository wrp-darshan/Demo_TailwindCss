import React from "react";
import { LuSparkle } from "react-icons/lu";
function Companyslider() {
  const infoslider = [
    {
      title: "Logitruck",
      name: "RealTimeLogistics",
    },
    {
      title: "Our Technology",
      name: "RapidFleet",
    },
    {
      title: "DriveLogistics",
      name: "Real DriveLogistics",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full">
      <ul className="flex w-fit animate-slider items-center">
        {infoslider.concat(infoslider).map((info, index) => (
          <li
            key={index}
            className="inline-flex items-center md:text-5xl xs:text-4xl text-2xl tracking-[1.2px] font-bold capitalize sm:pl-10 pl-8 whitespace-nowrap"
          >
            <span
              className="text-transparent md:mr-10 xs:mr-8 mr-6"
              style={{ WebkitTextStroke: "1px #121212" }}
            >
              {info.title}
            </span>
            {info.name}
           <LuSparkle className="fill-blue text-blue md:ml-10 xs:ml-8 ml-6 md:h-16 md:w-16 sm:w-12 sm:h-12 w-9 h-9"/>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Companyslider;
