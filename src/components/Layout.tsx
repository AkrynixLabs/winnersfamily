import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

interface NavChild {
  to: string
  label: string
}

interface NavEntry {
  to?: string
  label: string
  children?: NavChild[]
}

const NAV_LINKS: NavEntry[] = [
  { to: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { to: '/about/team', label: 'Our Team' },
      { to: '/about/history', label: 'History' },
      { to: '/about/mission-vision', label: 'Mission & Vision' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { to: '/academics/early-years', label: 'Early Years' },
      { to: '/academics/primary', label: 'Primary' },
      { to: '/academics/jhs', label: 'Junior High School' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { to: '/admissions', label: 'Overview & Requirements' },
      { to: '/admissions/apply', label: 'Start Application' },
    ],
  },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <NavLink to="/" className="brand">
            <span className="brand__mark">WFS</span>
            <div className="brand__text">
              <span className="brand__name">Winners Family School</span>
              <span className="brand__tagline">Est. 2008</span>
            </div>
          </NavLink>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${navOpen ? 'is-open' : ''}`} aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div className="site-nav__item site-nav__item--dropdown" key={link.label}>
                  <button type="button" className="site-nav__link site-nav__link--dropdown">
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="site-nav__dropdown-chevron">
                      <path d="M2.5 4.5L6 8l3.5-3.5" />
                    </svg>
                  </button>
                  <div className="site-nav__dropdown-menu">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          isActive ? 'site-nav__link is-active' : 'site-nav__link'
                        }
                        onClick={() => setNavOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to as string}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link to="/contact" className="site-nav__cta" onClick={() => setNavOpen(false)}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 15c-1.146 0-2.229-.265-3.101-.729a5.99 5.99 0 0 1-1.436-1.032L1.5 14l.663-1.99A6.5 6.5 0 1 1 8 15z"/></svg>
              Enquiries
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__stripe" />
        <div className="container site-footer__body">
          <div className="site-footer__grid">
            <div>
              <div className="footer-brand__mark">WFS</div>
              <h3 className="footer-brand__name">Winners Family School</h3>
              <p className="footer-brand__desc">
                Building excellence in education since 2008, rooted in discipline, power, and knowledge.
              </p>
            </div>

            <div>
              <h4 className="footer-col__heading">Quick Links</h4>
              <ul className="footer-col__links">
                <li><NavLink to="/about/team">About Us</NavLink></li>
                <li><NavLink to="/academics">Academics</NavLink></li>
                <li><NavLink to="/admissions">Admissions</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col__heading">School</h4>
              <ul className="footer-col__links">
                <li><NavLink to="/news">News & Events</NavLink></li>
                <li><a href="#">Portal Login</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Policies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col__heading">Contact</h4>
              <div className="footer-col__contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span>Bulemin - Gbawe<br />Accra, Ghana</span>
              </div>
              <div className="footer-col__contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                </svg>
                <span>0244770553<br />0243263959</span>
              </div>
              <div className="footer-col__contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg>
                <span>winnersfamilyschool123@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copy">
              &copy; {new Date().getFullYear()} Winners Family School. All rights reserved.
            </p>
            <p className="site-footer__motto">
              Discipline · Power · Knowledge
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
