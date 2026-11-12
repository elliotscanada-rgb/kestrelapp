import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import './HeroCarousel.css'

export default function HeroCarousel() {
  const heroImages = [
    {
      src: '/gold bar.webp',
      alt: 'Gold bars - precious metals consignment',
      caption: 'Premium Gold Bars'
    },
    {
      src: '/soverign bullion.webp',
      alt: 'Sovereign bullion coins',
      caption: 'Investment Coins'
    },
    {
      src: '/britain bullion.webp',
      alt: 'Britain bullion collection',
      caption: 'Rare Bullion'
    },
    {
      src: '/coin.webp',
      alt: 'Fine coins collection',
      caption: 'Collector Coins'
    },
    {
      src: '/pyx coin.webp',
      alt: 'Royal pyx coins',
      caption: 'Royal Collection'
    },
  ]

  return (
    <section className="hero-carousel">
      <Carousel 
        images={heroImages}
        autoPlay={true}
        interval={5000}
      />
      
      <div className="hero-carousel__overlay">
        <div className="container">
          <div className="hero-carousel__content">
            <h1 className="hero-carousel__title">
              Kestrel Security
            </h1>
            <p className="hero-carousel__subtitle">
              The World's Leading Consignment Partner for Precious Assets
            </p>
            <p className="hero-carousel__description">
              Gold, Diamonds, Fine Jewellery & Luxury Watches - Secure. Transparent. Profitable.
            </p>
            <div className="hero-carousel__buttons">
              <Link to="/services" className="btn btn-primary btn-lg">Explore Services</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
