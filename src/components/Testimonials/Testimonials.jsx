import React from 'react'
import Slider from 'react-slick';

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  /* 
    * responsive explanation
    The responsive array customizes the slider's behavior based on screen width (breakpoints).

    breakpoint: 10000 (Any screen width below 10000px)

    slidesToShow: 3 → Displays 3 slides at a time.
    slidesToScroll: 1 → Moves 1 slide at a time.
    infinite: true → Ensures infinite looping.
    breakpoint: 1024 (For screens below 1024px)

    slidesToShow: 2 → Shows 2 slides at a time.
    slidesToScroll: 1 → Moves 1 slide per scroll.
    initialSlide: 2 → Starts displaying from the third slide initially.
    breakpoint: 640 (For screens below 640px)

    slidesToShow: 1 → Displays only 1 slide at a time.
    slidesToScroll: 1 → Moves 1 slide per scroll.
  */

    
  return (
    <div className='py-10 w-[100%]'>
      <div className='container w-full'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis!</p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          {/* TIP : never write div just after the slider if you're using map 
            REMEMBER : new give a width to the parent div of slider for mobiles, it will automatically adjust it*/}
          <Slider {...settings} className='p-1 sm:w-full'>
            {
              testimonialData.map((review) => ((
                <div className='p-3'> {/* give padding for box shadow */}
                  <div key={review.id} 
                  className='flex flex-col gap-4 shadow-primary py-8 px-6 mx-4 rounded-xl bg-secondary/10 relative'>
                              {/* 
                                  1.  NEW LEARNING : margin will not work if there is not parent div
                                      just remove the upper div and check, mx-4 will stop working 
                                  2.  Afterall each review box is a part of every slider OR sub-slider so margin WILL be applied
                                      individually on every div
                               */}                
                    <div className='mb-4'>
                      <img src={review.img}
                        alt="review_img"
                        className='rounded-full w-20 h-20'
                      />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                      <div className="space-y-2">
                        <p className='text-xs text-gray-400 dark:text-primary'>{review.text}</p>
                        <h1 className='text-xl font-bold text-black/80 dark:text-white'>{review.name}</h1>
                      </div>
                    </div>

                    {/* quotes */}
                    <p className='text-black/20 absolute text-9xl font-[Times_New_Roman] top-[35%] right-0 dark:text-gray-200'>
                      ''
                    </p>
                  </div>
                </div>
              )))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials