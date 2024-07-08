
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { EducationCard } from './card/EducationCard'
import { education } from './Constent'

export const Education = () => {
  return (
    <div>
           <div className='pt-5'>

<div className="p-3 pb-10 pt-5  ">
      <h1 className="text-white text-center shadow-2xl font-bold font-pop text-4xl sm:text-5xl   ">
      Education
      </h1>
      <p className="text-white text-center text-xl font-pop pt-4"> 
      My education has been a journey of self-discovery and growth. My
      educational details are as follows.    </p>
      </div>

//@ts-ignore
      <VerticalTimeline layout={'1-column-left' } className="">
        {
            education.map((education)=>(
                <EducationCard
                education={education}
                />
            ))
        }
      </VerticalTimeline>


     
    </div>
    </div>
  )
}
