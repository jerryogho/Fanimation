import "./Gallery.css";
import { useState } from "react";
import { X } from "lucide-react";
import { allProducts } from "../../data/products";

// Reuses the existing product photography for a lightbox-style gallery,
// so no new image assets are required.
const galleryImages = allProducts.slice(0, 8).map((p) => ({
  id: p.id,
  src: p.image,
  caption: p.name,
}));

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section py-5" id="gallery">
      <div className="container">
        <div className="text-center mb-4">
          <h4 className="section-title">Gallery</h4>
          <p className="section-subtitle">A closer look at our fans in real spaces</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              className="gallery-item"
              key={image.id}
              onClick={() => setActiveImage(image)}>
              <img src={image.src} alt={image.caption} loading="lazy" />
              <div className="gallery-overlay">
                <span>{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="gallery-lightbox" onClick={() => setActiveImage(null)}>
          <button className="gallery-lightbox-close" aria-label="Close">
            <X size={26} />
          </button>
          <img src={activeImage.src} alt={activeImage.caption} onClick={(e) => e.stopPropagation()} />
          <p>{activeImage.caption}</p>
        </div>
      )}
    </section>
  );
}

export default Gallery;
