import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero banner">
      {/* Animated background overlay */}
      <div className="hero__overlay" />
      <div className="hero__grid-overlay" />

      <div className="container hero__content">
        <p className="section-tag hero__tag">Trusted Consignment Specialists</p>

        <h1 className="hero__title">
          Securing the World's<br />
          <span>Finest Assets</span>
        </h1>

        <p className="hero__subtitle">
          Kestrel Security is the premier consignment partner for gold, diamonds,
          and high-value collectibles — delivering unmatched security, transparency,
          and global reach from custody to sale.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">Submit a Consignment</a>
          <a href="#services" className="btn btn-outline">Our Services</a>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          {[
            { value: '$2B+',  label: 'Assets Consigned' },
            { value: '40+',   label: 'Countries Served' },
            { value: '15+',   label: 'Years of Trust' },
            { value: '100%',  label: 'Insured Custody' },
          ].map(stat => (
            <div key={stat.label} className="hero__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
