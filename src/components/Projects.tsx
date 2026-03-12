import projectsData from "../assets/projectsData"
import Project from "./Project"
export default function Projects() {

    return(
        <div className="flex justify-center my-12 nunitoRegular w-full">
            {projectsData.map(data => <Project {...data}/>)}
        </div>
    )
}