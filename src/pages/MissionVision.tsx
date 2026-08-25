import { useEffect } from 'react'
import './MissionVision.css'

const VALUES = [
  {
    num: '01',
    color: 'yellow',
    title: 'Discipline',
    desc: 'A structured, respectful environment where students develop self-regulation and responsibility.',
  },
  {
    num: '02',
    color: 'pink',
    title: 'Power',
    desc: 'Empowering every student with the confidence and capability to pursue their full potential.',
  },
  {
    num: '03',
    color: 'blue',
    title: 'Knowledge',
    desc: 'A rigorous academic foundation that equips students for further education and life.',
  },
]

function MissionVision() {
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
        <span className="page-hero__blob page-hero__blob--yellow" aria-hidden="true" />
        <span className="page-hero__blob page-hero__blob--pink" aria-hidden="true" />
        <div className="container">
          <span className="section-label section-label--yellow">About Us</span>
          <h1>Mission &amp; Vision</h1>
          <p>
            The purpose and principles that guide Winners Family School, from our earliest years through Junior High School.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mission">
        <div className="container">
          <div className="mission__inner">
            <div className="mission__content reveal">
              <span className="section-label">Our Mission</span>
              <h2>What We Stand For</h2>
              <p className="mission__lead">
                Winners Family School exists to provide every child — from their earliest years through Junior High School — with a solid academic foundation, strong moral character, and the confidence to succeed in a changing world.
              </p>
              <p className="mission__body">
                We believe that excellence is not an accident. It is the result of a disciplined learning culture, dedicated teachers, and an engaged school community that pulls together for every child.
              </p>
            </div>
            <div className="mission__values">
              {VALUES.map((v, i) => (
                <div
                  className={`value-card value-card--${v.color} reveal`}
                  key={v.title}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="value-card__num">{v.num}</span>
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

      {/* ── Vision ── */}
      <section className="vision">
        <span className="vision__blob" aria-hidden="true" />
        <div className="container vision__inner reveal">
          <span className="vision__quote-mark" aria-hidden="true">&ldquo;</span>
          <span className="section-label section-label--yellow">Our Vision</span>
          <h2 className="vision__title">Where We're Headed</h2>
          <p className="vision__body">
            To be the leading community school in Bulemin-Gbawe, recognised for producing disciplined, knowledgeable graduates who go on to lead with confidence — in further education, their careers, and their communities.
          </p>
        </div>
      </section>
    </>
  )
}

export default MissionVision
