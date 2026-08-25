import { useState } from 'react'
import './Gallery.css'

type GalleryItem = {
  src: string
  alt: string
  cat: string
  title: string
  caption: string
  year?: string
}

// All images grouped and ordered chronologically where known
const ITEMS: GalleryItem[] = [
  // ── History ──────────────────────────────────────────
  {
    src: '/images/old--school-flyer.png',
    alt: 'Early Winners Family School flyer',
    cat: 'History',
    title: 'Early Days',
    caption: 'An original school flyer from the early years',
    year: 'Early 2000s',
  },
  {
    src: '/images/school-founder-daddy.png',
    alt: 'School founder',
    cat: 'History',
    title: 'Our Founder',
    caption: 'The visionary behind Winners Family School, founded 2nd September 2008',
    year: '2008',
  },
  {
    src: '/images/mummy.png',
    alt: 'A member of the WFS school community',
    cat: 'History',
    title: 'Our Community',
    caption: 'The people who make Winners Family School what it is',
  },
  {
    src: '/images/2013-students.png',
    alt: 'WFS students in 2013',
    cat: 'History',
    title: 'Class of 2013',
    caption: 'Winners Family School students, 2013',
    year: '2013',
  },
  {
    src: '/images/2014-students.png',
    alt: 'WFS students in 2014',
    cat: 'History',
    title: 'Class of 2014',
    caption: 'Winners Family School students, 2014',
    year: '2014',
  },
  {
    src: '/images/2015-students.png',
    alt: 'WFS students in 2015',
    cat: 'History',
    title: 'Class of 2015',
    caption: 'Winners Family School students, 2015',
    year: '2015',
  },

  // ── Academic ──────────────────────────────────────────
  {
    src: '/images/computer-lab.png',
    alt: 'Students working in the computer laboratory',
    cat: 'Academic',
    title: 'Computer Lab',
    caption: 'ICT education at Winners Family School',
  },
  {
    src: '/images/students-study.png',
    alt: 'Students studying in class',
    cat: 'Academic',
    title: 'Study Time',
    caption: 'Focused learning in the classroom',
  },
  {
    src: '/images/bece-prep.png',
    alt: 'Students preparing for BECE exams',
    cat: 'Academic',
    title: 'BECE Preparation',
    caption: 'Form 3 students in final examination preparation',
  },
  {
    src: '/images/bece-assembly.png',
    alt: 'JHS students assembled for BECE orientation',
    cat: 'Academic',
    title: 'BECE Assembly',
    caption: 'JHS students gathered for examination briefing',
  },
  {
    src: '/images/bece-prep-covid.png',
    alt: 'BECE preparation during COVID-19 period',
    cat: 'Academic',
    title: 'BECE Prep — COVID Era',
    caption: 'Continuing education through challenging times, 2020',
  },
  {
    src: '/images/bece-covid-1.png',
    alt: 'Students during COVID-19 period',
    cat: 'Academic',
    title: 'Resilience Through COVID',
    caption: 'WFS students adapting and persevering in 2020',
  },
  {
    src: '/images/school-visits.png',
    alt: 'School inspection or visitor day',
    cat: 'Academic',
    title: 'School Visits',
    caption: 'Welcoming inspectors and visitors to WFS',
  },

  // ── Achievement ───────────────────────────────────────
  {
    src: '/images/bece-award.png',
    alt: 'Student receiving BECE award',
    cat: 'Achievement',
    title: 'BECE Awards',
    caption: 'Recognising outstanding BECE performance',
  },

  // ── Events / Culture ──────────────────────────────────
  {
    src: '/images/wear-ghana-day.png',
    alt: 'Students dressed in traditional Ghanaian attire on Wear Ghana Day',
    cat: 'Culture',
    title: 'Wear Ghana Day',
    caption: 'Celebrating Ghanaian identity and culture',
  },
  {
    src: '/images/traditional-dress.png',
    alt: 'Pupils in traditional dress at a cultural event',
    cat: 'Culture',
    title: 'Cultural Day',
    caption: 'Showcasing Ghana\'s rich cultural heritage',
  },
  {
    src: '/images/traditional-waer-kids.png',
    alt: 'Young pupils in traditional Ghanaian wear',
    cat: 'Culture',
    title: 'Little Ones, Big Culture',
    caption: 'Even the youngest students celebrate Ghanaian heritage',
  },
  {
    src: '/images/brass-band.png',
    alt: 'WFS brass band performing',
    cat: 'Culture',
    title: 'Brass Band',
    caption: 'The WFS brass band in performance',
  },
  {
    src: '/images/choreography.png',
    alt: 'Students performing choreography',
    cat: 'Culture',
    title: 'Choreography',
    caption: 'Students performing at a school event',
  },
  {
    src: '/images/students-dance.png',
    alt: 'Students dancing at a school event',
    cat: 'Culture',
    title: 'Dance Performance',
    caption: 'Creative arts and expression at WFS',
  },
  {
    src: '/images/vacation-celebrations.png',
    alt: 'Vacation and end-of-term celebrations',
    cat: 'Culture',
    title: 'End-of-Term Celebrations',
    caption: 'Marking the end of another successful term',
  },

  // ── Sports & Recreation ───────────────────────────────
  {
    src: '/images/pe-edu.png',
    alt: 'Students during physical education class',
    cat: 'Sports',
    title: 'Physical Education',
    caption: 'PE classes developing fitness and teamwork',
  },
  {
    src: '/images/games.png',
    alt: 'Students playing games',
    cat: 'Sports',
    title: 'Games & Play',
    caption: 'Recreation and play as part of school life',
  },
  {
    src: '/images/winners-walk.png',
    alt: 'Students on a walk or march',
    cat: 'Sports',
    title: 'Winners Walk',
    caption: 'Students on the move — the WFS community spirit',
  },

  // ── Excursions ────────────────────────────────────────
  {
    src: '/images/excursion.png',
    alt: 'Students on a school excursion',
    cat: 'Excursions',
    title: 'School Excursion',
    caption: 'Learning beyond the classroom',
  },
  {
    src: '/images/excursion-1.png',
    alt: 'Students enjoying a school trip',
    cat: 'Excursions',
    title: 'Educational Trip',
    caption: 'Field trips as part of our wider curriculum',
  },
  {
    src: '/images/excursion-2.png',
    alt: 'Another school excursion',
    cat: 'Excursions',
    title: 'Out &amp; About',
    caption: 'Exploring the world outside the classroom',
  },
]

