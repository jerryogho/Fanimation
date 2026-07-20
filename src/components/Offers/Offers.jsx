import "./Offers.css";
import { Tag, ArrowRight } from "lucide-react";
import { allProducts, toNumber } from "../../data/products";

// Anything with an oldPrice in the catalogue is treated as "on offer".
const discountedProducts = allProducts.filter((p) => p.oldPrice);

const discountPercent = (product) => {
  const original = toNumber(product.oldPrice);
  const current = toNumber(product.price);
  return Math.round(((original - current) / original) * 100);
};

function Offers() {
  return (
    <section className="offers-section py-5" id="offers">
      <div className="container">
        <div className="offers-banner mb-4">
          <div>
            <h3><Tag size={22} /> Limited-Time Offers</h3>
            <p>Save big on select fans while stocks last</p>
          </div>
        </div>

        <div className="row g-4">
          {discountedProducts.map((product) => (
            <div className="col-lg-3 col-md-6" key={product.id}>
              <div className="offer-card">
                <span className="offer-badge">-{discountPercent(product)}%</span>
                <img src={product.image} alt={product.name} className="offer-image" />
                <h6 className="offer-name">{product.name}</h6>
                <div className="offer-price-row">
                  <span className="offer-price">N{product.price}</span>
                  <span className="offer-old-price">N{product.oldPrice}</span>
                </div>
                <a href="#products" className="offer-link">
                  Shop Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
