import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const light = isHome && !scrolled && !open

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/menu', label: t.nav.menu },
    { to: '/about', label: t.nav.about },
    { to: '/reservation', label: t.nav.reservation },
    { to: '/contact', label: t.nav.contact },
  ]

  const overlay =
    typeof document !== 'undefined'
      ? createPortal(
          <div className={`nav-mobile ${open ? 'is-open' : ''}`} aria-hidden={!open}>
            <div className="nav-mobile-panel">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              ))}
              <NavLink to="/reservation" className="btn" onClick={() => setOpen(false)}>
                {t.nav.reservation}
              </NavLink>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''} ${light ? 'is-light' : ''}`}
      >
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          BRZOZA
        </NavLink>

        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'pl' ? 'is-active' : ''}
              onClick={() => setLang('pl')}
            >
              PL
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <NavLink to="/reservation" className="btn btn-sm header-reserve">
            {t.nav.reservation}
          </NavLink>
          <button
            type="button"
            className={`burger ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {overlay}
    </>
  )
}
