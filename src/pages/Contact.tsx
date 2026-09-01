import { useState } from 'react'
import './Contact.css'

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d-0.3325333!3d5.5851092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa395fdb3eb99%3A0x7a61eeb616d8c1d4!2sWinners%20Family%20School!5e0!3m2!1sen!2sgh!4v1690000000000!5m2!1sen!2sgh'
const MAP_LINK = 'https://maps.app.goo.gl/demBhbxC5vVDakyLA'

function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)
  return (
    <>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label section-label--yellow">Contact Us</span>
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Reach out about admissions, a school visit, or any questions about Winners Family School.
          </p>
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
                  <p>Monday – Friday: 7:30am – 3:00pm</p>
                  <p>Office: 7:30am – 4:00pm</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              <p>Fill in the form and we'll get back to you within one working day.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you! Your message has been received. We will be in touch shortly.')
                }}
              >
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" type="text" placeholder="Kofi" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" type="text" placeholder="Mensah" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" type="tel" placeholder="024 XXX XXXX" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="form-group form-group--full">
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" required defaultValue="">
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
                    <textarea id="message" placeholder="Tell us what you'd like to know…" required />
                  </div>
                </div>
                <div className="form-submit">
                  <button type="submit" className="btn btn-yellow">Send Message</button>
                </div>
                <p className="form-note">
                  * Required fields. We respect your privacy and will not share your details.
                </p>
              </form>
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
                  Bulemin - Gbawe, Accra, Ghana — click to load the interactive map
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
