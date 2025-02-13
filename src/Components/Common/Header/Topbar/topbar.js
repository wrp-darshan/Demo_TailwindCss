import React from "react";
import { LuMailOpen } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Socialinfo from "../../SocialInfo/socialinfo";

function Topbar() {
  const headerContactDetails = [
    {
      type: "email",
      value: "info@example.com",
      icon: <LuMailOpen className="xl:text-lg text-xl" />,
    },
    {
      type: "address",
      value: "6391 Elgin St. Celina, 10299",
      icon: <IoLocationOutline className="xl:text-lg text-2xl w-fit" />,
    },
    {
      type: "phone",
      value: "(629) 555-0129",
      icon: <FaPhoneAlt className="xl:text-lg text-xl" />,
    },
  ];
  return (
    <div className="relative py-[15px] xl:bg-blue">
      <div className="container">
        <div className="  xl:pl-[220px] flex justify-between xl:items-center xl:flex-row flex-col">
          <div className="block relative xl:pl-20">
            <ul className="flex xl:space-x-10 space-x-0  xl:flex-row flex-col justify-start xl:space-y-0 space-y-3">
              {headerContactDetails.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 xl:text-white "
                >
                  {item.icon}
                  <a href="#">{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center xl:my-0 my-6">
            <Socialinfo hiddenIcons={["pinterest"]} liclassname={"xl:ml-6 xl:text-white "} ulclassname={""} iocnclass="text-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
