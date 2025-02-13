import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import Posttime from "../../PostTime/posttime";

function Footertopic() {
  const getfreelimks = [
    {
      link: "Software Development",
    },
    {
      link: "Data Analytics",
    },
    {
      link: "IT Consulting",
    },
    {
      link: "UI/UX Design",
    },
    {
      link: "Network Solutions",
    },
  ];

  const Contactdetails = [
    {
      icon: <FiMail className="text-blue mr-2" />,
      link: "info@example.com",
    },
    {
      icon: <SlLocationPin className="text-blue mr-2" />,
      link: "6391 Elgin St. Celina, 10299",
    },
    {
      icon: <IoCall className="text-blue mr-2" />,
      link: "(629) 555-0129",
    },
  ];

  const footerbloglink = [
    {
      img: "/img/footer-blog-img1.png",
      link: "The standard chunk of Lorem Ipsum",
    },
    {
      img: "/img/footer-blog-img2.png",
      link: "The standard chunk of Lorem Ipsum",
    },
  ];

  const photogallary = [
    {
      img: "/img/footer-widget-1.png",
    },
    {
      img: "/img/footer-widget-2.png",
    },
    {
      img: "/img/footer-widget-3.png",
    },
    {
      img: "/img/footer-widget-1.png",
    },
    {
      img: "/img/footer-widget-2.png",
    },
    {
      img: "/img/footer-widget-3.png",
    },
  ];

  return (
    <section className="bg-[#212121] text-white lg:pt-[100px] sm:pb-20 sm:pt-20 xs:py-16 py-10">
      <div className="container">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-12">
          {/* Footer Topic Links */}
          <div>
            <h3 className="leading-[30px] text-2xl font-bold">Get Free Link</h3>
            <div className="pt-9 space-y-[16px]">
              {getfreelimks.map((topiclink, index) => (
                <a
                  href="#"
                  className="text-footerwhite hover:text-yellow flex items-center font-rubik duration-300 "
                  key={index}
                >
                  <FaAngleRight className="mr-2 text-sm" />
                  {topiclink.link}
                </a>
              ))}
            </div>
          </div>
          {/* Footer Contactdetails */}
          <div>
            <h3 className="leading-[30px] text-2xl font-bold">Contact</h3>
            <div className="pt-9 space-y-[16px]">
              <p className="text-footerwhite font-rubik md:w-72 w-full">
                Lorem Ipsum is simply is dumi omy is text dummy text.
              </p>
              {Contactdetails.map((contactlink, index) => (
                <span key={index} className="flex items-center">
                  {contactlink.icon}
                  <a
                    href="#"
                    className="text-footerwhite hover:text-white font-rubik duration-300 leading-[30px]"
                  >
                    {contactlink.link}
                  </a>
                </span>
              ))}
            </div>
          </div>
          {/* Footer Blog */}
          <div>
            <h3 className="leading-[30px] text-2xl font-bold">Recent Blog</h3>
            <div className="pt-9 space-y-[16px]">
              {footerbloglink.map((footerblog, index) => (
                <div className="flex" key={index}>
                  <div>
                    <img src={footerblog.img} className="w-20 h-auto" />
                  </div>
                  <div className="text-footerwhite hover:text-white font-rubik duration-300 pl-[12px] w-[225px]">
                    <Posttime
                      hideauthor={true}
                      hidecomments={true}
                      postclass="text-footerwhite hover:text-white"
                    />
                    <a href="#" className="">
                      {footerblog.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Phtot gallarey */}
          <div className="xl:pl-10">
            <h3 className="leading-[30px] text-2xl font-bold">Recent Blog</h3>
            <div className="flex flex-wrap pt-9">
              {photogallary.map((gallery, index) => (
                <div key={index} className="px-1 pb-[10px] xl:w-1/3 w-auto">
                  <img
                    src={gallery.img}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footertopic;
