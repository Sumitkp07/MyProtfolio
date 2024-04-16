import React from 'react';
import { SkillsData } from './SkillsData';

export const Skills = () => {
  return (
    <section>
      <div className="wrapper h-[90vh]">
        <div className="skill-content">
        <h1 className="text-7xl font-extrabold uppercase text-[var(--headings)] border-b-2 pb-5 border-[var(--capsule)]">my skills</h1>
        .<div className="grid grid-cols-2 lg:gap-6 gap-3 justify-between md:grid-cols-2 xl:grid-cols-4">
          {
            SkillsData.map((elem,index)=>{
              return <div id={index} className="w-full z-10 rounded-lg bg-zinc-900 p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_#E99CFF]">
                <p className="text-white text-2xl">{elem.skill}</p>
                <p className="text-white text-sm">{elem.percentage}</p>
                <img className="group-hover:opacity-100 absolute right-[10%] h-16 top-[50%] translate-y-[-50%] opacity-70 transition group-hover:scale-110 duration-300" src={elem.image} alt=""/></div>
            })
          }
        </div>  
        </div>
      </div>
    </section>
  );
}

