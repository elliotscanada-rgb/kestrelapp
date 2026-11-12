import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Consignment', submenu: [
    { label: 'Gold Consignment', href: '/gold-consignment' },
    { label: 'Diamond Consignment', href: '/diamond-consignment' },
    { label: 'Jewellery & Watches', href: '/jewelry-consignment' },
  ]},
  { label: 'Christmas', href: '/christmas' },
  { label: 'Prices',   href: '/prices' },
  { label: 'About',    href: '/about' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={close}>
          <img 
            src="/4.jpeg" 
            alt="Kestrel Security Logo" 
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">
            KESTREL<span> SECURITY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <div key={link.label} className="navbar__link-wrapper">
              {link.submenu ? (
                <>
                  <span className="navbar__link">{link.label}</span>
                  <div className="navbar__submenu">
                    {link.submenu.map(submenu => (
                      <Link 
                        key={submenu.href} 
                        to={submenu.href} 
                        className="navbar__submenu-item"
                        onClick={close}
                      >
                        {submenu.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.href} className="navbar__link" onClick={close}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <a href="https://kerselsecuritycompany.vercel.app/" className="btn btn-primary navbar__cta" onClick={close}>
            Login
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="navbar__drawer-links">
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              {link.submenu ? (
                <>
                  <span className="navbar__drawer-link navbar__drawer-label">{link.label}</span>
                  <div className="navbar__drawer-submenu">
                    {link.submenu.map(submenu => (
                      <Link 
                        key={submenu.href} 
                        to={submenu.href} 
                        className="navbar__drawer-submenu-item"
                        onClick={close}
                      >
                        {submenu.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.href} className="navbar__drawer-link" onClick={close}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <a href="https://kerselsecuritycompany.vercel.app/" className="btn btn-primary" onClick={close}>
            Login
          </a>
        </nav>
      </div>
    </header>
  )
}
