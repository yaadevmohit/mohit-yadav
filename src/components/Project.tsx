import { type projectDetails } from "../assets/projectsData"
import { getRandomClass } from "../utils/utils"
import { skillsClassList } from "../assets/projectsData"
export default function Project(props: projectDetails) {

    
    return(
        <div className="flex flex-col gap-2 max-w-90 p-2 border-2 rounded-2xl text-left bg-[#F03603] text-white">
            <img src={props.img} className="w-fit rounded-2xl"/>
            <ul className="flex gap-2 pl-2 mt-2">
                {props.skills.map(skill => {
                    const randomTag = getRandomClass(skillsClassList)
                    return (<li className={`${randomTag} p-1 customBlueRing`}>{skill}</li>)
                })}
            </ul>
            <h2 className="nunitoBold text text-lg pl-2">{props.name}</h2>
            <hr />
            <p className="text-md pl-2">
                {props.description}
            </p>
            <ul className="flex mx-auto space-x-3">
              <li className="my-0 underline hover:scale-110"><a href={props.github} target="_blank">github</a></li>
              <li className="my-0 underline hover:scale-110"><a href={props.live}>live</a></li>
            </ul>
        </div>
    )
}