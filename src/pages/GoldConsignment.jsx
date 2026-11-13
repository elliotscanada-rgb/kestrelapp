import { Link } from 'react-router-dom'
import { FaShieldAlt, FaCertificate, FaTruck, FaChartLine } from 'react-icons/fa'
import Gallery from '../components/Gallery'
import './ConsignmentPages.css'

export default function GoldConsignment() {
  const goldImages = [
    { src: '/gold bar.webp', alt: 'Gold bars', caption: 'Premium Bars' },
    { src: '/soverign bullion.webp', alt: 'Sovereign bullion', caption: 'Sovereigns' },
    { src: '/britain bullion.webp', alt: 'Britain bullion', caption: 'Britannia' },
    { src: '/coin.webp', alt: 'Gold coins', caption: 'Collector Coins' },
    { src: '/pyx coin.webp', alt: 'Gold bullion', caption: 'Investment Grade' },
    { src: '/diwali gift.webp', alt: 'Gold jewelry', caption: 'Fine Gold' },
  ]

  return (
    <div className="consignment-page">
      {/* Hero Section */}
      <section className="consignment-hero">
        <div className="consignment-hero__overlay"></div>
        <img 
          src="/gold bar.webp" 
          alt="Gold bars" 
          className="consignment-hero__bg"
        />
        <div className="container consignment-hero__content">
          <h1 className="consignment-hero__title">Gold Consignment Services</h1>
          <p className="consignment-hero__subtitle">
            Secure, transparent, and globally-connected consignment for gold bullion, bars, coins, and refined dore
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Consignment</Link>
        </div>
      </section>

      {/* Gold Gallery */}
      <Gallery images={goldImages} title="Our Gold Collections" />

      {/* Introduction */}
      <section className="consignment-intro">
        <div className="container">
          <div className="consignment-intro__grid">
            <div className="consignment-intro__text">
              <h2>Why Consign Your Gold with Kestrel Security?</h2>
              <p>
                Gold remains one of the most liquid and universally valued assets in the world. 
                Whether you hold investment-grade bullion, inherited jewellery gold, or mining output, 
                Kestrel Security provides a trusted, fully-compliant pathway to convert your holdings 
                into immediate liquidity at market-leading prices.
              </p>
              <p>
                Unlike traditional buyers who purchase outright at a discount, we operate exclusively 
                on consignment. This means we act as your agent, presenting your gold to our curated 
                network of institutional refineries, bullion dealers, and private collectors to secure 
                the highest possible sale price on your behalf.
              </p>
            </div>
            <div className="consignment-intro__image">
              <img 
                src="/britain bullion.webp" 
                alt="Gold coins"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="gold-products">
        <div className="container">
          <h2 className="section-title">Gold Products We Accept</h2>
          <div className="divider center"></div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-card__image">
                <img src="/gold bar.webp" alt="Gold bars" />
              </div>
              <div className="product-card__content">
                <h3>Gold Bars</h3>
                <p>Investment-grade bullion and refined bars</p>
                <ul className="product-list">
                  <li>1g to 12.5kg sizes</li>
                  <li>LBMA-certified Good Delivery</li>
                  <li>Minted or cast bars</li>
                  <li>Custom sizes available</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/coin.webp" alt="Gold coins" />
              </div>
              <div className="product-card__content">
                <h3>Gold Coins</h3>
                <p>Collectible and investment coins worldwide</p>
                <ul className="product-list">
                  <li>Sovereigns & Britannias</li>
                  <li>Krugerrands & American Eagles</li>
                  <li>Historic & numismatic coins</li>
                  <li>Proof editions</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/soverign bullion.webp" alt="Sovereign bullion" />
              </div>
              <div className="product-card__content">
                <h3>Sovereign Bullion</h3>
                <p>Premium sovereign and bullion collections</p>
                <ul className="product-list">
                  <li>Sovereign coins</li>
                  <li>Half sovereigns</li>
                  <li>Quarter sovereigns</li>
                  <li>Premium grades</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/britain bullion.webp" alt="Britannia bullion" />
              </div>
              <div className="product-card__content">
                <h3>Britannia Collection</h3>
                <p>Royal mint britannia bullion series</p>
                <ul className="product-list">
                  <li>Britannia coins</li>
                  <li>Premium britannia</li>
                  <li>Limited editions</li>
                  <li>Certified grades</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/coin.webp" alt="Refined dore" />
              </div>
              <div className="product-card__content">
                <h3>Refined Dore & Nuggets</h3>
                <p>Mining output and natural gold</p>
                <ul className="product-list">
                  <li>Mining output & doré bars</li>
                  <li>Natural gold nuggets</li>
                  <li>Unrefined gold</li>
                  <li>Assay arranged</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/pyx coin.webp" alt="Estate gold" />
              </div>
              <div className="product-card__content">
                <h3>Scrap & Estate Gold</h3>
                <p>All forms of gold jewelry and items</p>
                <ul className="product-list">
                  <li>Broken jewelry</li>
                  <li>Dental gold</li>
                  <li>Industrial scrap</li>
                  <li>Any karat (9K-24K)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">The Consignment Process</h2>
          <div className="divider center"></div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3>Submit & Schedule</h3>
              <p>
                Complete our secure online form or contact us directly. We'll arrange 
                collection via armoured courier or you can deliver to our secure vault facility.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3>Independent Assay</h3>
              <p>
                Your gold undergoes certified independent assay to determine precise weight, 
                purity, and fineness. You receive a detailed assay certificate.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3>Secure Storage</h3>
              <p>
                Your assets enter our Class III vault network with full insurance coverage 
                and 24/7 monitoring under chain-of-custody protocols.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3>Market Placement</h3>
              <p>
                We present your gold to our global network of institutional buyers, refineries, 
                and private collectors, targeting optimal pricing.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">05</div>
              <h3>Sale & Settlement</h3>
              <p>
                Upon sale, proceeds are transferred to your account within the agreed settlement 
                window. Full transparency and reporting throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Kestrel for Gold Consignment</h2>
          <div className="divider center"></div>
          
          <div className="features-grid">
            <div className="feature-card">
              <FaCertificate className="feature-icon" />
              <h3>LBMA Compliant</h3>
              <p>
                All handling, assaying, and storage meets London Bullion Market Association 
                standards for institutional-grade precious metals management.
              </p>
            </div>

            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>Full Insurance Coverage</h3>
              <p>
                Your gold is covered by comprehensive Lloyd's of London insurance from the 
                moment it enters our custody until final settlement.
              </p>
            </div>

            <div className="feature-card">
              <FaTruck className="feature-icon" />
              <h3>Armoured Logistics</h3>
              <p>
                We arrange secure collection and transportation via bonded armoured carriers 
                with real-time GPS tracking and armed escort where required.
              </p>
            </div>

            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <h3>Market-Leading Prices</h3>
              <p>
                Access to institutional spot pricing with transparent fee structures. 
                No hidden costs, no surprise deductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Transparent Fee Structure</h2>
          <div className="divider center"></div>
          
          <div className="pricing-content">
            <p className="pricing-intro">
              We believe in complete transparency. Our consignment fees are competitive, 
              clearly stated, and there are no hidden charges.
            </p>
            
            <div className="pricing-table">
              <div className="pricing-row">
                <div className="pricing-label">Assay & Valuation</div>
                <div className="pricing-value">Complimentary for holdings over 10oz</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Storage (per month)</div>
                <div className="pricing-value">0.15% of value or minimum 50</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Consignment Commission</div>
                <div className="pricing-value">1.5% - 3.5% depending on value</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Armoured Collection</div>
                <div className="pricing-value">From 200 (distance dependent)</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Insurance</div>
                <div className="pricing-value">Included in storage fee</div>
              </div>
            </div>

            <p className="pricing-note">
              * Fees are deducted from final sale proceeds. No upfront payment required.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Consign Your Gold?</h2>
          <p>
            Join hundreds of clients who trust Kestrel Security for secure, transparent, 
            and profitable gold consignment.
          </p>
          <div className="cta-buttons">
            <a href="https://app.kestrelsecuritycompany.com/" className="btn btn-primary btn-lg">Get Started Today</a>
            <Link to="/contact" className="btn btn-outline btn-lg">Speak to a Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
