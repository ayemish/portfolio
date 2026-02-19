import React from 'react'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { NAME } from '@config/config'
import { Menu } from './Menu'
import { NavItem, type NavItemProps } from './NavItem'

const MenuIcon: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = HiOutlineMenuAlt4 as any
  return <Icon />
}

const CloseIcon: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = VscChromeClose as any
  return <Icon />
}

const navItems: Omit<NavItemProps, 'onClose'>[] = [
  { name: 'home', href: '/' },
  { name: 'work', href: '/#work' },
  { name: 'projects', href: '/#projects' },
  { name: 'bookmarks', href: '/bookmarks' },
]

export const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { isOpen, onToggle, onClose } = useDisclosure()

  const handleNavClick = (): void => {
    // No-op for desktop navigation
  }

  return (
    <Box as='header' pos='sticky' zIndex='banner' top='0' left='0' right='0'>
      <Flex
        pos='relative'
        zIndex='banner'
        align='center'
        justify='space-between'
        bg='white'
        pt='12'
        pb='4'
        px={{ base: '4', md: '8' }}
        borderColor='black'
        borderBottom='1px solid'
      >
        <NextLink href='/' passHref legacyBehavior>
          <Text
            as='a'
            fontWeight='bold'
            fontSize={{ base: 'lg', md: '2xl' }}
            casing='uppercase'
          >
            {NAME}
          </Text>
        </NextLink>
        <HStack spacing='2' display={{ base: 'none', lg: 'flex' }}>
          {navItems.map((item) => (
            <NavItem key={item.name} onClose={handleNavClick} {...item} />
          ))}
        </HStack>
        <IconButton
          aria-label={t(isOpen ? 'close-menu' : 'open-menu')}
          icon={isOpen ? <CloseIcon /> : <MenuIcon />}
          variant='icon'
          size='icon'
          onClick={onToggle}
          display={{ base: 'flex', lg: 'none' }}
        />
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
