import { useState, type FormEvent } from 'react'
import { submitToFormspree } from '../lib/formspree'
import './Contact.css'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d-0.3325333!3d5.5851092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa395fdb3eb99%3A0x7a61eeb616d8c1d4!2sWinners%20Family%20School!5e0!3m2!1sen!2sgh!4v1690000000000!5m2!1sen!2sgh'
const MAP_LINK = 'https://maps.app.goo.gl/demBhbxC5vVDakyLA'

function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)
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
      {/* ── Page hero ── */}
      <section className="contact-hero">
        <img
          className="contact-hero__img"
          src="/images/community/visitors-1.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="contact-hero__overlay" aria-hidden="true" />

        <div className="container contact-hero__content">
          <span className="section-label section-label--yellow">Contact Us</span>
          <h1>Get in Touch</h1>
          <p className="contact-hero__lead">
            Questions about admissions, fees or a school visit? Call, email or come and see us at Bulemin - Gbawe, Accra.
          </p>

          <div className="contact-hero__actions">
            <a href="tel:0244770553" className="contact-hero__btn contact-hero__btn--primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" /></svg>
              Call 0244 770 553
            </a>
            <a href="mailto:winnersfamilyschool123@gmail.com" className="contact-hero__btn contact-hero__btn--outline">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" /></svg>
              Email us
            </a>
            <a
              href="https://maps.app.goo.gl/demBhbxC5vVDakyLA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-hero__btn contact-hero__btn--outline"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
              Get directions
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact body ── */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-body__inner">
            {/* Left: info */}
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="contact-info-card">
                <div className="contact-info-card__icon contact-info-card__icon--blue">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Winners Family School</p>
                  <p>Bulemin - Gbawe, Accra</p>
                  <p>Ghana</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon contact-info-card__icon--yellow">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:0244770553">0244 770 553</a>
                  <a href="tel:0243263959">0243 263 959</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon contact-info-card__icon--pink">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:winnersfamilyschool123@gmail.com">
                    winnersfamilyschool123@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon contact-info-card__icon--blue">🕐</div>
                <div>
                  <h4>School Hours</h4>
                  <p>Monday to Friday: 7:30am to 3:00pm</p>
                  <p>Office: 7:30am to 4:00pm</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              <p>Fill in the form and we'll get back to you within one working day.</p>

              {status === 'success' ? (
                <div className="form-success">
                  <span className="form-success__icon">✅</span>
                  <h4>Message Sent</h4>
                  <p>Thanks for reaching out — we'll get back to you within one working day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New message from the Winners Family School website" />
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="First Name" type="text" placeholder="Kofi" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="Last Name" type="text" placeholder="Mensah" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="Phone Number" type="tel" placeholder="024 XXX XXXX" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="Email Address" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="subject">Subject *</label>
                      <select id="subject" name="Subject" required defaultValue="">
                        <option value="" disabled>Select a topic…</option>
                        <option>Admissions Enquiry</option>
                        <option>School Visit / Tour</option>
                        <option>Fees &amp; Payments</option>
                        <option>Academic Programme</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="Message" placeholder="Tell us what you'd like to know…" required />
                    </div>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="btn btn-yellow" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="form-error">
                      Something went wrong sending your message. Please try again, or call us directly.
                    </p>
                  )}
                  <p className="form-note">
                    * Required fields. We respect your privacy and will not share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="contact-map">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-wrap">
            {mapLoaded ? (
              <iframe
                title="Winners Family School Location"
                src={MAP_EMBED_SRC}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                type="button"
                className="map-facade"
                onClick={() => setMapLoaded(true)}
              >
                <span className="map-facade__icon">📍</span>
                <span className="map-facade__label">Load Map</span>
                <span className="map-facade__hint">
                  Bulemin - Gbawe, Accra, Ghana. Click to load the interactive map
                </span>
              </button>
            )}
          </div>
          <a className="map-external-link" href={MAP_LINK} target="_blank" rel="noreferrer">
            Open in Google Maps ↗
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
