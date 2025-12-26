import type { Project } from '@utils/types'

const archive: Project[] = [
  {
    title: 'CRS',
    subtitle: 'Educational Platform for Inclusive Science Learning',
    description: (
      <div>
        Educational platform providing culturally relevant curriculum resources
        for underrepresented students with comprehensive teacher tools.
      </div>
    ),
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'UI/UX'],
    image: '/projects/crs.png',
    imageHeight: 400,
    imageWidth: 600,
    link: 'https://crsci.org/',
    year: 2024,
  },
  {
    title: 'CHKR',
    subtitle: 'Business Operations Management Platform',
    description: (
      <div>
        Business operations platform with role-based dashboards, real-time
        tracking, job management, and payment integration.
      </div>
    ),
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Google Maps API', 'Stripe'],
    image: '/projects/chkr.png',
    imageHeight: 400,
    imageWidth: 600,
    link: 'https://www.chkr.app/',
    year: 2023,
  },
  {
    title: 'ContractBot - AI SaaS',
    subtitle: 'AI-Powered Legal Contract Management',
    description: (
      <div>
        AI-driven platform for creating and managing legal contracts with
        automated review and error detection capabilities.
      </div>
    ),
    tags: ['Chatbot', 'OpenAI', 'AWS', 'NestJS', 'React'],
    image: '/projects/contractbot.png',
    imageHeight: 400,
    imageWidth: 600,
    year: 2024,
  },
  {
    title: 'Number Trade',
    subtitle: 'License Plate Trading Marketplace',
    description: (
      <div>
        Specialized trading platform for license plates between individuals and
        entities, facilitating secure marketplace transactions.
      </div>
    ),
    tags: ['Node.js', 'Shadcn', 'ExpressJS', 'React', 'MongoDB'],
    image: '/projects/numbertrade.png',
    imageHeight: 400,
    imageWidth: 600,
    year: 2023,
  },
  {
    title: 'Options Player',
    subtitle: 'Options Trading Education Platform',
    description: (
      <div>
        Comprehensive options trading education platform with expert-led
        courses, trading tools, and interactive real-time scenarios.
      </div>
    ),
    tags: ['Next.js', 'ExpressJS', 'Stripe', 'NextAuth', 'PostgreSQL'],
    image: '/projects/options-players.png',
    imageHeight: 400,
    imageWidth: 600,
    year: 2024,
  },
]

export default archive
