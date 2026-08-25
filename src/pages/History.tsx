import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './History.css'

const TIMELINE = [
  { year: '2008', color: 'yellow', title: 'School Founded', desc: 'Winners Family School opened its doors on 2nd September, 2008 at Bulemin-Gbawe, Accra.' },
  { year: '2010', color: 'pink', title: 'Primary Section Established', desc: 'Basic 1–6 classes were added, completing the primary school offering.' },
  { year: '2013', color: 'blue', title: 'A Growing Community', desc: 'The school continued to grow, with more families entrusting their children to WFS.' },
  { year: '2014', color: 'yellow', title: 'JHS Section Launched', desc: 'Form 1–3 Junior High School classes introduced, enabling full Crèche-to-BECE continuity.' },
  { year: '2015', color: 'pink', title: 'Expanding Year by Year', desc: 'Enrolment grew steadily as WFS built a strong reputation in the Bulemin-Gbawe community.' },
  { year: 'Today', color: 'blue', title: 'Still Growing', desc: 'Ongoing expansion of facilities and programmes. New photos of the current school coming soon.' },
]

const MILESTONES = [
  { number: '2008', label: 'Founded' },
  { number: '17+', label: 'Years of Service' },
  { number: '3', label: 'School Sections' },
]

function History() {
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
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <span className="section-label section-label--yellow">About Us</span>
          <h1>Our History</h1>
          <p>
            From a small starting class in 2008 to a full Crèche-to-JHS institution — the story of Winners Family School.
          </p>
        </div>
      </section>

      {/* ── Milestones strip ── */}
      <div className="milestones">
        <div className="container milestones__inner">
          {MILESTONES.map((m) => (
            <div className="milestone" key={m.label}>
              <span className="milestone__number">{m.number}</span>
              <span className="milestone__label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── History ── */}
      <section className="history">
        <div className="container">
          <div className="history__header reveal">
            <span className="section-label">Our History</span>
            <h2>Over 17 Years of Service</h2>
            <p>From a small starting class to a full Crèche-to-JHS institution.</p>
          </div>

          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div
                className={`timeline-entry timeline-entry--${item.color} reveal`}
                key={item.year}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="timeline-entry__year">{item.year}</span>
                <div className="timeline-entry__body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="history__gallery-cta reveal">
            <span>📸</span>
            <p>Browse the full photo archive — from the early days to recent years — in our <Link to="/gallery">Gallery</Link>. More current photos of the school will be added soon.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default History
