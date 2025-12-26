import type { ReactNode } from 'react'
import type { StaticImageData } from 'next/image'
import type { IconProps } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export interface Image {
  src: StaticImageData
}

export interface Tag {
  label: string
  colorScheme: string
}

export interface RoleType {
  label: 'creator' | 'contributor'
  color: string
}

export interface Skill {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color: string
}

export interface SkillGroup {
  id: string
  category: string
  skills: Skill[]
}

export interface Project {
  title: string
  subtitle: string
  description: ReactNode
  tags: string[]
  github?: string
  image: string
  imageHeight: number
  imageWidth: number
  link?: string
  video?: string
  year?: number | string
}
