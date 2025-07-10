import React from 'react'
import women1 from '../../assets/women/women.png'
import women2 from '../../assets/women/women2.jpg'
import women3 from '../../assets/women/women3.jpg'
import women4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa'

const productData = [
  {
    id: 1,
    img: women1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: women2,
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: women3,
    title: "Googles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: women4,
    title: "Printed T-shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: women1,
    title: "Fashion T-shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },

]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis!</p>
        </div>

        {/* Body Section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            place-items-center gap-5'>
            {/* Card Section */}
            {
              productData.map((product) => (
                // * space means space between each & every element
                <div className='space-y-2'
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={product.aosDelay}
                >
                  <img
                    src={product.img}
                    alt="women_img"
                    className='h-[220px] w-[150px] object-cover rounded-md'
                  />
                  <div>
                    <h3 className='font-semibold'>
                      {product.title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {product.color}
                    </p>
                    <div className='flex justify-start items-center gap-1'>
                      <FaStar className='text-yellow-300' />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* View All Button */}
          <div data-aos="fade-up" 
          data-aos-duration="1000"
          className='flex justify-center'>
            <button
              className='bg-secondary hover:scale-105 duration-300 text-white
                    py-2 px-10 rounded-full mt-10 group-hover:bg-white group-hover:text-primary hover:scale-[1.05] cursor-pointer'
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products