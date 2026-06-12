import type { Skill } from '@/types'

export default function SkillBadge({ name, emoji }: Skill) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm font-medium">
      <span>{emoji}</span>
      {name}
    </span>
  )
}
