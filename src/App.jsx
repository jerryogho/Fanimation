import { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import Ticker from "./components/Ticker/Ticker"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import ProductSection from "./components/ProductSection/ProductSection"
import Gallery from "./components/Gallery/Gallery"
import Offers from "./components/Offers/Offers"
import About from "./components/About/About"
import FAQ from "./components/FAQ/FAQ"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import CartDrawer from "./components/CartDrawer/CartDrawer"
import { toNumber } from "./data/products"

function App() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleFavorite = (productId) => {
    setFavoriteIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product) => {
    const normalizedProduct = {
      ...product,
      name: product?.name || product?.title || "Product",
      price: toNumber(product?.price ?? product?.cost ?? product?.amount ?? 0),
    };

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === normalizedProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.id === normalizedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...normalizedProduct, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== productId) return [item];
        const nextQuantity = item.quantity + delta;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      })
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar
        favoritesCount={favoriteIds.length}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Ticker />
      <Hero />
      <Features />
      <ProductSection
        favorites={favoriteIds}
        cartCount={cartCount}
        onToggleFavorite={handleToggleFavorite}
        onAddToCart={handleAddToCart}
      />
      <CartDrawer
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <Gallery />
      <Offers />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
