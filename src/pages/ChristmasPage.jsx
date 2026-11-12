import { Link } from 'react-router-dom'
import './ChristmasPage.css'

export default function ChristmasPage() {
  const giftCategories = [
    {
      title: 'Gold Gifts',
      description: 'Give them the truly timeless gift of gold, admired and coveted around the world for centuries.',
      image: '/gold bar.webp',
      link: '/gold-consignment',
      cta: 'Shop Gold Gifts'
    },
    {
      title: 'Silver Gifts',
      description: 'Add some sparkle to your list of Christmas gifts with our premium sterling silver products.',
      image: '/coin.webp',
      link: '/gold-consignment',
      cta: 'Shop Silver Gifts'
    },
    {
      title: 'Luxury Gifts',
      description: 'Show them how much you care with premium gifts they will cherish for years to come.',
      image: '/pyx coin.webp',
      link: '/jewelry-consignment',
      cta: 'Shop Luxury Gifts'
    },
    {
      title: 'Collectable Gifts',
      description: 'Gifts to help them start or add to a collection, from themed items to a wide range of collectibles.',
      image: '/soverign bullion.webp',
      link: '/services',
      cta: 'Shop Collectable Gifts'
    },
    {
      title: 'Stocking Fillers',
      description: 'Perfect little treats to fill the stockings this Christmas. Affordable yet meaningful gifts.',
      image: '/diwali gift.webp',
      link: '/prices',
      cta: 'Shop Stocking Fillers'
    },
    {
      title: 'The Kestrel Experience',
      description: 'Give the gift of a magical experience where they will make precious memories that last forever.',
      image: '/britain bullion.webp',
      link: '/contact',
      cta: 'Book Your Experience'
    }
  ]

  const priceRanges = [
    { title: 'Under £100', description: 'Commemorative coins and beloved items for all interests.', link: '/prices' },
    { title: 'Under £250', description: 'Quality pieces at accessible price points.', link: '/prices' },
    { title: 'Luxury Collection', description: 'Premium items for that special someone.', link: '/jewelry-consignment' }
  ]

  const featuredProducts = [
    {
      name: 'Gold Britannia Coin 2024',
      price: 'From £1,850',
      image: '/britain bullion.webp'
    },
    {
      name: 'Sovereign Collection',
      price: 'From £450',
      image: '/soverign bullion.webp'
    },
    {
      name: 'Silver Proof Set',
      price: 'From £85',
      image: '/coin.webp'
    },
    {
      name: 'Gold Bar 1oz',
      price: 'From £1,950',
      image: '/gold bar.webp'
    },
    {
      name: 'PYX Coin Collection',
      price: 'From £125',
      image: '/pyx coin.webp'
    },
    {
      name: 'Gift Sets',
      price: 'From £75',
      image: '/diwali gift.webp'
    }
  ]

  return (
    <div className="christmas-page">
      {/* Hero Section */}
      <section className="christmas-hero">
        <div className="christmas-hero__overlay"></div>
        <img 
          src="/christmas-brand.webp" 
          alt="Christmas Gifts" 
          className="christmas-hero__bg"
        />
        <div className="container christmas-hero__content">
          <h1 className="christmas-hero__title">Christmas Gifts 2026</h1>
          <p className="christmas-hero__subtitle">
            Find the perfect precious gift for your loved ones this Christmas
          </p>
          <div className="christmas-hero__cta">
            <a href="#categories" className="btn btn-primary btn-lg">Explore Gifts</a>
          </div>
        </div>
      </section>

      {/* Price Range Links */}
      <section className="christmas-price-bar">
        <div className="container">
          <div className="christmas-price-bar__grid">
            {priceRanges.map((range, index) => (
              <Link key={index} to={range.link} className="christmas-price-bar__link">
                <span className="christmas-price-bar__title">{range.title}</span>
                <span className="christmas-price-bar__desc">{range.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Categories */}
      <section id="categories" className="christmas-categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="divider center"></div>
          
          <div className="christmas-categories__grid">
            {giftCategories.map((category, index) => (
              <Link 
                key={index} 
                to={category.link} 
                className="christmas-category-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="christmas-category-card__image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="christmas-category-card__content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="christmas-category-card__cta">{category.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="christmas-featured">
        <div className="container">
          <h2 className="section-title">Featured Christmas Gifts</h2>
          <div className="divider center"></div>
          
          <div className="christmas-featured__grid">
            {featuredProducts.map((product, index) => (
              <div key={index} className="christmas-product-card">
                <div className="christmas-product-card__image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="christmas-product-card__content">
                  <h3>{product.name}</h3>
                  <p className="christmas-product-card__price">{product.price}</p>
                  <Link to="/contact" className="btn btn-outline btn-sm">Inquire</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Gifts */}
      <section className="christmas-why">
        <div className="container">
          <h2 className="section-title">Why Choose Our Christmas Gifts</h2>
          <div className="divider center"></div>
          
          <div className="christmas-why__grid">
            <div className="christmas-why__card">
              <div className="christmas-why__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Fully Insured</h3>
              <p>All deliveries are fully insured for peace of mind</p>
            </div>

            <div className="christmas-why__card">
              <div className="christmas-why__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3>Free Secure Delivery</h3>
              <p>Complimentary insured delivery on all orders</p>
            </div>

            <div className="christmas-why__card">
              <div className="christmas-why__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>Expert Support</h3>
              <p>Dedicated team to help you find the perfect gift</p>
            </div>

            <div className="christmas-why__card">
              <div className="christmas-why__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Gift Packaging</h3>
              <p>Beautiful presentation boxes included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="christmas-cta">
        <div className="container">
          <div className="christmas-cta__content">
            <h2>Make This Christmas Special</h2>
            <p>
              Discover our exclusive collection of gold, silver, and collectible gifts 
              perfect for everyone on your list.
            </p>
            <div className="christmas-cta__buttons">
              <Link to="/gold-consignment" className="btn btn-primary btn-lg">View Gold Collection</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Hours */}
      <section className="christmas-hours">
        <div className="container">
          <div className="christmas-hours__content">
            <h3>Holiday Opening Hours</h3>
            <div className="christmas-hours__grid">
              <div>
                <strong>Last Order Date for Christmas Delivery:</strong>
                <p>December 20th, 2026</p>
              </div>
              <div>
                <strong>Contact Us:</strong>
                <p>Monday - Friday: 9am - 6pm</p>
              </div>
              <div>
                <strong>Special Holiday Support:</strong>
                <p>Extended hours in December</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}