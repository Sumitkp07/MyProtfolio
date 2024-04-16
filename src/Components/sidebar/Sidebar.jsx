import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";


export const Sidebar = () => {
  return (
    <>
      <section className="h-[100vh] w-[28%] fixed border-r-4 border-[#D8B4FE]">
        <div className="content mx-auto my-7 w-[85%] h-[95%]">
          <h1 className="text-[#ffffff] font-sans text-4xl uppercase font-extrabold tracking-[2px] mb-2">
            sumit kumar
          </h1>
          <div className="div card w-[100%] h-[40%] ">
            <img
              src="./image/cover.jpg"
              alt="img"
              className="w-full h-full object-cover bg-center rounded-lg"
            />
            <h4 className="w-full text-xs font-bold text-white my-4 tracking-wide">
              I DEVELOP USER INTERFACES,RESPONSIVE DESIGNS AND WEB RESPONSIVE APPLICATIONS
            </h4>
            <button className="sidebar-btn w-full rounded-[50px] py-2.5 text-white capitalize font-normal">
              let's work together!
            </button>
            <div className="address my-3 flex gap-x-3 justify-center items-center">
              <IoLocation className="text-3xl text-white" />{" "}
              <span className="text-sm font-medium text-white">
                Hno.1186,Panipat,HR-132103
              </span>
            </div>
            <div className="mail flex gap-x-3 justify-center">
              <IoIosMail className="text-3xl text-white" />
              <span>
                <a href="" className="text-sm font-medium text-white">
                  sumitkp333777@gmail.com
                </a>
              </span>
            </div>
            <div className="social-icons flex gap-x-3 justify-center mt-9">
                <a href="" className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"><i class="fa-brands fa-instagram text-white "></i></a>
                <a href="" className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"><i class="fa-brands fa-x-twitter text-white"></i></a>
                <a href="" className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"><i class="fa-brands fa-linkedin-in text-white"></i></a>
                <a href=""  className="icons py-4 px-4 flex justify-center items-center rounded-[50%]"><i class="fa-brands fa-whatsapp text-white"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
