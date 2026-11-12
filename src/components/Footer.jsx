import { Link } from 'react-router-dom'
import './Footer.css'

const LINKS = {
  Services: [
    { label: 'Gold Consignment', href: '/gold-consignment' },
    { label: 'Diamond Consignment', href: '/diamond-consignment' },
    { label: 'Fine Jewellery', href: '/jewelry-consignment' },
    { label: 'Pricing', href: '/prices' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'AML Policy', href: '#aml' },
    { label: 'Regulatory Disclosures', href: '#regulatory' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img 
                src="/4.jpeg" 
                alt="Kestrel Security Logo" 
                className="footer__logo-img"
              />
              <span>KESTREL<em> SECURITY</em></span>
            </Link>
            <p className="footer__tagline">
              The world's trusted consignment partner for gold, diamonds,
              and high-value assets. Security, integrity, results.
            </p>
            <div className="footer__badges">
              <span>🔒 LBMA Compliant</span>
              <span>🛡️ Fully Insured</span>
              <span>✅ AML Certified</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="footer__col">
              <h4>{heading}</h4>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="footer__bottom">
          <p>
            © {year} Kestrel Security Ltd. All rights reserved. Kestrel Security
            operates exclusively as a consignment intermediary and does not purchase
            assets for its own account.
          </p>
          <p className="footer__reg">
            Registered in England & Wales · FCA Registered · LBMA Member
          </p>
        </div>

      </div>
    </footer>
  )
}
