import { skills } from "./Constent"
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Skills = () => {
  return (

    
    <div>

      
      <div className="p-3 pb-10 ">
      <h1 className="text-white text-center shadow-2xl font-bold font-pop text-4xl sm:text-5xl   ">
        Skills
      </h1>
      <p className="text-white text-center text-xl font-pop pt-4"> 
      Here are some of my skills on which I have been working on for the past 3 years.
      </p>
      </div>
      <div className="flex justify-center w-full  ">

      

              
        <div className=" w-10/12 sm:w-8/12 flex flex-wrap justify-center p-2 ">
        {skills.map((skill, index) => (
            <div className="max-w-[500px] border shadow-indigo-800 shadow-xl rounded-2xl pt-3 pb-4 m-2 ">
              <div key={`skill-${index}`}>
                <h1 className="text-zinc-400 text-center text-3xl font-bold font-pop">{skill.title}</h1>
                <div className=" flex flex-wrap gap-3 justify-center pt-2">
                  {skill.skills.map((item) => (
                    <div className="text-zinc-400 flex rounded-2xl border justify-center gap-2 items-center px-2  py-2" >
                      <div className="wrap">
                      <img src={item.image} className="w-10 h-10 sm:w-12 sm:h-12 p-1" />
                      </div>
                      <p className="font-pop">
                      {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
             
            </div>
          ))}
        </div>
        
    </div>
    </div>
  )
}
