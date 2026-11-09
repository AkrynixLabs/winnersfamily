import type { ReactNode } from 'react'
import './ImageHero.css'

interface ImageHeroProps {
  label: string
  title: ReactNode
  children?: ReactNode
  image: string
  /** CSS object-position for the photo, e.g. "center 30%" */
  position?: string
  /**
   * "cover" (default): the photo fills the whole hero, cropped to fit.
   * "contain": the whole photo is shown on the right at a modest size, over a
   * blurred copy of itself — use for small/low-resolution photos.
   * "banner": the image already contains the page title (a ready-made banner);
   * it is shown whole with no shade, and the heading is kept for screen readers only.
   */
  fit?: 'cover' | 'contain' | 'banner'
}

/** Page hero with a photo behind a navy shade. */
function ImageHero({ label, title, children, image, position = 'center', fit = 'cover' }: ImageHeroProps) {
  if (fit === 'banner') {
    return (
      <section className="image-hero-banner">
        <div className="image-hero-banner__fill" aria-hidden="true" style={{ backgroundImage: `url(${image})` }} />
        <img className="image-hero-banner__img" src={image} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
        <div className="sr-only">
          <span>{label}</span>
          <h1>{title}</h1>
          {children}
        </div>
      </section>
    )
  }

  const contain = fit === 'contain'
  return (
    <section className={`image-hero${contain ? ' image-hero--contain' : ''}`}>
      <img
        className="image-hero__img"
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        style={contain ? undefined : { objectPosition: position }}
      />
      <div className="image-hero__overlay" aria-hidden="true" />
      <div className="container image-hero__content">
        <div className="image-hero__text">
          <span className="section-label section-label--yellow">{label}</span>
          <h1>{title}</h1>
          {children && <div className="image-hero__lead">{children}</div>}
        </div>
        {contain && <img className="image-hero__feature" src={image} alt="" aria-hidden="true" />}
      </div>
    </section>
  )
}

export default ImageHero
