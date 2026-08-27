import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './JuniorHigh.css'

const SUBJECTS = ['English Language', 'Mathematics', 'Integrated Science', 'Social Studies', 'RME', 'BDT', 'French', 'ICT', 'Ghanaian Language', 'Physical Education']

const PHOTOS = [
  { src: '/images/bece-prep.png', alt: 'JHS students in a BECE preparation class' },
  { src: '/images/bece-award.png', alt: 'Students celebrating a BECE award' },
  { src: '/images/bece-assembly.png', alt: 'JHS students at morning assembly' },
]

function JuniorHigh() {
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
          <h1>Junior High School</h1>
          <p>Form 1 – Form 3 (JHS)</p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="level-content">
        <div className="container">
          <div className="level-content__intro reveal">
            <span className="level-badge level-badge--blue">JHS</span>
            <h2>BECE-Ready, Every Year</h2>
            <p className="level-content__desc">
              JHS prepares students for the Basic Education Certificate Examination (BECE). We provide structured revision programmes, past-question practice, and subject-specific support to ensure every student is BECE-ready.
            </p>
            <Link to="/admissions/apply" className="btn btn-yellow">Apply for JHS</Link>
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
            <h2>Life in Junior High School</h2>
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

      {/* ── Next step ── */}
      <section className="level-next">
        <div className="container level-next__inner">
          <span>Ready to take the next step?</span>
          <Link to="/admissions/apply" className="level-next__link">Start an application →</Link>
        </div>
      </section>
    </>
  )
}

export default JuniorHigh
