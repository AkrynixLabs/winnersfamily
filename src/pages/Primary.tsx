import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Primary.css'
import ImageHero from '../components/ImageHero'

const SUBJECTS = ['English Language', 'Mathematics', 'Integrated Science', 'Social Studies', 'Ghanaian Language', 'Creative Arts', 'RME', 'Computing', 'Physical Education']

const PHOTOS = [
  { src: '/images/academic/classroom-lesson.webp', alt: 'Pupils at their desks during a lesson' },
  { src: '/images/academic/bece-prep.webp', alt: 'Pupils working through exercises in class' },
  { src: '/images/community/visitors-1.webp', alt: 'Pupils welcoming a visiting group' },
]

function Primary() {
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
      <ImageHero label="Academics" title={<>Primary School</>} image="/images/excursions/trip-1.webp" position="center 45%">
        <p>Basic 1 – Basic 6</p>
      </ImageHero>

      {/* ── Content ── */}
      <section className="level-content">
        <div className="container">
          <div className="level-content__intro reveal">
            <span className="level-badge level-badge--pink">Primary</span>
            <h2>A Strong Academic Core</h2>
            <p className="level-content__desc">
              Our primary curriculum follows the Ghana Education Service syllabus with added emphasis on reading fluency and mathematical reasoning. Small class sizes allow teachers to identify and support each child's individual learning needs.
            </p>
            <Link to="/admissions/apply" className="btn btn-yellow">Apply for Primary</Link>
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
            <h2>Life in Primary School</h2>
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
          <span>Next: Junior High School (Form 1 – 3)</span>
          <Link to="/academics/jhs" className="level-next__link">Continue the journey →</Link>
        </div>
      </section>
    </>
  )
}

export default Primary
