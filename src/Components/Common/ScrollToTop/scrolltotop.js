import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

function Scrolltotop() {
  return (
    <div>
      <ScrollToTop
        smooth
        component={<IoIosArrowUp  className="text-white text-lg" />}
        className="!bg-yellow hover:!bg-blue rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center md:!h-[50px] md:!w-[50px] !h-[40px] !w-[40px] md:!right-10 md:!bottom-10 !right-5 !bottom-5"
      />
    </div>
  );
}

export default Scrolltotop;
