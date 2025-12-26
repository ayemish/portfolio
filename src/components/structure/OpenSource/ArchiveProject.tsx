import { useTranslation } from 'next-i18next'
import NextImage from 'next/image'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import type { Project } from '@utils/types'

export const ArchiveProject: React.FC<Project> = ({
  title,
  subtitle,
  description,
  image,
  imageWidth,
  imageHeight,
  link,
  github,
  tags,
  year,
}) => {
  const { t } = useTranslation('common')

  return (
    <LinkBox
      h='full'
      borderColor='black'
      border='1px solid'
      overflow='hidden'
      transition='all 0.1s ease-in-out'
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    >
      <VStack align='stretch' spacing='0' h='full'>
        <Box pos='relative' w='full' h='48' overflow='hidden' bg='gray.100'>
          <NextImage
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            draggable='false'
          />
        </Box>
        <VStack align='flex-start' spacing='3' p='4' flex='1'>
          <VStack align='flex-start' spacing='1' w='full'>
            {link ? (
              <LinkOverlay href={link} isExternal>
                <Heading as='h3' size='md' noOfLines={1}>
                  {title}
                </Heading>
              </LinkOverlay>
            ) : (
              <Heading as='h3' size='md' noOfLines={1}>
                {title}
              </Heading>
            )}
            <Text fontSize='sm' color='gray.600' fontWeight='semibold' noOfLines={1}>
              {subtitle}
            </Text>
            {year && (
              <Text fontSize='xs' color='gray.500'>
                {year}
              </Text>
            )}
          </VStack>
          <Box flex='1' fontSize='sm' lineHeight='1.5'>
            {description}
          </Box>
          {tags && tags.length > 0 && (
            <Wrap spacing='2'>
              {tags.map((tag, index) => (
                <Tag key={index} size='sm' variant='outline' borderColor='black'>
                  {tag}
                </Tag>
              ))}
            </Wrap>
          )}
          <HStack spacing='4' pt='2'>
            {link && (
              <Link href={link} variant='projectLink' isExternal fontSize='sm'>
                {t('website')}
              </Link>
            )}
            {github && (
              <Link href={github} variant='projectLink' isExternal fontSize='sm'>
                Github
              </Link>
            )}
          </HStack>
        </VStack>
      </VStack>
    </LinkBox>
  )
}

