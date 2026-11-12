import Gallery from './Gallery'
import './ServicesEnhanced.css'

export default function ServicesEnhanced() {
  const serviceImages = {
    gold: [
      { src: '/gold bar.webp', alt: 'Gold bars', caption: 'Premium Bars' },
      { src: '/soverign bullion.webp', alt: 'Sovereigns', caption: 'Sovereigns' },
      { src: '/britain bullion.webp', alt: 'Gold ingots', caption: 'Ingots' },
    ],
    diamond: [
      { src: '/pyx coin.webp', alt: 'Diamonds', caption: 'Certified' },
      { src: '/coin.webp', alt: 'Diamond rings', caption: 'Jewelry' },
      { src: '/diwali gift.webp', alt: 'Gemstones', caption: 'Gems' },
    ],
    jewelry: [
      { src: '/pyx coin.webp', alt: 'Fine jewelry', caption: 'Luxury' },
      { src: '/gold bar.webp', alt: 'Watches', caption: 'Watches' },
      { src: '/britain bullion.webp', alt: 'Estate jewelry', caption: 'Estate' },
    ],
  }

  return (
    <>
      <section className="services-showcase">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="divider center"></div>

          {/* Gold Section */}
          <div className="service-section">
            <div className="service-content">
              <div className="service-text">
                <h3>Gold Consignment</h3>
                <p>
                  From investment-grade bullion to rare numismatic coins and refined doré, 
                  we handle every type of gold with institutional-grade care.
                </p>
                <ul className="service-features">
                  <li>LBMA Compliant Processing</li>
                  <li>Independent Assay Certification</li>
                  <li>Global Institutional Buyers</li>
                  <li>Market-Leading Prices</li>
                </ul>
                <a href="/gold-consignment" className="btn btn-primary">Learn More</a>
              </div>
              <div className="service-gallery">
                {serviceImages.gold.map((img, idx) => (
                  <img key={idx} src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
          </div>

          {/* Diamond Section */}
          <div className="service-section">
            <div className="service-content service-content--reverse">
              <div className="service-gallery">
                {serviceImages.diamond.map((img, idx) => (
                  <img key={idx} src={img.src} alt={img.alt} />
                ))}
              </div>
              <div className="service-text">
                <h3>Diamond Consignment</h3>
                <p>
                  GIA/IGI certified diamonds and rare gemstones. From single investment stones 
                  to large parcel lots, we connect you to serious buyers worldwide.
                </p>
                <ul className="service-features">
                  <li>GIA/IGI Certification</li>
                  <li>Kimberley Process Compliance</li>
                  <li>Antwerp & Dubai Networks</li>
                  <li>Parcel Lot Expertise</li>
                </ul>
                <a href="/diamond-consignment" className="btn btn-primary">Explore Diamonds</a>
              </div>
            </div>
          </div>

          {/* Jewelry Section */}
          <div className="service-section">
            <div className="service-content">
              <div className="service-text">
                <h3>Fine Jewellery & Watches</h3>
                <p>
                  Designer pieces, estate collections, and luxury timepieces authenticated 
                  by certified gemologists and master horologists.
                </p>
                <ul className="service-features">
                  <li>Expert Authentication</li>
                  <li>Provenance Research</li>
                  <li>Sotheby's & Christie's Access</li>
                  <li>White-Glove Service</li>
                </ul>
                <a href="/jewelry-consignment" className="btn btn-primary">View Services</a>
              </div>
              <div className="service-gallery">
                {serviceImages.jewelry.map((img, idx) => (
                  <img key={idx} src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="divider center"></div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Kestrel Security handled my family's gold collection with remarkable professionalism. 
                The pricing was exceptional and the process was seamless from start to finish."
              </div>
              <div className="testimonial-author">— Margaret T., London</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                "As an institutional buyer, I appreciate Kestrel's LBMA compliance and transparent 
                operations. They've been our trusted partner for over 5 years."
              </div>
              <div className="testimonial-author">— David M., Investment Manager</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                "I was impressed by the authentication process for my watches. The team's expertise 
                and attention to detail is unmatched in the industry."
              </div>
              <div className="testimonial-author">— James P., Collector</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                "The security and insurance provisions gave me complete peace of mind. I knew my 
                diamonds were in the safest possible hands."
              </div>
              <div className="testimonial-author">— Sophia K., Estate Liquidation</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
