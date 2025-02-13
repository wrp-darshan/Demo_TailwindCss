import React from "react";
import Subtitle from "../../Common/SubTitles/subtitle";
import Heading from "../../Common/Heading/heading";
import CusButton from "../../Common/CusButton/button";
import Posttime from "../../Common/PostTime/posttime";
import { FaArrowRightLong } from "react-icons/fa6";

function Newsandblog() {
  
  
  const blogposts = [
    {
      img: '/img/blog-one-sidebar-box-1.png',
      title: 'upgrade or downgrade my broadband plan',
      btn: 'Read more',
    },
    {
      img: '/img/blog-one-sidebar-box-2.png',
      title: 'Logistics management and coordination',
      btn: 'Read more',
    },
    {
      img: '/img/blog-one-sidebar-box-3.png',
      title: 'Logistics involves the management',
      btn: 'Read more',
    },
  ]

  return (
    <section className="lg:py-[140px] sm:py-24 xs:py-16 py-10">
      <div className="container">
        <div className="text-center sm:pb-14 xs:pb-10 pb-8">
          <Subtitle subtitle={"Blog and news"} classname={"text-blue"} />
          <Heading
            heading={
              <>
                Unlocking the potential
                <br className="sm:block hidden" /> of logistics
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:max-w-full lg:max-w-[770px] mx-auto">
          <div>
            <img
              src="./img/blog-one.png"
              alt="Blog post"
              className="rounded-md w-full"
            />
            <Posttime className={'mt-6 sm:space-x-8 sm:flex-row flex-col sm:space-y-0 space-y-2'}/>
            <div className="sm:pt-2 pt-4">
              <h3 className="xs:text-[32px] text-2xl capitalize mb-5 leading-[1.2em] font-bold">there any usage restrictions or fair usage</h3>
              <p className="text-[#616670] font-rubik">It is a long established fact that a reader williljl being li distracted by the readable lil content of amjlk page ghjkl when looking at its layout. hjkafkab bhjagbuiasgb hjkhkl bkbfkjb nkjnaskfn kjbnksbf nklanfkn.</p>
            </div>
            <div className="pt-[50px]">
              <CusButton className={"text-black border border-blue rounded-md"} text={"Read More"}/>
            </div>
          </div>
          <div className="xl:pl-12">
          {blogposts.map ((post, index) => (
            <div key={index} className="border-b-[1px] border-blue last:border-none flex sm:flex-row flex-col pb-[30px] last:pb-0 mb-8 last:mb-0">
              <img
                src={post.img}
                alt={post.title}
                className="rounded-md sm:w-auto w-full"
              />
              <div className="sm:pl-8 sm:pt-0 pt-3">
              <Posttime hideauthor={true} className={'xs:flex-row flex-col xs:space-y-0 space-y-2 sm:space-x-8 xs:space-x-4'}/>
              <h3 className="xs:text-[32px] text-2xl capitalize mb-5 leading-[1.2em] font-bold pt-3">{post.title}</h3>
              <button className="flex items-center tracking-[1.28px] uppercase font-bold hover:text-blue duration-300">{post.btn}<FaArrowRightLong className="ml-[10px] w-5 h-5" /></button>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsandblog;
