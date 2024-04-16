import React from 'react';

export const Navbar = () => {
  return (
    <>
    <div className="wrapper mt-[5vh] mx-9">
    <nav>
      <ul className='navlist flex gap-x-8 items-center justify-end'>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Education</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
    </div>
    </>
  );
}

