import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import './Gallery.css'

type GalleryItem = {
  src: string
  alt: string
  cat: string // used only to keep related photos together
  w: number // real pixel size, so the album can reserve space before the image loads
  h: number
}

// Photos added from the school's Facebook page
const NEW_ITEMS: GalleryItem[] = [
  // ── 2020 BECE: Best Behaved School award ────────────────
  {
    src: '/images/achievement/bece-2020-certificate.jpg',
    alt: 'Certificate of Honour awarded to Winners Family School for the 2020 BECE',
    cat: 'Achievement',
    w: 581,
    h: 1032,
  },
  {
    src: '/images/achievement/bece-2020-celebration-1.jpg',
    alt: 'JHS students holding up the Certificate of Honour',
    cat: 'Achievement',
    w: 1032,
    h: 581,
  },
  {
    src: '/images/achievement/bece-2020-celebration-2.jpg',
    alt: 'Students holding up the Certificate of Honour',
    cat: 'Achievement',
    w: 1032,
    h: 581,
  },
  {
    src: '/images/achievement/bece-2020-class-group.jpg',
    alt: 'JHS class of 2020 posing in front of the school building',
    cat: 'Achievement',
    w: 1032,
    h: 581,
  },
  {
    src: '/images/achievement/bece-2020-boys-1.jpg',
    alt: 'JHS boys of the class of 2020',
    cat: 'Achievement',
    w: 1032,
    h: 581,
  },
  {
    src: '/images/achievement/bece-2020-boys-2.jpg',
    alt: 'JHS boys of the class of 2020 celebrating',
    cat: 'Achievement',
    w: 1032,
    h: 581,
  },
  {
    src: '/images/achievement/bece-2020-girls-1.jpg',
    alt: 'JHS girls of the class of 2020',
    cat: 'Achievement',
    w: 1032,
    h: 581,
  },
  {
    src: '/images/achievement/bece-2020-girls-2.jpg',
    alt: 'JHS girls posing on the school compound',
    cat: 'Achievement',
    w: 581,
    h: 1032,
  },
  {
    src: '/images/achievement/bece-2020-students.jpg',
    alt: 'JHS students smiling for the camera',
    cat: 'Achievement',
    w: 581,
    h: 1032,
  },
  {
    src: '/images/achievement/bece-2020-selfie-1.jpg',
    alt: 'Group selfie of JHS students',
    cat: 'Achievement',
    w: 1224,
    h: 1632,
  },
  {
    src: '/images/achievement/bece-2020-selfie-2.jpg',
    alt: 'Close group photo of JHS students',
    cat: 'Achievement',
    w: 1224,
    h: 1632,
  },

  // ── Academic ────────────────────────────────────────────
  {
    src: '/images/academic/covid-masks-1.jpg',
    alt: 'Students in uniform wearing face masks',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/covid-masks-2.jpg',
    alt: 'Students wearing face masks outside the school building',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/classroom-lesson.jpg',
    alt: 'Pupils in pink uniforms at their desks in a classroom',
    cat: 'Academic',
    w: 2048,
    h: 1152,
  },
  {
    src: '/images/academic/canopy-lesson.jpg',
    alt: 'A teacher leading a lesson for pupils seated under a canopy',
    cat: 'Academic',
    w: 206,
    h: 206,
  },

  // ── Community ───────────────────────────────────────────
  {
    src: '/images/community/event-speaker.jpg',
    alt: 'A man in a maroon blazer speaking into a microphone',
    cat: 'Community',
    w: 780,
    h: 1040,
  },
  {
    src: '/images/community/visitors-1.jpg',
    alt: 'A visiting group in blue shirts sitting with pupils',
    cat: 'Community',
    w: 2048,
    h: 1536,
  },
  {
    src: '/images/community/visitors-2.jpg',
    alt: 'A visitor seated next to a member of staff',
    cat: 'Community',
    w: 206,
    h: 206,
  },
  {
    src: '/images/community/visiting-minister.jpg',
    alt: 'A clergyman in vestments standing in a classroom doorway',
    cat: 'Community',
    w: 206,
    h: 206,
  },
  {
    src: '/images/community/school-assembly.jpg',
    alt: 'Pupils gathered in the school courtyard',
    cat: 'Community',
    w: 206,
    h: 206,
  },
  {
    src: '/images/community/i-am-a-winner.jpg',
    alt: 'Pupils outside the school under an "I am a winner" sign',
    cat: 'Community',
    w: 206,
    h: 206,
  },

  // ── Culture ─────────────────────────────────────────────
  {
    src: '/images/culture/dance-routine.jpg',
    alt: 'Students in white tops performing a dance routine',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/art-display.jpg',
    alt: 'Pupils and staff posing with a painting of a waterfall',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/traditional-attire-2.jpg',
    alt: 'A man dressed in kente on the school compound',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/traditional-attire-3.jpg',
    alt: 'Two students in kente and smock',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/traditional-attire-4.jpg',
    alt: 'A group of pupils in traditional attire',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/traditional-attire-5.jpg',
    alt: 'Staff and pupils celebrating in traditional wear',
    cat: 'Culture',
    w: 206,
    h: 206,
  },

  // ── Excursions ──────────────────────────────────────────
  {
    src: '/images/excursions/adventure-park-1.jpg',
    alt: 'Students walking through an outdoor adventure park',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/adventure-park-2.jpg',
    alt: 'A student in a school polo shirt on the excursion',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/adventure-park-3.jpg',
    alt: 'Two students with a teacher at the park',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/life-jackets-1.jpg',
    alt: 'Two students wearing life jackets',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/life-jackets-2.jpg',
    alt: 'A group of students wearing life jackets',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/life-jackets-3.jpg',
    alt: 'Students and a teacher in life jackets',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/break-time.jpg',
    alt: 'Students seated outdoors during the excursion',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/lunch-break-1.jpg',
    alt: 'Students eating lunch outdoors',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/lunch-break-2.jpg',
    alt: 'Students eating lunch seated in a circle',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/queue.jpg',
    alt: 'Students queueing behind a rope barrier',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/canopy-walkway-1.jpg',
    alt: 'Students crossing a rope canopy walkway above the trees',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/playground.jpg',
    alt: 'Students at a playground during the excursion',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
]

// Original site photos
const BASE_ITEMS: GalleryItem[] = [
  // ── History ─────────────────────────────────────────────
  {
    src: '/images/history/school-founder.png',
    alt: 'School founder',
    cat: 'History',
    w: 780,
    h: 1040,
  },
  {
    src: '/images/history/mummy.png',
    alt: 'A member of the WFS school community',
    cat: 'History',
    w: 206,
    h: 206,
  },
  {
    src: '/images/history/students-2014.png',
    alt: 'WFS students in 2014',
    cat: 'History',
    w: 206,
    h: 206,
  },
  {
    src: '/images/history/students-2015.png',
    alt: 'WFS students in 2015',
    cat: 'History',
    w: 960,
    h: 720,
  },

  // ── Academic ────────────────────────────────────────────
  {
    src: '/images/academic/computer-lab.png',
    alt: 'Students working in the computer laboratory',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/students-study.png',
    alt: 'Students studying in class',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/bece-prep.png',
    alt: 'Students preparing for BECE exams',
    cat: 'Academic',
    w: 2048,
    h: 1536,
  },
  {
    src: '/images/academic/bece-assembly.png',
    alt: 'JHS students assembled for BECE orientation',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/bece-prep-covid.png',
    alt: 'BECE preparation during COVID-19 period',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/bece-covid.png',
    alt: 'Students during COVID-19 period',
    cat: 'Academic',
    w: 206,
    h: 206,
  },
  {
    src: '/images/academic/school-visits.png',
    alt: 'School inspection or visitor day',
    cat: 'Academic',
    w: 206,
    h: 206,
  },

  // ── Achievement ─────────────────────────────────────────
  {
    src: '/images/achievement/bece-award.png',
    alt: 'Student receiving BECE award',
    cat: 'Achievement',
    w: 206,
    h: 206,
  },

  // ── Culture ─────────────────────────────────────────────
  {
    src: '/images/culture/wear-ghana-day.png',
    alt: 'Students dressed in traditional Ghanaian attire on Wear Ghana Day',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/traditional-dress.png',
    alt: 'Pupils in traditional dress at a cultural event',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/traditional-wear-kids.png',
    alt: 'Young pupils in traditional Ghanaian wear',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/brass-band.png',
    alt: 'WFS brass band performing',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/choreography.png',
    alt: 'Students performing choreography',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/students-dance.png',
    alt: 'Students dancing at a school event',
    cat: 'Culture',
    w: 206,
    h: 206,
  },
  {
    src: '/images/culture/vacation-celebrations.png',
    alt: 'Vacation and end-of-term celebrations',
    cat: 'Culture',
    w: 206,
    h: 206,
  },

  // ── Sports & Recreation ─────────────────────────────────
  {
    src: '/images/sports/physical-education.png',
    alt: 'Students during physical education class',
    cat: 'Sports',
    w: 206,
    h: 206,
  },
  {
    src: '/images/sports/games.png',
    alt: 'Students playing games',
    cat: 'Sports',
    w: 206,
    h: 206,
  },
  {
    src: '/images/sports/winners-walk.png',
    alt: 'Students on a walk or march',
    cat: 'Sports',
    w: 206,
    h: 206,
  },

  // ── Excursions ──────────────────────────────────────────
  {
    src: '/images/excursions/trip-1.png',
    alt: 'Students on a school excursion',
    cat: 'Excursions',
    w: 1008,
    h: 567,
  },
  {
    src: '/images/excursions/trip-2.png',
    alt: 'Students enjoying a school trip',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
  {
    src: '/images/excursions/trip-3.png',
    alt: 'Another school excursion',
    cat: 'Excursions',
    w: 206,
    h: 206,
  },
]

const CATEGORY_ORDER = ['History', 'Academic', 'Achievement', 'Community', 'Culture', 'Sports', 'Excursions']

// Merge and group by category (stable sort keeps the order within each group)
// Photos placed at the end of the album, after the category-sorted ones
const END_ITEMS: GalleryItem[] = [
  {
    src: '/images/community/students-selfie.jpg',
    alt: 'Group selfie of smiling students in white shirts and dark blazers',
    cat: 'Community',
    w: 206,
    h: 206,
  },
]

const ITEMS: GalleryItem[] = [
  ...[...BASE_ITEMS, ...NEW_ITEMS].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.cat) - CATEGORY_ORDER.indexOf(b.cat),
  ),
  ...END_ITEMS,
]

