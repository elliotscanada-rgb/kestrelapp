import { Link } from 'react-router-dom'
import { FaClock, FaEye, FaShip, FaHandHolding } from 'react-icons/fa'
import Gallery from '../components/Gallery'
import './ConsignmentPages.css'

export default function JewelryConsignment() {
  const jewelryImages = [
    { src: '/pyx coin.webp', alt: 'Fine jewelry', caption: 'Fine Jewelry' },
    { src: '/gold bar.webp', alt: 'Luxury watches', caption: 'Watches' },
    { src: '/coin.webp', alt: 'Estate pieces', caption: 'Estate' },
    { src: '/britain bullion.webp', alt: 'Designer jewelry', caption: 'Designer' },
    { src: '/soverign bullion.webp', alt: 'Diamond jewelry', caption: 'Diamond' },
    { src: '/diwali gift.webp', alt: 'Luxury pieces', caption: 'Luxury' },
  ]

  return (
    <div className="consignment-page">
      {/* Hero Section */}
      <section className="consignment-hero">
        <div className="consignment-hero__overlay"></div>
        <img 
          src="/diwali gift.webp" 
          alt="Fine Jewellery" 
          className="consignment-hero__bg"
        />
        <div className="container consignment-hero__content">
          <h1 className="consignment-hero__title">Fine Jewellery & Watches</h1>
          <p className="consignment-hero__subtitle">
            Authenticated consignment and global placement for estate jewellery, designer pieces, and luxury timepieces
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Consign Your Jewellery</Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="consignment-intro">
        <div className="container">
          <div className="consignment-intro__grid">
            <div className="consignment-intro__text">
              <h2>Authenticated Jewellery Placement</h2>
              <p>
                Whether you're liquidating a family collection, downsizing an estate, or selling 
                individual designer pieces or luxury watches, finding the right buyer at fair market 
                value is challenging. Direct sales rarely achieve optimal pricing, while auction houses 
                charge 20-30% commissions.
              </p>
              <p>
                Kestrel Security specializes in discrete, authenticated consignment of fine jewellery 
                and luxury timepieces. Our expert gemologists and horologists authenticate every piece, 
                provide professional photography, and present items to a curated network of collectors, 
                dealers, and investors worldwide.
              </p>
            </div>
            <div className="consignment-intro__image">
              <img 
                src="/britain bullion.webp" 
                alt="Luxury watch"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jewelry Gallery */}
      <Gallery images={jewelryImages} title="Our Jewelry Collections" />

      {/* Product Categories */}
      <section className="gold-products">
        <div className="container">
          <h2 className="section-title">Fine Jewellery & Watch Categories</h2>
          <div className="divider center"></div>
          <p className="section-subtitle">
            From designer pieces to estate collections and luxury timepieces
          </p>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-card__image">
                <img src="/pyx coin.webp" alt="Designer Jewellery" />
              </div>
              <div className="product-card__content">
                <h3>Designer Jewellery</h3>
                <p>Cartier, Van Cleef & Arpels, Bvlgari, Chopard, Graff, Harry Winston, Tiffany & Co</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/gold bar.webp" alt="Estate Jewellery" />
              </div>
              <div className="product-card__content">
                <h3>Estate Jewellery</h3>
                <p>Vintage pieces, antique collections, heirlooms, Art Deco and Art Nouveau</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/coin.webp" alt="Luxury Watches" />
              </div>
              <div className="product-card__content">
                <h3>Luxury Watches</h3>
                <p>Rolex, Patek Philippe, Audemars Piguet, Omega, Breitling - vintage and modern</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/britain bullion.webp" alt="Gemstone Jewellery" />
              </div>
              <div className="product-card__content">
                <h3>Gemstone Jewellery</h3>
                <p>Ruby, sapphire, emerald, opal, tourmaline, rare gemstones and certified stones</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/soverign bullion.webp" alt="Fine Jewellery" />
              </div>
              <div className="product-card__content">
                <h3>Fine Jewellery</h3>
                <p>Contemporary designs, precious metal pieces, diamond jewelry, and statement items</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card__image">
                <img src="/diwali gift.webp" alt="Luxury Timepieces" />
              </div>
              <div className="product-card__content">
                <h3>Luxury Timepieces</h3>
                <p>Rare complications, limited editions, vintage chronographs, and collector watches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Process */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Expert Authentication & Valuation</h2>
          <div className="divider center"></div>
          
          <div className="features-grid">
            <div className="feature-card">
              <FaEye className="feature-icon" />
              <h3>Certified Gemologists</h3>
              <p>
                Our in-house American Gem Society certified gemologists authenticate all gemstones 
                and provide detailed condition assessments.
              </p>
            </div>

            <div className="feature-card">
              <FaClock className="feature-icon" />
              <h3>Horologist Expertise</h3>
              <p>
                Certified master horologists examine luxury watches, verify authenticity, evaluate 
                condition, and assess value in the secondary market.
              </p>
            </div>

            <div className="feature-card">
              <FaShip className="feature-icon" />
              <h3>Provenance Research</h3>
              <p>
                We research ownership history, publication records, and certificates. Complete 
                documentation and provenance reports enhance buyer confidence and value.
              </p>
            </div>

            <div className="feature-card">
              <FaHandHolding className="feature-icon" />
              <h3>White-Glove Service</h3>
              <p>
                Professional photography, insurance, secure packaging, and insured international 
                shipping for high-value pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Access */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Global Market Access</h2>
          <div className="divider center"></div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3>Sotheby's & Christie's</h3>
              <p>
                Placed through fine art and jewellery specialist auction partnerships for high-value 
                estate pieces and collector items.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3>Private Collectors</h3>
              <p>
                Direct access to networks of serious collectors seeking specific designer pieces 
                and rare horological examples.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3>Luxury Dealers</h3>
              <p>
                Connections to established fine jewellery and luxury watch retailers worldwide 
                seeking inventory and rare pieces.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3>Institutional Buyers</h3>
              <p>
                Museums, foundations, and institutional collectors for historically significant 
                and rare pieces.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">05</div>
              <h3>International Bourses</h3>
              <p>
                Access to specialized jewellery and watch trading networks in London, Antwerp, 
                Dubai, Hong Kong, and New York.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consignment Steps */}
      <section className="process-section" style={{background: 'var(--darker-bg)'}}>
        <div className="container">
          <h2 className="section-title">The Jewellery Consignment Process</h2>
          <div className="divider center"></div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3>Initial Consultation</h3>
              <p>
                Submit photos, brand information, and condition details. We provide a confidential 
                estimate and discuss consignment terms.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3>Professional Appraisal</h3>
              <p>
                Our experts examine pieces in detail, authenticate, assess condition, and provide 
                a formal insurance valuation.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3>Secure Collection</h3>
              <p>
                Hand delivery or insured courier collection. Each piece is individually photographed, 
                documented, and placed in secure vault storage.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3>Professional Marketing</h3>
              <p>
                High-resolution photography, detailed descriptions, authentication certificates, 
                and presentation to curated buyer networks.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step__number">05</div>
              <h3>Sale & Payment</h3>
              <p>
                Upon successful sale, secure transfer of funds within 5-7 business days. Complete 
                documentation and transaction statements provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Commission Structure</h2>
          <div className="divider center"></div>
          
          <div className="pricing-content">
            <p className="pricing-intro">
              Our commissions are competitive and scale with value. All fees are transparent 
              and deducted from final sale proceeds.
            </p>
            
            <div className="pricing-table">
              <div className="pricing-row">
                <div className="pricing-label">Authentication & Appraisal</div>
                <div className="pricing-value">Complimentary</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Professional Photography</div>
                <div className="pricing-value">Included</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Vault Storage (per month)</div>
                <div className="pricing-value">0.2% of value or $100 minimum</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Consignment Commission</div>
                <div className="pricing-value">5% - 15% (depending on category and value)</div>
              </div>
              <div className="pricing-row">
                <div className="pricing-label">Insurance & Shipping</div>
                <div className="pricing-value">Included</div>
              </div>
            </div>

            <p className="pricing-note">
              * Designer jewellery typically 5-8%, Estate pieces 8-12%, Luxury watches 6-10%. 
              Volume discounts available for large collections.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Consign Your Jewellery or Watches?</h2>
          <p>
            Unlock the value of your fine jewellery and luxury timepieces through our expert, 
            confidential consignment service.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">Begin Consignment</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Get a Free Appraisal</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
