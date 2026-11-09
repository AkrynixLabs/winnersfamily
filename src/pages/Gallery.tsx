import { useEffect, useState } from 'react'
import './Gallery.css'

type GalleryItem = {
  src: string
  alt: string
  cat: string // used only to keep related photos together
}

// Photos added from the school's Facebook page
const NEW_ITEMS: GalleryItem[] = [
  // ── 2020 BECE: Best Behaved School award ────────────────
  {
    src: '/images/achievement/bece-2020-certificate.jpg',
    alt: 'Certificate of Honour awarded to Winners Family School for the 2020 BECE',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-celebration-1.jpg',
    alt: 'JHS students holding up the Certificate of Honour',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-celebration-2.jpg',
    alt: 'Students holding up the Certificate of Honour',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-class-group.jpg',
    alt: 'JHS class of 2020 posing in front of the school building',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-boys-1.jpg',
    alt: 'JHS boys of the class of 2020',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-boys-2.jpg',
    alt: 'JHS boys of the class of 2020 celebrating',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-girls-1.jpg',
    alt: 'JHS girls of the class of 2020',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-girls-2.jpg',
    alt: 'JHS girls posing on the school compound',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-students.jpg',
    alt: 'JHS students smiling for the camera',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-selfie-1.jpg',
    alt: 'Group selfie of JHS students',
    cat: 'Achievement',
  },
  {
    src: '/images/achievement/bece-2020-selfie-2.jpg',
    alt: 'Close group photo of JHS students',
    cat: 'Achievement',
  },

  // ── Academic ────────────────────────────────────────────
  {
    src: '/images/academic/covid-masks-1.jpg',
    alt: 'Students in uniform wearing face masks',
    cat: 'Academic',
  },
  {
    src: '/images/academic/covid-masks-2.jpg',
    alt: 'Students wearing face masks outside the school building',
    cat: 'Academic',
  },
  {
    src: '/images/academic/classroom-lesson.jpg',
    alt: 'Pupils in pink uniforms at their desks in a classroom',
    cat: 'Academic',
  },
  {
    src: '/images/academic/canopy-lesson.jpg',
    alt: 'A teacher leading a lesson for pupils seated under a canopy',
    cat: 'Academic',
  },

  // ── Community ───────────────────────────────────────────
  {
    src: '/images/community/event-speaker.jpg',
    alt: 'A man in a maroon blazer speaking into a microphone',
    cat: 'Community',
  },
  {
    src: '/images/community/visitors-1.jpg',
    alt: 'A visiting group in blue shirts sitting with pupils',
    cat: 'Community',
  },
  {
    src: '/images/community/visitors-2.jpg',
    alt: 'A visitor seated next to a member of staff',
    cat: 'Community',
  },
  {
    src: '/images/community/visiting-minister.jpg',
    alt: 'A clergyman in vestments standing in a classroom doorway',
    cat: 'Community',
  },
  {
    src: '/images/community/school-assembly.jpg',
    alt: 'Pupils gathered in the school courtyard',
    cat: 'Community',
  },
  {
    src: '/images/community/i-am-a-winner.jpg',
    alt: 'Pupils outside the school under an "I am a winner" sign',
    cat: 'Community',
  },

  // ── Culture ─────────────────────────────────────────────
  {
    src: '/images/culture/dance-routine.jpg',
    alt: 'Students in white tops performing a dance routine',
    cat: 'Culture',
  },
  {
    src: '/images/culture/art-display.jpg',
    alt: 'Pupils and staff posing with a painting of a waterfall',
    cat: 'Culture',
  },
  {
    src: '/images/culture/traditional-attire-2.jpg',
    alt: 'A man dressed in kente on the school compound',
    cat: 'Culture',
  },
  {
    src: '/images/culture/traditional-attire-3.jpg',
    alt: 'Two students in kente and smock',
    cat: 'Culture',
  },
  {
    src: '/images/culture/traditional-attire-4.jpg',
    alt: 'A group of pupils in traditional attire',
    cat: 'Culture',
  },
  {
    src: '/images/culture/traditional-attire-5.jpg',
    alt: 'Staff and pupils celebrating in traditional wear',
    cat: 'Culture',
  },

  // ── Excursions ──────────────────────────────────────────
  {
    src: '/images/excursions/adventure-park-1.jpg',
    alt: 'Students walking through an outdoor adventure park',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/adventure-park-2.jpg',
    alt: 'A student in a school polo shirt on the excursion',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/adventure-park-3.jpg',
    alt: 'Two students with a teacher at the park',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/life-jackets-1.jpg',
    alt: 'Two students wearing life jackets',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/life-jackets-2.jpg',
    alt: 'A group of students wearing life jackets',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/life-jackets-3.jpg',
    alt: 'Students and a teacher in life jackets',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/break-time.jpg',
    alt: 'Students seated outdoors during the excursion',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/lunch-break-1.jpg',
    alt: 'Students eating lunch outdoors',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/lunch-break-2.jpg',
    alt: 'Students eating lunch seated in a circle',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/queue.jpg',
    alt: 'Students queueing behind a rope barrier',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/canopy-walkway-1.jpg',
    alt: 'Students crossing a rope canopy walkway above the trees',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/playground.jpg',
    alt: 'Students at a playground during the excursion',
    cat: 'Excursions',
  },
]

