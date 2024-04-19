import React, { useEffect } from 'react';
import { sociaData } from './sociaData';
import Aos from "aos";
import 'aos/dist/aos.css';

export const Education = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  },[])

  return (
    <section >
        <div id="social" className="wrapper socials my-[15vh]">
        <h1 data-aos="fade-up" className="text-5xl font-extrabold uppercase text-[var(--headings)] pb-5 border-b-2 border-[var(--border)]">social links</h1>
        <div id='social-content' className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {
          sociaData.map((elem ,index)=>{
            return <a data-aos="zoom-in" href={elem.link} key={index} className="p-4 rounded-md relative cursor-pointer social-cont overflow-hidden border-2 border-[var(--textclr)] bg-[var(--socialbg)] ">
              <div className='social-bg'></div>
              <img src= {elem.socialbg}
              className="social-rotate absolute z-10 -top-12 h-44 opacity-50 -right-12 text-9xl text-white group-hover:text-violet-400  transition-transform duration-300"
              alt="" />
              <img src={elem.socialimg}
              className="mb-2 h-12 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300"
              alt="" />
              <h3 class="font-medium text-lg text-white group-hover:text-white relative z-10 duration-300">{elem.socialname}</h3>
            </a>
          })
        }
        </div>
        </div>
  
    </section>
  );
}