// Small, repeatable tilt for each print (-1.2deg … 1.2deg) so the album feels hand-laid
const tiltFor = (i: number) => (((i * 37) % 7) - 3) * 0.4

function Gallery() {
  const [lbIndex, setLbIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const albumRef = useRef<HTMLDivElement>(null)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const touchX = useRef<number | null>(null)

  const current = lbIndex === null ? null : ITEMS[lbIndex]

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir === 1 ? 'next' : 'prev')
    setLbIndex((i) => (i === null ? i : (i + dir + ITEMS.length) % ITEMS.length))
  }, [])

  const jump = (i: number) => {
    setDirection(lbIndex !== null && i < lbIndex ? 'prev' : 'next')
    setLbIndex(i)
  }

  // Reveal prints as they scroll into view (each print reserves its real size, so the
  // layout is stable before images load). Prints already scrolled past reveal too.
  useEffect(() => {
    const photos = albumRef.current?.querySelectorAll<HTMLElement>('.album__photo')
    if (!photos) return
    if (!('IntersectionObserver' in window)) {
      photos.forEach((p) => p.classList.add('is-in'))
      return
    }
    const reveal = (el: Element) => {
      el.classList.add('is-in')
      io.unobserve(el)
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting || e.boundingClientRect.bottom < 0)) return
        // Reveal everything that has reached the screen, including prints above it that a
        // fast scroll or jump skipped over (they never "enter" the screen on their own).
        const fold = window.innerHeight * 0.92
        photos.forEach((p) => {
          if (!p.classList.contains('is-in') && p.getBoundingClientRect().top < fold) reveal(p)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    photos.forEach((p) => io.observe(p))
    return () => io.disconnect()
  }, [])

  // Keyboard controls, locked page scroll, and keep the active thumbnail in view
  useEffect(() => {
    if (lbIndex === null) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setLbIndex(null)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    thumbsRef.current
      ?.querySelector<HTMLElement>('.lightbox__thumb.is-active')
      ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [lbIndex, go])

  return (
    <>
      {/* ── Photo album ── */}
      <section className="gallery-section">
        <div className="gallery-section__glow" aria-hidden="true" />
        <div className="container">
          <h1 className="sr-only">Gallery</h1>
          <div className="album" ref={albumRef}>
            {ITEMS.map((item, i) => (
              <button
                type="button"
                className="album__photo"
                key={item.src}
                style={{ '--tilt': `${tiltFor(i)}deg`, '--delay': `${(i % 4) * 90}ms` } as CSSProperties}
                onClick={() => jump(i)}
                aria-label={`Open photo: ${item.alt}`}
              >
                <span className="album__frame">
                  <img src={item.src} alt={item.alt} width={item.w} height={item.h} loading="lazy" decoding="async" />
                  <span className="album__shade" aria-hidden="true">
                    <span className="album__zoom">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {current && lbIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setLbIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            touchX.current = null
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
          }}
        >
          <div className="lightbox__top" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox__counter">{lbIndex + 1} / {ITEMS.length}</span>
            <button className="lightbox__close" aria-label="Close" onClick={() => setLbIndex(null)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>

          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); go(-1) }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>

          <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <img
              key={lbIndex}
              className={`lightbox__img lightbox__img--${direction}`}
              src={current.src}
              alt={current.alt}
            />
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); go(1) }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>

          <div className="lightbox__thumbs" ref={thumbsRef} onClick={(e) => e.stopPropagation()}>
            {ITEMS.map((item, i) => (
              <button
                type="button"
                key={item.src}
                className={`lightbox__thumb${i === lbIndex ? ' is-active' : ''}`}
                onClick={() => jump(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === lbIndex ? 'true' : undefined}
              >
                <img src={item.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