// Original site photos
const BASE_ITEMS: GalleryItem[] = [
  // ── History ─────────────────────────────────────────────
  {
    src: '/images/history/school-founder.png',
    alt: 'School founder',
    cat: 'History',
  },
  {
    src: '/images/history/mummy.png',
    alt: 'A member of the WFS school community',
    cat: 'History',
  },
  {
    src: '/images/history/students-2013.png',
    alt: 'WFS students in 2013',
    cat: 'History',
  },
  {
    src: '/images/history/students-2014.png',
    alt: 'WFS students in 2014',
    cat: 'History',
  },
  {
    src: '/images/history/students-2015.png',
    alt: 'WFS students in 2015',
    cat: 'History',
  },

  // ── Academic ────────────────────────────────────────────
  {
    src: '/images/academic/computer-lab.png',
    alt: 'Students working in the computer laboratory',
    cat: 'Academic',
  },
  {
    src: '/images/academic/students-study.png',
    alt: 'Students studying in class',
    cat: 'Academic',
  },
  {
    src: '/images/academic/bece-prep.png',
    alt: 'Students preparing for BECE exams',
    cat: 'Academic',
  },
  {
    src: '/images/academic/bece-assembly.png',
    alt: 'JHS students assembled for BECE orientation',
    cat: 'Academic',
  },
  {
    src: '/images/academic/bece-prep-covid.png',
    alt: 'BECE preparation during COVID-19 period',
    cat: 'Academic',
  },
  {
    src: '/images/academic/bece-covid.png',
    alt: 'Students during COVID-19 period',
    cat: 'Academic',
  },
  {
    src: '/images/academic/school-visits.png',
    alt: 'School inspection or visitor day',
    cat: 'Academic',
  },

  // ── Achievement ─────────────────────────────────────────
  {
    src: '/images/achievement/bece-award.png',
    alt: 'Student receiving BECE award',
    cat: 'Achievement',
  },

  // ── Culture ─────────────────────────────────────────────
  {
    src: '/images/culture/wear-ghana-day.png',
    alt: 'Students dressed in traditional Ghanaian attire on Wear Ghana Day',
    cat: 'Culture',
  },
  {
    src: '/images/culture/traditional-dress.png',
    alt: 'Pupils in traditional dress at a cultural event',
    cat: 'Culture',
  },
  {
    src: '/images/culture/traditional-wear-kids.png',
    alt: 'Young pupils in traditional Ghanaian wear',
    cat: 'Culture',
  },
  {
    src: '/images/culture/brass-band.png',
    alt: 'WFS brass band performing',
    cat: 'Culture',
  },
  {
    src: '/images/culture/choreography.png',
    alt: 'Students performing choreography',
    cat: 'Culture',
  },
  {
    src: '/images/culture/students-dance.png',
    alt: 'Students dancing at a school event',
    cat: 'Culture',
  },
  {
    src: '/images/culture/vacation-celebrations.png',
    alt: 'Vacation and end-of-term celebrations',
    cat: 'Culture',
  },

  // ── Sports & Recreation ─────────────────────────────────
  {
    src: '/images/sports/physical-education.png',
    alt: 'Students during physical education class',
    cat: 'Sports',
  },
  {
    src: '/images/sports/games.png',
    alt: 'Students playing games',
    cat: 'Sports',
  },
  {
    src: '/images/sports/winners-walk.png',
    alt: 'Students on a walk or march',
    cat: 'Sports',
  },

  // ── Excursions ──────────────────────────────────────────
  {
    src: '/images/excursions/trip-1.png',
    alt: 'Students on a school excursion',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/trip-2.png',
    alt: 'Students enjoying a school trip',
    cat: 'Excursions',
  },
  {
    src: '/images/excursions/trip-3.png',
    alt: 'Another school excursion',
    cat: 'Excursions',
  },
]

const CATEGORY_ORDER = ['History', 'Academic', 'Achievement', 'Community', 'Culture', 'Sports', 'Excursions']

// Merge and group by category (stable sort keeps the order within each group)
const ITEMS: GalleryItem[] = [...BASE_ITEMS, ...NEW_ITEMS].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a.cat) - CATEGORY_ORDER.indexOf(b.cat),
)

function Gallery() {
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const current = lbIndex === null ? null : ITEMS[lbIndex]

  function navigate(dir: 1 | -1) {
    setLbIndex((i) => (i === null ? i : (i + dir + ITEMS.length) % ITEMS.length))
  }

  useEffect(() => {
    if (lbIndex === null) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setLbIndex(null)
      else if (e.key === 'ArrowLeft') setLbIndex((i) => (i === null ? i : (i - 1 + ITEMS.length) % ITEMS.length))
      else if (e.key === 'ArrowRight') setLbIndex((i) => (i === null ? i : (i + 1) % ITEMS.length))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lbIndex])

  return (
    <>
      {/* ── Photo album ── */}
      <section className="gallery-section">
        <div className="container">
          <h1 className="sr-only">Gallery</h1>
          <div className="album">
            {ITEMS.map((item, i) => (
              <button
                type="button"
                className="album__photo"
                key={item.src}
                style={{ animationDelay: `${Math.min(i, 16) * 30}ms` }}
                onClick={() => setLbIndex(i)}
                aria-label={`Open photo: ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
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
        >
          <button className="lightbox__close" aria-label="Close" onClick={() => setLbIndex(null)}>✕</button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >‹</button>

          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >›</button>

          <div className="lightbox__counter">{lbIndex + 1} / {ITEMS.length}</div>
        </div>
      )}
    </>
  )
}

export default Gallery
