import React from 'react'
import LightModeImg from '../assets/website/light-mode-button.png'
import DarkModeImg from '../assets/website/dark-mode-button.png'
import { useState } from 'react'

const Darkmode = () => {
  const [theme, setTheme] = useState(
    (localStorage.getItem("theme") === "light" 
    && localStorage.getItem("theme") != null) ? "light" : "dark"
  );

  // print both theme and element
  const element = document.documentElement;
  // * documentElement is  <html>
  console.log("theme : ", theme);
  console.log("element : ", element);

  React.useEffect(() => {
    if(theme === "dark"){ // add dark class
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else{
      element.classList.remove("dark"); // remove dark class
      // element.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  return (
    <div className='relative'>
      <img src={LightModeImg} alt="mode-change-logo"
        className={`cursor-pointer drop-shadow-[1px_1px_5px_rgba(0, 0, 0, 0.6)]
        transition-all duration-300
        absolute right-0 z-10 ${theme === "dark" ? "dark" : "light"}`} // ?  "opacity-0"  "opacity-100"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
        
      <img src={DarkModeImg} alt="mode-change-logo"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_5px_rgba(0, 0, 0, 0.6)]
        transition-all duration-300 ${theme === "dark" ? "dark" : "light"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  )
}

export default Darkmode