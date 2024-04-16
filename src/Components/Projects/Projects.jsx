import React from 'react';
import { ProjectData } from './ProjectData';


export const Projects = () => {
  return (
    <section>
      <div className="wrapper h-[90vh] bg-red
      -500">
      <h1 className="text-7xl font-extrabold uppercase text-[var(--headings)] border-b-2 pb-5 border-[var(--capsule)]">check out <br /> my projects work</h1>
      <div className="project-cards grid lg:grid-cols-3 lg:gap-6 gap-3 md:grid-cols-2 mt-7 ">
        {
          ProjectData.map((elem, index)=>{
         return <div key={index} className="card bg-white h-full w-full rounded-[20px] p-5 duration-200 hover:-translate-y-2 z-10">
          <img 
          src={elem.img} 
          alt="project-img" 
          className='h-44 w-full'
          />
          <div className="card-content  ">
            <h1 className="mt-4 text-xl font-bold bg-purple-200 w-fit px-3 py-1 rounded-xl text-gray-800" >{elem.projectName}</h1>
            <div className="capsule flex items-center justify-start gap-x-3 mt-4 flex-wrap py-2">
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang1}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang2}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang3}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang4}</h5>
            </div>
            <h4 id='details-btn' className='px-8 py-2 rounded-[8px] border-2 border-black bg-zinc-950  capitalize text-center my-6'><a href="" className='text-white font-medium'>details</a></h4>
          </div>
        </div>
          })
        }
      </div>
      </div>
    </section>
  );
}

