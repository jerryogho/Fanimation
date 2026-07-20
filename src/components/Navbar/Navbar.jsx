import "./Navbar.css";
import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  Globe,
  Users,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

// Links that jump straight to the product grid pre-filtered to a category.
// ProductSection listens for this event, so Navbar doesn't need to hold
// or lift any shared filter state.
const CATEGORY_LINKS = {
  "CEILING FANS": "Ceiling Fans",
  "PEDESTAL FANS": "Pedestal Fans",
  "WALL FANS": "Wall Fans",
  "EXHAUST FANS": "Exhaust Fans",
  "ACCESSORIES": "Accessories",
};

const VISITOR_COUNT_KEY = "fanimation_visitor_count";
const BASE_VISITOR_COUNT = 243637;

function Navbar({ favoritesCount = 0, cartCount = 0, onCartClick }) {
  const [visitorCount, setVisitorCount] = useState(BASE_VISITOR_COUNT);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple, backend-free visitor counter: bump a running total in
  // localStorage once per browser session so every real visit is counted.
  useEffect(() => {
    const alreadyCountedThisSession = sessionStorage.getItem("fanimation_session_counted");
    const stored = Number(localStorage.getItem(VISITOR_COUNT_KEY)) || BASE_VISITOR_COUNT;

    if (!alreadyCountedThisSession) {
      const next = stored + 1;
      localStorage.setItem(VISITOR_COUNT_KEY, String(next));
      sessionStorage.setItem("fanimation_session_counted", "true");
      setVisitorCount(next);
    } else {
      setVisitorCount(stored);
    }
  }, []);

  const handleNavClick = (e, label) => {
    e.preventDefault();
    const category = CATEGORY_LINKS[label];
    if (category) {
      window.dispatchEvent(new CustomEvent("fanimation:filter-category", { detail: category }));
    }
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "CEILING FANS", href: "#products" },
    { label: "PEDESTAL FANS", href: "#products" },
    { label: "WALL FANS", href: "#products" },
    { label: "EXHAUST FANS", href: "#products" },
    { label: "ACCESSORIES", href: "#products" },
    { label: "GALLERY", href: "#gallery" },
    { label: "OFFERS", href: "#offers" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <div className="top-bar">
        <div className="top-left">
          <p>
            <Globe size={16} /> Delivering comfort worldwide
          </p>
        </div>
        <div className="top-right">
          <Users size={16} />
          Visitor Counter: <span>{String(visitorCount).padStart(8, "0")}</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, "HOME")}>
            <img src={logo} alt="Logo" height="55" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse desktop-nav" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navItems.map(({ label, href }) => (
                <li className="nav-item" key={label}>
                  <a
                    href={href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, label)}>
                    {label}
                  </a>
                </li>
              ))}
              <div className="nav-icons d-flex gap-3 align-items-center">
                <Search size={18} />
                <div className="nav-icon-group" aria-label="Favorites">
                  <Heart size={18} className={favoritesCount > 0 ? "active" : ""} />
                  {favoritesCount > 0 && <span className="nav-icon-badge">{favoritesCount}</span>}
                </div>
                <button
                  type="button"
                  className="nav-icon-group"
                  aria-label="Cart"
                  onClick={onCartClick}
                >
                  <ShoppingCart size={18} className={cartCount > 0 ? "active" : ""} />
                  {cartCount > 0 && <span className="nav-icon-badge">{cartCount}</span>}
                </button>
              </div>
            </ul>
          </div>

          <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-nav-panel">
              <button className="mobile-nav-close" type="button" onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu">
                ×
              </button>
              <ul className="mobile-nav-list">
                {navItems.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="mobile-nav-link"
                      onClick={(e) => {
                        handleNavClick(e, label);
                        setIsMenuOpen(false);
                      }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
