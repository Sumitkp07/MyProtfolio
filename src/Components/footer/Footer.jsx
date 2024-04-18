import React from 'react';

export const Footer = () => {
  return (
    <section>
      <div className="wrapper h-[40vh] ">
        <h1 className='text-gray-200 text-5xl font-extrabold capitalize text-center'>create your <span className='text-purple-400'>digital presence</span> with me</h1>
        <p className='mx-auto text-center mt-4  text-gray-500 w-[60%]'> "I'm hard worker as well as smart worker and I have the skills and potenial & looking for an opportunity where I can built myself as good devloper. "</p>
        <h1 className='text-center mt-7'>
          <button id='hire-btn' className=' capitalize text-[14px] text-gray-200 py-3 px-12 rounded-[25px] '>hire mE</button>
          </h1>
      </div>
         <footer>
          <div className="footer-content wrapper mx-auto w-[100vw] mb-5 flex justify-between border-t-2 border-[var(--headings)] py-6">
            <h5 className='text-white text-sm'>sumit<span className=' text-[var(--purpleBtn1)]'>Kumar</span> © 2024. All rights reserved.</h5>
            <ul className='flex gap-x-3'>
              <li><a href="#" className='text-white text-sm'>Terms & conditions</a></li>
              <li><a href="#" className='text-white text-sm'>Privacy Policy</a></li>
              <li><a href="#" className='text-white text-sm'>Cookies</a></li>
            </ul>
          </div>
          </footer> 
    </section>
  );
}

