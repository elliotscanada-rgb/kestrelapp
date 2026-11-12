import './PricesPage.css'

export default function PricesPage() {
  const metalPrices = [
    { metal: 'Gold (1 oz)', price: '$2,050.00', change: '+1.5%', status: 'up' },
    { metal: 'Silver (1 oz)', price: '$24.50', change: '+0.8%', status: 'up' },
    { metal: 'Platinum (1 oz)', price: '$1,025.00', change: '-0.3%', status: 'down' },
    { metal: 'Palladium (1 oz)', price: '$975.00', change: '+2.1%', status: 'up' },
  ]

  return (
    <div className="prices-page">
      <div style={{height: '80px'}}></div>

      {/* Hero */}
      <section className="prices-hero">
        <div className="container">
          <h1>Live Precious Metals Prices</h1>
          <p>Real-time global market pricing for gold, silver, platinum, and palladium</p>
        </div>
      </section>

      {/* Prices Grid */}
      <section className="prices-section">
        <div className="container">
          <h2 className="section-title">Current Market Prices</h2>
          <div className="divider center"></div>

          <div className="prices-grid">
            {metalPrices.map((item, idx) => (
              <div key={idx} className="price-card">
                <h3>{item.metal}</h3>
                <div className="price-value">{item.price}</div>
                <div className={`price-change ${item.status}`}>
                  {item.change}
                </div>
              </div>
            ))}
          </div>

          <p className="prices-disclaimer">
            * Prices are indicative and updated every 30 seconds. Actual consignment pricing may vary 
            based on quantity, purity, and market conditions. Contact us for live quotations.
          </p>
        </div>
      </section>

      {/* About Pricing */}
      <section className="pricing-info">
        <div className="container">
          <h2 className="section-title">Understanding Precious Metals Pricing</h2>
          <div className="divider center"></div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Spot Price</h3>
              <p>
                The current global price for one troy ounce of precious metal in US dollars. 
                Traded on major exchanges and updated continuously during market hours.
              </p>
            </div>

            <div className="info-card">
              <h3>Bid-Ask Spread</h3>
              <p>
                The difference between what buyers offer (bid) and what sellers ask (ask). 
                Wider spreads typically indicate lower liquidity.
              </p>
            </div>

            <div className="info-card">
              <h3>Troy Ounce</h3>
              <p>
                The standard unit of measurement for precious metals. 1 troy ounce = 31.1 grams. 
                Different from avoirdupois ounces (28.35g).
              </p>
            </div>

            <div className="info-card">
              <h3>Purity Standards</h3>
              <p>
                Gold: 24K (99.9%), 22K (91.7%), 18K (75%), 14K (58.3%). 
                Higher purity commands better prices at consignment.
              </p>
            </div>

            <div className="info-card">
              <h3>Weight vs. Price</h3>
              <p>
                Heavier quantities typically receive better per-ounce pricing. Bulk consignments 
                may qualify for institutional rates.
              </p>
            </div>

            <div className="info-card">
              <h3>Market Volatility</h3>
              <p>
                Precious metals prices fluctuate based on geopolitics, economic conditions, and 
                currency movements. Long-term trends favor investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consignment Value Estimator */}
      <section className="estimator-section">
        <div className="container">
          <h2 className="section-title">Rough Value Estimator</h2>
          <div className="divider center"></div>

          <div className="estimator-card">
            <div className="estimator-form">
              <div className="form-group">
                <label>Metal Type</label>
                <select>
                  <option>Gold (24K)</option>
                  <option>Gold (22K)</option>
                  <option>Gold (18K)</option>
                  <option>Silver (99.9%)</option>
                  <option>Platinum</option>
                </select>
              </div>

              <div className="form-group">
                <label>Weight (grams)</label>
                <input type="number" placeholder="e.g., 100" />
              </div>

              <div className="form-group">
                <button className="btn btn-primary">Calculate Value</button>
              </div>
            </div>

            <p className="estimator-note">
              * This is a rough estimate based on current spot prices. Actual consignment value 
              depends on current market conditions and independent assay results.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
