import AboutEnhanced from '../components/AboutEnhanced'
import Team from '../components/Team'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <div style={{height: '80px'}}></div>
      <AboutEnhanced />
      <Team />
      
      {/* Additional About Content */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="divider center"></div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Security First</h3>
              <p>
                Every decision we make prioritizes the safety and security of your valuable assets. 
                Our Class III vaults, armoured logistics, and comprehensive insurance provide 
                institutional-grade protection.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Absolute Integrity</h3>
              <p>
                We never purchase assets for our own account. As a pure consignment company, 
                our interests are perfectly aligned with yours - we succeed only when you receive 
                the best possible price.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Transparency</h3>
              <p>
                No hidden fees, no surprise deductions. You know exactly what you'll receive 
                before any sale is finalized. We provide detailed reporting at every stage.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>
                Our network spans five continents, connecting you to institutional buyers, refineries, 
                dealers, and collectors worldwide. Local expertise, global markets.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3>Compliance</h3>
              <p>
                Full AML/KYC due diligence, Kimberley Process adherence, and multi-jurisdiction 
                regulatory compliance. We operate to the highest international standards.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Client Focus</h3>
              <p>
                From individual consignors to mining companies and family offices, every client 
                receives dedicated relationship management and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications & Memberships</h2>
          <div className="divider center"></div>
          
          <div className="certifications-grid">
            <div className="cert-item">
              <h4>London Bullion Market Association</h4>
              <p>LBMA Member - Good Delivery Standards</p>
            </div>
            <div className="cert-item">
              <h4>Responsible Jewellery Council</h4>
              <p>RJC Certified - Code of Practices Member</p>
            </div>
            <div className="cert-item">
              <h4>International Diamond Council</h4>
              <p>Kimberley Process Compliant Dealer</p>
            </div>
            <div className="cert-item">
              <h4>Lloyd's of London</h4>
              <p>Comprehensive Insurance Coverage</p>
            </div>
            <div className="cert-item">
              <h4>ISO 9001:2015</h4>
              <p>Quality Management Systems Certified</p>
            </div>
            <div className="cert-item">
              <h4>Class III Vault Security</h4>
              <p>UL Listed Vault Storage Facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="divider center"></div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h4>Foundation</h4>
                <p>
                  Kestrel Security established in London as a specialist precious metals consignment 
                  house serving high-net-worth individuals and family offices.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h4>Diamond Division Launch</h4>
                <p>
                  Expanded services to include certified diamond consignment with connections to 
                  Antwerp and Dubai diamond bourses.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h4>LBMA Membership</h4>
                <p>
                  Achieved London Bullion Market Association membership and Good Delivery accreditation, 
                  opening institutional markets.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h4>Global Expansion</h4>
                <p>
                  Opened operations in Hong Kong and Dubai, establishing 24/7 global coverage and 
                  expanded buyer networks across Asia and Middle East.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>$1 Billion Milestone</h4>
                <p>
                  Surpassed $1 billion in cumulative consignment values, serving over 2,000 clients 
                  across 45 countries.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h4>Today</h4>
                <p>
                  Now recognized as one of the world's leading independent precious asset consignment 
                  houses, with institutional-grade infrastructure and global reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
