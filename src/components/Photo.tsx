import { useId } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
}

export function Photo({ src, alt, className }: Props) {
  const id = useId().replace(/:/g, '')

  return (
    <div className={`photo ${className ?? ''}`} role="img" aria-label={alt}>
      <div className={`photo-art photo-art--${src}`} />
      <svg className="photo-grain" aria-hidden="true">
        <filter id={`grain-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${id})`} opacity="0.18" />
      </svg>
    </div>
  )
}
