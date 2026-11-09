import './Staff.css'

function Staff() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">Academics</span>
          <h1>Staff</h1>
          <p>
            Resources and directory information for Winners Family School staff.
          </p>
        </div>
      </section>

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
