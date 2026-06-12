import type { Skill } from '@/types'
import {
  JavaScript,
  React,
  NextJs,
  TypeScript,
  TailwindCSS,
  HTML5,
  CSS3,
  NodeJs,
  PostgreSQL,
  Python,
  Git,
  Docker,
} from 'developer-icons'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  JavaScript,
  React,
  NextJs,
  TypeScript,
  TailwindCSS,
  HTML5,
  CSS3,
  NodeJs,
  PostgreSQL,
  Python,
  Git,
  Docker,
}

export default function SkillBadge({ name, icon }: Skill) {
  const IconComponent = iconMap[icon]

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-surface0 px-3 py-1.5 text-sm font-medium">
      {IconComponent && <IconComponent size={18} />}
      {name}
    </span>
  )
}
