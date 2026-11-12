import './About.css'

const VALUES = [
  {
    icon: '🔒',
    title: 'Zero Compromise on Security',
    text: 'Every consignment is handled with military-grade protocols, full insurance coverage, and chain-of-custody documentation at every step.',
  },
  {
    icon: '⚖️',
    title: 'Integrity & Transparency',
    text: 'We operate with complete openness — certified valuations, documented handling, and real-time reporting to every consignor.',
  },
  {
    icon: '🌍',
    title: 'Global Partnerships',
    text: 'Our network of licensed dealers, auction houses, and institutional buyers spans 40+ countries, maximising returns for consignors.',
  },
  {
    icon: '🤝',
    title: 'Respect & Discretion',
    text: 'Client identities and asset details remain strictly confidential. Your trust is our most valuable holding.',
  },
  {
    icon: '📋',
    title: 'Regulatory Compliance',
    text: 'Fully licensed under international AML and precious-metals trade regulations, with transparent reporting to all relevant authorities.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Intro grid */}
        <div className="about__intro">
          <div className="about__intro-text">
            <p className="section-tag">Who We Are</p>
            <h2 className="section-title">
              The World's Most Trusted<br />
              <span>Consignment Partner</span>
            </h2>
            <div className="divider" />
            <p>
              Kestrel Security is a specialist consignment company dedicated exclusively to
              gold bullion, rough and polished diamonds, fine jewellery, and other high-value
              tangible assets. We do <em>not</em> buy or mine — we act as your secure,
              transparent intermediary, connecting verified sellers with qualified global buyers.
            </p>
            <p>
              Founded on principles of absolute security and commercial excellence, Kestrel
              operates fully licensed, insured custody facilities and a vetted international
              buyer network — so your assets reach the right market at the right price, safely.
            </p>
          </div>

          <div className="about__intro-cards">
            <div className="about__card about__card--mission">
              <span className="about__card-icon">🎯</span>
              <h3>Our Mission</h3>
              <p>
                To provide consignors of gold, diamonds, and precious valuables with the
                most secure, efficient, and financially rewarding route to market — underpinned
                by world-class custody, certified valuation, and an unwavering commitment
                to compliance and client confidentiality.
              </p>
            </div>

            <div className="about__card about__card--vision">
              <span className="about__card-icon">🔭</span>
              <h3>Our Vision</h3>
              <p>
                To be the globally recognised benchmark for precious-asset consignment —
                trusted by private collectors, mining operations, estates, and institutions
                alike for our integrity, reach, and the consistent value we deliver.
                We do not aim to be the largest; we aim to be the best.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about__values">
          <div className="about__values-header">
            <p className="section-tag">Our Values</p>
            <h2 className="section-title">What We Stand For</h2>
            <div className="divider center" />
          </div>

          <div className="about__values-grid">
            {VALUES.map(v => (
              <div key={v.title} className="about__value-card">
                <span className="about__value-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
