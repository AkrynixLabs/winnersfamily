import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './EarlyYears.css'

const SUBJECTS = ['Literacy', 'Numeracy', 'Creative Arts', 'Physical Education', 'Rhymes & Songs', 'Social Skills']

const PHOTOS = [
  { src: '/images/vacation-celebrations.png', alt: 'Early years pupils with their teacher' },
  { src: '/images/traditional-waer-kids.png', alt: 'Young pupils dressed in traditional wear' },
  { src: '/images/games.png', alt: 'Pupils enjoying an outdoor school game' },
]

function EarlyYears() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">Academics</span>
          <h1>Early Years</h1>
          <p>Crèche · Nursery · KG 1 &amp; 2</p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="level-content">
        <div className="container">
          <div className="level-content__intro reveal">
            <span className="level-badge level-badge--yellow">Preschool</span>
            <h2>A Warm Start to School Life</h2>
            <p className="level-content__desc">
              Our early years programme provides a warm, nurturing introduction to school life. Through play-based activities, children develop foundational literacy, numeracy, and social skills that prepare them confidently for primary school.
            </p>
            <Link to="/admissions/apply" className="btn btn-yellow">Apply for Early Years</Link>
          </div>

          <div className="level-curriculum reveal">
            <span className="level-curriculum__label">Subjects Offered</span>
            <div className="subject-tags">
              {SUBJECTS.map((s) => (
                <span className="subject-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pictures ── */}
      <section className="level-gallery">
        <div className="container">
          <div className="level-gallery__header reveal">
            <span className="section-label">Gallery</span>
            <h2>Life in Early Years</h2>
          </div>
          <div className="level-gallery__grid">
            {PHOTOS.map((p, i) => (
              <div className="level-photo reveal" key={p.src} style={{ transitionDelay: `${i * 100}ms` }}>
                <img src={p.src} alt={p.alt} loading="lazy" />
                <div className="level-photo__overlay">
                  <span>{p.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next level ── */}
      <section className="level-next">
        <div className="container level-next__inner">
          <span>Next: Primary School (Basic 1 – 6)</span>
          <Link to="/academics/primary" className="level-next__link">Continue the journey →</Link>
        </div>
      </section>
    </>
  )
}

export default EarlyYears
