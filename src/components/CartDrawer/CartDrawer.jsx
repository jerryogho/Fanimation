import "./CartDrawer.css";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";

function CartDrawer({ items = [], isOpen, onClose, onUpdateQuantity }) {
  const normalizedItems = items.map((item) => {
    const rawPrice = item.price ?? item.cost ?? item.amount ?? item.unitPrice ?? 0;
    const cleanedPrice = String(rawPrice).replace(/,/g, "").replace(/[^0-9.-]/g, "");
    const parsedPrice = Number(cleanedPrice);

    return {
      ...item,
      name: item.name || item.title || "Product",
      price: Number.isFinite(parsedPrice) ? parsedPrice : 0,
      quantity: Number(item.quantity ?? 1),
    };
  });

  const subtotal = normalizedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-drawer-backdrop ${isOpen ? "open" : ""}`} onClick={onClose}>
      <aside className={`cart-drawer ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div>
            <p className="cart-drawer-title">Your Cart</p>
            <p className="cart-drawer-subtitle">{normalizedItems.length} item{normalizedItems.length === 1 ? "" : "s"} selected</p>
          </div>
          <button type="button" className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        {normalizedItems.length === 0 ? (
          <div className="cart-empty-state">
            <ShoppingCart size={44} />
            <p>Your cart is empty.</p>
            <span>Add a few fan favorites to see them here.</span>
          </div>
        ) : (
          <div className="cart-items-list">
            {normalizedItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">N{item.price.toLocaleString()}</p>
                  <p className="cart-item-total">Total: N{(item.price * item.quantity).toLocaleString()}</p>
                  <div className="cart-item-actions">
                    <button
                      type="button"
                      className="cart-qty-btn"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      aria-label={`Remove one ${item.name}`}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="cart-qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="cart-qty-btn"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      aria-label={`Add one ${item.name}`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {normalizedItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <strong>N{subtotal.toLocaleString()}</strong>
            </div>
            <button type="button" className="btn btn-success w-100">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;
