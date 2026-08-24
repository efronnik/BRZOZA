import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translation } from '../i18n/translations'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('brzoza-lang')
    return saved === 'en' || saved === 'pl' ? saved : 'pl'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('brzoza-lang', next)
    document.documentElement.lang = next
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
