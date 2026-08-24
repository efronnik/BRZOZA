import { useState, type FormEvent } from 'react'
import { FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    const payload = { name, email, message, at: new Date().toISOString() }
    const prev = JSON.parse(localStorage.getItem('brzoza-messages') || '[]') as unknown[]
    localStorage.setItem('brzoza-messages', JSON.stringify([payload, ...prev]))
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="page contact-page">
      <header className="page-hero">
        <p className="kicker">{t.contact.kicker}</p>
        <h1 className="display">{t.contact.title}</h1>
      </header>

      <div className="contact-layout">
        <div className="contact-info">
          <div>
            <p className="label">{t.contact.addressLabel}</p>
            <p className="value whitespace-pre">{t.contact.address}</p>
            <a className="link-arrow" href={MAPS_URL} target="_blank" rel="noreferrer">
              {t.contact.mapCta}
            </a>
          </div>
          <div>
            <p className="label">{t.contact.phoneLabel}</p>
            <a className="value link" href="tel:+48224001840">
              {t.contact.phone}
            </a>
          </div>
          <div>
            <p className="label">{t.contact.emailLabel}</p>
            <a className="value link" href={`mailto:${t.contact.email}`}>
              {t.contact.email}
            </a>
          </div>
          <div>
            <p className="label">{t.contact.socialTitle}</p>
            <div className="social-row">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
          <p className="note">{t.contact.transport}</p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h2 className="display-sm">{t.contact.formTitle}</h2>
          {sent ? (
            <p className="form-success">{t.contact.form.sent}</p>
          ) : (
            <>
              <label>
                <span>{t.contact.form.name}</span>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                <span>{t.contact.form.email}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>{t.contact.form.message}</span>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="btn">
                {t.contact.form.send}
              </button>
            </>
          )}
          {sent && (
            <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
              OK
            </button>
          )}
        </form>
      </div>

      <div className="map-embed">
        <iframe
          title="BRZOZA map"
          src="https://maps.google.com/maps?q=Mokotowska%2048%20Warsaw&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
