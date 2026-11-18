import { projects } from "../data/projects"
import ProjectCard from "./projects/ProjectCard"
export default function Projects() {

    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),22.5rem))] justify-center gap-6 my-12 font-normal w-full">
            {projects.map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
    )
}
