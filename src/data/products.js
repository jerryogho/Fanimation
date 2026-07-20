import breezeProImg from "../assets/images/products/breeze-pro.jpg";
import dawnLiteImg from "../assets/images/products/dawn-lite.jpg";
import summitAuraImg from "../assets/images/products/summit-aura.jpg";
import royalCurveImg from "../assets/images/products/royal-curve.jpg";

import flexiFlowImg from "../assets/images/products/flexi-flow.jpg";
import turboStandImg from "../assets/images/products/turbo-stand.jpg";
import breezeMaxImg from "../assets/images/products/breeze-max.jpg";

import haloSpinImg from "../assets/images/products/halo-spin.jpg";
import coolGuardImg from "../assets/images/products/cool-guard.jpg";
import airVerseImg from "../assets/images/products/air-verse.jpg";

import ventPlusImg from "../assets/images/products/vent-plus.jpg";
import ecoVentImg from "../assets/images/products/eco-vent.jpg";
import quietSweepImg from "../assets/images/products/quiet-sweep.jpg";

import remoteKitImg from "../assets/images/products/remote-kit.jpg";
import bladeUpgradeImg from "../assets/images/products/blade-upgrade.jpg";

const products = [
  {
    id: 1,
    name: 'Breeze Pro Smart Ceiling Fan',
    category: 'Ceiling Fans',
    type: 'Smart Ceiling Fan',
    color: 'Matte White',
    brand: 'Fanimation',
    price: "95,000",
    oldPrice: "118,000",
    rating: 4.8,
    reviews: 128,
    badge: 'NEW',
    image: breezeProImg,
    description: 'Modern smart ceiling fan with quiet operation and efficient airflow for bedrooms and living areas.'
  },
  {
    id: 2,
    name: 'Dawn Lite Decorative Ceiling Fan',
    category: 'Ceiling Fans',
    type: 'Decorative Ceiling Fan',
    color: 'Oak Brown',
    brand: 'Fanimation',
    price: "76,000",
    rating: 4.6,
    reviews: 94,
    badge: 'BEST SELLER',
    image: dawnLiteImg,
    description: 'Stylish decorative ceiling fan with a warm finish and balanced airflow for cozy interiors.'
  },
  {
    id: 3,
    name: 'Summit Aura High-Airflow Ceiling Fan',
    category: 'Ceiling Fans',
    type: 'High-Airflow Ceiling Fan',
    color: 'Black',
    brand: 'Fanimation',
    price: "112,000",
    oldPrice: "129,000",
    rating: 4.9,
    reviews: 156,
    badge: 'SALE',
    image: summitAuraImg,
    description: 'High-performance ceiling fan designed for large rooms with strong circulation and a premium look.'
  },
  {
    id: 4,
    name: 'Royal Curve Luxury Ceiling Fan',
    category: 'Ceiling Fans',
    type: 'Luxury Ceiling Fan',
    color: 'Gold',
    brand: 'Fanimation',
    price: "135,000",
    rating: 4.7,
    reviews: 73,
    badge: 'PREMIUM',
    image: royalCurveImg,
    description: 'Elegant luxury ceiling fan with sculpted blades and refined detailing for statement interiors.'
  },
  {
    id: 5,
    name: 'Flexi Flow Adjustable Pedestal Fan',
    category: 'Pedestal Fans',
    type: 'Adjustable Pedestal Fan',
    color: 'Silver',
    brand: 'Fanimation',
    price: "52,000",
    oldPrice: "65,000",
    rating: 4.5,
    reviews: 88,
    badge: 'SALE',
    image: flexiFlowImg,
    description: 'Portable pedestal fan with adjustable height and oscillation for flexible cooling in homes or offices.'
  },
  {
    id: 6,
    name: 'Turbo Stand Heavy-Duty Pedestal Fan',
    category: 'Pedestal Fans',
    type: 'Heavy-Duty Pedestal Fan',
    color: 'Grey',
    brand: 'Fanimation',
    price: "67,000",
    rating: 4.6,
    reviews: 102,
    badge: 'BEST SELLER',
    image: turboStandImg,
    description: 'Sturdy pedestal fan built for stronger airflow and dependable cooling in larger rooms.'
  },
  {
    id: 7,
    name: 'Breeze Max Compact Pedestal Fan',
    category: 'Pedestal Fans',
    type: 'Compact Pedestal Fan',
    color: 'White',
    brand: 'Fanimation',
    price: "48,000",
    rating: 4.4,
    reviews: 66,
    badge: 'NEW',
    image: breezeMaxImg,
    description: 'Compact pedestal fan with a slim profile that delivers steady airflow without taking up much space.'
  },
  {
    id: 8,
    name: 'Halo Spin Wall-Mounted Fan',
    category: 'Wall Fans',
    type: 'Wall-Mounted Fan',
    color: 'Cream',
    brand: 'Fanimation',
    price: "59,000",
    oldPrice: "72,000",
    rating: 4.7,
    reviews: 81,
    badge: 'SALE',
    image: haloSpinImg,
    description: 'Space-saving wall-mounted fan with strong airflow and a clean, modern finish.'
  },
  {
    id: 9,
    name: 'Cool Guard Industrial Wall Fan',
    category: 'Wall Fans',
    type: 'Industrial Wall Fan',
    color: 'Dark Green',
    brand: 'Fanimation',
    price: "71,000",
    rating: 4.5,
    reviews: 57,
    badge: 'BEST SELLER',
    image: coolGuardImg,
    description: 'Durable wall fan designed for workspaces and larger rooms that need powerful circulation.'
  },
  {
    id: 10,
    name: 'AirVerse Quiet Wall Fan',
    category: 'Wall Fans',
    type: 'Quiet Wall-Mounted Fan',
    color: 'Blue',
    brand: 'Fanimation',
    price: "64,000",
    rating: 4.8,
    reviews: 90,
    badge: 'NEW',
    image: airVerseImg,
    description: 'Low-noise wall fan that offers calm cooling for bedrooms, studies, and small apartments.'
  },
  {
    id: 11,
    name: 'VentPlus Kitchen Exhaust Fan',
    category: 'Exhaust Fans',
    type: 'Kitchen Exhaust Fan',
    color: 'White',
    brand: 'Fanimation',
    price: "43,000",
    oldPrice: "50,000",
    rating: 4.6,
    reviews: 76,
    badge: 'SALE',
    image: ventPlusImg,
    description: 'Efficient exhaust fan for kitchens that helps remove smoke, heat, and odors quickly.'
  },
  {
    id: 12,
    name: 'Eco Vent Bathroom Exhaust Fan',
    category: 'Exhaust Fans',
    type: 'Bathroom Exhaust Fan',
    color: 'Silver',
    brand: 'Fanimation',
    price: "38,000",
    rating: 4.4,
    reviews: 54,
    badge: 'NEW',
    image: ecoVentImg,
    description: 'Compact exhaust fan made to improve ventilation and reduce moisture in bathrooms and utility spaces.'
  },
  {
    id: 13,
    name: 'Quiet Sweep Silent Exhaust Fan',
    category: 'Exhaust Fans',
    type: 'Silent Exhaust Fan',
    color: 'Black',
    brand: 'Fanimation',
    price: "47,000",
    rating: 4.7,
    reviews: 69,
    badge: 'BEST SELLER',
    image: quietSweepImg,
    description: 'Quiet exhaust fan designed for comfortable airflow in homes, offices, and enclosed spaces.'
  },
  {
    id: 14,
    name: 'Fan Remote Kit',
    category: 'Accessories',
    type: 'Remote Control Accessory',
    color: 'Black',
    brand: 'Fanimation',
    price: "18,000",
    rating: 4.3,
    reviews: 41,
    badge: 'ACCESSORY',
    image: remoteKitImg,
    description: 'Convenient remote-control accessory that makes fan operation easier from anywhere in the room.'
  },
  {
    id: 15,
    name: 'Blade Upgrade Pack',
    category: 'Accessories',
    type: 'Replacement Blade Set',
    color: 'Walnut',
    brand: 'Fanimation',
    price: "26,000",
    oldPrice: "30,000",
    rating: 4.6,
    reviews: 63,
    badge: 'SALE',
    image: bladeUpgradeImg,
    description: 'Replacement blade set for upgrading the look and performance of an existing fan.'
  }
];
// Full catalogue, used by the product grid + filters
export const allProducts = products;

// Prices are stored as comma-formatted strings (e.g. "95,000") for easy display.
// This turns them back into a plain number for filtering, sorting and maths.
export const toNumber = (price) => Number(String(price).replace(/,/g, ""));

// Small curated subset used for "featured" style sections (kept as default export
// for backward compatibility with anything importing the default).
const featuredProducts = products.slice(0, 3);
export default featuredProducts
