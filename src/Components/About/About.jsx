import React from "react";


export const About = () => {
  return (
    <>
      <section >
        <div id="about" className="wrapper h-[90vh] lg:mt-[23vh]">
          <div className="about-content w-[78%]">
          <h1 className="text-6xl font-extrabold uppercase text-[var(--headings)] mt-[11.5vh] mb-[4vh]">about myself</h1>
          <p className="text-[var(--heading)] text-lg mb-1">"live the life as you want"</p>
          <h1 className="text-[var(--PurpleText)] text-4xl font-bold capitalize">frontend devloper</h1>
          <h2 className="text-lg font-medium text-[var(--textclr)] mt-2.5 mb-1 tracking-wide underline">
            I DEVELOP USER INTERFACES,RESPONSIVE DESIGNS AND WEB APPLICATIONS
          </h2>
          <p className="text-[var(--textclr)] mb-8 w-[90%]">
            A passionate and hard-working frontend developer seeks a
            entry-level position with a reputed IT company to practice web
            development and set a new quality benchmark. Dependable candidate
            successful at managing multiple priorities with a positive attitude
            and Sound knowledge of developing creative users interfaces am currently learning Redux Toolkit to
            expand my expertise
          </p>
          <ul className="about-btn flex gap-x-4">
          <li><a href="./image/resume.pdf" download="resume">Check Resume <i className="fa-solid fa-arrow-right item-center"></i> </a></li>
          <li><a href="">workred on 10+ projects</a></li>
          </ul>
          </div>
        </div>
      </section>
    </>
  );
};
