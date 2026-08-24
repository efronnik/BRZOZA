const photos: Record<string, string> = {
  hero: '/images/hero.jpg',
  kitchen: '/images/kitchen.jpg',
  about: '/images/about.jpg',
  tasting: '/images/tasting.jpg',
  tasting2: '/images/tasting2.jpg',
  beet: '/images/beet.jpg',
  tartare: '/images/tartare.jpg',
  herring: '/images/herring.jpg',
  soup: '/images/soup.jpg',
  pike: '/images/pike.jpg',
  duck: '/images/duck.jpg',
  veg: '/images/veg.jpg',
  lamb: '/images/lamb.jpg',
  apple: '/images/apple.jpg',
  chocolate: '/images/chocolate.jpg',
  cheesecake: '/images/cheesecake.jpg',
  spritz: '/images/spritz.jpg',
  liqueur: '/images/liqueur.jpg',
  kombucha: '/images/kombucha.jpg',
}

type Props = {
  src: string
  alt: string
  className?: string
}

export function Photo({ src, alt, className }: Props) {
  const url = photos[src] ?? photos.tasting

  return (
    <div className={`photo ${className ?? ''}`}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  )
}
