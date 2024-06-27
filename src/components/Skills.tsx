import { skills } from "./Constent"

export const Skills = () => {
  return (
    <div className="flex justify-center w-full pt-2">

              
        <div className=" w-11/12 md:w-8/12 flex flex-wrap justify-center ">
        {skills.map((skill, index) => (
            <div className="max-w-[500px] border-2 rounded-2xl pt-4 pb-4 m-2 ">
              <div key={`skill-${index}`}>
                <h1 className="text-zinc-400 text-center text-3xl font-bold font-pop">{skill.title}</h1>
                <div className=" flex flex-wrap gap-3 justify-center pt-2">
                  {skill.skills.map((item) => (
                    <div className="text-zinc-400 flex rounded-2xl border justify-center gap-2 items-center px-2 py-2" >
                      <div className="wrap">
                      <img src={item.image} className="w-12 h-12 p-1" />
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
  )
}
