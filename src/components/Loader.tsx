import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLanguage()
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const hold = window.setTimeout(() => setLeaving(true), 1800)
    const done = window.setTimeout(onDone, 2500)
    return () => {
      window.clearTimeout(hold)
      window.clearTimeout(done)
    }
  }, [onDone])

  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <p className="loader-kicker">{t.loader}</p>
      <p className="loader-brand">BRZOZA</p>
      <span className="loader-line" />
    </div>
  )
}
