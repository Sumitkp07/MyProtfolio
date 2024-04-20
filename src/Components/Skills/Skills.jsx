import React, { useEffect } from 'react';
import { SkillsData } from './SkillsData';
import Aos from "aos";
import 'aos/dist/aos.css';

export const Skills = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section >
      <div id="skill" className="wrapper h-[90vh]">
        <div className="skill-content">
        <h1 data-aos="fade-up" className="text-7xl font-extrabold uppercase text-[var(--headings)] border-b-2 pb-5 border-[var(--border)]">my skills</h1>
        .<div className="grid grid-cols-2 lg:gap-6 gap-3 lg:justify-between md:grid-cols-2 xl:grid-cols-4">
          {
            SkillsData.map((elem,index)=>{
              return <div key={index} data-aos="fade-up" className="w-full z-10 rounded-lg bg-zinc-900 p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_var(--skillshadow)]">
                <p className="skillpara text-white text-2xl">{elem.skill}</p>
                <p className="skillpara text-white text-sm">{elem.percentage}</p>
                <img className="hover:opacity-100 absolute right-[10%] h-16 top-[50%] translate-y-[-50%] opacity-70 transition hover:scale-110 duration-300" src={elem.image} alt=""/></div>
            })
          }
        </div>  
        </div>
      </div>
    </section>
  );
}

