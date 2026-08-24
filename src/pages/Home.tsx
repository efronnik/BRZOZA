import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { menuItems } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-in')
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

export function Home() {
  const { t, lang } = useLanguage()
  const root = useReveal()
  const featured = menuItems.filter((m) => m.featured)

  return (
    <div ref={root}>
      <section className="hero">
        <div className="hero-media">
          <Photo src="hero" alt="" />
          <div className="hero-veil" />
        </div>
        <div className="hero-content">
          <p className="kicker reveal">{t.hero.kicker}</p>
          <h1 className="display reveal">
            {t.hero.title.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="lede reveal">{t.hero.subtitle}</p>
          <div className="hero-cta reveal">
            <Link to="/menu" className="btn">
              {t.hero.ctaMenu}
            </Link>
            <Link to="/reservation" className="btn btn-ghost">
              {t.hero.ctaReserve}
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>{t.hero.scroll}</span>
          <i />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{t.marquee}</span>
          <span>{t.marquee}</span>
        </div>
      </div>

      <section className="section experience">
        <div className="section-head reveal">
          <p className="kicker">{t.experience.kicker}</p>
          <h2 className="display-sm">
            {t.experience.title.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>
        <div className="card-grid">
          {t.experience.cards.map((card) => (
            <article key={card.num} className="exp-card reveal">
              <span className="exp-num">{card.num}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured">
        <div className="section-head row reveal">
          <div>
            <p className="kicker">{t.featured.kicker}</p>
            <h2 className="display-sm">{t.featured.title}</h2>
          </div>
          <Link to="/menu" className="link-arrow">
            {t.featured.viewAll}
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((item) => {
            const copy = item[lang]
            return (
              <Link to="/menu" key={item.id} className="feature-card reveal">
                <div className="feature-img">
                  <Photo src={item.image} alt={copy.name} />
                </div>
                <div className="feature-meta">
                  <h3>{copy.name}</h3>
                  <p>{copy.desc}</p>
                  <span className="price">{item.price} PLN</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="section about-preview">
        <div className="about-preview-grid">
          <div className="about-preview-img reveal">
            <Photo src="kitchen" alt="" />
          </div>
          <div className="about-preview-copy reveal">
            <p className="kicker">{t.aboutPreview.kicker}</p>
            <h2 className="display-sm">
              {t.aboutPreview.title.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="lede">{t.aboutPreview.text}</p>
            <Link to="/about" className="btn">
              {t.aboutPreview.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section hours-preview">
        <div className="hours-card reveal">
          <p className="kicker">{t.hoursPreview.kicker}</p>
          <h2 className="display-sm">{t.hoursPreview.title}</h2>
          <ul>
            {t.hoursPreview.days.map((d) => (
              <li key={d.day}>
                <span>{d.day}</span>
                <span>{d.hours}</span>
              </li>
            ))}
          </ul>
          <p className="note">{t.hoursPreview.note}</p>
          <Link to="/reservation" className="btn btn-ghost">
            {t.hero.ctaReserve}
          </Link>
        </div>
      </section>
    </div>
  )
}
