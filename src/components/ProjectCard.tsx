import type { Project } from '@/types'

export default function ProjectCard({ title, description, stack, githubUrl, demoUrl }: Project) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          GitHub
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
