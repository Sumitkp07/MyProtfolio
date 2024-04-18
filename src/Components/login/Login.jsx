import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

export const Login = () => {
  return (
    <section>
      <div className="wrapper mb-[10%]">
        <div className="contact-us">
          <div className="form-conatiner p-[3px] w-full m-auto flex justify-between">
            <div className="left text-start py-[20vh] ">
              <h1 className="text-white text-5xl font-bold capitalize mb-9">
                contact me for <br />
                more info
              </h1>
              <div className="address mb-2 flex gap-x-3 justify-start items-center">
                <IoLocationOutline className="text-3xl text-extrabold text-[var(--PurpleText)]" />
                <span className="text-md font-normal text-white">
                  Hno.1186,Panipat,HR-132103
                </span>
              </div>
              <div className="mail mb-2 flex gap-x-3 justify-start">
                <CiPhone className="text-3xl text-extrabold text-[var(--PurpleText)]" />
                <span>
                  <a href="" className="text-md font-normal text-white">
                    +91 9050755520
                  </a>
                </span>
              </div>
              <div className="mail mb-2 flex gap-x-3 justify-start">
                <IoMailOutline className="text-3xl text-[var(--PurpleText)]" />
                <span>
                  <a href="" className="text-md font-normal text-white">
                    sumitkp333777@gmail.com
                  </a>
                </span>
              </div>
            </div>
            <div className="form-wrapper bg-[#fff] p-10 shadow-md shadow-white h-[75vh] w-[43%]">
              <form action="">
                <h1
                  id="from-heading"
                  className="text-black font-extrabold text-4xl mb-6"
                >
                  Get in Touch
                </h1>
                <div className="contact-form my-1" id="Name">
                  <i class="fa-solid fa-user  fa-sm"></i>
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="contact-form my-1" id="Email">
                  <i class="fa-solid fa-envelope fa-sm"></i>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="contact-form my-1" id="Message">
                  <i class="fa-solid fa-message fa-sm"></i>
                  <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Message.."
                  ></textarea>
                </div>
                <button className="sidebar-btn form-btn w-full rounded-[50px] py-2.5 text-white capitalize font-normal  hover:scale-[1.05] transition-all duration-75 ease-linear">
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
