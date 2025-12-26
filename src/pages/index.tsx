import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainLayout } from '@components/layouts/MainLayout'
import {
  ContactMe,
  Hero,
  OpenSource,
  SelectedProjects,
  SkillSet,
  SlashDivider,
  Work,
} from '@components/structure'
import { config } from '@config/config'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <SlashDivider />
      <Work />
      <SelectedProjects />
      <OpenSource />
      <SkillSet />
      <ContactMe />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
