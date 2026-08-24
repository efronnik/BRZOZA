import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { menuItems, type MenuCategory } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'

type Filter = 'all' | MenuCategory

export function Menu() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: t.menuPage.filters.all },
    { id: 'tasting', label: t.menuPage.filters.tasting },
    { id: 'starters', label: t.menuPage.filters.starters },
    { id: 'mains', label: t.menuPage.filters.mains },
    { id: 'desserts', label: t.menuPage.filters.desserts },
    { id: 'drinks', label: t.menuPage.filters.drinks },
  ]

  const items = useMemo(
    () => (filter === 'all' ? menuItems : menuItems.filter((m) => m.category === filter)),
    [filter],
  )

  return (
    <div className="page menu-page">
      <header className="page-hero">
        <p className="kicker">{t.menuPage.kicker}</p>
        <h1 className="display">{t.menuPage.title}</h1>
        <p className="lede">{t.menuPage.subtitle}</p>
      </header>

      <div className="menu-filters" role="tablist" aria-label="Menu filters">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={filter === f.id ? 'is-active' : ''}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {(filter === 'all' || filter === 'tasting') && (
        <p className="tasting-note">{t.menuPage.tastingNote}</p>
      )}

      <div className="menu-grid">
        {items.map((item) => {
          const copy = item[lang]
          return (
            <article key={item.id} className="menu-card">
              <div className="menu-card-img">
                <Photo src={item.image} alt={copy.name} />
              </div>
              <div className="menu-card-body">
                <div className="menu-card-top">
                  <h2>{copy.name}</h2>
                  <span className="price">{item.price}</span>
                </div>
                <p>{copy.desc}</p>
                <span className="cat-tag">{t.menuPage.filters[item.category]}</span>
              </div>
            </article>
          )
        })}
      </div>

      <div className="menu-cta">
        <Link to="/reservation" className="btn">
          {t.hero.ctaReserve}
        </Link>
      </div>
    </div>
  )
}
