import projectsData from "../assets/projectsData"
import Project from "./Project"
export default function Projects() {

    return(
        <div className="flex justify-center m-12 nunitoRegular">
            {projectsData.map(data => <Project {...data}/>)}
        </div>
    )
}