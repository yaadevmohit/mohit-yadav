import { type projectDetails } from "../assets/projectsData"
import { getRandomClass } from "../utils/utils"
import { skillsClassList } from "../assets/projectsData"
export default function Project(props: projectDetails) {

    return(
        <div 
            className="
            flex 
            flex-col gap-2 
            w-full
            md:max-w-90 
            rounded-2xl 
            text-left bg-[#F03603] 
            text-white overflow-hidden
            hover:shadow-lg hover:shadow-red-500
            transition-shadow duration-200
            "
        >
            <div className="group relative h-64 overflow-hidden">
                <img 
                    src={props.img} 
                    alt={`${props.name} image`}
                    className="h-full 
                        w-full object-cover 
                        transition-transform 
                        duration-800 ease-in-out 
                        group-hover:scale-105"
                />
                <div 
                    className="absolute 
                    inset-0 group-hover:bg-black/40 
                    transition-colors duration-500"
                >
                </div>
            </div>
            <div className="flex flex-col gap-3 px-2 pb-2">
            <ul className="flex gap-4 mt-2 pl-2">
                {props.skills.map(skill => {
                    const randomTag = getRandomClass(skillsClassList)
                    return (<li className={`${randomTag} px-2 py-1 customBlueRing text-black`}>{skill}</li>)
                })}
            </ul>
            <h2 className="nunitoBold text text-2xl pl-2">{props.name}</h2>
            <hr />
            <p className="text-md pl-2">
                {props.description}
            </p>
            <ul 
                className="flex mx-auto space-x-3 nunitoBold text-md"
            >
              <li className="my-0 underline hover:scale-110">
                <a href={props.github} target="_blank">github</a>
              </li>
              <li className="my-0 underline hover:scale-110">
                <a href={props.live} target="_blank">live</a>
              </li>
            </ul>
            </div>
        </div>
    )
}