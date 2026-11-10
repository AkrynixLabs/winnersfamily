import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'

// Hero background video; the poster shows while it loads and when motion is reduced
const HERO_VIDEO = '/videos/school-video.mp4'

// "Life at WFS" grid: high-resolution photos only (first one is the large feature tile)
const PHOTO_STRIP = [
  { src: '/images/achievement/bece-2020-celebration-2.webp', alt: 'Celebrating the 2020 BECE Best Behaved School award' },
  { src: '/images/academic/classroom-lesson.webp', alt: 'Pupils at their desks during a lesson' },
  { src: '/images/academic/bece-prep.webp', alt: 'Form 3 students preparing for the BECE' },
  { src: '/images/community/visitors-1.webp', alt: 'A visiting group spending time with our pupils' },
  { src: '/images/achievement/bece-2020-boys-2.webp', alt: 'The class of 2020 celebrating together' },
  { src: '/images/history/students-2015.webp', alt: 'Winners Family School students, 2015' },
]

const PILLARS = [
  {
    key: 'discipline',
    num: '01',
    color: 'yellow',
    title: 'Discipline',
    desc: 'Structured routines and clear expectations that build focus, respect, and self-control from an early age.',
  },
  {
    key: 'power',
    num: '02',
    color: 'pink',
    title: 'Power',
    desc: 'Confidence and inner strength nurtured through sports, the arts, and everyday leadership opportunities.',
  },
  {
    key: 'knowledge',
    num: '03',
    color: 'blue',
    title: 'Knowledge',
    desc: 'A rigorous academic foundation across every level that prepares each child for what comes next.',
  },
]

