import React from "react";
import Heading from "../../Common/Heading/heading";
import CusButton from "../../Common/CusButton/button";


function Mailsubscription() {
  return (
    <section className="bg-blue sm:py-20 xs:py-15 py-10 text-white">
      <div className="container">
        <div className="flex lg:justify-between lg:flex-row flex-col justify-center items-center">
          <div>
            <Heading heading={"Logistics Solutions for Success"} classname={"mb-5"}/>
            <p className="font-rubik">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="lg:ml-20 mt-10 md:w-[590px] w-full relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="w-full sm:h-20 h-16 bg-white/10 border border-transparent text-white text-lg rounded-md xl:pl-10 pl-5 sm:pr-60 pr-5 xl:pr-64 placeholder-white font-medium focus:outline-none"
              required
            />
            <div className="sm:absolute top-[10px] right-[10px] bottom-[10px] sm:mt-0 mt-3 ">
            <CusButton text="Browse More" className="bg-yellow sm:w-auto w-full justify-center" iconType="mail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mailsubscription;
