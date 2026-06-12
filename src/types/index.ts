
export interface Project {
  title: string
  description: string
  stack: string[]
  githubUrl: string
  demoUrl?: string
}

export interface Skill {
  name: string
  icon: string
}


export interface Experience {
  title: string
  organization: string
  period: string
  description: string
}
