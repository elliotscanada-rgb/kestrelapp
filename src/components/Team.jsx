import './Team.css'

const TEAM = [
  {
    name: 'Alistair Pemberton',
    role: 'Chief Executive Officer',
    bio: 'Former Head of Precious Metals at a leading Swiss bank. Over 25 years in commodity trading and asset security across Europe and the Middle East.',
    initials: 'AP',
  },
  {
    name: 'Nadia Osei-Mensah',
    role: 'Director of Operations',
    bio: 'Specialist in international logistics and bonded warehouse management. Previously led secure transport protocols for a Tier-1 central bank.',
    initials: 'NO',
  },
  {
    name: 'Dr. Rajan Pillai',
    role: 'Head of Gemological Services',
    bio: 'Certified Fellow of the Gemological Institute of America (GIA). Two decades of rough and polished diamond assessment in Antwerp and Mumbai.',
    initials: 'RP',
  },
  {
    name: 'Isabelle Fontaine',
    role: 'International Relations Director',
    bio: 'Manages Kestrel\'s buyer network across Europe, Asia, and the Gulf. Expert in cross-border regulatory compliance for precious-metals trade.',
    initials: 'IF',
  },
  {
    name: 'Marcus Dlamini',
    role: 'Head of Compliance & AML',
    bio: 'Former financial crimes investigator. Ensures all consignment activity meets FATF, LBMA, and local regulatory standards in every jurisdiction.',
    initials: 'MD',
  },
  {
    name: 'Priya Nakamura',
    role: 'Director of Client Relations',
    bio: 'Dedicated to delivering a seamless consignor experience from first enquiry through final settlement, with discreet, personalised service.',
    initials: 'PN',
  },
]

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">

        <div className="team__header">
          <p className="section-tag">Leadership</p>
          <h2 className="section-title">
            Our <span>Expert Team</span>
          </h2>
          <div className="divider center" />
          <p className="team__intro">
            Kestrel Security is led by specialists from precious metals trading, gemology,
            logistics, and financial compliance — bringing decades of combined expertise
            to every consignment.
          </p>
        </div>

        <div className="team__grid">
          {TEAM.map(member => (
            <div key={member.name} className="team__card">
              <div className="team__avatar">
                <span>{member.initials}</span>
              </div>
              <div className="team__info">
                <h3>{member.name}</h3>
                <p className="team__role">{member.role}</p>
                <p className="team__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
