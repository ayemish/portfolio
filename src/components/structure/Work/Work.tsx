import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import activities from '@data/activities'
import type { Activity } from '@data/activities'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const ActivityItem: React.FC<Activity> = ({
  title,
  altTitle,
  url,
  dates,
  role,
  description,
}) => {
  const displayTitle = altTitle || title

  return (
    <VStack align='flex-start' spacing='4' w='full'>
      <Box w='full'>
        <Heading as='h3' size='lg' mb='2'>
          <Link
            href={url}
            isExternal
            color='blue.600'
            _hover={{ textDecoration: 'underline' }}
          >
            {displayTitle}
          </Link>
        </Heading>
        <Text fontSize='sm' color='gray.600' fontWeight='semibold'>
          {role}
        </Text>
        <Text fontSize='sm' color='gray.500'>
          {dates}
        </Text>
      </Box>
      <Divider />
      <Stack spacing='2' as='ul' listStyleType='none' pl='0'>
        {description.map((item, index) => (
          <Flex key={index} as='li' align='baseline' gap='3'>
            <Box
              as='span'
              w='2'
              h='2'
              bg='black'
              borderRadius='full'
              flexShrink={0}
              mt='0.125rem'
            />
            <Text fontSize='sm' lineHeight='1.5' flex='1'>
              {item}
            </Text>
          </Flex>
        ))}
      </Stack>
    </VStack>
  )
}

export const Work: React.FC = () => {
  const { t } = useTranslation('common')
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Box
      as='section'
      id='work'
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='black'
      borderTop='1px solid'
      scrollMarginTop='calc(var(--chakra-sizes-header-height) - 1px)'
    >
      <VStack align='stretch' spacing='12' maxW='container.lg' mx='auto'>
        <Heading as='h2' variant='section' size='2xl'>
          {t('work')}
        </Heading>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap='6'
          align='flex-start'
        >
          {/* Tabs on left side */}
          <Box
            minW={{ base: 'full', lg: '48' }}
            flexShrink={0}
            display='flex'
            flexDirection='column'
          >
            <VStack align='stretch' spacing='2' justify='flex-start'>
              {activities.map((activity, index) => {
                const displayTitle = activity.altTitle || activity.title
                const isActive = index === activeIndex

                return (
                  <Button
                    key={`${activity.title}-${index}`}
                    variant='navItem'
                    onClick={() => setActiveIndex(index)}
                    bg={isActive ? 'black' : 'white'}
                    color={isActive ? 'white' : 'black'}
                    _hover={{
                      bg: isActive ? 'gray.800' : 'gray.100',
                      backgroundImage: isActive
                        ? 'none'
                        : 'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(0, 0, 0, 1) 24px, rgba(0, 0, 0, 1) 25px)',
                    }}
                    justifyContent='flex-start'
                    textAlign='left'
                    whiteSpace='normal'
                    h='auto'
                    py='3'
                    px='4'
                  >
                    <VStack align='flex-start' spacing='1' w='full'>
                      <Text fontWeight='bold' fontSize='sm'>
                        {displayTitle}
                      </Text>
                      <Text fontSize='xs' opacity={0.8}>
                        {activity.role}
                      </Text>
                    </VStack>
                  </Button>
                )
              })}
            </VStack>
          </Box>

          {/* Content on right side */}
          <Box flex='1' position='relative' w={{ base: 'full', lg: 'auto' }}>
            <AnimatePresence initial={false}>
              <MotionBox
                key={activeIndex}
                borderColor='black'
                border='1px solid'
                p='6'
                position='absolute'
                top='0'
                left='0'
                right='0'
                w='full'
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <ActivityItem {...activities[activeIndex]} />
              </MotionBox>
            </AnimatePresence>
            {/* Spacer to maintain height */}
            <Box
              borderColor='black'
              border='1px solid'
              p='6'
              visibility='hidden'
              w='full'
            >
              <ActivityItem {...activities[activeIndex]} />
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Box>
  )
}
