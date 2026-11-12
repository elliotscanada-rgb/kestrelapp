import './Gallery.css'

export default function Gallery({ images, title }) {
  return (
    <section className="gallery">
      <div className="container">
        {title && (
          <>
            <h2 className="section-title">{title}</h2>
            <div className="divider center"></div>
          </>
        )}
        
        <div className="gallery__grid">
          {images.map((image, idx) => (
            <div key={idx} className="gallery__item">
              <div className="gallery__image-wrapper">
                <img src={image.src} alt={image.alt} />
                <div className="gallery__overlay">
                  <p className="gallery__caption">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
