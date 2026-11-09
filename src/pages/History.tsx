import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './History.css'
import ImageHero from '../components/ImageHero'

const MILESTONES = [
  { number: '2008', label: 'Founded' },
  { number: '17+', label: 'Years of Service' },
  { number: '3', label: 'School Sections' },
]

const CHAPTERS = [
  {
    key: 'founded',
    color: 'yellow',
    period: '2008',
    title: 'School Founded',
    body: 'Winners Family School opened its doors on 2nd September, 2008 at Bulemin-Gbawe, Accra — a small starting class with a big vision for disciplined, community-rooted education.',
    points: [] as { year: string; text: string }[],
  },
  {
    key: 'growth',
    color: 'pink',
    period: '2010 – 2013',
    title: 'Early Growth',
    body: 'The school expanded quickly in its first years, growing both its academic offering and its place in the Bulemin-Gbawe community.',
    points: [
      { year: '2010', text: 'Primary Section Established — Basic 1–6 classes added, completing the primary offering.' },
      { year: '2013', text: 'A Growing Community — more families entrusted their children to WFS each year.' },
    ],
  },
  {
    key: 'expansion',
    color: 'blue',
    period: '2014 – 2015',
    title: 'Full Expansion',
    body: 'WFS reached full Crèche-to-JHS continuity, and enrolment kept climbing as the school built a strong reputation locally.',
    points: [
      { year: '2014', text: 'JHS Section Launched — Form 1–3 introduced, enabling full Crèche-to-BECE continuity.' },
      { year: '2015', text: 'Expanding Year by Year — steady enrolment growth across all levels.' },
    ],
  },
  {
    key: 'today',
    color: 'yellow',
    period: 'Today',
    title: 'Still Growing',
    body: 'Ongoing expansion of facilities and programmes continues. New photos and updates from the current school will be added soon.',
    points: [] as { year: string; text: string }[],
  },
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
      <ImageHero label="About Us" title={<>Our History</>} image="/images/about/history-hero.jpg" position="center 60%">
        <p>
          From a small starting class in 2008 to a full Crèche-to-JHS institution — the story of Winners Family School.
        </p>
      </ImageHero>

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

      {/* ── History chapters ── */}
      <section className="history">
        <div className="container">
          <div className="history__header reveal">
            <span className="section-label">Our History</span>
            <h2>Over 17 Years of Service</h2>
            <p>Four chapters in the WFS story, from a single classroom to a full Crèche-to-JHS school.</p>
          </div>

          <div className="chapter-list">
            {CHAPTERS.map((c, i) => (
              <div className={`chapter-row chapter-row--${c.color} reveal`} key={c.key} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="chapter-row__rail" aria-hidden="true">
                  <span className="chapter-row__dot" />
                  {i < CHAPTERS.length - 1 && <span className="chapter-row__line" />}
                </div>
                <div className="chapter-row__body">
                  <span className="chapter-row__period">{c.period}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  {c.points.length > 0 && (
                    <ul className="chapter-row__points">
                      {c.points.map((p) => (
                        <li key={p.year}>
                          <span className="chapter-row__point-year">{p.year}</span>
                          {p.text}
                        </li>
                      ))}
                    </ul>
                  )}
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
