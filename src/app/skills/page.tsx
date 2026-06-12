import SkillBadge from '@/components/SkillBadge'
import { frontendSkills, backendSkills, toolsSkills } from '../../../data/skills'
import { Skill } from '../../types/index';

const categories = [
  { title: 'Frontend', skills: frontendSkills },
  { title: 'Backend', skills: backendSkills },
  { title: 'Tools', skills: toolsSkills },
] as const

export default function SkillsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-12">Skills</h1>
      <div className="space-y-10">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="text-lg font-semibold mb-3">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
