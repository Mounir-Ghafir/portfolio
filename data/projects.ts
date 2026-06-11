import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'A personal portfolio website built with Next.js and TypeScript to showcase projects and skills.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Mounir-Ghafir/portfolio',
    demoUrl: 'https://github.com/Mounir-Ghafir/portfolio',
  },
  {
    title: 'Botola Matchday',
    description: 'A football matchday app for the Moroccan Botola league, featuring live scores, standings, and match schedules.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/Mounir-Ghafir/botola-matchday',
    demoUrl: 'https://github.com/Mounir-Ghafir/botola-matchday',
  },
  {
    title: 'FilmVault',
    description: 'A movie discovery app built with React and Vite where users can browse, search, and save their favorite films.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/Mounir-Ghafir/filmvault',
    demoUrl: 'https://github.com/Mounir-Ghafir/filmvault',
  },
  {
    title: 'Redis Clone',
    description: 'A custom Redis-compatible server implementation in Node.js supporting RESP protocol, Pub/Sub, RDB/AOF persistence, replication, and Geo commands.',
    stack: ['Node.js', 'JavaScript', 'Docker'],
    githubUrl: 'https://github.com/Mounir-Ghafir/redis-clone',
    demoUrl: 'https://github.com/Mounir-Ghafir/redis-clone',
  },
]
