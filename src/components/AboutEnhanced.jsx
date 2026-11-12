import Gallery from './Gallery'
import './AboutEnhanced.css'

export default function AboutEnhanced() {
  const productGallery = [
    {
      src: '/gold bar.webp',
      alt: 'Premium gold bars',
      caption: 'Gold Bars'
    },
    {
      src: '/soverign bullion.webp',
      alt: 'Sovereign bullion',
      caption: 'Sovereigns'
    },
    {
      src: '/britain bullion.webp',
      alt: 'Britain bullion',
      caption: 'Britannia'
    },
    {
      src: '/coin.webp',
      alt: 'Collector coins',
      caption: 'Coins'
    },
    {
      src: '/pyx coin.webp',
      alt: 'Royal pyx coins',
      caption: 'Pyx Coins'
    },
    {
      src: '/diwali gift.webp',
      alt: 'Fine jewellery',
      caption: 'Jewellery'
    },
  ]

  const trustGallery = [
    {
      src: '/gold bar.webp',
      alt: 'Secure vault',
      caption: 'Security'
    },
    {
      src: '/britain bullion.webp',
      alt: 'Professional team',
      caption: 'Expertise'
    },
    {
      src: '/pyx coin.webp',
      alt: 'Global network',
      caption: 'Global'
    },
    {
      src: '/coin.webp',
      alt: 'Transparency',
      caption: 'Trust'
    },
  ]

  return (
    <>
      {/* Product Gallery */}
      <Gallery 
        images={productGallery}
        title="Our Collections"
      />

      {/* Trust & Expertise Section */}
      <section className="about-trust">
        <div className="container">
          <h2 className="section-title">Why Trust Kestrel Security?</h2>
          <div className="divider center"></div>
          
          <div className="trust-content">
            <div className="trust-text">
              <h3>40 Years of Excellence</h3>
              <p>
                Kestrel Security has built its reputation on three core principles: 
                security, integrity, and results. We handle precious assets worth billions 
                with meticulous care and professional expertise.
              </p>
              <ul className="trust-list">
                <li>✦ LBMA Compliant Operations</li>
                <li>✦ Lloyd's of London Insurance</li>
                <li>✦ Class III Vault Security</li>
                <li>✦ 24/7 Monitoring & Tracking</li>
                <li>✦ AML/KYC Compliance</li>
                <li>✦ Institutional-Grade Service</li>
              </ul>
            </div>
            <div className="trust-image">
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&q=80" 
                alt="Secure gold storage vault"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Values Gallery */}
      <Gallery 
        images={trustGallery}
        title="Our Commitment to Excellence"
      />

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2,000+</div>
              <div className="stat-label">Satisfied Clients</div>
              <p>From individuals to institutions worldwide</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">$5B+</div>
              <div className="stat-label">Assets Managed</div>
              <p>In precious metals and valuables</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
              <p>Global network of trusted partners</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Loss Claims</div>
              <p>Perfect security record in 40 years</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
