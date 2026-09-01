import { useState, type FormEvent } from 'react'
import { submitToFormspree } from '../lib/formspree'
import './Apply.css'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function Apply() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')
    try {
      await submitToFormspree(form)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── Page title ── */}
      <section className="page-title">
        <div className="container">
          <span className="section-label">Admissions</span>
          <h1>Start Your Application</h1>
          <p>
            Fill in the details below for your child. We'll review your application and get back to you to confirm next steps.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="apply-section">
        <div className="container">
          {status === 'success' ? (
            <div className="apply-form__banner apply-form__banner--success">
              <span className="apply-form__banner-icon">✅</span>
              <h2>Application Received</h2>
              <p>Thank you for applying to Winners Family School. We'll be in touch to confirm next steps and required documents.</p>
            </div>
          ) : (
          <form className="apply-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New admission application, Winners Family School" />

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
                      <option>Creche</option>
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
              <button type="submit" className="btn btn-yellow" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
              </button>
            </div>
            {status === 'error' && (
              <p className="apply-form__error">
                Something went wrong submitting your application. Please try again, or call us directly.
              </p>
            )}
            <p className="form-note">
              * Required fields. Your application is sent directly to Winners Family School.
            </p>
          </form>
          )}
        </div>
      </section>
    </>
  )
}

export default Apply
