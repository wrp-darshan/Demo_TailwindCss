import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper/modules";
import { LuShare2 } from "react-icons/lu";
import Subtitle from "../../Common/SubTitles/subtitle";
import Heading from "../../Common/Heading/heading";

function Teammembers() {
  const teamMembers = [
    {
      img: "/img/team-1.png",
      name: "Cameron Williamson",
      description: "Dog Trainer",
    },
    {
      img: "/img/team-2.png",
      name: "Cameron Williamson",
      description: "Dog Trainer",
    },
    {
      img: "/img/team-3.png",
      name: "Ronald Richards",
      description: "Nursing Assistant",
    },
    {
      img: "/img/team-4.png",
      name: "Albert Flores",
      description: "Marketing Coordinator",
    },
    {
        img: "/img/team-1.png",
        name: "Cameron Williamson",
        description: "Dog Trainer",
      },
      {
        img: "/img/team-2.png",
        name: "Cameron Williamson",
        description: "Dog Trainer",
      },
      {
        img: "/img/team-3.png",
        name: "Ronald Richards",
        description: "Nursing Assistant",
      },
      {
        img: "/img/team-4.png",
        name: "Albert Flores",
        description: "Marketing Coordinator",
      },
  ];
  return (
    <section className="lg:pt-[140px] lg:pb-[100px] sm:py-24 xs:py-16 py-10">
      <div className="container">
        <div className="text-center sm:pb-14 xs:pb-10 pb-8">
          <Subtitle subtitle={"our team members"} classname={"text-blue"} />
          <Heading
            heading={
              <>
                Your partner in seamless <br className="sm:block hidden"/>
                transportation
              </>
            }
          />
        </div>
      </div>
      <div className="max-w-[1760px] px-[15px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          speed={1500}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: { spaceBetween: 30, slidesPerView: 1 },
            575: { spaceBetween: 30, slidesPerView: 2 },
            992: { spaceBetween: 30, slidesPerView: 3 },
            1200: { spaceBetween: 40, slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center border-b-[3px] border-black hover:border-blue duration-300 md:mb-[100px] mb-[70px]">
                <div className="w-full">
                  <div className="bg-[#ff8b211a] overflow-hidden rounded-md relative">
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.description}`}
                      className="object-cover w-full  rounded-md"
                    />
                    <div className="text-blue text-2x absolute bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center top-[30px] left-[30px]"> <LuShare2 className="text-blue text-2xl" /></div>
                  </div>
                  <div className="pt-7 pb-5">
                    <h3 className="mb-3">
                      <a
                        href="#"
                        className="font-bold text-black hover:text-blue duration-300 text-2xl"
                      >
                        {member.name}
                      </a>
                    </h3>
                    <p className="text-[#616670] font-rubik leading-[30px]">
                      {member.description}
                    </p>
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

export default Teammembers;
