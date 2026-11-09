import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './EarlyYears.css'
import ImageHero from '../components/ImageHero'

const SUBJECTS = ['Literacy', 'Numeracy', 'Creative Arts', 'Physical Education', 'Rhymes & Songs', 'Social Skills']

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
      <ImageHero label="Academics" title={<>Early Years</>} image="/images/academic/early-years-hero.webp" position="center 8%">
        <p>Crèche · Nursery · KG 1 &amp; 2</p>
      </ImageHero>

      {/* ── Content ── */}
      <section className="level-content">
        <div className="container">
          <div className="level-content__intro reveal">
            <span className="level-badge level-badge--blue">Preschool</span>
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
