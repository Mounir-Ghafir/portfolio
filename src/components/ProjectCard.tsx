import type { Project } from '@/types'

export default function ProjectCard({ title, description, stack, githubUrl, demoUrl }: Project) {
  return (
    <div className="rounded-xl border border-surface0 p-6 flex flex-col">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-subtext0 mt-2 leading-relaxed flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-surface0 px-2 py-0.5 text-xs font-medium text-subtext1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-5 pt-4 border-t border-surface0">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-subtext0 hover:text-text transition-colors"
        >
          GitHub
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-subtext0 hover:text-text transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
