import React, { ReactNode } from 'react'
import type { Project } from '@utils/types'

const projects: Project[] = [
  {
    title: 'Kastor',
    subtitle: 'AI-Powered Data Lake House',
    description: (
      <div>
        Kastor Data is a modern AI-native data lakehouse platform that
        simplifies data management, analytics, and reporting for teams without
        requiring deep SQL expertise. It lets users ask natural-language
        questions and instantly transforms them into precise SQL queries and
        interactive insights powered by AI. Kastor also supports metadata
        exploration, version control of datasets, and real-time analytics to
        accelerate data-driven decision-making.
      </div>
    ),
    tags: [
      'Python',
      'Data Lake',
      'Snowflake',
      'Remix',
      'AI Agent',
      'FastAPI',
      'PostgreSQL',
    ],
    image: '/projects/kastor.png',
    imageHeight: 1920,
    imageWidth: 1280,
    year: 2024,
    link: 'https://www.kastordata.io',
  },
  {
    title: 'Svend',
    subtitle: 'AI-Powered Financial Management',
    description: (
      <div>
        An AI-powered financial management platform that integrates with Plaid
        for secure bank connections and leverages OpenAI for intelligent expense
        categorization, budget recommendations, and financial insights. Helps
        users optimize their spending patterns and achieve financial goals
        through automated analysis and personalized recommendations.
      </div>
    ),
    tags: [
      'NextJS',
      'Plaid API',
      'OpenAI',
      'TypeScript',
      'Supabase',
      'Tailwind',
      'Docker',
      'Makerkit',
    ],
    image: '/projects/svend.png',
    imageHeight: 1920,
    imageWidth: 1280,
    year: 2024,
  },
  {
    title: 'Sellify',
    subtitle: 'AI-Powered Walmart Seller Analytics',
    link: 'https://chromewebstore.google.com/detail/sellify-walmart-seller-in/aaanccbgcapmhkemhjlkmladllalcmie',
    description: (
      <div>
        A Chrome extension that optimizes Walmart sales with AI-powered
        analytics. Features include profitability analysis, competitor
        intelligence, multi-platform market comparison, and smart matching for
        comprehensive seller insights and inventory management.
      </div>
    ),
    tags: ['Chrome Extension', 'OpenAI', 'Data Analytics', 'React'],
    image: '/projects/sellify.png',
    imageHeight: 1920,
    imageWidth: 1280,
    year: 2024,
  },
  {
    title: 'ArchitectRender',
    subtitle: 'AI-Powered Architectural Visualization',
    description: (
      <div>
        <div>
          An AI-driven architectural visualization platform that transforms 2D
          architectural plans into photorealistic 3D renders using advanced
          computer vision and deep learning models. Serving over 5,000
          architects globally with 95% customer satisfaction rate.
        </div>
        <br />
        <div>
          The platform processes 10,000+ renders monthly, utilizing PyTorch and
          computer vision techniques to generate stunning visualizations that
          help architects present their designs to clients. Built with scalable
          cloud infrastructure to handle high-volume rendering requests
          efficiently.
        </div>
      </div>
    ),
    tags: [
      'NextJS',
      'Python',
      'PyTorch',
      'Runpods',
      'Computer Vision',
      'AWS',
      'PostgreSQL',
    ],
    image: '/projects/architect.png',
    imageHeight: 1920,
    imageWidth: 1280,
    year: 2023,
    link: 'https://www.architectrender.com/',
  },
]

export default projects
