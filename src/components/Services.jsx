import './Services.css'

const SERVICES = [
  {
    title: 'Gold Consignment',
    description:
      'We accept gold bullion, bars, coins, nuggets, and refined dore on consignment. Each shipment undergoes independent assay and is matched to verified institutional buyers and refineries worldwide.',
    features: [
      'London Bullion Market Association (LBMA) compliant handling',
      'Independent third-party assay certification',
      'Armoured logistics & bonded warehouse custody',
      'Real-time market pricing and transparent fee schedule',
    ],
  },
  {
    title: 'Diamond Consignment',
    description:
      'Rough and polished diamonds, from single investment stones to large parcel lots. All stones are GIA / IGI / HRD graded prior to placement, maximising buyer confidence and final sale price.',
    features: [
      'Certified grading by GIA, IGI, or HRD',
      'Access to Antwerp, Dubai & Hong Kong trade networks',
      'Secure vault storage in Class III certified facilities',
      'Confidential sale matching - no public listings required',
    ],
  },
  {
    title: 'Fine Jewellery & Watches',
    description:
      'Signed pieces, estate jewellery, and luxury timepieces consigned through our global auction and private-treaty network. Expert authentication and provenance research included.',
    features: [
      'Authentication by certified gemologists & horologists',
      'Provenance research and documentation',
      "Access to Sotheby's, Christie's & specialist auction channels",
      'White-glove collection and insured international shipping',
    ],
  },
  {
    title: 'Institutional & Estate Consignment',
    description:
      'Purpose-built for mining companies, central banks, estates, and family offices that need a discreet, fully compliant route to liquidate precious-asset holdings at institutional scale.',
    features: [
      'Full AML / KYC due-diligence support',
      'Structured lot management for large inventories',
      'Dedicated relationship manager assigned to each account',
      'Multi-jurisdiction regulatory compliance advisory',
    ],
  },
]

const PROCESS = [
  { step: '01', title: 'Submission',    text: 'Complete our secure online enquiry form or contact our team directly. All submissions are treated with strict confidentiality.' },
  { step: '02', title: 'Assessment',    text: 'Our experts evaluate your assets. We arrange secure collection and provide a certified independent valuation at no obligation.' },
  { step: '03', title: 'Custody',       text: 'Your assets enter our Class III vault network, fully insured and tracked under 24/7 monitored chain-of-custody protocols.' },
  { step: '04', title: 'Market Placement', text: 'We present your assets to our curated buyer network - institutions, dealers, and collectors - targeting the best achievable price.' },
  { step: '05', title: 'Settlement',    text: 'Upon sale confirmation, proceeds are transferred to you within the agreed settlement window. Transparent reporting throughout.' },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="services__header">
          <p className="section-tag">What We Offer</p>
          <h2 className="section-title">
            Consignment Services for<br /><span>Every Valuable Asset</span>
          </h2>
          <div className="divider center" />
          <p className="services__intro">
            Kestrel Security operates exclusively as a consignment company -
            we never purchase assets for our own account. Our singular focus
            is securing the best outcome for our consignors.
          </p>
        </div>

        {/* Service cards */}
        <div className="services__grid">
          {SERVICES.map(svc => (
            <div key={svc.title} className="services__card">
              <h3>{svc.title}</h3>
              <p className="services__card-desc">{svc.description}</p>
              <ul className="services__features">
                {svc.features.map(f => (
                  <li key={f}>
                    <span className="services__check"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-outline services__card-btn">
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="services__process">
          <div className="services__process-header">
            <p className="section-tag">How It Works</p>
            <h2 className="section-title">The Consignment <span>Process</span></h2>
            <div className="divider center" />
          </div>
          <div className="services__steps">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="services__step">
                <div className="services__step-number">{p.step}</div>
                {i < PROCESS.length - 1 && <div className="services__step-connector" />}
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
