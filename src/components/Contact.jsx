import { useState } from 'react'
import './Contact.css'

const ASSET_TYPES = [
  'Gold Bullion / Bars / Coins',
  'Rough Diamonds',
  'Polished Diamonds / Jewellery',
  'Luxury Watches',
  'Mixed / Estate Assets',
  'Other Valuables',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', assetType: '', estimatedValue: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Full name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
                              e.email   = 'A valid email address is required.'
    if (!form.assetType)      e.assetType = 'Please select an asset type.'
    if (!form.message.trim()) e.message = 'Please describe your consignment.'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="contact__header">
          <p className="section-tag">Get in Touch</p>
          <h2 className="section-title">
            Submit a <span>Consignment Enquiry</span>
          </h2>
          <div className="divider center" />
          <p className="contact__intro">
            All enquiries are handled with strict confidentiality. A senior Kestrel
            specialist will contact you within one business day.
          </p>
        </div>

        <div className="contact__layout">

          {/* Info column */}
          <div className="contact__info">

            <div className="contact__info-block">
              <h3>Office Hours</h3>
              <ul className="contact__hours">
                <li><span>Monday – Friday</span><span>8:00 am – 6:00 pm</span></li>
                <li><span>Saturday</span><span>9:00 am – 2:00 pm</span></li>
                <li><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>

            <div className="contact__info-block">
              <h3>Contact Details</h3>
              <ul className="contact__details">
                <li>
                  <span className="contact__detail-icon">📧</span>
                  <a href="mailto:consign@kestrelsecurity.com">consign@kestrelsecurity.com</a>
                </li>
                <li>
                  <span className="contact__detail-icon">📞</span>
                  <a href="tel:+441234567890">+44 (0) 1234 567 890</a>
                </li>
                <li>
                  <span className="contact__detail-icon">📍</span>
                  <address>
                    Kestrel House, 12 Vault Quarter<br />
                    London, EC2V 8RT<br />
                    United Kingdom
                  </address>
                </li>
              </ul>
            </div>

            <div className="contact__info-block">
              <h3>International Offices</h3>
              <ul className="contact__offices">
                {[
                  { city: 'Antwerp', flag: '🇧🇪' },
                  { city: 'Dubai',   flag: '🇦🇪' },
                  { city: 'Hong Kong', flag: '🇭🇰' },
                  { city: 'Johannesburg', flag: '🇿🇦' },
                ].map(o => (
                  <li key={o.city}>
                    <span>{o.flag}</span> {o.city}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Form column */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success" role="alert">
                <span className="contact__success-icon">✦</span>
                <h3>Enquiry Received</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>. A Kestrel specialist will
                  review your submission and contact you at <strong>{form.email}</strong>{' '}
                  within one business day.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="assetType">Asset Type *</label>
                    <select
                      id="assetType" name="assetType"
                      value={form.assetType} onChange={handleChange}
                      aria-invalid={!!errors.assetType}
                    >
                      <option value="">Select asset type…</option>
                      {ASSET_TYPES.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.assetType && <span className="form-error">{errors.assetType}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="estimatedValue">Estimated Value (USD)</label>
                  <input
                    id="estimatedValue" name="estimatedValue" type="text"
                    placeholder="e.g. $500,000"
                    value={form.estimatedValue} onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Consignment Details *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Describe your asset(s), quantity, provenance, and any specific requirements…"
                    value={form.message} onChange={handleChange}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <p className="contact__disclaimer">
                  By submitting this form you agree to our Privacy Policy. All information
                  is kept strictly confidential and used only to process your enquiry.
                </p>

                <button type="submit" className="btn btn-primary contact__submit">
                  Submit Consignment Enquiry →
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
