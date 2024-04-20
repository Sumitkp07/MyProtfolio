import React, { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import Aos from "aos";
import 'aos/dist/aos.css';

export const Footer = () => {

  const [isShow, setIsShow] = useState(false)
  const moveTop = () =>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  }
  const listenToScroll = () => {
    var heightToHide = 600;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop ;

    if(windowScroll > heightToHide){
      setIsShow(true);
    }else{
      setIsShow(false)
    }
  }

  useEffect(()=>{
    Aos.init({
      offset: 50,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    window.addEventListener("scroll",listenToScroll)
    return () => window.removeEventListener('scroll',listenToScroll)
  })

  return (
    <section>
      <div id="footer" className="wrapper h-[40vh] ">
        <h1  data-aos="fade-up" className="text-[var(--textclr)] text-5xl font-extrabold capitalize text-center">
          create your <span className="text-purple-400">digital presence</span>{" "}
          with me
        </h1>
        <p data-aos="fade-up" className="mx-auto text-center mt-4  text-[var(--paragraph)] w-[60%]">
          {" "}
          "I'm hard worker as well as smart worker and I have the skills and
          potenial & looking for an opportunity where I can built myself as good
          devloper. "
        </p>
        <h1 className="text-center mt-7">
          <button
            id="hire-btn"
            className=" capitalize text-[14px] text-gray-200 py-3 px-12 rounded-[25px] "
          >
            hire me
          </button>
        </h1>
      </div>
      <footer>
        <div className="footer-content wrapper mx-auto w-[100vw] mb-10 flex justify-between border-t-2 border-[var(--border)] py-6">
          <h5 className="text-[var(--textclr)] text-sm font-medium">
            sumit<span className=" text-[var(--headings)]">Kumar</span> ©
            2024. All rights reserved.
          </h5>
          <ul className="flex gap-x-3"> 
            <li>
              <a href="#" className="text-[var(--textclr)] font-medium text-sm">
                Terms & conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-[var(--textclr)] font-medium text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[var(--textclr)] font-medium text-sm">
                Cookies
              </a>
            </li>
          </ul>
        </div>
        {
          isShow && 
        (<h4 className=" bg-violet-800 cursor-pointer z-50 text-4xl fixed right-[2%] bottom-[2%] rounded-full">
          <BiUpArrowAlt
            onClick={moveTop}
            className="topArrow text-white"
          />
        </h4>)}
      </footer>
    </section>
  );
};