const CATEGORIES = ['All', 'History', 'Academic', 'Achievement', 'Culture', 'Sports', 'Excursions']

function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  const [lbIndex, setLbIndex] = useState(0)

  const filtered = active === 'All' ? ITEMS : ITEMS.filter((i) => i.cat === active)

  function openLightbox(item: GalleryItem) {
    const idx = filtered.indexOf(item)
    setLbIndex(idx)
    setLightbox(item)
  }

  function navigate(dir: 1 | -1) {
    const next = (lbIndex + dir + filtered.length) % filtered.length
    setLbIndex(next)
    setLightbox(filtered[next])
  }

  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">Gallery</span>
          <h1>Through the Years</h1>
          <p>
            A visual journey through Winners Family School — from our earliest days to recent years. These photos capture the students, staff, events, and moments that define who we are. More recent photos coming soon.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="gallery-filters">
        <div className="container">
          <div className="gallery-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${active === cat ? 'is-active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="gallery-count">{filtered.length} photo{filtered.length !== 1 ? 's' : ''}</p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filtered.map((item) => (
              <div
                className="gallery-item"
                key={item.src}
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-item__img">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <div className="gallery-item__caption">
                  <div className="gallery-item__caption-top">
                    <h4>{item.title}</h4>
                    {item.year && <span className="gallery-year-badge">{item.year}</span>}
                  </div>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-notice">
            <span className="gallery-notice__icon">📸</span>
            <p>These photos document the school through the years. <strong>More recent photos of the school will be added soon.</strong></p>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button className="lightbox__close" aria-label="Close" onClick={() => setLightbox(null)}>✕</button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >‹</button>

          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="lightbox__caption">
              <div className="lightbox__caption-main">
                <strong>{lightbox.title}</strong>
                {lightbox.year && <span className="lightbox__year">{lightbox.year}</span>}
              </div>
              <span>{lightbox.caption}</span>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >›</button>

          <div className="lightbox__counter">{lbIndex + 1} / {filtered.length}</div>
        </div>
      )}
    </>
  )
}

export default Gallery
