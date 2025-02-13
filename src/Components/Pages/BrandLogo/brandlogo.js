import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Brandlogo() {
  const logos = [
    {
      img: "/img/brand-v1.png",
    },
    {
      img: "/img/brand-v2.png",
    },
    {
      img: "/img/brand-v3.png",
    },
    {
      img: "/img/brand-v4.png",
    },
    {
      img: "/img/brand-v5.png",
    },
    {
        img: "/img/brand-v1.png",
      },
      {
        img: "/img/brand-v2.png",
      },
  ];

  return (
    <div className="mx-[15px] sm:pb-20 xs:pb-16 pb-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: { spaceBetween: 30, slidesPerView: 1 },
          425: { spaceBetween: 30, slidesPerView: 2 },
          768: { spaceBetween: 30, slidesPerView: 4 },
          992: { spaceBetween: 30, slidesPerView: 5 },
          1200: { spaceBetween: 30, slidesPerView: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <a
              href="#"
              className="w-[180px] h-[70px] flex items-center justify-center mx-auto opacity-50 hover:opacity-100 duration-300"
            >
              <img src={logo.img} alt={`Brand ${index + 1}`} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Brandlogo;
