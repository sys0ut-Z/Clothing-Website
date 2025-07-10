import React from 'react'

import img1 from "../../assets/shirt/shirt.png";
import img2 from "../../assets/shirt/shirt2.png";
import img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa';

const productList = [
  {
    id: 1,
    img: img1,
    title : "Casual Wear",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id ratione ipsum iste magni rem?",
  },
  {
    id: 2,
    img: img2,
    title : "Printed shirt",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id ratione ipsum iste magni rem?",
  },
  {
    id: 3,
    img: img3,
    title : "Women Shirt",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id ratione ipsum iste magni rem?",
  },
]
const TopProducts = () => {
  return (
    <div>
      <div className='container'>
        {/* Headers section */}
        <div className='text-left mb-24 mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis!</p>
        </div>

        {/* body section */}
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-20 md:gap-5 place-items-center'
        >
          {
            productList.map((product) => (
              <div
                data-aos="zoom-in"
                className='rounded-2xl bg-white dark:bg-gray-800
                hover:bg-black/80 dark:hover:bg-secondary hover:text-white
                relative shadow-xl duration-500 group max-w-[300px]' // ! here flex is optional, you can remove flex, it's okay
                key={product.id}
              >

                {/* image section */}
                <div className='h-[100px]'>
                  {/* 
                    browser automatically calculates the equal width from both the sides,
                    auto centers the text/content inside it
                    but it must be a block element like div & flex elements
                  */}
                  <img src={product.img} alt=""
                    className='max-w-[140px] block mx-auto transform 
                    group-hover:scale-[1.05] duration-300
                    drop-shadow-primary -translate-y-20'
                  />
                </div>

                {/* details section */}
                <div className='p-4 text-center'>
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                  </div>
                  <h1 className='text-xl font-bold'>
                    {product.title}
                  </h1>
                  <p className='text-gray-500 group-hover:text-white duration-300
                    line-clamp-2'>
                    {/* line clamp will keep the description in 2 lines only regardless of its length */}
                    {product.description}
                  </p>
                  <button
                    className='bg-secondary hover:scale-105 duration-300 text-white
                    py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary hover:scale-[1.05] cursor-pointer'
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts