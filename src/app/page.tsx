import Link from "next/link";
import { projects } from "../../data/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center text-center py-32 px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Mounir Ghafir</h1>
        <p className="text-lg text-zinc-500 mt-2">Fullstack Developer</p>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-md">
          Building thoughtfully crafted digital experiences with modern tools.
        </p>
        <Link
          href="/portfolio"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:opacity-80"
        >
          View My Work
        </Link>
      </section>

      <section className="w-full max-w-4xl px-6 pb-32">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
