import './HomepageAbout.css'

export default function HomepageAbout() {
  return (
    <section className="homepage-about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Kestrel Security</h2>
            <p>
              With over four decades of experience, Kestrel Security has established itself as 
              the world's leading independent consignment house for precious assets. We specialize 
              in gold, diamonds, fine jewellery, and luxury watches.
            </p>
            <p>
              Our commitment to security, integrity, and results has earned the trust of thousands 
              of clients worldwide. We operate exclusively on consignment, meaning our success depends 
              entirely on achieving the best possible prices for our consignors.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-number">2,000+</div>
                <div className="highlight-label">Satisfied Clients</div>
              </div>
              <div className="highlight">
                <div className="highlight-number">5B+</div>
                <div className="highlight-label">Assets Managed</div>
              </div>
              <div className="highlight">
                <div className="highlight-number">50+</div>
                <div className="highlight-label">Countries Served</div>
              </div>
            </div>
            <a href="/about" className="btn btn-primary">Learn More About Us</a>
          </div>
          <div className="about-image">
            <img 
              src="/gold bar.webp" 
              alt="Secure vault" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
