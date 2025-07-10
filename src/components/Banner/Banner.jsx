import React from 'react'
import BannerImg from "../../assets/women/women4.jpg"
import { GrSecure } from 'react-icons/gr'

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12
    sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* Image section */}
          <div className=''>
            <img src={BannerImg} alt="women img" className='max-w-[400px] h-[350px] w-full
            mx-auto shadow-primary object-cover'/>
          </div>

          {/* text details section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold' >
              Winter Sale upto 50% Off
            </h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5 line-clamp-2 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iusto. Suscipit temporibus repellat eaque! Maiores quibusdam sunt voluptatum perspiciatis ex!
            </p>
            <div className='space-y-3'>
              <div data-aos="fade-up" data-aos-delay="0"
                className='flex items-center gap-4'
              >
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' /> {/* Lock icon */}
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200"
                className='flex items-center gap-4'
              >
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-rose-100 dark:bg-rose-400' /> {/* Lock icon */}
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300"
                className='flex items-center gap-4'
              >
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-amber-100 dark:bg-amber-400' /> {/* Lock icon */}
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="500" 
                className='flex items-center gap-4'
              >
                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-sky-100 dark:bg-sky-400' /> {/* Lock icon */}
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner