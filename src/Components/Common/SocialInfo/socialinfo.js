import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

function Socialinfo({
  ulclassname = "",
  liclassname = "",
  classname = "",
  hiddenIcons = [],
  iocnclass = "",
}) {
  const socialIcons = [
    { name: "facebook", icon: <FaFacebookF className={iocnclass} /> },
    { name: "instagram", icon: <FaInstagram className={iocnclass} /> },
    { name: "twitter", icon: <FaTwitter className={iocnclass} /> },
    { name: "linkedin", icon: <FaLinkedinIn className={iocnclass} /> },
    { name: "pinterest", icon: <FaPinterestP className={iocnclass} /> },
  ];

  return (
    <ul className={`flex items-center ${ulclassname}`}>
      {socialIcons
        .filter((icon) => !hiddenIcons.includes(icon.name))
        .map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-center ${liclassname}`}
          >
            <span className={`w-fit ${classname}`}><a href="#">{item.icon}</a></span>
          </li>
        ))}
    </ul>
  );
}

export default Socialinfo;
