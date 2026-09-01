import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Academics.css'

const LEVELS = [
  { color: 'yellow', badge: 'Preschool', title: 'Early Years', range: 'Crèche · Nursery · KG 1 & 2', to: '/academics/early-years' },
  { color: 'pink', badge: 'Primary', title: 'Primary School', range: 'Basic 1 – Basic 6', to: '/academics/primary' },
  { color: 'blue', badge: 'JHS', title: 'Junior High School', range: 'Form 1 – Form 3 (JHS)', to: '/academics/jhs' },
]

function Academics() {
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
          <h1>Our Curriculum &amp; School Levels</h1>
          <p>
            From Crèche to JHS Form 3 — a continuous, high-quality education delivered under one roof at Bulemin-Gbawe, Accra.
          </p>
        </div>
      </section>

      {/* ── Levels overview ── */}
      <section className="levels-overview">
        <div className="container">
          <div className="levels-overview__header reveal">
            <span className="section-label">School Levels</span>
            <h2>What We Offer</h2>
            <p>Three levels, one continuous journey. Select a level to see its full curriculum, subjects, and photos.</p>
          </div>

          <div className="levels-overview__grid">
            {LEVELS.map((level, i) => (
              <Link
                to={level.to}
                className={`level-preview level-preview--${level.color} reveal`}
                key={level.title}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="level-preview__badge">{level.badge}</span>
                <h3>{level.title}</h3>
                <span className="level-preview__range">{level.range}</span>
                <span className="level-preview__cta">
                  View details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic Calendar ── */}
      <section className="academic-calendar">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Academic Calendar</span>
            <h2>Three Terms Per Year</h2>
            <p>Winners Family School follows the Ghana Education Service academic calendar.</p>
          </div>
          <div className="terms-grid">
            <div className="term-card reveal" style={{ transitionDelay: '0ms' }}>
              <div className="term-card__number term-card__number--yellow">First Term</div>
              <h3>September – December</h3>
              <p>Main intake period. New student enrolment prioritised. Ends with end-of-term examinations before the Christmas break.</p>
            </div>
            <div className="term-card reveal" style={{ transitionDelay: '100ms' }}>
              <div className="term-card__number term-card__number--pink">Second Term</div>
              <h3>January – April</h3>
              <p>Resumption after Christmas. Mid-year assessments and inter-school activities. Ends with Easter break.</p>
            </div>
            <div className="term-card reveal" style={{ transitionDelay: '200ms' }}>
              <div className="term-card__number term-card__number--blue">Third Term</div>
              <h3>May – August</h3>
              <p>Final term. JHS students sit BECE. End-of-year examinations and graduation for completing students.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics
