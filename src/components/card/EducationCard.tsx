
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


//@ts-ignore
export const EducationCard = ({ education }) => {
  return (
    <div className="pt-6 shadow-2xl shadow-indigo-900">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        icon={
          <img
            width="100%"
            height="100%"
            alt={education.school}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={education.img}
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
        date={education.date}
      >
        <div className="font-pop text-zinc-400">
          <div className="flex ">
            <img className="w-16 h-16 rounded-md p-1" src={education.img} />
            <div className="pl-3">
              <div className="text-lg">{education.school}</div>
              <div className="text-sm">{education.degree}</div>
              <div className="text-sm">{education.date}</div>
            </div>
          </div>
          <div>
            <b>Grade :</b>
            {education.grade}
          </div>
          <div>
            <span className="text-sm">{education.desc}</span>
          </div>
        </div>
      </VerticalTimelineElement>
      
    </div>
  );
};
