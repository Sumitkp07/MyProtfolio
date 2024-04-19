import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const over = document.getElementById('myNav');
  window.onclick = function(event){
    if(event.target === over){
      setshowMenu(!showMenu);
    }
  }

  const listenToScroll = () => {
    var heightToHide = 600;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHide) {
      document.getElementById("navbar").classList.add("navbg");
    } else {
      document.getElementById("navbar").classList.remove("navbg");
    }
  };
  useEffect(() => {
    setshowMenu(showMenu);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [setshowMenu]);
  return (
    <>
      <div
        className="w-full fixed top-0 right-0 z-50"
      >
        <nav id="navbar" className="lg:px-[2vw] lg:py-[3vh]">
          <ul className="navlist flex gap-x-8 items-center justify-end">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="social"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="login"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {showMenu && (
          <div
            className="overlay h-[100%] backdrop-blur-[40px] w-full fixed z-10 top-0 right-[0%]"
            id="myNav"
          >
            <a
              href="javascript:void(0)"
              className="closebtn text-white absolute text-5xl top-10 left-10"
              id="xmark"
              onClick={() => {
                setshowMenu(!showMenu);
                document.getElementById('myNav').style.right="-100%"
              }}
            >
              &times;
            </a>
            <div
              className={
                "overlay-content relative top-[25%] w-[100%] text-center mt-[10px]"
              }
            >
              <Link
                to="#"
                className="text-2xl text-gray-300 block capitalize text-center mb-5"
              >
                About
              </Link>
              <Link
                to="skill"
                className="text-2xl text-gray-300 block capitalize text-center mb-5"
              >
                Skills
              </Link>
              <Link
                to="project"
                className="text-2xl text-gray-300 block capitalize text-center mb-5"
              >
                Projects
              </Link>
              <Link
                to="education"
                className="text-2xl text-gray-300 block capitalize text-center mb-5"
              >
                Education
              </Link>
              <Link
                to="social"
                className="text-2xl text-gray-300 block capitalize text-center mb-5"
              >
                Login
              </Link>
            </div>
          </div>
        )}
        <span
          className="menubar text-white text-xl fixed right-0 top-0 my-8 mr-3 bg-[var(--subheading)] py-3 px-4 rounded-full text-center"
          id="bar"
          onClick={() => {
            setshowMenu(!showMenu);
          }}
        >
          &#9776;
        </span>
      </div>
    </>
  );
};
