import React, { useEffect } from 'react';
import { ProjectData } from './ProjectData';
import Aos from "aos";
import 'aos/dist/aos.css';


export const Projects = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    });
  })
  return (
    <section >
      <div id="project" className="wrapper min-h-[100vh]">
      <h1 data-aos="fade-up" className="text-7xl font-extrabold uppercase text-[var(--headings)] border-b-2 pb-5 border-[var(--border)]">check out <br /> my projects work</h1>
      <div className="project-cards grid lg:grid-cols-3 lg:gap-6 gap-8 md:grid-cols-2 mt-[10vh]">
        {
          ProjectData.map((elem, index)=>{
         return <div key={index} data-aos="zoom-in" className="card bg-[var(--cardbg)] h-full w-full rounded-[20px] p-5 duration-200 hover:-translate-y-2 z-10">
          <div className="img h-44 h-[250px] w-full overflow-hidden rounded-lg">
          <img 
          src={elem.img} 
          alt="project-img" 
          className='h-full w-full hover:scale-[1.03] transition-all duration-200 ease-linear bg-cover bg-center'
          />
          </div>
          <div className="card-content  ">
            <h1 className="mt-4 text-xl font-bold bg-purple-200 w-fit px-3 py-1 rounded-xl text-gray-800" >{elem.projectName}</h1>
            <div className="capsule flex items-center justify-start gap-x-3 mt-4 flex-wrap py-2">
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang1}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang2}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang3}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang4}</h5>
            </div>
            <h4 id='details-btn'
            onClick={()=>{
              alert('still working on it...')
            }} 
             className='px-8 py-2 rounded-[8px] border-0 border-gray-300 bg-[var(--cardbtn)]  capitalize text-center my-6'><a 
            href="" className='text-white font-medium'>details</a></h4> 
          </div>
        </div>
          })
        }
      </div>
      </div>
    </section>
  );
}

