import "./ProductModal.css";
import { useEffect } from "react";
import { X, Star, Heart, Truck, ShieldCheck, ShoppingCart } from "lucide-react";

// A lightweight, dependency-free modal (no Bootstrap JS involvement) so it
// can be driven purely by React state from ProductCard. Closes on backdrop
// click, the X button, or Escape.
function ProductModal({ product, isWishlisted, cartCount = 0, onToggleWishlist, onAddToCart, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-actions">
          <div className="modal-cart-pill" aria-label="Cart count">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="modal-cart-badge">{cartCount}</span>}
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-image-col">
            {product.badge && (
              <span className="badge bg-success product-badge">{product.badge}</span>
            )}
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>

          <div className="modal-info-col">
            <p className="product-category">{product.category} &middot; {product.type}</p>
            <h3 className="modal-product-name">{product.name}</h3>

            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.round(product.rating) ? "#ffc107" : "#fff"}
                  color={i < Math.round(product.rating) ? "#ffc107" : "#000"}
                />
              ))}
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="modal-description">{product.description}</p>

            <ul className="modal-specs">
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Color:</strong> {product.color}</li>
            </ul>

            <div className="modal-price-row">
              <h4 className="price">N{product.price}</h4>
              {product.oldPrice && <span className="old-price">N{product.oldPrice}</span>}
            </div>

            <div className="modal-perks">
              <span><Truck size={16} /> Free delivery over N50,000</span>
              <span><ShieldCheck size={16} /> 2 year warranty</span>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-success flex-grow-1"
                onClick={() => onAddToCart?.(product)}>
                Add to Cart
              </button>
              <button
                className={`btn btn-outline-success wishlist-btn${isWishlisted ? " active" : ""}`}
                onClick={onToggleWishlist}>
                <Heart
                  size={18}
                  fill={isWishlisted ? "#198754" : "none"}
                  color={isWishlisted ? "#198754" : "currentColor"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
