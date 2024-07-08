

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//@ts-ignore
export const ExperienceCard = ({experience}) => {
    
  return (
    
    <div className='pt-6 shadow-2xl shadow-indigo-900'>
        <VerticalTimelineElement 
         className="vertical-timeline-element--work"
        
         icon={
            <img
              width="100%"
              height="100%"
              alt={experience.school}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              src={experience.img}
            />
          }
          contentStyle={{
            
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "#1d1836",
            color: "#fff",
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
            // backdropFilter: "blur(3px) saturate(106%)",
            backgroundColor: "rgba(17, 25, 40, 0.83)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
            borderRadius: "6px",
          }}
          contentArrowStyle={{
            borderLeft: "7px solid  rgba(255, 255, 255, 0.3)",
          }}
          date={experience.date}
      >

        <div className=''>
        <div className='flex '>
            <img src={experience.img} alt="" className='mt-5 p-2 rounded-md w-16 h-16 ' />
            <div className='pl-4 text-zinc-400'>
                <p className='font-pop text'> {experience.role} </p>
                <p>{experience.company}</p>
                <p>{experience.date}</p>
            </div>
        </div>

        <div className='font-pop'>
            {experience?.desc && <span className='text-sm text-zinc-400'>{experience?.desc}</span> }
            {
                experience?.skills && (
                    <>
                        <div className='flex gap-3 '>
                            <p className='font-bold text-sm '>Skills:</p>

                            <div className=' flex flex-wrap space-x-4'>
                                {
                                    experience?.skills?.map((skill: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined)=>(
                                        <p className=' text-zinc-400'> {skill} </p>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        </div>

        </VerticalTimelineElement>
    </div>
  )
}
