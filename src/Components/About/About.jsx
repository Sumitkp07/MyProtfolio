import React from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export const About = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  },[])

  return (
    <>
      <section >
        <div  id="about" className="wrapper h-[90vh] mt-[23.5vh]">
          <div className="about-content w-[78%]">
          <h1  data-aos="zoom-in" className="text-6xl font-extrabold uppercase text-[var(--headings)] mt-[11.5vh]">about myself</h1>
          <p className="text-[var(--textclr)] text-lg mb-2 mt-1.5">"live the life as you want"</p>
          <h1  data-aos="zoom-in" className="title text-[var(--subheading)] text-4xl font-bold capitalize">frontend developer 🎃</h1>
          <h2  data-aos="zoom-in" className="text-lg font-semibold text-[var(--textclr)] mt-2.5 mb-1 tracking-wide underline">
            I DEVELOP USER INTERFACES, RESPONSIVE DESIGNS AND WEB APPLICATIONS
          </h2>
          <p  data-aos="zoom-in" className=" para text-[var(--paragraph)] font-medium text-[16px] mb-8 w-[90%]">
            A passionate and hard-working frontend developer seeks a
            entry-level position with a reputed IT company to practice web
            development and set a new quality benchmark. Dependable candidate
            successful at managing multiple priorities with a positive attitude
            and Sound knowledge of developing creative users interfaces and I'm currently learning Redux & Redux Toolkit to
            expand my expertise
          </p>
          <ul className="about-btn flex gap-x-4">
          <li ><a href="./image/resume.pdf" download="resume">Check Resume <i className="fa-solid fa-arrow-right item-center"></i> </a></li>
          <li ><Link to="project" spy={true} smooth={true}  offset={-100} duration={500}>workred on 10+ projects</Link></li>
          </ul>
          </div>
        </div>
      </section>
    </>
  );
};
