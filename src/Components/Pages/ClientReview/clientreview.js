import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Subtitle from "../../Common/SubTitles/subtitle";
import Heading from "../../Common/Heading/heading";
import { FaStar, FaStarHalfAlt, FaQuoteRight  } from "react-icons/fa";

function Clientreview() {
  const clientreview = [
    {
      img: "./img/testimonials.png",
      name: "Savannah Nguyen",
      description: "President of Sales",
      reviewIcon: (
        <>
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStarHalfAlt className="text-yellow" />
        </>
      ),
      reviewtxt: "Reviews (05)",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet.",
    },
    {
      img: "./img/testimonials.png",
      name: "Savannah Nguyen",
      description: "President of Sales",
      reviewIcon: (
        <>
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStarHalfAlt className="text-yellow" />
        </>
      ),
      reviewtxt: "Reviews (05)",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet.",
    },
    {
      img: "./img/testimonials.png",
      name: "Savannah Nguyen",
      description: "President of Sales",
      reviewIcon: (
        <>
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStarHalfAlt className="text-yellow" />
        </>
      ),
      reviewtxt: "Reviews (05)",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet.",
    },
    {
      img: "./img/testimonials.png",
      name: "Savannah Nguyen",
      description: "President of Sales",
      reviewIcon: (
        <>
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStarHalfAlt className="text-yellow" />
        </>
      ),
      reviewtxt: "Reviews (05)",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="lg:pt-36 lg:pb-24 sm:py-24 xs:py-16 py-10">
      <div className="container">
        <div className="text-center sm:pb-14 xs:pb-10 pb-8">
          <Subtitle subtitle={"Clients Testimonial"} classname={"text-blue"} />
          <Heading
            heading={
              <>
                Delivering excellence one
                <br className="sm:block hidden"/> shipment at a time
              </>
            }
          />
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation
        >
          {clientreview.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-md border-[2px] border-[#e3e3e3] sm:flex items-center xs:p-10 p-5">
                <div className="sm:max-w-[220px] w-full">
                  <div className="relative block w-full max-w-[95px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover rounded-full"
                  />
                  <span className="absolute bg-white w-9 h-9 rounded-full flex items-center justify-center bottom-[-2px] right-[2px]"><FaQuoteRight className="text-blue"/></span>
                  </div>
                  <div className="pt-6">
                    <h3 className="mb-2 font-bold text-2xl">{item.name}</h3>
                    <p className="mb-0 text-[#616670] font-rubik">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:border-l  border-[#e3e3e3] sm:pl-10 pt-5">
                  <div className="font-rubik">
                    <div className="pb-5">
                      <span className="flex space-x-1 mb-[10px]">
                        {item.reviewIcon}
                      </span>
                      <p className="mb-2 text-[#616670]">{item.reviewtxt}</p>
                    </div>
                    <p className="text-[#616670]">{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Clientreview;
