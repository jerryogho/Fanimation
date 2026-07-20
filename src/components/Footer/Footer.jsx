import "./Footer.css";
import { Globe, Camera, Send, Play, MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/images/logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const CATEGORIES = ["Ceiling Fans", "Pedestal Fans", "Wall Fans", "Exhaust Fans", "Accessories"];

function Footer() {
  const year = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <img src={logo} alt="Fanimation logo" height="48" className="footer-logo" />
            <p className="footer-about">
              Energy-efficient fans built for comfort, performance, and modern
              living - backed by real warranties and honest pricing.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><Globe size={18} /></a>
              <a href="#" aria-label="Instagram"><Camera size={18} /></a>
              <a href="#" aria-label="Twitter"><Send size={18} /></a>
              <a href="#" aria-label="YouTube"><Play size={18} /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Categories</h6>
            <ul className="footer-links">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("fanimation:filter-category", { detail: category }));
                      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-links footer-contact">
              <li><MapPin size={15} /> 14 Niger Street, Onitsha, Anambra</li>
              <li><Phone size={15} /> +234 803 000 0000</li>
              <li><Mail size={15} /> support@fanimation.example</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Fanimation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
