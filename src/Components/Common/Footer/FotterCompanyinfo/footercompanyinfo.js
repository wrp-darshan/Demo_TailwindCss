import React from "react";
import { FaPhone } from "react-icons/fa6";
import Socialinfo from "../../SocialInfo/socialinfo";

function Footercompanyinfo() {
  return (
    <section className="bg-blue py-[18px]">
      <div className="container">
        <div className="flex items-center md:justify-between flex-wrap justify-center md:gap-0 gap-4">
          <div>
            <img src="/img/footer-logo-img-1.png" className="w-auto" />
          </div>
          <div className="flex">
            <div className="flex items-center justify-center bg-[#ffffff1a] h-[55px] w-[55px] rounded-md">
              <FaPhone className="text-white" />
            </div>
            <div className="text-white font-rubik pl-4">
              <p className="leading-[30px]">Need help ?</p>
              <p className="hover:text-yellow leading-[30px] duration-300 cursor-pointer">(808) 555-0111</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-white font-rubik">Follow us:</p>
            <Socialinfo
              hiddenIcons={["instagram"]}
              ulclassname="gap-[10px] md:ml-10 sm:ml-8 ml-5"
              liclassname="text-[15px]"
              classname="bg-white !w-[30px] !h-[30px] rounded-md flex items-center justify-center"
              iocnclass="text-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footercompanyinfo;
