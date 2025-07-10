import Navbar from "./components/Navbar"
import './App.css'
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import AOS from "aos"
import React from "react"
import TopProducts from "./components/TopProducts/TopProducts"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/Subscribe/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

function App() {

  // initialize aos
  React.useEffect(() => {
    AOS.init({
      offset : 100,
      /* 
        jaise tume scroll kroge niche to agar offset zero hoga toh voh turant hi
        load ho jayega which will not look good, so jaise hi ham vo particular element
        ke 100px y-axis pe pass krenge vaise hi vo div ka animation load hoga
      */ 
      
      duration : 800,
      once : true,
      /* 
        * mark once as false for infinite repititions
      */
      easing : "ease-in-sine",
      delay: 100,
    })
    /* 
      If your component updates dynamically (e.g., fetching data, conditional rendering, or lazy loading), new elements won’t have AOS animations applied automatically. Calling AOS.refresh() ensures that AOS detects and applies animations to newly added elements.
    */
    AOS.refresh();
  }, [])
  // & empty dependency array ensures that it must only run when component mounts(reloads)
  return (
    // comments
    <div className="bg-white dark:bg-gray-900
      dark:text-white duration-200
    ">
      <Navbar/>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App