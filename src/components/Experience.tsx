import { VerticalTimeline } from "react-vertical-timeline-component"
import { experiences } from "./Constent"
import "react-vertical-timeline-component/style.min.css";
import { ExperienceCard } from "./card/ExperienceCard"

export const Experience = () => {
  return (
    <div className=''>

<div className="p-3 pb-10 pt-5  ">
      <h1 className="text-white text-center shadow-2xl font-bold font-pop text-4xl sm:text-5xl   ">
      Experince
      </h1>
      <p className="text-white text-center text-xl font-pop pt-4"> 
      My work experience as a software engineer and working on different companies and projects.    </p>
      </div>

//@ts-ignore
      <VerticalTimeline layout={'1-column-left' } className="">
        {
            experiences.map((experience)=>(
                <ExperienceCard
                experience={experience}
                />
            ))
        }
      </VerticalTimeline>


     
    </div>
  )
}
