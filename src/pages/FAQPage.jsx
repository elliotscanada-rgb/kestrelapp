import { useState } from 'react'
import './FAQPage.css'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'General Questions',
      items: [
        {
          q: 'What is consignment?',
          a: 'Consignment is a sales arrangement where we act as your agent. You retain ownership of your assets while we find buyers and handle the sale. We earn a commission only when your items sell - no upfront fees or purchase offers.'
        },
        {
          q: 'How does Kestrel Security differ from pawn shops or jewellers?',
          a: 'Unlike traditional buyers who purchase items outright at a discount, we operate exclusively on consignment. This means we focus on getting YOU the best price, not acquiring assets cheaply for resale.'
        },
        {
          q: 'Are my assets fully insured?',
          a: 'Yes. All consigned items are covered by comprehensive Lloyd\'s of London insurance from collection through final sale. Insurance costs are included in our transparent fee structure.'
        },
        {
          q: 'How long does the consignment process take?',
          a: 'Average timelines: Gold/Diamonds 2-8 weeks, Jewellery/Watches 4-12 weeks depending on item rarity and market demand. Express placement options available for premium items.'
        },
      ]
    },
    {
      category: 'Gold Consignment',
      items: [
        {
          q: 'What types of gold do you accept?',
          a: 'We accept investment bullion bars, coins, refined doré, mining output, scrap gold, and estate pieces. All karats (9K-24K) welcome, all quantities from 1oz upward.'
        },
        {
          q: 'Do I need to pay for assay?',
          a: 'Assay is complimentary for holdings over 10oz. Smaller quantities incur a flat assay fee of $50-$100. You receive a detailed assay certificate.'
        },
        {
          q: 'What is LBMA compliance?',
          a: 'London Bullion Market Association standards ensure gold is handled, tested, and stored according to institutional specifications. This maximizes buyer confidence and ensures market-leading prices.'
        },
        {
          q: 'Can I track my gold while it\'s in storage?',
          a: 'Yes. You receive real-time access to your custody records, including photos, assay results, vault location, and storage history.'
        },
      ]
    },
    {
      category: 'Diamond Consignment',
      items: [
        {
          q: 'Do uncertified diamonds require certification?',
          a: 'We recommend GIA or IGI certification for investment-grade diamonds to maximize buyer appeal and pricing. We arrange grading at competitive rates ($100-$300 per stone).'
        },
        {
          q: 'What is Kimberley Process compliance?',
          a: 'The Kimberley Process certifies that diamonds are conflict-free (not mined to finance armed conflict). All rough diamonds we handle are Kimberley Process certified.'
        },
        {
          q: 'How do you value my diamonds?',
          a: 'Certified diamonds are valued based on 4Cs (Carat, Color, Clarity, Cut), current market prices for that grade, and demand. Uncertified stones are estimated pending certification.'
        },
        {
          q: 'Can I consign parcel lots?',
          a: 'Yes. Calibrated melee, commercial parcels, and mixed-quality lots are welcome. Bulk pricing available for large inventories.'
        },
      ]
    },
    {
      category: 'Jewellery & Watches',
      items: [
        {
          q: 'How do you authenticate luxury items?',
          a: 'Our certified gemologists and master horologists examine hallmarks, serial numbers, construction quality, materials, and condition. We provide detailed authentication reports.'
        },
        {
          q: 'Do you handle repairs or restoration?',
          a: 'We assess condition as-is. Minor cleaning is complimentary. Major restoration is not performed; items are sold in current condition unless you request professional restoration at your expense.'
        },
        {
          q: 'What is provenance and why does it matter?',
          a: 'Provenance is ownership history. Documentation, certificates, and celebrity/famous ownership significantly increase value and buyer interest.'
        },
        {
          q: 'Can you sell through Sotheby\'s or Christie\'s?',
          a: 'For estate collections and significant pieces, yes. We have direct relationships with major auction houses and specialist dealers globally.'
        },
      ]
    },
    {
      category: 'Fees & Payments',
      items: [
        {
          q: 'What are your consignment fees?',
          a: 'Fees vary by asset type and value: Gold 1.5-3.5%, Diamonds 3-7%, Jewellery 5-15%, Watches 6-10%. All fees are transparent and deducted from sale proceeds only.'
        },
        {
          q: 'Are there any upfront costs?',
          a: 'No upfront fees for submission, assessment, or initial storage. Assay, certification, and transportation may have costs depending on the asset type and you can choose to proceed or not.'
        },
        {
          q: 'How and when do I receive payment?',
          a: 'Payment is transferred within 3-7 business days of sale confirmation. Bank transfer or check available. You receive itemized settlement statements.'
        },
        {
          q: 'What if my item doesn\'t sell?',
          a: 'You can reclaim unsold items anytime. Storage fees continue until retrieval. We can also adjust pricing and remarket if you wish to extend the consignment.'
        },
      ]
    },
    {
      category: 'Storage & Security',
      items: [
        {
          q: 'Where is my property stored?',
          a: 'In Class III UL-listed vaults with 24/7 armed security, vault alarms, CCTV, climate control, and fire suppression systems. Multiple secure locations available.'
        },
        {
          q: 'Can I visit the vault?',
          a: 'Yes, by appointment. We encourage you to see your items in secure storage. Virtual tours and inspection updates also available.'
        },
        {
          q: 'What if there\'s theft or damage?',
          a: 'Comprehensive Lloyd\'s of London insurance covers all consigned items. We\'ve had zero loss claims in our history.'
        },
        {
          q: 'Is there a minimum storage duration?',
          a: 'No minimum. You can reclaim items anytime. Most items consign 4-12 weeks; longer timelines incur monthly storage fees.'
        },
      ]
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="faq-page">
      <div style={{height: '80px'}}></div>

      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about Kestrel Security consignment services</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="faq-category">
              <h2 className="faq-category__title">{category.category}</h2>
              
              <div className="faq-list">
                {category.items.map((item, itemIdx) => {
                  const globalIdx = catIdx * 100 + itemIdx
                  return (
                    <div key={itemIdx} className="faq-item">
                      <button
                        className={`faq-item__question ${openIndex === globalIdx ? 'is-open' : ''}`}
                        onClick={() => toggleFAQ(globalIdx)}
                      >
                        <span>{item.q}</span>
                        <span className="faq-icon">+</span>
                      </button>
                      <div className={`faq-item__answer ${openIndex === globalIdx ? 'is-open' : ''}`}>
                        <div className="faq-item__answer-content">{item.a}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <div className="container">
          <h2>Still have questions?</h2>
          <p>Contact our specialists for personalized guidance on your specific assets.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
