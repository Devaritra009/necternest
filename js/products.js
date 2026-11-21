/**
 * NecterNest - Product Catalog Data
 * All products are stored in this clean array.
 * You can easily add, edit, or remove products anytime!
 */

const PRODUCTS = [
  {
    id: 1,
    name: "CloudStep Classic Honey Amber",
    slug: "cloudstep-classic-honey-amber",
    category: "Unisex",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 342,
    badge: "Bestseller",
    badgeColor: "bestseller",
    image: "images/clog-honey-amber.svg",
    colorName: "Honey Amber",
    colorHex: "#F59E0B",
    inStock: true,
    tagline: "Our signature honey-amber clog that started the comfort revolution.",
    description: "Designed for all-day cloud comfort, the CloudStep Classic Honey Amber features featherlight dual-density EVA foam and ergonomic footbed cushioning. Whether you are running college errands, chilling with friends, or stepping out on a rainy day, your feet stay fatigue-free.",
    features: [
      "100% Waterproof & easily washable with soap and water",
      "Pivoting heel strap for a secure, stay-put fit",
      "Ergonomic arch support that molds to your feet",
      "Ventilation ports that shed water and debris quickly",
      "Signature honeycomb charm included free"
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 2,
    name: "BreezeCloud Pastel Mint",
    slug: "breezecloud-pastel-mint",
    category: "Women",
    gender: "Women",
    price: 849,
    originalPrice: 1499,
    rating: 4.8,
    reviewsCount: 218,
    badge: "New Drop",
    badgeColor: "new",
    image: "images/clog-pastel-mint.svg",
    colorName: "Pastel Mint Green",
    colorHex: "#10B981",
    inStock: true,
    tagline: "Cool, refreshing, and unbelievably lightweight.",
    description: "The BreezeCloud Mint brings an energetic pop of cool pastel green to your daily wardrobe. Made with odor-resistant high-resilience foam, it stays fresh all day long in humid weather.",
    features: [
      "Ultra-soft pillowy footbed for zero heel stress",
      "Waterproof & anti-slip textured grip",
      "Breathable air flow design to prevent sweaty feet",
      "Lightweight under 180 grams per shoe",
      "Removable matching floral charm"
    ],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: 3,
    name: "Cotton Candy Sweet Blossom",
    slug: "cotton-candy-sweet-blossom",
    category: "Women",
    gender: "Women",
    price: 899,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 275,
    badge: "Trending",
    badgeColor: "trending",
    image: "images/clog-cotton-candy.svg",
    colorName: "Bubblegum Pink",
    colorHex: "#EC4899",
    inStock: true,
    tagline: "A playful pop of sweetness for bright daily outfits.",
    description: "Step out in vibrant fashion! The Cotton Candy Blossom clog offers a fun, aesthetic look without sacrificing ergonomic support. Perfect for cafe dates, campus walks, and lazy Sundays.",
    features: [
      "Shock-absorbing sole protects knees and joints",
      "Easy slip-on and slip-off design with convertible strap",
      "Quick-drying non-marking EVA compound",
      "Stain-resistant and dishwasher/bucket safe",
      "Complimentary sweet berry charm"
    ],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: 4,
    name: "Midnight Slate Sport Pro",
    slug: "midnight-slate-sport-pro",
    category: "Men",
    gender: "Men",
    price: 949,
    originalPrice: 1699,
    rating: 4.8,
    reviewsCount: 198,
    badge: "Top Rated",
    badgeColor: "top",
    image: "images/clog-midnight-slate.svg",
    colorName: "Midnight Slate Grey",
    colorHex: "#334155",
    inStock: true,
    tagline: "Sleek, rugged, and engineered for maximum durability.",
    description: "Built for active days, gym transitions, and city commutes. The Midnight Slate Sport features an reinforced rugged tread sole and deep heel cup for confident traction in any weather.",
    features: [
      "High-traction anti-skid rubberized sole pattern",
      "Reinforced toe cap protects against bumps and stubs",
      "Deep contoured heel cup for athletic stability",
      "Waterproof and mud-resistant finish",
      "Industrial charcoal finish that matches any casual wear"
    ],
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 5,
    name: "Lavender Mist Chunky Platform",
    slug: "lavender-mist-chunky-platform",
    category: "Women",
    gender: "Women",
    price: 999,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 164,
    badge: "Limited Drop",
    badgeColor: "limited",
    image: "images/clog-lavender-dream.svg",
    colorName: "Lavender Purple",
    colorHex: "#8B5CF6",
    inStock: true,
    tagline: "Slight 1.5-inch platform lift with featherlight comfort.",
    description: "Get that trendy street-style platform lift without any of the heavy weight. The Lavender Mist clog adds height while providing dreamy, cloud-like cushioning with every step you take.",
    features: [
      "1.5-inch elevated platform sole with featherlight core",
      "Soothing aesthetic pastel lavender tone",
      "Massage nubs on footbed to stimulate blood circulation",
      "Ergonomic forward-rocker sole for effortless walking",
      "Includes exclusive lavender butterfly charm"
    ],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: 6,
    name: "Matcha Pop Daily Clog",
    slug: "matcha-pop-daily-clog",
    category: "Unisex",
    gender: "Unisex",
    price: 799,
    originalPrice: 1399,
    rating: 4.7,
    reviewsCount: 142,
    badge: "Best Value",
    badgeColor: "value",
    image: "images/clog-matcha-green.svg",
    colorName: "Matcha Lime Green",
    colorHex: "#84CC16",
    inStock: true,
    tagline: "A fresh earthy green designed for daily hustle.",
    description: "Our most budget-friendly daily hero! The Matcha Pop clog combines clean aesthetics, reliable comfort, and lightweight resilience at an unbeatable launch price of ₹799.",
    features: [
      "Exceptional value under ₹800 without quality cuts",
      "Breathable side & top venting system",
      "Soft flexibility that bends naturally with your foot",
      "Anti-fungal & antimicrobial foam compound",
      "Ideal for indoor lounging or outdoor grocery runs"
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 7,
    name: "Deep Ocean All-Terrain Explorer",
    slug: "deep-ocean-all-terrain-explorer",
    category: "Men",
    gender: "Men",
    price: 999,
    originalPrice: 1899,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Outdoor Pick",
    badgeColor: "outdoor",
    image: "images/clog-ocean-navy.svg",
    colorName: "Deep Ocean Navy",
    colorHex: "#0284C7",
    inStock: true,
    tagline: "Rugged traction meets ultimate monsoon-ready waterproofing.",
    description: "Whether stepping through wet monsoon puddles, exploring weekend trails, or washing your car, the Deep Ocean Explorer offers unbeatable grip and total water immunity.",
    features: [
      "Aggressive multi-directional traction lugs",
      "Adjustable turbo heel strap for locked-in security",
      "100% waterproof buoyant EVA construction",
      "Dries completely in under 10 minutes",
      "Matte navy aesthetic with electric sky blue accents"
    ],
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 8,
    name: "Sunshine Pop Energy Clog",
    slug: "sunshine-pop-energy-clog",
    category: "Unisex",
    gender: "Unisex",
    price: 849,
    originalPrice: 1499,
    rating: 4.8,
    reviewsCount: 189,
    badge: "Hot Deal",
    badgeColor: "hot",
    image: "images/clog-sunshine-yellow.svg",
    colorName: "Sunshine Yellow",
    colorHex: "#EAB308",
    inStock: true,
    tagline: "Brighten your stride with maximum dopamine dressing.",
    description: "Spread good vibes wherever you walk. Sunshine Pop brings joyous energy to your feet with high-rebound cushioning that puts a bounce in every step.",
    features: [
      "High-rebound energetic foam midsole",
      "Sunny UV-resistant color that will not fade in sunlight",
      "Wide toe box allowing toes to splay naturally",
      "Easy rinse-and-go maintenance",
      "Free smiling honey charm included"
    ],
    sizes: [5, 6, 7, 8, 9, 10]
  },
  {
    id: 9,
    name: "Desert Sand Minimalist",
    slug: "desert-sand-minimalist",
    category: "Unisex",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 224,
    badge: "Trending",
    badgeColor: "trending",
    image: "images/clog-sand-beige.svg",
    colorName: "Desert Sand / Warm Khaki",
    colorHex: "#D97706",
    inStock: true,
    tagline: "Neutral, calm, and effortlessly pairs with linen and denim.",
    description: "For lovers of minimalist, neutral aesthetic fashion. The Desert Sand clog blends warm earthy tones with modern Scandinavian footwear design principles.",
    features: [
      "Warm neutral tone that matches any casual outfit",
      "Ultra-plush cloud foam insole",
      "Featherweight construction prevents leg tiredness",
      "Silent walking sole — zero squeaking on tile floors",
      "Matte textured luxury finish"
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 10,
    name: "Berry Blast Street Clog",
    slug: "berry-blast-street-clog",
    category: "Women",
    gender: "Women",
    price: 899,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 156,
    badge: "Bold Pick",
    badgeColor: "bold",
    image: "images/clog-berry-red.svg",
    colorName: "Crimson Berry Red",
    colorHex: "#E11D48",
    inStock: true,
    tagline: "A confident statement piece for bold sneaker lovers.",
    description: "Turn heads with the Berry Blast. Featuring rich crimson red tones and premium contour lines, it is the perfect blend of casual street footwear and supreme comfort.",
    features: [
      "Bold colorway with high-gloss accent highlights",
      "Anatomically molded arch support",
      "Superior shock absorption for hard concrete floors",
      "Wide heel cup for anti-wobble posture",
      "Includes exclusive strawberry badge charm"
    ],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: 11,
    name: "Pearl White Cloud Classic",
    slug: "pearl-white-cloud-classic",
    category: "Unisex",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 388,
    badge: "Iconic",
    badgeColor: "bestseller",
    image: "images/clog-pearl-white.svg",
    colorName: "Pearl White",
    colorHex: "#E2E8F0",
    inStock: true,
    tagline: "The all-time classic white clog. Crisp, clean, and timeless.",
    description: "The quintessential white clog that pairs effortlessly with socks, shorts, sweatpants, or casual trousers. Treated with our dirt-defying easy-wipe coating.",
    features: [
      "Stain-resistant wipe-clean surface finish",
      "Timeless minimalist white silhouette",
      "Super breathable 13-port ventilation array",
      "Soft flexible heel strap with dual positions",
      "Favorite among healthcare workers and students"
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 12,
    name: "Stealth Carbon Matte Black",
    slug: "stealth-carbon-matte-black",
    category: "Men",
    gender: "Men",
    price: 949,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 412,
    badge: "Must Have",
    badgeColor: "bestseller",
    image: "images/clog-carbon-black.svg",
    colorName: "Stealth Carbon Black",
    colorHex: "#1E293B",
    inStock: true,
    tagline: "All-black stealth styling. No dirt shows, maximum attitude.",
    description: "The undefeated daily champion. In sleek stealth carbon black, this clog resists visible dirt, stays pitch-black in all weather, and delivers unmatched cloud comfort.",
    features: [
      "Zero-dirt stealth black finish",
      "Heavy-duty anti-slip grip sole",
      "Super cushioned EVA compound reduces plantar pressure",
      "Quick water-shedding ports",
      "The #1 recommended daily driver clog"
    ],
    sizes: [6, 7, 8, 9, 10, 11]
  }
];

// Helper to look up a product by ID
function getProductById(id) {
  const numericId = parseInt(id, 10);
  return PRODUCTS.find(p => p.id === numericId) || null;
}

// Helper to get products by category
function getProductsByCategory(category) {
  if (!category || category === "All") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category || p.category === "Unisex");
}
