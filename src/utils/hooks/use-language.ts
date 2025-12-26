import { useRouter } from 'next/router'

export const useLanguage = () => {
  const router = useRouter()

  const locale = (router.locale ?? 'en') as 'en'
  const isEnglish = true
  const language = 'English'

  return { locale, isEnglish, language }
}
