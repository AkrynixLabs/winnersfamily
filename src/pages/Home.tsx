import { Link } from 'react-router-dom'
import './Home.css'

// Real images woven into the homepage
const PHOTO_STRIP = [
  { src: '/images/brass-band.png', alt: 'WFS brass band performing' },
  { src: '/images/wear-ghana-day.png', alt: 'Students on Wear Ghana Day' },
  { src: '/images/winners-walk.png', alt: 'Students on the Winners Walk' },
  { src: '/images/bece-award.png', alt: 'BECE award ceremony' },
  { src: '/images/choreography.png', alt: 'Students performing choreography' },
  { src: '/images/excursion.png', alt: 'Students on a school excursion' },
]

const LEVELS = [
  {
    icon: '🌱',
    badge: 'Preschool',
    badgeClass: 'level-card__badge--yellow',
    title: 'Early Years',
    desc: 'Crèche, Nursery, and Kindergarten (KG 1 & 2). Focused on play-based learning, numeracy, literacy, and social development.',
  },
  {
    icon: '📚',
    badge: 'Primary',
    badgeClass: 'level-card__badge--pink',
    title: 'Basic 1 – 6',
    desc: 'A rigorous core curriculum in English, Mathematics, Science, and Social Studies, with strong emphasis on reading and problem-solving.',
  },
  {
    icon: '🎓',
    badge: 'JHS',
    badgeClass: 'level-card__badge--blue',
    title: 'Form 1 – 3',
    desc: 'Junior High School preparing students for the BECE, with additional support classes and extracurricular programmes.',
  },
]

function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div>
              <span className="hero__eyebrow">Est. 2nd September, 2008</span>
              <h1>
                Learning Built on <span>Discipline</span> &amp; Purpose
              </h1>
              <p className="hero__desc">
                Winners Family School provides quality education from Crèche through JHS at Bulemin-Gbawe, Accra. Shaping confident, knowledgeable graduates since 2008.
              </p>
              <div className="hero__actions">
                <Link to="/admissions" className="btn btn-yellow">Apply Now</Link>
                <Link to="/about" className="btn btn-outline-white">Learn More</Link>
              </div>
            </div>

            <div className="hero__stats">
              <div className="hero-stat">
                <span className="hero-stat__number">17+</span>
                <span className="hero-stat__label">Years of Excellence</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__number">3</span>
                <span className="hero-stat__label">School Levels</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__number">3</span>
                <span className="hero-stat__label">Terms Per Year</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__number">GH</span>
                <span className="hero-stat__label">Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Motto strip ── */}
      <div className="motto-strip">
        <div className="container motto-strip__inner">
          <span className="motto-item"><span className="motto-item__dot" />Discipline</span>
          <span className="motto-item"><span className="motto-item__dot" />Power</span>
          <span className="motto-item"><span className="motto-item__dot" />Knowledge</span>
        </div>
      </div>

      {/* ── Photo strip ── */}
      <div className="photo-strip">
        {PHOTO_STRIP.map((p) => (
          <div className="photo-strip__item" key={p.src}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* ── Overview ── */}
      <section className="overview">
        <div className="container">
          <div className="overview__inner">
            <div className="overview__content">
              <span className="section-label">About the School</span>
              <h2>Rooted in Community, Driven by Results</h2>
              <p className="overview__body">
                Founded in 2008, Winners Family School has grown into a trusted institution in the Bulemin-Gbawe community. We combine a structured Ghanaian curriculum with a culture of discipline and high expectations — from a child's earliest years through JHS graduation.
              </p>
              <div className="overview__pillars">
                <div className="pillar">
                  <div className="pillar__icon pillar__icon--yellow">🏆</div>
                  <div className="pillar__text">
                    <h4>Academic Excellence</h4>
                    <p>Strong BECE results and consistent performance across all levels.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar__icon pillar__icon--pink">❤️</div>
                  <div className="pillar__text">
                    <h4>Whole-Child Development</h4>
                    <p>Sports, arts, and character development alongside core academics.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar__icon pillar__icon--blue">👨‍👩‍👧</div>
                  <div className="pillar__text">
                    <h4>Family Partnership</h4>
                    <p>Active parent involvement and regular progress communication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview__visual">
              <div className="overview-card overview-card--blue">
                <span className="overview-card__number">2008</span>
                <span className="overview-card__label">Year Founded</span>
              </div>
              <div className="overview-card overview-card--pink">
                <span className="overview-card__number">3+</span>
                <span className="overview-card__label">School Sections</span>
              </div>
              <div className="overview-card overview-card--wide overview-card--yellow">
                <span className="overview-card__number">Bulemin-Gbawe, Accra</span>
                <span className="overview-card__label">Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Levels ── */}
      <section className="levels">
        <div className="container">
          <div className="levels__header">
            <span className="section-label section-label--yellow">Academic Levels</span>
            <h2>From Crèche to JHS</h2>
            <p>One school, multiple levels — giving your child a continuous, familiar learning environment all the way through.</p>
          </div>
          <div className="levels__grid">
            {LEVELS.map((level) => (
              <div className="level-card" key={level.title}>
                <span className="level-card__icon">{level.icon}</span>
                <span className={`level-card__badge ${level.badgeClass}`}>{level.badge}</span>
                <h3>{level.title}</h3>
                <p>{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <span className="section-label section-label--yellow">Enrol Today</span>
          <h2>Give Your Child the Best Start</h2>
          <p>
            Admissions are open year-round. Term 1 intake begins in September — apply early to secure a place.
          </p>
          <div className="home-cta__actions">
            <Link to="/admissions" className="btn btn-yellow">Start Application</Link>
            <Link to="/contact" className="btn btn-outline-white">Talk to Us First</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
