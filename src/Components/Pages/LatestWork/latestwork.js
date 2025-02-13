import React from "react";
import Subtitle from "../../Common/SubTitles/subtitle";
import Heading from "../../Common/Heading/heading";
import { FaArrowRightLong } from "react-icons/fa6";

function Latestwork() {
  const workinfo = [
    {
      img: "/img/work1.jpg",
      title: "Express Logix",
      text: "Lorem Ipsum is dummy text of the printing Ipsum is simple",
      link: "Read more",
    },
    {
      img: "/img/work2.jpg",
      title: "Prime Cargo",
      text: "Lorem Ipsum is dummy text of the printing Ipsum is simple",
      link: "Read more",
    },
    {
      img: "/img/work3.jpg",
      title: "Speedy Transit",
      text: "Lorem Ipsum is dummy text of the printing Ipsum is simple",
      link: "Read more",
    },
    {
      img: "/img/work4.jpg",
      title: "Prime Cargo",
      text: "Lorem Ipsum is dummy text of the printing Ipsum is simple",
      link: "Read more",
    },
  ];

  return (
    <section className="lg:pt-36 lg:pb-24 sm:py-24 xs:py-16 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-1 md:text-start text-center">
            <Subtitle classname="text-blue" subtitle="Our Latest Work" />
            <Heading heading="Efficient solutions logistics needs" classname={"pb-5"}/>
            <p className="text-gray-600 font-rubik">
              It is a long established fact that a reader will be distracted by
              the content of a page when looking at its layout. Lorem Ipsum is
              simply dummy text of the printing.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {workinfo.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border-b-[3px] border-black hover:border-blue duration-300">
                <img src={item.img} alt={item.title} className="w-full sm:h-[300PX] h-auto object-cover" />
                <div className="xs:pt-6 xs:px-16 xs:pb-8 p-5 text-center">
                  <h3 className="text-2xl font-bold text-black pb-3">{item.title}</h3>
                  <p className="text-[#616670] leading-7 font-rubik  mb-0">{item.text}</p>
                  <a href={item.link} className="pt-6 uppercase flex justify-center items-center font-bold tracking-[1.28px] hover:text-blue duration-300">
                    {item.link}<FaArrowRightLong className="text-blue ml-2"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latestwork;
