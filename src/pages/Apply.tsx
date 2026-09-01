import { useState, type FormEvent } from 'react'
import './Apply.css'

const SCHOOL_EMAIL = 'winnersfamilyschool123@gmail.com'

function buildMailto(data: FormData): string {
  const get = (name: string) => (data.get(name) as string || '').trim()

  const studentName = get('studentName')
  const dob = get('dob')
  const gender = get('gender')
  const level = get('level')
  const previousSchool = get('previousSchool') || 'N/A'
  const parentName = get('parentName')
  const relationship = get('relationship')
  const phone = get('phone')
  const email = get('email')
  const address = get('address')
  const term = get('term')
  const notes = get('notes') || 'None'

  const subject = `New Enrolment Application — ${studentName || 'Unnamed Student'}`

  const body = [
    'NEW ENROLMENT APPLICATION',
    'Winners Family School',
    '',
    '— Student Details —',
    `Full Name: ${studentName}`,
    `Date of Birth: ${dob}`,
    `Gender: ${gender}`,
    `Level Applying For: ${level}`,
    `Previous School (if transferring): ${previousSchool}`,
    '',
    '— Parent / Guardian Details —',
    `Full Name: ${parentName}`,
    `Relationship to Student: ${relationship}`,
    `Phone Number: ${phone}`,
    `Email Address: ${email}`,
    `Home Address: ${address}`,
    '',
    '— Additional Information —',
    `Preferred Start Term: ${term}`,
    `Notes: ${notes}`,
  ].join('\n')

  return `mailto:${SCHOOL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function Apply() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    window.location.href = buildMailto(data)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Page title ── */}
      <section className="page-title">
        <div className="container">
          <span className="section-label">Admissions</span>
          <h1>Start Your Application</h1>
          <p>
            Fill in the details below for your child. Submitting the form opens your email app with everything pre-filled — just hit send to complete the application.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="apply-section">
        <div className="container">
          <form className="apply-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="apply-form__banner">
                Your email app should now be open with the application pre-filled. If it didn't open, check that you have an email app configured, then press Send in it to complete your application.
              </div>
            )}

            <div className="apply-form__section">
              <h2>Student Details</h2>
              <div className="form-grid">
                <div className="form-group form-group--full">
                  <label htmlFor="studentName">Student's Full Name *</label>
                  <input id="studentName" name="studentName" type="text" placeholder="Ama Mensah" required />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input id="dob" name="dob" type="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select id="gender" name="gender" required defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="level">Level Applying For *</label>
                  <select id="level" name="level" required defaultValue="">
                    <option value="" disabled>Select a level…</option>
                    <optgroup label="Preschool">
                      <option>Crèche</option>
                      <option>Nursery</option>
                      <option>KG 1</option>
                      <option>KG 2</option>
                    </optgroup>
                    <optgroup label="Primary">
                      <option>Basic 1</option>
                      <option>Basic 2</option>
                      <option>Basic 3</option>
                      <option>Basic 4</option>
                      <option>Basic 5</option>
                      <option>Basic 6</option>
                    </optgroup>
                    <optgroup label="Junior High School">
                      <option>Form 1 (JHS 1)</option>
                      <option>Form 2 (JHS 2)</option>
                      <option>Form 3 (JHS 3)</option>
                    </optgroup>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="previousSchool">Previous School (if transferring)</label>
                  <input id="previousSchool" name="previousSchool" type="text" placeholder="Leave blank if none" />
                </div>
              </div>
            </div>

            <div className="apply-form__section">
              <h2>Parent / Guardian Details</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="parentName">Full Name *</label>
                  <input id="parentName" name="parentName" type="text" placeholder="Kofi Mensah" required />
                </div>
                <div className="form-group">
                  <label htmlFor="relationship">Relationship to Student *</label>
                  <select id="relationship" name="relationship" required defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Guardian</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="024 XXX XXXX" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="address">Home Address *</label>
                  <textarea id="address" name="address" placeholder="House number, street, area, Accra" required />
                </div>
              </div>
            </div>

            <div className="apply-form__section">
              <h2>Additional Information</h2>
              <div className="form-grid">
                <div className="form-group form-group--full">
                  <label htmlFor="term">Preferred Start Term *</label>
                  <select id="term" name="term" required defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Term 1 (September)</option>
                    <option>Term 2 (January)</option>
                    <option>Term 3 (May)</option>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="notes">Anything Else We Should Know?</label>
                  <textarea id="notes" name="notes" placeholder="Allergies, learning support needs, questions, etc. (optional)" />
                </div>
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn btn-yellow">Submit Application</button>
            </div>
            <p className="form-note">
              * Required fields. Submitting opens an email pre-addressed to {SCHOOL_EMAIL} — nothing is sent until you press Send in your own email app.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Apply
