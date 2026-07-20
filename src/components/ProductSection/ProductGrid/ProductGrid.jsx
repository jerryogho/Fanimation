import "./ProductGrid.css"
import ProductCard from "./ProductCard/ProductCard"

function ProductGrid({ products, favorites = [], cartCount = 0, onToggleFavorite, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <p>No products match your filters. Try adjusting or clearing them.</p>
      </div>
    )
  }

  return (
    <div className="row g-4">
            {products.map(product=>(
                <div
                key={product.id}
                className="col-lg-4 col-md-6"
                >
                <ProductCard
                  product={product}
                  isFavorited={favorites.includes(product.id)}
                  cartCount={cartCount}
                  onToggleFavorite={onToggleFavorite}
                  onAddToCart={onAddToCart}
                />
                </div>
            ))}

    </div>
  )
}
export default ProductGrid
