import './MissionVision.css'

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container">
        <h2 className="section-title">Our Mission & Vision</h2>
        <div className="divider center"></div>

        <div className="mission-vision__grid">
          {/* Mission */}
          <div className="mission-vision__card mission-card">
            <div className="mission-vision__bg">
              <img 
                src="/soverign bullion.webp" 
                alt="Mission" 
              />
            </div>
            <div className="mission-vision__content">
              <h3>Our Mission</h3>
              <p>
                To be the world's most trusted consignment partner for precious assets. 
                We empower clients to maximize value through transparent, secure, and 
                professional asset management. Our commitment is to every consignor's success.
              </p>
              <ul className="mission-list">
                <li>Absolute integrity in every transaction</li>
                <li>Institutional-grade security and care</li>
                <li>Global market access and expertise</li>
                <li>Transparent fee structures</li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="mission-vision__card vision-card">
            <div className="mission-vision__bg">
              <img 
                src="/britain bullion.webp" 
                alt="Vision" 
              />
            </div>
            <div className="mission-vision__content">
              <h3>Our Vision</h3>
              <p>
                A world where precious assets are seamlessly converted to value through 
                trusted intermediaries. We envision a global network of clients who have 
                complete confidence in our expertise, security, and results.
              </p>
              <ul className="mission-list">
                <li>Connected global markets</li>
                <li>Technology-enabled solutions</li>
                <li>Institutional standards worldwide</li>
                <li>Uncompromising security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
