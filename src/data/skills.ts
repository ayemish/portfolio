import { IoLogoPwa } from 'react-icons/io5'
import {
  SiAmazonwebservices,
  SiAmazondynamodb,
  SiExpress,
  SiGooglecloud,
  SiHeroku,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiShadcnui,
  SiFastapi,
  SiNestjs,
  SiDjango,
  SiSupabase,
  SiOpenai,
  SiGoogle,
  SiClaude,
  SiLangchain,
} from 'react-icons/si'
import { Javascript } from '@components/icons'
import type { SkillGroup } from '@utils/types'

export const skills: SkillGroup[] = [
  {
    id: '1',
    category: 'languages',
    skills: [
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Javascript', icon: Javascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    id: '2',
    category: 'front-end',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React Native', icon: SiReact, color: 'gray.500' },
      { name: 'Shadcn/UI', icon: SiShadcnui, color: '#38B2AC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Progressive Web App', icon: IoLogoPwa, color: '#5a0fc8' },
    ],
  },
  {
    id: '3',
    category: 'back-end',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'FastAPI', icon: SiFastapi, color: '#092E20' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Django', icon: SiDjango, color: '#0C4B33' },
    ],
  },
  {
    id: '3',
    category: 'AI/ML',
    skills: [
      { name: 'Claude', icon: SiClaude, color: '#D97757' },
      { name: 'OpenAI', icon: SiOpenai, color: '#1E1E1E' },
      { name: 'Gemini', icon: SiGoogle, color: '#0C4B33' },
      { name: 'Langchain', icon: SiLangchain, color: '#0C4B33' },
    ],
  },
  {
    id: '5',
    category: 'cloud',
    skills: [
      {
        name: 'Amazon Web Services',
        icon: SiAmazonwebservices,
        color: '#232F3E',
      },
      { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Heroku', icon: SiHeroku, color: '#430098' },
      { name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
    ],
  },
  {
    id: '6',
    category: 'databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Amazon DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
    ],
  },
]
