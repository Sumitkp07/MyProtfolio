import React, { useEffect , useState} from 'react';
import { ProjectData } from './ProjectData';
import Aos from "aos";
import 'aos/dist/aos.css';


export const Projects = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);


  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    });
  })
  const modalFunc = (contents)=>{
    setModalContent([contents]);
    setShowModal(true)
  }


  return (
    <section >
      <div id="project" className="wrapper min-h-[100vh]">
      <h1 data-aos="fade-up" className="text-7xl font-extrabold uppercase text-[var(--headings)] border-b-2 pb-5 border-[var(--border)]">check out <br /> my projects work</h1>
      <div className="project-cards grid lg:grid-cols-3 lg:gap-6 gap-8 md:grid-cols-2 mt-[10vh]">
        {
          ProjectData.map((elem, index)=>{
         return <div key={index} data-aos="zoom-in" className="card bg-[var(--cardbg)] h-full w-full rounded-[20px] p-5 duration-200 hover:-translate-y-2 z-10">
          <div className="img h-44 w-full overflow-hidden rounded-lg">
          <img 
          src={elem.img} 
          alt="project-img" 
          className='h-full w-full hover:scale-[1.03] transition-all duration-200 ease-linear bg-cover bg-center'
          />
          </div>
          <div className="card-content  ">
            <h1 className="mt-4 text-xl font-bold bg-purple-200 w-fit px-3 py-1 rounded-xl text-gray-800" >{elem.projectName}</h1>
            <div className="capsule flex items-center justify-start gap-x-3 mt-4 flex-wrap py-2">
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang1}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang2}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang3}</h5>
              <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-100 px-2 py-0.5 my-1 text-xs text-purple-600">{elem.lang4}</h5>
            </div>
            <h4 id='details-btn'
            onClick={(e)=>{
              e.preventDefault();
              modalFunc(elem)}} 
             className='px-8 py-2 rounded-[8px] border-0 border-gray-300 bg-[var(--cardbtn)]  capitalize text-center my-6'><a 
            href="" className='text-white font-medium'>details</a></h4> 
          </div>
        </div>

          })
        }
      </div>
      </div>
      {/* ======================================================== */}
     {showModal && <div className="project-overlay bg-black flex justify-center items-center w-[100%] h-[100%] fixed top-0 right-0 z-50">

          <div className="content-box w-[70vw] h-[300px] overflow-hidden bg-neutral-100 rounded-xl flex justify-between items-center px-5 relative shadow-2xl shadow-zinc-500">
              <div className="img h-[250px] w-[350px]">
                  <img 
                  className='w-full h-full bg-cover bg-center'
                  src="./image/project1.png"
                  alt="" />
                  </div>
              <div className="projectoverlay-content w-[60%] h-[280px]">
                  <h1 className="mt-4 text-xl font-bold bg-purple-300 w-fit px-3 py-1 rounded-xl text-gray-800 capitalize mb-2">project1</h1>
                  <p className='text-md mb-5'>It is basically a gym website in which i have used, JSX, React-concepts like Hooks for state management ,Aos animation with Useeffect hook, conditional rendering, using libraries like react-slick-slider.js and React-Icons.</p>
                  <div className="capsules flex mb-8 gap-x-5">
                  <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-sm text-black"> Reactjs</h5>
                  <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-sm text-black"> JSX</h5>
                  <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-sm text-black"> Tailwindcss</h5>
                  <h5 className="whitespace-nowrap rounded-full h-fit bg-purple-200 px-2 py-0.5 my-1 text-sm text-black">Javascript</h5>
                  </div>
                  <div className="projectoverlay-btn flex gap-4">
                      <div className="livebtn"><a href="" className='bg-zinc-900 text-[var(--textclr)] 
                      px-8 py-3 text-sm rounded-md hover:bg-violet-500 transition-all duration-300'>Live Link</a></div>
                      <div className="guthubbtn"><a href="" className='bg-zinc-900 text-[var(--textclr)] 
                      px-8 py-3 text-sm rounded-md hover:bg-violet-500 transition-all duration-300'>Github</a></div>
                  </div>
              </div>
          <span 
          onClick={()=>{
            setShowModal(false)
          }} 
          className='text-white text-sm absolute top-2 right-4 bg-black px-3 py-2 rounded-[50%] cursor-pointer'> <i class="fa-solid fa-xmark"></i></span>
          </div>
        </div>}

      {/* ======================================================== */}


      
    </section>
  );
}

