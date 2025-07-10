import React from 'react'
import subsBanner from '../../assets/website/orange-pattern.jpg';

const subsMainContainer = {
  backgroundImage : `url(${subsBanner})`,
  backgroundPosition : "center",
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
  height: "100%",
  width: "100%"
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className='mb-20 ms-0 dark:bg-gray-800 text-white border-3'
      style={subsMainContainer}
    >
      {/* add container class here  */}
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 data-aos="fade-up" 
          className='text-2xl !text-center sm:text-left sm:text-4xl
          font-semibold' // * this is how you apply important property in tailwind

          >Get Notified about New Products</h1>
          <input type="text"
            data-aos="fade-up"
            placeholder='Enter your email'
            className='w-full p-3 outline-none bg-white caret-amber-600 placeholder:text-primary text-secondary text-[17px]' 
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe