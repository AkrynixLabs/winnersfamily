import './Staff.css'
import ImageHero from '../components/ImageHero'

function Staff() {
  return (
    <>
      {/* ── Page hero ── */}
      <ImageHero label="Academics" title={<>Staff</>} image="/images/academic/bece-prep.png" position="center 2%">
        <p>
          Resources and directory information for Winners Family School staff.
        </p>
      </ImageHero>

      {/* ── Tabs ── */}
      <section className="staff-section">
        <div className="container">
          <div className="staff-tabs">
            <span className="staff-tab is-active">Staff Directory</span>
            <a
              className="staff-tab"
              href="https://www.winnersfamilyschool.site/"
              target="_blank"
              rel="noreferrer"
            >
              Staff Portal ↗
            </a>
          </div>

          <div className="staff-panel">
            <p>Full staff directory coming soon.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Staff
