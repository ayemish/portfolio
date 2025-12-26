import { ReactNode } from 'react'

export interface Activity {
  title: string
  altTitle?: string
  url: string
  dates: string
  role: string
  roleAlt?: string
  description: ReactNode[]
}

const activities: Activity[] = [
  {
    title: 'Sellify',
    url: 'https://www.sellify.app/',
    dates: 'January 2025 - Present',
    role: 'AI Software Engineer',
    description: [
      'Developed Chrome extension for e-commerce automation using modern JavaScript frameworks and Web APIs',
      'Built Walmart Connect app with focus on marketplace integrations and seller dashboard functionality',
      'Implemented real-time data synchronization between multiple e-commerce platforms and internal systems',
      'Created responsive user interfaces with ReactJS and managed state using Redux Toolkit',
      'Integrated third-party APIs for payment processing, inventory management, and order tracking',
      'Developed AI-powered analytics dashboards to provide actionable insights and predictive analytics for e-commerce operations',
      'Implemented machine learning models and AI algorithms to optimize inventory management, pricing strategies, and sales forecasting',
    ],
  },
  {
    title: 'CCRIPT',
    url: 'https://ccript.com/',
    dates: 'April 2024 - July 2025',
    role: 'Software Engineer II & Team Lead',
    description: [
      'Lead cross-functional team of 8-9 developers, managing project workflows and technical architecture decisions',
      'Architected AI-powered applications including Kastor Data Lake House, ArchitectRender, and LobbyIQ using modern web technologies',
      'Developed Contract Bot using natural language processing to analyze, generate, and manage legal contracts',
      'Established development standards and best practices resulting in improved team productivity and code quality',
      'Engineered scalable APIs and microservices architecture using NodeJS, NestJS, and cloud technologies',
      'Implemented code review processes and mentored junior developers in modern development practices',
    ],
  },
  {
    title: 'CCRIPT',
    url: 'https://ccript.com/',
    dates: 'September 2023 - March 2024',
    role: 'Software Engineer I',
    description: [
      'Developed full-stack web applications with focus on AI integration and data processing capabilities',
      'Built scalable APIs and microservices architecture supporting high-traffic applications',
      'Implemented responsive user interfaces using ReactJS, NextJS, and modern CSS frameworks',
      'Worked with databases including PostgreSQL and MongoDB for efficient data storage and retrieval',
      'Integrated OpenAI APIs and machine learning models into web applications for intelligent features',
      'Participated in agile development processes including sprint planning, daily standups, and retrospectives',
    ],
  },
  {
    title: 'Neuralogic',
    url: 'https://www.neuralogic.co/',
    dates: 'June 2022 - August 2023',
    role: 'Software Engineer',
    description: [
      'Developed and maintained web applications using modern JavaScript frameworks and backend technologies',
      'Built responsive frontend applications using ReactJS, implementing complex user interfaces and interactions',
      'Created RESTful APIs using NodeJS and ExpressJS for seamless frontend-backend communication',
      'Worked with various databases including MySQL and MongoDB for data modeling and optimization',
      'Implemented authentication and authorization systems ensuring secure user access and data protection',
      'Collaborated with cross-functional teams including designers, product managers, and QA engineers',
    ],
  },
  {
    title: 'Epochclan',
    url: 'https://epochclan.com/',
    dates: 'March 2022 - May 2022',
    role: 'Software Engineer',
    description: [
      'Gained hands-on experience with ReactJS, NextJS, NodeJS, and modern development practices',
      'Developed interactive web applications using ReactJS, implementing component-based architecture',
      'Learned to integrate external APIs like OpenWeather API to create dynamic, data-driven applications',
      'Built news applications using NextJS and TypeScript, demonstrating proficiency in modern frontend frameworks',
      'Implemented state management using Redux Toolkit for complex application data flow',
      'Participated in agile development processes including daily standups, sprint planning, and code reviews',
    ],
  },
  {
    title: 'Digitech',
    url: 'https://www.tdtrg.com/',
    dates: 'June 2021 - February 2022',
    role: 'WordPress & PHP Developer',
    description: [
      'Created custom WordPress sites and developed PHP-based web applications and builders',
      'Designed and developed responsive WordPress themes from scratch using HTML, CSS, and JavaScript',
      'Built custom WordPress plugins to extend functionality and meet specific client requirements',
      'Developed PHP applications with MySQL databases for dynamic content management',
      'Created custom post types, fields, and taxonomies to organize and display content effectively',
      'Implemented SEO best practices and optimized websites for search engine visibility',
    ],
  },
]

export default activities
