import "./ProductFilter.css";
import { Filter, RotateCcw } from "lucide-react";

// Sidebar used inside ProductSection. It is fully controlled: ProductSection
// owns the filter state and passes it down along with the change handlers,
// so this component only has to render the form and call back up.
function ProductFilter({
  categories,
  types,
  colors,
  brands,
  maxPrice,
  filters,
  onChange,
  onClear,
}) {
  return (
    <div className="filter-box">
      <h5 className="section-title mb-2">
        <Filter size={16} /> Filter Products
      </h5>

      <div className="mb-3">
        <label htmlFor="filter-category" className="form-label">
          Category
        </label>
        <select
          id="filter-category"
          className="form-select"
          value={filters.category}
          onChange={(e) => onChange("category", e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="filter-type" className="form-label">
          Type
        </label>
        <select
          id="filter-type"
          className="form-select"
          value={filters.type}
          onChange={(e) => onChange("type", e.target.value)}>
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="filter-price" className="form-label">
          Price Range{" "}
          <span className="price-range-value">
            up to N{Number(filters.price).toLocaleString()}
          </span>
        </label>
        <input
          type="range"
          id="filter-price"
          className="form-range"
          min={0}
          max={maxPrice}
          step={1000}
          value={filters.price}
          onChange={(e) => onChange("price", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Color</label>
        <div className="color-options">
          {colors.map(({ name, hex }) => (
            <span
              key={name}
              title={name}
              onClick={() => onChange("color", filters.color === name ? "" : name)}
              className={`color-circle${filters.color === name ? " selected" : ""}`}
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="filter-brand" className="form-label">
          Brand
        </label>
        <select
          id="filter-brand"
          className="form-select"
          value={filters.brand}
          onChange={(e) => onChange("brand", e.target.value)}>
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-outline-success w-100" onClick={onClear}>
        <RotateCcw size={16} className="me-2" />
        Clear Filters
      </button>
    </div>
  );
}

export default ProductFilter;
