import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function CookieBar() {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(localStorage.getItem('brzoza-cookie') !== '1')
  }, [])

  if (!show) return null

  return (
    <div className="cookie-bar">
      <p>{t.cookie.text}</p>
      <button
        type="button"
        className="btn btn-sm"
        onClick={() => {
          localStorage.setItem('brzoza-cookie', '1')
          setShow(false)
        }}
      >
        {t.cookie.accept}
      </button>
    </div>
  )
}
