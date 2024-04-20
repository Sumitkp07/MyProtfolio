import React from 'react';

export const Modal = (props) => {
    console.log(props.elem)
  return (
    <>
      <div className="project-overlay backdrop-blur-[25px] flex justify-center items-center w-[100%] h-[100%] fixed top-0 right-0 z-50">
        <div className="content-box w-[60vw] h-[400px] overflow-hidden bg-neutral-100 rounded-xl flex justify-between items-center px-5 relative">
            <div className="img h-[350px] w-[450px]">
                <img 
                className='w-full h-full bg-cover bg-center'
                src="./image/project1.png" 
                alt="" />
                </div>
            <div className="projectoverlay-content w-[60%] h-[350px]">
                <h1 className="mt-4 text-3xl font-bold bg-purple-300 w-fit px-3 py-1 rounded-xl text-gray-800 capitalize mb-5">{}</h1>
                <p className='text-2xl mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, culpa officia, vel eius sed porro possimus, ipsam error itaque similique illum assumenda id odit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <div className="capsules flex mb-8 gap-x-5">
                <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-2xl text-black"> Reactjs</h5>
                <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-2xl text-black"> JSX</h5>
                <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-2xl text-black"> Tailwindcss</h5>
                <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-2xl text-black">Javascript</h5>
                </div>
                <div className="projectoverlay-btn flex gap-4">
                    <div className="livebtn"><a href="" className='bg-zinc-900 text-[var(--textclr)] 
                    px-10 py-4 rounded-md hover:bg-violet-500 transition-all duration-300'>Live Link</a></div>
                    <div className="guthubbtn"><a href="" className='bg-zinc-900 text-[var(--textclr)] 
                    px-10 py-4 rounded-md hover:bg-violet-500 transition-all duration-300'>Github</a></div>
                </div>
            </div>
        <span className='text-white text-5xl absolute top-2 right-4 bg-black px-3 py-2 rounded-[50%] cursor-pointer'> <i class="fa-solid fa-xmark"></i></span>
            
        </div>
      </div>
    </>
  );
}
