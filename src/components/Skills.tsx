import { skills } from "./Constent"


export const Skills = () => {
  return (

    
    <div>

      
      <div className="p-3 pb-10 mt-20 md:mt-0">
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
