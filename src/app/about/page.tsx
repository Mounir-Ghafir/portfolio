import { experiences } from '../../../data/experience'

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-6">About</h1>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-16">
        I&apos;m a fullstack developer passionate about building clean, performant web applications.
        I enjoy working across the stack — from crafting polished UIs to designing reliable APIs and data layers.
      </p>

      <h2 className="text-xl font-semibold mb-6">Experience & Education</h2>
      <div className="space-y-8">
        {experiences.map((item) => (
          <div key={item.title}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-sm text-zinc-500 shrink-0">{item.period}</span>
            </div>
            <p className="text-sm text-zinc-500 mt-0.5">{item.organization}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
