import { Link } from 'react-router-dom'
import { FaGem, FaCertificate, FaLock, FaGlobe } from 'react-icons/fa'
import Gallery from '../components/Gallery'
import './ConsignmentPages.css'

export default function DiamondConsignment() {
  const diamondImages = [
    { src: '/pyx coin.webp', alt: 'Diamond rings', caption: 'Rings' },
    { src: '/gold bar.webp', alt: 'Diamond jewelry', caption: 'Jewelry' },
    { src: '/coin.webp', alt: 'Gemstones', caption: 'Gemstones' },
    { src: '/britain bullion.webp', alt: 'Diamonds', caption: 'Certified' },
    { src: '/soverign bullion.webp', alt: 'Diamond collection', caption: 'Collections' },
    { src: '/diwali gift.webp', alt: 'Luxury diamonds', caption: 'Luxury' },
  ]

  return (
    <div className="consignment-page">
      {/* Hero Section */}
      <section className="consignment-hero">
        <div className="consignment-hero__overlay"></div>
        <img 
          src="/pyx coin.webp" 
          alt="Diamonds" 
          className="consignment-hero__bg"
        />
        <div className="container consignment-hero__content">
          <h1 className="consignment-hero__title">Diamond Consignment Services</h1>
          <p className="consignment-hero__subtitle">
            Certified grading, global market access, and confidential placement for rough and polished diamonds
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Consign Your Diamonds</Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="consignment-intro">
        <div className="container">
          <div className="consignment-intro__grid">
            <div className="consignment-intro__text">
              <h2>Expert Diamond Consignment</h2>
              <p>
                Diamonds represent one of the most concentrated forms of portable wealth, yet selling 
                them privately can be challenging. Traditional jewellers and pawn shops offer far below 
                market value, while auction houses charge steep commissions and lack discretion.
              </p>
              <p>
                Kestrel Security specializes in consigning diamonds of all types - from single investment 
                stones to large parcel lots, from rough mining output to estate jewellery diamonds. Our 
                connections to Antwerp, Dubai, Hong Kong, and New York diamond bourses ensure your stones 
                reach serious buyers at competitive prices.
              </p>
            </div>
            <div className="consignment-intro__image">
              <img 
                src="/diwali gift.webp" 
                alt="Diamond close-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Gallery */}
      <Gallery images={diamondImages} title="Our Diamond Collections" />

      {/* Product Categories */}
      <section className="gold-products">
        <div className="container">
          <h2 className="section-title">Diamond Products We Accept</h2>
          <div className="divider center"></div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-card__image">
                <img src="/pyx coin.webp" alt="Certified diamonds" />
              </div>
              <div className="product-card__content">
                <h3>Certified Polished Diamonds</h3>
                <p>GIA, IGI, HRD certified diamonds</p>
                <ul className="product-list">
                  <li>0.30ct to 10ct+ stones</li>
                  <li>Investment-grade D-H color</li>
                  <li>IF-VS clarity</li>
                  <li>Fancy colored diamonds</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/gold bar.webp" alt="Uncertified diamonds" />
              </div>
              <div className="product-card__content">
                <h3>Uncertified Polished Diamonds</h3>
                <p>Loose diamonds requiring certification</p>
                <ul className="product-list">
                  <li>Estate and inherited stones</li>
                  <li>Commercial grade parcels</li>
                  <li>GIA/IGI grading arranged</li>
                  <li>Certification at cost</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/coin.webp" alt="Rough diamonds" />
              </div>
              <div className="product-card__content">
                <h3>Rough Diamonds</h3>
                <p>Mining output and natural rough</p>
                <ul className="product-list">
                  <li>Mining output parcels</li>
                  <li>Natural uncut diamonds</li>
                  <li>Kimberlite & alluvial rough</li>
                  <li>Kimberley Process certified</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/britain bullion.webp" alt="Parcel diamonds" />
              </div>
              <div className="product-card__content">
                <h3>Parcel Lots</h3>
                <p>Calibrated and mixed parcels</p>
                <ul className="product-list">
                  <li>Calibrated melee (0.01ct-0.20ct)</li>
                  <li>Commercial parcels</li>
                  <li>Mixed quality lots</li>
                  <li>Wholesaler inventory</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/soverign bullion.webp" alt="Fancy diamonds" />
              </div>
              <div className="product-card__content">
                <h3>Fancy Colored Diamonds</h3>
                <p>Rare colored stone collection</p>
                <ul className="product-list">
                  <li>Pink diamonds</li>
                  <li>Blue diamonds</li>
                  <li>Yellow & fancy colors</li>
                  <li>Certified grades</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/diwali gift.webp" alt="Diamond jewelry" />
              </div>
              <div className="product-card__content">
                <h3>Estate Diamond Jewelry</h3>
                <p>Pre-owned diamond pieces</p>
                <ul className="product-list">
                  <li>Diamond rings</li>
                  <li>Diamond necklaces</li>
                  <li>Diamond bracelets</li>
                  <li>Estate collections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Accept - Detailed */}
      <section className="gold-types">
        <div className="container">
          <h2 className="section-title">Comprehensive Diamond Services</h2>
          <div className="divider center"></div>
          
          <div className="gold-types__grid">
            <div className="gold-types__card">
              <h3>Certified Polished</h3>
              <ul>
                <li>GIA, IGI, HRD certified diamonds</li>
                <li>0.30ct to 10ct+ individual stones</li>
                <li>Investment-grade D-H color, IF-VS clarity</li>
                <li>Fancy colored diamonds (pink, blue, yellow)</li>
              </ul>
            </div>

            <div className="gold-types__card">
              <h3>Uncertified Polished</h3>
              <ul>
                <li>Loose diamonds requiring certification</li>
                <li>Estate and inherited stones</li>
                <li>Commercial grade parcels</li>
                <li>We arrange GIA/IGI grading at cost</li>
              </ul>
            </div>

            <div className="gold-types__card">
              <h3>Rough Diamonds</h3>
              <ul>
                <li>Mining output and rough parcels</li>
                <li>Natural uncut diamonds</li>
                <li>Kimberlite and alluvial rough</li>
                <li>Kimberley Process certified only</li>
              </ul>
            </div>

            <div className="gold-types__card">
              <h3>Parcel Lots</h3>
              <ul>
                <li>Calibrated melee (0.01ct - 0.20ct)</li>
                <li>Commercial parcels for manufacturers</li>
                <li>Mixed quality lots</li>
                <li>Trader and wholesaler inventory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Grading */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Certification & Expert Grading</h2>
          <div className="divider center"></div>
          
          <div className="features-grid">
            <div className="feature-card">
              <FaCertificate className="feature-icon" />
              <h3>GIA Certification</h3>
              <p>
                We arrange Gemological Institute of America grading for all uncertified stones. 
                GIA reports maximize buyer confidence and sale prices.
              </p>
            </div>

            <div className="feature-card">
              <FaGem className="feature-icon" />
              <h3>IGI & HRD Grading</h3>
              <p>
                International Gemological Institute and Hoge Raad voor Diamant certification 
                available for European market placement.
              </p>
            </div>

            <div className="feature-card">
              <FaLock className="feature-icon" />
              <h3>Secure Vault Storage</h3>
              <p>
                Class III vault storage with individual stone custody logs, full insurance, 
                and 24/7 monitoring during the consignment period.
              </p>
            </div>

            <div className="feature-card">
              <FaGlobe className="feature-icon" />
              <h3>Global Market Access</h3>
              <p>
                Direct connections to Antwerp, Dubai, Hong Kong, Mumbai, and New York diamond 
                trading networks and registered dealer buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Cs */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Understanding Diamond Value: The 4 Cs</h2>
          <div className="divider center"></div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">C1</div>
              <h3>Carat Weight</h3>
              <p>
                The size of the diamond measured in carats (1 carat = 0.2 grams). Larger diamonds 
                are exponentially rarer and more valuable per carat.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">C2</div>
              <h3>Color Grade</h3>
              <p>
                Graded D (colorless) to Z (light yellow/brown). D-F are considered colorless 
                and command premium prices. Fancy colors are graded separately.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">C3</div>
              <h3>Clarity</h3>
              <p>
                Measures internal inclusions and external blemishes. Ranges from Flawless (FL) to 
                Included (I3). IF-VVS stones are investment grade.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">C4</div>
              <h3>Cut Quality</h3>
              <p>
                How well the diamond is proportioned and faceted. Excellent cut maximizes brilliance. 
                Cut affects value as much as other Cs combined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section" style={{background: 'var(--darker-bg)'}}>
        <div className="container">
          <h2 className="section-title">Diamond Consignment Process</h2>
          <div className="divider center"></div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3>Initial Assessment</h3>
              <p>
                Submit photos and any existing certificates. We provide a preliminary evaluation 
                and consignment estimate at no charge.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3>Secure Delivery</h3>
              <p>
                Arrange insured courier delivery or hand-deliver to our vault. All stones are 
                individually logged and photographed upon receipt.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3>Certification (if needed)</h3>
              <p>
                Uncertified stones are submitted to GIA/IGI for professional grading. Certification 
                typically takes 2-4 weeks depending on lab workload.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3>Market Presentation</h3>
              <p>
                Certified stones are presented to our buyer network - dealers, manufacturers, 
                collectors, and investors - with complete confidentiality.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">05</div>
              <h3>Sale & Payment</h3>
              <p>
                Upon sale confirmation, funds are transferred within 3-5 business days. You receive 
                a detailed settlement statement and transaction documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Commission & Fees</h2>
          <div className="divider center"></div>
          
          <div className="pricing-content">
            <p className="pricing-intro">
              Our diamond consignment fees are transparent and competitive. All fees are deducted 
              from final sale proceeds.
            </p>
            
            <div className="pricing-table">
              <div className="pricing-row">
                <div className="pricing-label">Initial Assessment</div>
                <div className="pricing-value">Complimentary</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">GIA/IGI Certification (if required)</div>
                <div className="pricing-value">At cost (typically $100-$300 per stone)</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Vault Storage (per month)</div>
                <div className="pricing-value">$75 flat fee or 0.2% of value</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Consignment Commission</div>
                <div className="pricing-value">3% - 7% based on sale value</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Insurance</div>
                <div className="pricing-value">Included</div>
              </div>
            </div>

            <p className="pricing-note">
              * Commission rates decrease for higher-value stones and parcel lots. Contact us for volume pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Consign Your Diamonds?</h2>
          <p>
            Whether you have a single certified stone or a parcel lot, we provide expert 
            evaluation, secure custody, and access to global diamond markets.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Diamond Consignment</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Request a Valuation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
