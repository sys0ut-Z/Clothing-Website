import React from 'react'
import img1 from '../../assets/hero/women.png'
import img2 from '../../assets/hero/sale.png'
import img3 from '../../assets/hero/shopping.png'
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Upto 50% off on all Men's Wear",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore iure cumque ipsa, nihil id corporis."
  },
  {
    id: 2,
    img: img2,
    title: "30% of on all Women's Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui magnam voluptatum, illum vero temporibus."
  },
  {
    id: 3,
    img: img3,
    title: "70% off on all Products Sale",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eos voluptatum quibusdam accusantium "
  }
]
const Hero = () => {

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease',
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    // * adjust height and width of the main div, child elements will automatically gets adjusted
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[630px] bg-gray-300 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
      {/* background square  */}
      <div className='h-[700px] w-[700px] bg-secondary/35 absolute -top-1/2 rounded-3xl rotate-45'>
      </div>

      {/* (hero section) text & image display section */}
      <div className='container absolute pb-8 sm:pb-0 flex justify-center items-center sm:w-full'>
        <Slider {...settings} className='p-1 h-[450px] w-[330px] sm:w-full'>
          {
            ImageList.map((imgdata) => (
              <div key={imgdata.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* text content section */}
                  <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0
                      text-center sm:text-left order-2 sm:order-1 relative z-10'> {/* relative z-10 added */}
                    <h1 
                      className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      {imgdata.title}
                    </h1>
                    <p 
                      className='text-sm'
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-once="true"
                      data-aos-delay="100"
                    >
                      {imgdata.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <button className='py-2 px-4 rounded-full cursor-pointer
                          bg-gradient-to-r from-secondary/60 to-tertiary
                          hover-105 duratino-200 text-white'>
                        Order now
                      </button>
                    </div>
                  </div>

                  {/* images section */}
                  {/* for any problems add relative z-10 to the below div and remove from the current div*/}
                  <div className='order-1 sm:order-2'>
                    <div 
                      className='relative z-10'
                      data-aos="zoom-in"
                      data-aos-once="true"                      
                    >
                      <img src={imgdata.img} alt="womenimg"
                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125
                          object-contain mx-auto'
                      // * object is used for foreground image, i.e. <img />
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Hero