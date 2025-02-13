import React from 'react'
import CusButton from '../../Common/CusButton/button'
import Subtitle from '../../Common/SubTitles/subtitle'

function Hero() {
  return (
    <section className='relative lg:bg-white bg-transparent md:pt-[168px] md:pb-[180px] sm:py-24 xs:py-16 py-10'>
        <div className='bg-[url("/public/img/banner-one-mian-img.png")]  absolute top-0 bottom-0 right-0 bg-cover bg-no-repeat z-10 banner-bg lg:w-auto w-full'>
        <div className="lg:relative absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
             <div className='relative z-20 container mx-auto text-white lg:text-black'>
                <div className='sm:pb-6 pb-4'>
                    <Subtitle subtitle={"Smart Solutions"} classname={"lg:text-blue"}/>
                </div>
                <div className='pb-3'>
                    <h1 className='text-[35px] xs:text-[40px] sm:text-[50px] md:text-[68px] leading-[1.1em] font-bold'>Streamlined<br/> transportation for<br/>  a better tomorrow</h1>
                </div>
                <div>
                    <p className='mb-0 font-rubik lg:text-[#616670] text-white'>We have been operating for over a decade, providing top-notch</p>
                </div>
                <div className='md:pt-9 pt-6'>
                    <CusButton text={"GET IN TOUCH"} className={"bg-yellow text-white border-none"}/>
                </div>
             </div>
    </section>
  )
}

export default Hero