
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-scroll";

import { RxSlash } from "react-icons/rx";

export const Navbar = () => {

    const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-center  p-2 relative z-10">
        <div className=" w-11/12 md:w-10/12 flex justify-between mt-2 ">
        <div className="text-purple-900  flex text-xl md:text-2xl mt-2 font-bold">
            <span className="pt-1 font-bold" ><SlArrowLeft /></span> <span className="text-white text-xl" >Manish</span> <span className="font-bold pt-1" ><RxSlash /></span> <span className="text-white text-xl">Sahu</span> <span className="font-bold pt-1" ><SlArrowRight /></span>
        </div>

        <div onClick={()=>{
            setOpen(!open)
        }} className="cursor-pointer pl-3  text-white text-3xl flex flex-col justify-center absolute right-5 top-6  md:hidden">
        {open?<IoMdClose />:<IoMenuSharp />}
        
       
        </div>

       <div className="flex flex-col justify-center">
       <div className={`md:flex md:gap-8 absolute bg-gray-400 md:bg-transparent md:static md:items-center lg:justify-center 
        top-28 space-y-6 p-5 md:p-0 md:space-y-0 w-full
         md:w-auto  pl-5 transition-all duration-500
          ease-in md:pl-0  gap-7 md left-0 ${open?"top-20 opacity-100":"top-[-490px]"}`}>
            <div className="">
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer text-white hover:text-purple-700 font-semibold  duration-150 "
          >
            About
          </Link>
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="">
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer text-white hover:text-purple-700 font-semibold  duration-150 "
          >
            Skills
          </Link>
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="">
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer text-white hover:text-purple-700 font-semibold  duration-150 "
          >
            Project
          </Link>
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="">
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer text-white hover:text-purple-700 font-semibold  duration-150 "
          >
            Experience
          </Link>
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="">
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={900}
            className="cursor-pointer text-white hover:text-purple-700 font-semibold  duration-150 "
          >
            Education
          </Link>
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          

         

          <div>
          <button type="button" className="text-white md:hidden  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:outline-none  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 mt-2 text-center me-2 mb-2"><a href="https://github.com/manix5h">Github</a></button>
       
          </div>
           



           
        </div>
       </div>

       <button type="button" className="text-white invisible md:visible  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:outline-none  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 mt-2 text-center me-2 mb-2"><a href="https://github.com/manix5h">Github</a></button>
       
        
    </div>
    </div>
  )
}
