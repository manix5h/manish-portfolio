import { projects } from "./Constent";
import { ProjectCard } from "./card/ProjectCard";
import styled from "styled-components";
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
export const Projects = () => {
  return (
    <div className=" justify-center w-full">
      
        <div className="">
       <div className="p-2">
       <div className="font-pop text-white text-3xltext-white text-center shadow-2xl font-bold  text-4xl sm:text-5xl   ">
          Projects
        </div>
        <div className="text-white text-center text-xl font-pop pt-4">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>
       </div>
        </div>
       <div className="flex justify-center w-full">
       <CardContainer className="w-10/12 mt-5">
        {projects
           
            .map((project) => (
              <ProjectCard
              
               
                project={project}
                
              />
            ))}
      </CardContainer>
       </div>
    </div>
  );
};
