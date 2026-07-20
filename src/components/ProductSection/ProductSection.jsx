import "./ProductSection.css"
import { useEffect, useMemo, useState } from "react"
import {
    Truck,
    Headset,
    BadgeCheck,
 } from "lucide-react"
import ProductGrid from "./ProductGrid/ProductGrid"
import ProductFilter from "../ProductFilter/ProductFilter"
import { allProducts, toNumber } from "../../data/products"

// Maps a product's named colour to a swatch colour so the filter can render
// a real colour circle for whatever colours exist in the catalogue.
const COLOR_SWATCHES = {
    "Matte White": "#f2f2f2",
    "Oak Brown": "#7a4a2b",
    "Black": "#111111",
    "Gold": "#c9a227",
    "Silver": "#bfc3c7",
    "Grey": "#8a8f94",
    "White": "#ffffff",
    "Cream": "#f3e9d2",
    "Dark Green": "#1c3d2e",
    "Blue": "#2e6fbb",
    "Walnut": "#5c3b2e",
};

const DEFAULT_FILTERS = {
    category: "",
    type: "",
    price: "",
    color: "",
    brand: "",
    sort: "popular",
};

function ProductSection({ favorites = [], cartCount = 0, onToggleFavorite, onAddToCart }) {
    const maxPrice = useMemo(
        () => Math.max(...allProducts.map((p) => toNumber(p.price))),
        []
    );

    const [filters, setFilters] = useState({ ...DEFAULT_FILTERS, price: maxPrice });

    // Nav links (Ceiling Fans, Pedestal Fans, etc.) dispatch this event so
    // clicking them jumps straight to a filtered view of the catalogue,
    // without ProductSection and Navbar needing to share state directly.
    useEffect(() => {
        const handleCategoryEvent = (e) => {
            setFilters((prev) => ({ ...prev, category: e.detail || "" }));
        };
        window.addEventListener("fanimation:filter-category", handleCategoryEvent);
        return () => window.removeEventListener("fanimation:filter-category", handleCategoryEvent);
    }, []);

    const categories = useMemo(
        () => [...new Set(allProducts.map((p) => p.category))],
        []
    );
    const types = useMemo(() => {
        const pool = filters.category
            ? allProducts.filter((p) => p.category === filters.category)
            : allProducts;
        return [...new Set(pool.map((p) => p.type))];
    }, [filters.category]);
    const brands = useMemo(() => [...new Set(allProducts.map((p) => p.brand))], []);
    const colors = useMemo(() => {
        const names = [...new Set(allProducts.map((p) => p.color))];
        return names.map((name) => ({ name, hex: COLOR_SWATCHES[name] || "#cccccc" }));
    }, []);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => {
            const next = { ...prev, [key]: value };
            // Changing category can invalidate the currently selected type.
            if (key === "category") next.type = "";
            return next;
        });
    };

    const handleClearFilters = () => setFilters({ ...DEFAULT_FILTERS, price: maxPrice });

    const filteredProducts = useMemo(() => {
        let result = allProducts.filter((product) => {
            if (filters.category && product.category !== filters.category) return false;
            if (filters.type && product.type !== filters.type) return false;
            if (filters.color && product.color !== filters.color) return false;
            if (filters.brand && product.brand !== filters.brand) return false;
            if (filters.price && toNumber(product.price) > Number(filters.price)) return false;
            return true;
        });

        switch (filters.sort) {
            case "newest":
                result = [...result].sort((a, b) => b.id - a.id);
                break;
            case "price-asc":
                result = [...result].sort((a, b) => toNumber(a.price) - toNumber(b.price));
                break;
            case "price-desc":
                result = [...result].sort((a, b) => toNumber(b.price) - toNumber(a.price));
                break;
            default:
                result = [...result].sort((a, b) => b.rating - a.rating);
        }
        return result;
    }, [filters]);

  return (
    <section className="product-section py-2" id="products">
        <div className="container">
            <div className="row">
                {/* LEFT SIDEBAR */}
                <div className="col-lg-3 mb-4">
                    <ProductFilter
                        categories={categories}
                        types={types}
                        colors={colors}
                        brands={brands}
                        maxPrice={maxPrice}
                        filters={filters}
                        onChange={handleFilterChange}
                        onClear={handleClearFilters}
                    />
                </div>
                {/* PRODUCT AREA */}
                <div className="col-lg-7 mb-4 py-3">
                    <div className="product-box">
                        <div className="product-header d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                            <h4 className="section-title mb-0">
                                {filters.category || "Featured Products"}
                                <span className="product-count"> ({filteredProducts.length})</span>
                            </h4>
                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="sort-select" className="mb-0">Sort By</label>
                                <select
                                id="sort-select"
                                className="form-select"
                                value={filters.sort}
                                onChange={(e) => handleFilterChange("sort", e.target.value)}
                                style={{width:"170px"}}>
                                    <option value="popular">Popular</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <ProductGrid
                            products={filteredProducts}
                            favorites={favorites}
                            cartCount={cartCount}
                            onToggleFavorite={onToggleFavorite}
                            onAddToCart={onAddToCart}
                        />
                    </div>
                </div>
                {/* RIGHT SIDEBAR */}
                <div className="col-lg-2 mb-4">
                    <div className="benefit-box">
                        <div className="benefit-item">
                            <Truck size={42} className="benefit-icon"/>
                            <h5>Free Delivery</h5>
                            <p>On orders above
                            <br />
                            <strong>N50,000</strong>
                            </p>
                        </div>
                        <hr />
                        <div className="benefit-item">
                            <Headset size={42} className="benefit-icon"/>
                            <h5>24/7 Support</h5>
                            <p>We're here to help
                            <br />
                            anytime!
                            </p>
                        </div>
                        <hr />
                        <div className="benefit-item">
                            <BadgeCheck size={42} className="benefit-icon"/>
                            <h5>100% Original</h5>
                            <p>Genuine
                            <br />
                            Fanimation Products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductSection
