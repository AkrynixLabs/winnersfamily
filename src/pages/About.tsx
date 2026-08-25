import { Link } from 'react-router-dom'
import './About.css'

const VALUES = [
  {
    icon: '⚖️',
    iconClass: 'value-card__icon--blue',
    title: 'Discipline',
    desc: 'A structured, respectful environment where students develop self-regulation and responsibility.',
  },
  {
    icon: '💡',
    iconClass: 'value-card__icon--yellow',
    title: 'Power',
    desc: 'Empowering every student with the confidence and capability to pursue their full potential.',
  },
  {
    icon: '📖',
    iconClass: 'value-card__icon--pink',
    title: 'Knowledge',
    desc: 'A rigorous academic foundation that equips students for further education and life.',
  },
]

const TIMELINE = [
  { year: '2008', title: 'School Founded', desc: 'Winners Family School opened its doors on 2nd September, 2008 at Bulemin-Gbawe, Accra.', img: '/images/school-founder-daddy.png', imgAlt: 'School founder' },
  { year: '2010', title: 'Primary Section Established', desc: 'Basic 1–6 classes were added, completing the primary school offering.', img: null, imgAlt: '' },
  { year: '2013', title: 'A Growing Community', desc: 'The school continued to grow, with more families entrusting their children to WFS.', img: '/images/2013-students.png', imgAlt: 'WFS students 2013' },
  { year: '2014', title: 'JHS Section Launched', desc: 'Form 1–3 Junior High School classes introduced, enabling full Crèche-to-BECE continuity.', img: '/images/2014-students.png', imgAlt: 'WFS students 2014' },
  { year: '2015', title: 'Expanding Year by Year', desc: 'Enrolment grew steadily as WFS built a strong reputation in the Bulemin-Gbawe community.', img: '/images/2015-students.png', imgAlt: 'WFS students 2015' },
  { year: 'Today', title: 'Still Growing', desc: 'Ongoing expansion of facilities and programmes. New photos of the current school coming soon.', img: null, imgAlt: '' },
]

const STAFF = [
  { name: 'School Leadership', role: 'Headmistress / Headmaster', img: '/images/mummy.png' },
  { name: 'Deputy Head', role: 'Academic Affairs', img: null },
  { name: 'Head of Primary', role: 'Basic 1 – 6', img: null },
  { name: 'Head of JHS', role: 'Form 1 – 3', img: null },
]

function About() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">About Us</span>
          <h1>Our Story, Values &amp; People</h1>
          <p>
            Founded in 2008, Winners Family School has been a cornerstone of education in the Bulemin-Gbawe community — built on discipline, empowerment, and a love of learning.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mission">
        <div className="container">
          <div className="mission__inner">
            <div>
              <span className="section-label">Our Mission</span>
              <h2>What We Stand For</h2>
              <p className="mission__body">
                Winners Family School exists to provide every child — from their earliest years through Junior High School — with a solid academic foundation, strong moral character, and the confidence to succeed in a changing world.
              </p>
              <p className="mission__body">
                We believe that excellence is not an accident. It is the result of a disciplined learning culture, dedicated teachers, and an engaged school community that pulls together for every child.
              </p>
            </div>
            <div className="mission__values">
              {VALUES.map((v) => (
                <div className="value-card" key={v.title}>
                  <div className={`value-card__icon ${v.iconClass}`}>{v.icon}</div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── History ── */}
      <section className="history">
        <div className="container">
          <div className="history__header">
            <span className="section-label">Our History</span>
            <h2>Over 17 Years of Service</h2>
            <p>From a small starting class to a full Crèche-to-JHS institution.</p>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-item__year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                {item.img && (
                  <div className="timeline-item__img">
                    <img src={item.img} alt={item.imgAlt} loading="lazy" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="history__gallery-cta">
            <span>📸</span>
            <p>Browse the full photo archive — from the early days to recent years — in our <Link to="/gallery">Gallery</Link>. More current photos of the school will be added soon.</p>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="leadership">
        <div className="container">
          <div className="leadership__header">
            <span className="section-label">Our Team</span>
            <h2>Leadership &amp; Staff</h2>
            <p>Staff profiles and photos will be updated soon.</p>
          </div>
          <div className="leadership__grid">
            {STAFF.map((s) => (
              <div className="staff-card" key={s.name}>
                <div className="staff-card__avatar">
                  {s.img
                    ? <img src={s.img} alt={s.name} />
                    : <span>👤</span>
                  }
                </div>
                <div className="staff-card__body">
                  <h4>{s.name}</h4>
                  <p>{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
