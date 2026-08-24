import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { useLanguage } from '../context/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <div className="page about-page">
      <header className="page-hero">
        <p className="kicker">{t.aboutPage.kicker}</p>
        <h1 className="display">
          {t.aboutPage.title.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="lede">{t.aboutPage.lead}</p>
      </header>

      <div className="about-story">
        <div className="about-story-img">
          <Photo src="about" alt="" />
        </div>
        <div className="about-story-copy">
          {t.aboutPage.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <section className="section">
        <h2 className="display-sm">{t.aboutPage.valuesTitle}</h2>
        <div className="card-grid">
          {t.aboutPage.values.map((v) => (
            <article key={v.title} className="exp-card">
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section team">
        <h2 className="display-sm">{t.aboutPage.teamTitle}</h2>
        <ul className="team-list">
          {t.aboutPage.team.map((m) => (
            <li key={m.name}>
              <span>{m.role}</span>
              <strong>{m.name}</strong>
            </li>
          ))}
        </ul>
        <Link to="/reservation" className="btn">
          {t.hero.ctaReserve}
        </Link>
      </section>
    </div>
  )
}
