import './News.css'

const NEWS_CARDS = [
  {
    img: '/images/bece-award.png',
    imgAlt: 'Student receiving BECE award',
    bg: 'news-card__img--blue',
    tag: 'Achievement',
    tagClass: 'pill--blue',
    title: 'Form 3 Students Excel in Mock BECE',
    excerpt: 'Our JHS Form 3 students recorded outstanding scores in the recent mock BECE examinations, ahead of the main exams in August.',
    date: 'July 2026',
  },
  {
    img: '/images/pe-edu.png',
    imgAlt: 'Students during physical education',
    bg: 'news-card__img--yellow',
    tag: 'Sports',
    tagClass: 'pill--yellow',
    title: 'Inter-House Sports Day 2026',
    excerpt: 'Students competed across athletics, football, and traditional games at this year\'s annual inter-house sports competition.',
    date: 'June 2026',
  },
  {
    img: '/images/traditional-dress.png',
    imgAlt: 'Students in traditional Ghanaian dress',
    bg: 'news-card__img--pink',
    tag: 'Events',
    tagClass: 'pill--pink',
    title: 'Cultural Day Celebration',
    excerpt: 'Pupils showcased Ghanaian culture through traditional dance, food, and drama at our annual Cultural Day celebration.',
    date: 'May 2026',
  },
  {
    img: '/images/bece-prep-covid.png',
    imgAlt: 'Students in BECE preparation class',
    bg: 'news-card__img--blue',
    tag: 'Academic',
    tagClass: 'pill--blue',
    title: 'Term 3 Examination Timetable Released',
    excerpt: 'The end-of-year examination schedule has been published. Parents are encouraged to help students begin revision early.',
    date: 'July 2026',
  },
  {
    img: '/images/excursion-1.png',
    imgAlt: 'Students on a school excursion',
    bg: 'news-card__img--yellow',
    tag: 'Events',
    tagClass: 'pill--yellow',
    title: 'Annual School Excursion',
    excerpt: 'Students from across all levels enjoyed this year\'s educational field trip, learning beyond the classroom walls.',
    date: 'June 2026',
  },
]

const EVENTS = [
  { day: '02', month: 'Sep', title: 'Founders Day — Term 1 Opens', desc: 'New and returning students resume for the 2026/27 first term.' },
  { day: '15', month: 'Aug', title: 'End-of-Year Prize Giving', desc: 'Annual prize-giving ceremony for outstanding academic and sports achievements.' },
  { day: '01', month: 'Aug', title: 'JHS Graduation 2026', desc: 'Form 3 graduation ceremony for the Class of 2026.' },
  { day: '25', month: 'Jul', title: 'Last Day — Term 3', desc: 'Official close of the 2025/26 academic year.' },
]

function News() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">News &amp; Events</span>
          <h1>What's Happening at WFS</h1>
          <p>
            Stay up to date with school news, achievements, events, and announcements from Winners Family School.
          </p>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="news-featured">
        <div className="container">
          <div className="news-featured__card">
            <div className="news-featured__img">
              <img src="/images/bece-assembly.png" alt="Students assembled for start of year" />
            </div>
            <div className="news-featured__body">
              <span className="pill pill--yellow">Featured</span>
              <p className="news-date">September 2026</p>
              <h2>Welcome to the 2026/27 Academic Year</h2>
              <p>
                Winners Family School begins its 19th academic year with a new cohort of students across all sections. Term 1 orientation kicks off on 2nd September. We welcome all new and returning families to another year of discipline, power, and knowledge.
              </p>
              <span className="pill pill--blue">Term 1 — September 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── News grid ── */}
      <section className="news-grid-section">
        <div className="container">
          <span className="section-label">Latest News</span>
          <h2>Recent Updates</h2>
          <div className="news-grid">
            {NEWS_CARDS.map((item) => (
              <article className="news-card" key={item.title}>
                <div className={`news-card__img ${item.bg}`}>
                  <img src={item.img} alt={item.imgAlt} loading="lazy" />
                </div>
                <div className="news-card__body">
                  <span className={`pill ${item.tagClass}`}>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="news-card__meta">{item.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="upcoming-events">
        <div className="container">
          <span className="section-label">Calendar</span>
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {EVENTS.map((ev) => (
              <div className="event-item" key={ev.title}>
                <div className="event-item__date">
                  <div className="event-item__date-day">{ev.day}</div>
                  <div className="event-item__date-month">{ev.month}</div>
                </div>
                <div className="event-item__divider" />
                <div>
                  <h4>{ev.title}</h4>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
