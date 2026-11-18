import type { Project } from '../../types/project'

export default function ProjectCard(project: Project) {
  const hasLinks = project.githubUrl || project.liveUrl

  return (
    <article className="group flex min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="aspect-16/10 overflow-hidden border-b border-slate-200 bg-slate-50 p-4">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full rounded-lg object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-brand-blue">
            {project.title}
          </h2>
          <hr />
          <p className="text-base leading-relaxed text-slate-600">
            {project.description}
          </p>
        </div>

        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.technologies.map(technology => (
            <li key={technology} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-600">
              {technology}
            </li>
          ))}
        </ul>

        {hasLinks && (
          <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live (opens in a new tab)`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-highlight px-4 py-2 text-sm font-bold text-brand-blue transition-colors hover:bg-highlight-ring focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
              >
                View live <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code (opens in a new tab)`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-brand-blue transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
              >
                Source code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
