import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [showMenu, setshowMenu] = useState(false)
  useEffect(()=>{
    setshowMenu(showMenu)
  },[setshowMenu])
  return (
    <>
    <div className="wrapper lg:mt-[5vh] fixed top-0 right-0 mx-9 z-50">
    <nav>
      <ul className='navlist flex gap-x-8 items-center justify-end lg:bg-none'>
        <li>
        <Link to="about" spy={true} smooth={true}  offset={-100} duration={500}>About</Link>
        </li>
        <li>
        <Link to="skill" spy={true}  smooth={true} offset={-100} duration={500}>Skills</Link>
        </li>
        <li>
        <Link to="project" spy={true}  smooth={true} offset={-100} duration={500}>Projects</Link>
        </li>
        <li>
        <Link to="social" spy={true}  smooth={true} offset={-100} duration={500}>Education</Link>
        </li>
        <li>
        <Link to="login" spy={true}  smooth={true} offset={-100} duration={500}>Login</Link>
        </li>
      </ul>
    </nav>

    {
      showMenu &&
    <div className="overlay h-[100%] bg-black w-full fixed z-10 top-0 right-0" id="myNav">
      <a href="javascript:void(0)" className="closebtn text-white absolute text-5xl top-10 left-10" id="xmark"
      onClick={()=>{
        setshowMenu(!showMenu)
      }}>
        &times;</a>
      <div className={"overlay-content relative top-[25%] w-[100%] text-center mt-[10px]"}>
        <a href="#" className='text-2xl text-gray-300 block capitalize text-center mb-5'>About</a>
        <a href="#" className='text-2xl text-gray-300 block capitalize text-center mb-5'>Skills</a>
        <a href="#" className='text-2xl text-gray-300 block capitalize text-center mb-5'>Projects</a>
        <a href="#" className='text-2xl text-gray-300 block capitalize text-center mb-5'>Education</a>
        <a href="#" className='text-2xl text-gray-300 block capitalize text-center mb-5'>Login</a>
      </div>
    </div>
    }
    <span className="menubar text-white  text-xl fixed right-0 top-0 my-8 mr-3 bg-[var(--purpleBtn1)] py-3 px-4 rounded-full text-center" id="bar" 
    onClick={()=>{
      setshowMenu(!showMenu)
    }}>
      &#9776;</span>
    </div>
    </>
  );
}
