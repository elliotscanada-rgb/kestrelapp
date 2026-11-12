import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Carousel.css'

export default function Carousel({ images, autoPlay = true, interval = 5000 }) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isAutoPlay, images.length, interval])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index) => {
    setCurrent(index)
  }

  return (
    <div 
      className="carousel"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="carousel__container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__slide ${
              index === current ? 'is-active' : ''
            }`}
          >
            <img src={image.src} alt={image.alt} />
            {image.caption && (
              <div className="carousel__caption">
                <h3>{image.caption}</h3>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          className="carousel__button carousel__button--prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          className="carousel__button carousel__button--next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="carousel__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel__dot ${index === current ? 'is-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
