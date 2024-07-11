
import HeroImg from "../assets/IMG20240623135742.jpg";

import {Bio} from "../components/Constent"
import { Typewriter } from 'react-simple-typewriter'

export const HeroSection = () => {
  return (
    <div className="flex justify-center " id="about">
      <div className=" w-full m-2 md:w-10/12 ">

      
      <div className=" grid grid-cols-1 lg:grid-cols-2">

      <div className="h-full w-full flex flex-col justify-center pt-2  ">
         <div className="flex flex-col ">
           <h1 className="text-5xl text-white pt-2 font-pop text-center font-bold">
          Hi, I am
          </h1>

          <span className="text-4xl text-white font-bold pt-2 text-center font-pop"> {Bio.name} </span>
          <span className="text-purple-900 text-2xl pt-3 text-center font-bold">
            <span className="text-white font-bold text-xl pr-2  font-pop" >I am a</span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
          

            words={[
              "Full Stack Developer",
              "Android Developer",
              "Freelancer",
              "Programmer",
            ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
      
          />
        </span>

        <p className="text-zinc-400 text-center  leading-8 text-md pt-7 text-pretty font-pop "> {Bio.description} </p>

            <div className="flex justify-center pt-7">
            <a href="https://drive.google.com/file/d/19YM-qCWuFfUH9IflNe9Mi8emInspwR4e/view">
            <button type="button" className="text-white  bg-gradient-to-br w-fit from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Check Resume</button>
  
            </a>
            </div>
               </div>
        </div>


      

        <div className="h-fit w-full relative md:mt-0">

          <div className="flex justify-center">
            <div>
            <div>
            <HeroBgAnimation/>
            </div>
            <div className=" ">
            <div className="  md:absolute md:left-72 mt-10 md:top-20 rounded-full">
            <img src={HeroImg} className=" h-[300px]   w-[300px]  md:h-[400px] md:mt-5 z-50 md:w-[400px]  border-2 shadow-2xl shadow-indigo-400 rounded-full" alt="" />
            </div>
            </div>
            </div>
            
          </div>

        </div>



      </div >

       
   
      </div>
    </div>
  );
};


const HeroBgAnimation = () => (
  <div className="flex justify-center">
    <div className='absolute md:relative   md:left-32 left-5  h-[400px] md:h-[600px] md:w-[600px] w-[390px]'>
   
   <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#46737"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill="#F46737"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="165.524"
        cy="93.9596"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-165.524 -93.9596)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M165.182 94.3159L139.429 120.1"
        transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint11_linear)"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="382.168"
          y1="155.027"
          x2="357.1"
          y2="129.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.309"
          y1="382.693"
          x2="358.376"
          y2="357.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="165.54"
          y1="93.9578"
          x2="140.472"
          y2="118.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="414.367"
          y1="301.156"
          x2="439.435"
          y2="276.118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="515.943"
          y1="288.238"
          x2="541.339"
          y2="291.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="117.001"
          y1="230.619"
          x2="117.36"
          y2="258.193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  </div>
);

export default HeroBgAnimation;