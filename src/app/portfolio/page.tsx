import ProjectCard from '@/components/ProjectCard'
import { projects } from '../../../data/projects'

export default function PortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-12">Portfolio</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
