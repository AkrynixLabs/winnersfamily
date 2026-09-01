import { useEffect } from 'react'
import './Team.css'

const LEADERSHIP = [
  {
    key: 'founder',
    color: 'yellow',
    name: 'Our Founder',
    role: 'Founded WFS · 2008',
    img: '/images/school-founder-daddy.png',
    bio: 'Opened the doors of Winners Family School on 2nd September, 2008, with a vision for disciplined, community-rooted education in Bulemin-Gbawe.',
  },
  {
    key: 'head',
    color: 'pink',
    name: 'School Leadership',
    role: 'Headmistress / Headmaster',
    img: '/images/mummy.png',
    bio: 'Oversees day-to-day school operations, staff development, and the discipline-first culture that defines WFS.',
  },
]

const STAFF = [
  { name: 'Deputy Head', role: 'Academic Affairs', initials: 'DH', color: 'yellow' },
  { name: 'Head of Primary', role: 'Basic 1 – 6', initials: 'HP', color: 'pink' },
  { name: 'Head of JHS', role: 'Form 1 – 3', initials: 'HJ', color: 'blue' },
]

function Team() {
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
          <span className="section-label section-label--yellow">About Us</span>
          <h1>Our Team</h1>
          <p>
            The leadership and staff guiding Winners Family School, from the Headmistress's office to every classroom.
          </p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="leadership">
        <div className="container">
          <div className="leadership__header reveal">
            <span className="section-label">Our Team</span>
            <h2>Leadership &amp; Staff</h2>
            <p>Meet the people guiding Winners Family School day to day. More staff profiles will be added soon.</p>
          </div>

          <div className="leadership__spotlight">
            {LEADERSHIP.map((p, i) => (
              <div
                className={`spotlight-card spotlight-card--${p.color} reveal`}
                key={p.key}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="spotlight-card__photo">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="spotlight-card__body">
                  <h3>{p.name}</h3>
                  <span className="spotlight-card__role">{p.role}</span>
                  <p>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="leadership__grid">
            {STAFF.map((s, i) => (
              <div
                className={`staff-card staff-card--${s.color} reveal`}
                key={s.name}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="staff-card__avatar">{s.initials}</span>
                <h4>{s.name}</h4>
                <p>{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
