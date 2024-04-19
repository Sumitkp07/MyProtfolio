import React, { useEffect } from "react";
import { useState } from 'react';
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


export const Sidebar = () => {

  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
   
  const darkmode = () =>{
    setIsDark(!isDark)
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme")
    }
  }
  useEffect(()=>{
    document.body.className=theme;
  },[theme])

  return (
    <>
      <section id="slidebar" className="h-[100vh] lg:w-[28%] xl:fixed border-r-4 border-[#D8B4FE]">
        <div className="content mx-auto my-7 w-[85%] h-[95%]">
          <div className="divcard w-[100%] h-[40%]">
          <h1 className="text-[var(--textclr)] font-sans uppercase font-extrabold tracking-[2px] mb-2 md:mx-auto md:text-center text-4xl">
            sumit kumar
          </h1>
            <img
              src="./image/cover.jpg"
              alt="img"
              className=" object-cover bg-center rounded-lg mx-auto"
            />
            <h4 className="w-full lg:text-xs font-bold text-[var(--textclr)] my-4 lg:tracking-wide md:text-sm">
              I DEVELOP USER INTERFACES,RESPONSIVE DESIGNS AND WEB APPLICATIONS.
            </h4>
            <button className="sidebar-btn w-full rounded-[50px] py-2.5 text-[#fff] capitalize font-normal">
              let's work together!
            </button>
            <div className="address my-3 flex gap-x-3 justify-center items-center">
              <IoLocation className="text-3xl text-[var(--svgcolor)]" />{" "}
              <span className="text-sm font-medium text-[var(--textclr)]">
                Hno.1186,Panipat,HR-132103
              </span>
            </div>
            <div className="mail flex gap-x-3 justify-center">
              <IoIosMail className="text-3xl text-[var(--svgcolor)]" />
              <span>
                <a href="" className="text-sm font-medium text-[var(--textclr)]">
                  sumitkp333777@gmail.com
                </a>
              </span>
            </div>
            <div className="social-icons flex gap-x-3 justify-center mt-9">
              <a
                href="https://www.instagram.com/sumit_kashyap_067?igsh=c3MzZXozaDcwdmZi"
                className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"
              >
                <i class="fa-brands fa-instagram text-[#fff] "></i>
              </a>
              <a
                href="https://twitter.com/sumit_kp81600"
                className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"
              >
                <i class="fa-brands fa-x-twitter text-[#fff]"></i>
              </a>
              <a
                href="www.linkedin.com/in/sumit-kumar-110386220"
                className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"
              >
                <i class="fa-brands fa-linkedin-in text-[#fff]"></i>
              </a>
              <a
                href="https://wa.me/919050755520"
                className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"
              >
                <i class="fa-brands fa-whatsapp text-[#fff]"></i>
              </a>
            </div>
          </div>
        </div>
        <h4 >{
            isDark ? <MdDarkMode
            onClick={darkmode} 
          className='mode bg-violet-800 text-black cursor-pointer z-50 text-4xl fixed left-[2%] bottom-[2%] rounded-full' /> : 
          <MdLightMode
          
            onClick={darkmode} 
          className='mode bg-violet-800 text-[var(--textclr)] cursor-pointer z-50 text-4xl fixed left-[2%] bottom-[2%] rounded-full' />
}</h4>      </section>
    </>
  );
};
