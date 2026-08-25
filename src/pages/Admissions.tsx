import { Link } from 'react-router-dom'
import './Admissions.css'

const STEPS = [
  {
    num: '1',
    numClass: 'step-card__num--yellow',
    title: 'Contact the School',
    desc: 'Call or visit the school office to express interest and get an application form.',
  },
  {
    num: '2',
    numClass: 'step-card__num--pink',
    title: 'Submit Documents',
    desc: 'Complete the form and submit all required documents at the admissions office.',
  },
  {
    num: '3',
    numClass: 'step-card__num--blue',
    title: 'Assessment',
    desc: 'Depending on the level, students may have a brief assessment or interview.',
  },
  {
    num: '4',
    numClass: 'step-card__num--blue-deep',
    title: 'Enrolment Confirmed',
    desc: 'Pay the required fees and your child is officially enrolled at Winners Family School.',
  },
]

function Admissions() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">Admissions</span>
          <h1>Join the Winners Family</h1>
          <p>
            Admissions are open year-round. Our main intake is at the start of Term 1 in September — we encourage early applications to secure a place.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="admissions-overview">
        <div className="container">
          <div className="admissions-overview__inner">
            <div>
              <span className="section-label">Open Enrolment</span>
              <h2>We Accept Applications All Year</h2>
              <p>
                While we welcome applications throughout the year, the majority of new students begin in September with the first term. Applying before July gives your child the best chance of starting with their peers.
              </p>
              <p>
                We admit students across all levels — from Crèche and Nursery right through to JHS Form 1. Transfer students from other schools are equally welcome.
              </p>
            </div>
            <div className="intake-cards">
              <div className="intake-card">
                <div className="intake-card__icon intake-card__icon--yellow">🌱</div>
                <div>
                  <h4>Preschool Entry</h4>
                  <p>Crèche · Nursery · KG 1 & 2 — no prior schooling required</p>
                </div>
              </div>
              <div className="intake-card">
                <div className="intake-card__icon intake-card__icon--pink">📚</div>
                <div>
                  <h4>Primary Entry</h4>
                  <p>Basic 1 – 6 — placement based on age and assessment</p>
                </div>
              </div>
              <div className="intake-card">
                <div className="intake-card__icon intake-card__icon--blue">🎓</div>
                <div>
                  <h4>JHS Entry</h4>
                  <p>Form 1 – 3 — transfer students accepted with prior school records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="admissions-steps">
        <div className="container">
          <div className="admissions-steps__header">
            <span className="section-label">The Process</span>
            <h2>How to Apply</h2>
            <p>Four straightforward steps to get your child enrolled.</p>
          </div>
          <div className="steps-grid">
            {STEPS.map((step) => (
              <div className="step-card" key={step.num}>
                <div className={`step-card__num ${step.numClass}`}>{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="admissions-requirements">
        <div className="container">
          <span className="section-label">Requirements</span>
          <h2>Documents Needed</h2>
          <div className="requirements-grid">
            <div className="req-card">
              <h3>🌱 Preschool</h3>
              <ul className="req-list">
                <li>Child's birth certificate</li>
                <li>Parent / guardian ID</li>
                <li>Two passport-size photos of child</li>
                <li>Completed application form</li>
              </ul>
            </div>
            <div className="req-card">
              <h3>📚 Primary (Basic 1–6)</h3>
              <ul className="req-list">
                <li>Child's birth certificate</li>
                <li>Last school report card (if transferring)</li>
                <li>Parent / guardian ID</li>
                <li>Two passport-size photos of child</li>
                <li>Completed application form</li>
              </ul>
            </div>
            <div className="req-card">
              <h3>🎓 JHS (Form 1–3)</h3>
              <ul className="req-list">
                <li>Child's birth certificate</li>
                <li>Previous school's report cards (2 years)</li>
                <li>Transfer certificate from previous school</li>
                <li>Parent / guardian ID</li>
                <li>Two passport-size photos of child</li>
                <li>Completed application form</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="admissions-cta">
        <div className="container">
          <h2>Ready to Enrol?</h2>
          <p>
            Visit us at Bulemin-Gbawe, Accra, or call to arrange a school tour before applying.
          </p>
          <div className="admissions-cta__actions">
            <Link to="/contact" className="btn btn-blue" style={{ background: 'var(--blue)', color: '#fff' }}>
              Contact Us
            </Link>
            <a href="tel:0244770553" className="btn btn-outline-blue" style={{ borderColor: 'var(--blue-deep)', color: 'var(--blue-deep)' }}>
              Call: 0244 770 553
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admissions
