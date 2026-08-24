import { NavLink } from 'react-router-dom'
import { FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="logo">BRZOZA</p>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <nav className="footer-nav">
          <NavLink to="/menu">{t.nav.menu}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/reservation">{t.nav.reservation}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
        </nav>
        <div className="footer-social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            Maps
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.rights}</p>
        <div className="footer-legal">
          <button
            type="button"
            onClick={() =>
              alert(
                t.footer.privacy +
                  '\n\nBRZOZA · Mokotowska 48, Warszawa\nhello@brzoza.waw.pl',
              )
            }
          >
            {t.footer.privacy}
          </button>
          <button
            type="button"
            onClick={() =>
              alert(
                t.footer.imprint +
                  '\n\nBRZOZA Sp. z o.o.\nNIP 525-000-00-00\nMokotowska 48, 00-543 Warszawa',
              )
            }
          >
            {t.footer.imprint}
          </button>
        </div>
      </div>
    </footer>
  )
}
