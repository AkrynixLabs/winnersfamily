import './Academics.css'

const LEVELS = [
  {
    icon: '🌱',
    sidebarClass: 'level-detail__sidebar--yellow',
    title: 'Preschool',
    range: 'Crèche · Nursery · KG 1 & 2',
    desc: 'Our early years programme provides a warm, nurturing introduction to school life. Through play-based activities, children develop foundational literacy, numeracy, and social skills that prepare them confidently for primary school.',
    subjects: ['Literacy', 'Numeracy', 'Creative Arts', 'Physical Education', 'Rhymes & Songs', 'Social Skills'],
    img: null,
  },
  {
    icon: '📚',
    sidebarClass: 'level-detail__sidebar--pink',
    title: 'Primary School',
    range: 'Basic 1 – Basic 6',
    desc: 'Our primary curriculum follows the Ghana Education Service syllabus with added emphasis on reading fluency and mathematical reasoning. Small class sizes allow teachers to identify and support each child\'s individual learning needs.',
    subjects: ['English Language', 'Mathematics', 'Integrated Science', 'Social Studies', 'Ghanaian Language', 'Creative Arts', 'RME', 'Computing', 'Physical Education'],
    img: '/images/computer-lab.png',
  },
  {
    icon: '🎓',
    sidebarClass: 'level-detail__sidebar--blue',
    title: 'Junior High School',
    range: 'Form 1 – Form 3 (JHS)',
    desc: 'JHS prepares students for the Basic Education Certificate Examination (BECE). We provide structured revision programmes, past-question practice, and subject-specific support to ensure every student is BECE-ready.',
    subjects: ['English Language', 'Mathematics', 'Integrated Science', 'Social Studies', 'RME', 'BDT', 'French', 'ICT', 'Ghanaian Language', 'Physical Education'],
    img: '/images/bece-prep.png',
  },
]

function Academics() {
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

      {/* ── Levels detail ── */}
      <section className="levels-detail">
        <div className="container">
          <span className="section-label">School Levels</span>
          <h2>What We Offer</h2>
          <div className="levels-detail__grid">
            {LEVELS.map((level) => (
              <div className="level-detail" key={level.title}>
                <div className={`level-detail__sidebar ${level.sidebarClass}`}>
                  <span className="level-icon">{level.icon}</span>
                  <h3>{level.title}</h3>
                  <span className="level-detail__range">{level.range}</span>
                </div>
                <div className="level-detail__body">
                  <p>{level.desc}</p>
                  {level.img && (
                    <div className="level-detail__img">
                      <img src={level.img} alt={level.title} loading="lazy" />
                    </div>
                  )}
                  <div className="subject-tags">
                    {level.subjects.map((s) => (
                      <span className="subject-tag" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic Calendar ── */}
      <section className="academic-calendar">
        <div className="container">
          <span className="section-label">Academic Calendar</span>
          <h2>Three Terms Per Year</h2>
          <p>Winners Family School follows the Ghana Education Service academic calendar.</p>
          <div className="terms-grid">
            <div className="term-card">
              <div className="term-card__number term-card__number--yellow">First Term</div>
              <h3>September – December</h3>
              <p>Main intake period. New student enrolment prioritised. Ends with end-of-term examinations before the Christmas break.</p>
            </div>
            <div className="term-card">
              <div className="term-card__number term-card__number--pink">Second Term</div>
              <h3>January – April</h3>
              <p>Resumption after Christmas. Mid-year assessments and inter-school activities. Ends with Easter break.</p>
            </div>
            <div className="term-card">
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
