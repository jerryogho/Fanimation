import "./ProductCard.css";
import { useState } from "react";
import { Heart, Star } from "lucide-react";
import ProductModal from "../../../ProductModal/ProductModal";

function ProductCard({ product, isFavorited = false, cartCount = 0, onToggleFavorite, onAddToCart }) {
  const [showModal, setShowModal] = useState(false);

  const handleToggleFavorite = () => {
    onToggleFavorite?.(product.id);
  };

  return (
    <>
      <div className="product-card g-2">
          {product.badge && <span className="badge bg-success product-badge">{product.badge}</span>}
          <img src={product.image} alt={product.name} className="product-image"/>
          <h5 className="product-name">{product.name}</h5>
          <p className="product-category">{product.type}</p>
          <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.round(product.rating) ? "#ffc107" : "#fff"}
                  color={i < Math.round(product.rating) ? "#ffc107" : "#000"}
                />
              ))} {" "}
              <span>{product.rating} ({product.reviews})</span>
          </div>
          <h4 className="price">N{product.price}</h4>
          <div className="product-footer">
              <button className="btn btn-outline-success" onClick={() => setShowModal(true)}>
                View Details
              </button>{" "}
              <Heart
                size={20}
                fill={isFavorited ? "#198754" : "none"}
                color={isFavorited ? "#198754" : "currentColor"}
                className={`wishlist-icon${isFavorited ? " active" : ""}`}
                onClick={handleToggleFavorite}
              />
          </div>
      </div>

      {showModal && (
        <ProductModal
          product={product}
          isWishlisted={isFavorited}
          cartCount={cartCount}
          onToggleWishlist={handleToggleFavorite}
          onAddToCart={onAddToCart}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default ProductCard
