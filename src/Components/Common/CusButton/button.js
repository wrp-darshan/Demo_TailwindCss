import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

function CusButton({ text, className, iconType = "arrow" }) {
  return (
    <button
      className={`tracking-[1.28px] uppercase rounded-md relative py-[10px] px-[30px] leading-10 font-bold inline-flex items-center ${className}`}
    >
      {iconType === "arrow" && (
        <>
          {text}
          <FaArrowRightLong className="ml-[10px] w-5 h-5" />
        </>
      )}
      {iconType === "mail" && (
        <>
          <SiMinutemailer className="mr-3 w-5 h-5" />
          {text}
        </>
      )}
    </button>
  );
}

export default CusButton;
