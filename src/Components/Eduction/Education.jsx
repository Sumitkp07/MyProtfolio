import React from 'react';
import { sociaData } from './sociaData';


export const Education = () => {
  return (
    <section>
      {/* <div className="wrapper h-[90vh] "> </div> */}
        <div className="wrapper socials my-[15vh]">
        <h1 className="text-5xl font-extrabold uppercase text-[var(--headings)] pb-5 ">social links</h1>
        <div  class="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {
          sociaData.map((elem ,index)=>{
            return <a  href={elem.link} key={index} className="border p-4 rounded-md relative cursor-pointer social-cont overflow-hidden">
              <div className='social-bg'></div>
              <img src= {elem.socialbg}
              className="social-rotate absolute z-10 -top-12 h-44 opacity-50 -right-12 text-9xl text-slate-100 group-hover:text-violet-400  transition-transform duration-300"
              alt="" />
              <img src={elem.socialimg}
              className="mb-2 h-12 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300"
              alt="" />
              <h3 class="font-medium text-lg text-slate-100 group-hover:text-white relative z-10 duration-300">{elem.socialname}</h3>
            </a>
          })
        }
        </div>
        </div>
  
    </section>
  );
}

