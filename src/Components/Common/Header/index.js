import React from "react";
import Headermenu from "./HeaderMenu/headermenu";
import Topbar from "./Topbar/topbar";

function Header() {
  return (
    <>
      {/* Topbar */}
      <div className="xl:block hidden font-rubik">
         <Topbar />
      </div>
      <div className="container mx-auto font-rubik">
        <div className="sm:pl-[220px] relative">
          <div className="absolute top-0 left-0 xl:mt-[-54px]">
            <div className="relative flex items-center justify-center sm:w-[220px] h-[75px] w-[150px] sm:h-[100px] xl:h-[155px] bg-white">
              <a href="/" className="relative inline-block">
                <img
                  className="max-w-full h-auto sm:p-0 p-2"
                  src="/img/logo-1.webp"
                  alt="Company Logo"
                />
              </a>
            </div>
          </div>

          <div className="block lg:pl-20">
            {/* Header */}
            <Headermenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