const LEVELS = [
  {
    color: 'blue',
    badge: 'Preschool',
    badgeClass: 'level-card__badge--blue',
    title: 'Early Years',
    desc: 'Crèche, Nursery, and Kindergarten (KG 1 & 2). Focused on play-based learning, numeracy, literacy, and social development.',
  },
  {
    color: 'pink',
    badge: 'Primary',
    badgeClass: 'level-card__badge--pink',
    title: 'Basic 1 – 6',
    desc: 'A rigorous core curriculum in English, Mathematics, Science, and Social Studies, with strong emphasis on reading and problem-solving.',
  },
  {
    color: 'yellow',
    badge: 'JHS',
    badgeClass: 'level-card__badge--yellow',
    title: 'Form 1 – 3',
    desc: 'Junior High School preparing students for the BECE, with additional support classes and extracurricular programmes.',
  },
]

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Respect reduced-motion: don't autoplay (the video stays on its first frame)
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  function toggleVideo() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

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
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          {/* The video file is portrait with the footage in a band across the middle;
              the frame crops to just that band so no black bars show at any size. */}
          <div className="hero__video-frame">
            <video
              ref={videoRef}
              className="hero__video"
              src={HERO_VIDEO}
              autoPlay={playing}
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
          <div className="hero__overlay" />
        </div>

        <div className="container hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Est. 2nd September, 2008
          </span>
          <h1 className="hero__title">
            <span className="hero__title-line1">Learning built on discipline.</span>
            <span className="hero__title-line2">Purpose for life.</span>
          </h1>
          <p className="hero__desc">
            Winners Family School provides quality education from Crèche through JHS at Bulemin-Gbawe, Accra. Shaping confident, knowledgeable graduates since 2008.
          </p>
          <div className="hero__actions">
            <Link to="/admissions/apply" className="btn-pill btn-pill--yellow">Apply Now</Link>
            <Link to="/about/team" className="btn-pill btn-pill--outline">Learn More</Link>
          </div>
        </div>

        <button
          type="button"
          className="hero__video-toggle"
          onClick={toggleVideo}
          aria-label={playing ? 'Pause background video' : 'Play background video'}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
          )}
        </button>

        <div className="hero__bottom-line" aria-hidden="true" />
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="container stats-bar__inner">
          <div className="stat">
            <span className="stat__number stat__number--yellow">17+</span>
            <span className="stat__label">Years of Excellence</span>
          </div>
          <div className="stat">
            <span className="stat__number stat__number--pink">3</span>
            <span className="stat__label">School Levels</span>
          </div>
          <div className="stat">
            <span className="stat__number stat__number--blue">3</span>
            <span className="stat__label">Terms Per Year</span>
          </div>
          <div className="stat">
            <span className="stat__number stat__number--yellow">GH</span>
            <span className="stat__label">Accra, Ghana</span>
          </div>
        </div>
      </div>

      {/* ── Pillars ── */}
      <section className="pillars">
        <div className="container">
          <div className="pillars__header reveal">
            <span className="section-label section-label--pink">Our Foundation</span>
            <h2>Discipline, Power &amp; Knowledge</h2>
            <p>The three principles woven through everything we do, in the classroom and beyond it.</p>
          </div>
          <div className="pillars__grid">
            {PILLARS.map((p, i) => (
              <div
                className={`pillar-card pillar-card--${p.color} reveal`}
                key={p.key}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="pillar-card__num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery preview ── */}
      <section className="gallery-preview">
        <div className="container">
          <div className="gallery-preview__header reveal">
            <div>
              <span className="section-label section-label--blue">Life at WFS</span>
              <h2>Moments Worth Sharing</h2>
            </div>
            <Link to="/gallery" className="gallery-preview__link">View Full Gallery →</Link>
          </div>
          <div className="gallery-preview__grid">
            {PHOTO_STRIP.map((p, i) => (
              <div
                className="gallery-card reveal"
                key={p.src}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
                <div className="gallery-card__overlay">
                  <span>{p.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="overview">
        <div className="container">
          <div className="overview__inner">
            <div className="overview__content reveal">
              <span className="section-label">About the School</span>
              <h2>Rooted in Community, Driven by Results</h2>
              <p className="overview__body">
                Founded in 2008, Winners Family School has grown into a trusted institution in the Bulemin-Gbawe community. We combine a structured Ghanaian curriculum with a culture of discipline and high expectations — from a child's earliest years through JHS graduation.
              </p>
              <div className="overview__pillars">
                <div className="pillar">
                  <div className="pillar__icon pillar__icon--yellow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M8.7 13.9L7 23l5-3 5 3-1.7-9.1" /></svg>
                  </div>
                  <div className="pillar__text">
                    <h4>Academic Excellence</h4>
                    <p>Strong BECE results and consistent performance across all levels.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar__icon pillar__icon--pink">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.7z" /></svg>
                  </div>
                  <div className="pillar__text">
                    <h4>Whole-Child Development</h4>
                    <p>Sports, arts, and character development alongside core academics.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar__icon pillar__icon--blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div className="pillar__text">
                    <h4>Family Partnership</h4>
                    <p>Active parent involvement and regular progress communication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview__visual">
              <div className="overview-card overview-card--blue reveal" style={{ transitionDelay: '0ms' }}>
                <span className="overview-card__number">2008</span>
                <span className="overview-card__label">Year Founded</span>
              </div>
              <div className="overview-card overview-card--pink reveal" style={{ transitionDelay: '120ms' }}>
                <span className="overview-card__number">3+</span>
                <span className="overview-card__label">School Sections</span>
              </div>
              <div className="overview-card overview-card--wide overview-card--yellow reveal" style={{ transitionDelay: '240ms' }}>
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
              <div className={`level-card level-card--${level.color}`} key={level.title}>
                <span className={`level-card__badge ${level.badgeClass}`}>{level.badge}</span>
                <h3>{level.title}</h3>
                <p>{level.desc}</p>
                <Link to="/academics" className="level-card__link">
                  Explore level
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <span className="section-label">Enrol Today</span>
          <h2>Give Your Child the Best Start</h2>
          <p>
            Admissions are open year-round. Term 1 intake begins in September — apply early to secure a place.
          </p>
          <div className="home-cta__actions">
            <Link to="/admissions/apply" className="btn btn-yellow">Start Application</Link>
            <Link to="/contact" className="btn btn-outline-blue">Talk to Us First</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
