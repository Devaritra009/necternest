/**
 * ============================================================================
 * NECTERNEST — PRODUCT CATALOG & INVENTORY MANAGEMENT
 * ============================================================================
 * 
 * 💡 EASY GUIDE FOR EDITING PRODUCTS & INVENTORY:
 * ----------------------------------------------------------------------------
 * 1. HOW TO CHANGE PRICING:
 *    Find the product below and update:
 *      price: 899,          // Current selling price (in ₹)
 *      originalPrice: 1599, // MRP before discount (in ₹)
 * 
 * 2. HOW TO SET AN ITEM AS "OUT OF STOCK" / "NOW AVAILABLE":
 *    - To mark OUT OF STOCK:
 *        inStock: false,
 *        badge: "OUT OF STOCK",
 *        badgeType: "soldout"
 *      (This automatically disables the buy/order buttons on the website!)
 *    - To mark NOW AVAILABLE:
 *        inStock: true,
 *        badge: "NOW AVAILABLE",
 *        badgeType: "available"
 * 
 * 3. HOW TO ADD A NEW PRODUCT:
 *    Simply copy-paste this template block at the end of the PRODUCTS array:
 * 
 *    {
 *      id: 20, // next number
 *      name: "Your New Clog Name",
 *      slug: "your-new-clog-name",
 *      category: "Clogs",        // Options: "Clogs", "Slides", "Flip-Flops"
 *      gender: "Unisex",         // Options: "Men", "Women", "Unisex"
 *      price: 899,
 *      originalPrice: 1599,
 *      inStock: true,            // true = Can buy, false = Out of stock
 *      badge: "NOW AVAILABLE",   // "NOW AVAILABLE", "OUT OF STOCK", "BESTSELLER", "HOT DROP"
 *      badgeType: "available",   // "available", "soldout", "hot", "cyan"
 *      image: "images/products/your-photo.jpg",
 *      gallery: ["images/products/your-photo.jpg"],
 *      colorName: "Color Description",
 *      colorHex: "#00F0FF",
 *      sizes: [5, 6, 7, 8, 9, 10], // Plain numbers (NO "UK" tag!)
 *      tagline: "Short catchy one-line description",
 *      description: "Full product description paragraph",
 *      features: [
 *        "100% Waterproof closed-cell EVA foam",
 *        "Pivoting heel strap for lockdown fit",
 *        "Free packing video provided on WhatsApp before dispatch"
 *      ],
 *      rating: 4.9,
 *      reviewsCount: 150
 *    },
 * ============================================================================
 */

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Street Clog — Pearl White & Black",
    slug: "classic-street-clog-pearl-white-black",
    category: "Clogs",
    gender: "Unisex",
    price: 799,
    originalPrice: 1599,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/clog-white-black.jpg",
    gallery: [
      "images/products/clog-white-black.jpg",
      "images/products/clog-slate-lime.jpg",
      "images/products/clog-literide-lime.jpg"
    ],
    colorName: "Pearl White / Midnight Black Band",
    colorHex: "#FFFFFF",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Clean streetwear monochrome with pillow-soft arch cushioning.",
    description: "The iconic pearl white street clog engineered with high-rebound closed-cell EVA foam. Water-repellent, dirt-resistant, and built for all-day campus, commute, and city wear.",
    features: [
      "100% Waterproof & easily washable with soap and water",
      "Pivoting heel strap for a relaxed slide or locked-in street fit",
      "Ergonomic arch support that molds to your feet",
      "Rapid water-drainage and ventilation ports",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 382
  },
  {
    id: 2,
    name: "Classic Street Clog — Charcoal Slate & Lime",
    slug: "classic-street-clog-charcoal-slate-lime",
    category: "Clogs",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    inStock: true,
    badge: "BESTSELLER",
    badgeType: "hot",
    image: "images/products/clog-slate-lime.jpg",
    gallery: [
      "images/products/clog-slate-lime.jpg",
      "images/products/clog-white-black.jpg"
    ],
    colorName: "Charcoal Slate / Electric Lime",
    colorHex: "#334155",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Industrial matte charcoal with high-contrast electric lime branding.",
    description: "Built for rugged daily hustle and city commutes. The Charcoal Slate edition pairs an ultra-durable sole with cloud-comfort dual-density foam for fatigue-free steps.",
    features: [
      "High-traction anti-skid rubberized sole pattern",
      "Reinforced toe cap protects against bumps and stubs",
      "Deep contoured heel cup for athletic stability",
      "Waterproof and mud-resistant finish",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 420
  },
  {
    id: 3,
    name: "Classic Street Clog — Deep Navy & Flame Red",
    slug: "classic-street-clog-deep-navy-flame-red",
    category: "Clogs",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/clog-navy-red.jpg",
    gallery: [
      "images/products/clog-navy-red.jpg",
      "images/products/clog-navy-green.jpg"
    ],
    colorName: "Deep Navy Blue / Flame Red Stripe",
    colorHex: "#1E3A8A",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Sporty collegiate navy blue with racing flame red contrast.",
    description: "Stand out with athletic confidence. Deep navy body meets vibrant flame red sport stripe on our trademark lightweight cloud sole.",
    features: [
      "Vibrant high-contrast athletic midsole stripe",
      "Pivoting strap for two wearing styles (relaxed or locked)",
      "High-rebound foam absorbs impact on concrete surfaces",
      "Monsoon-ready 100% waterproof construction",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 295
  },
  {
    id: 4,
    name: "Classic Street Clog — Sunshine Gold Yellow",
    slug: "classic-street-clog-sunshine-gold-yellow",
    category: "Clogs",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    inStock: true,
    badge: "TRENDING",
    badgeType: "cyan",
    image: "images/products/clog-sunshine-yellow.jpg",
    gallery: [
      "images/products/clog-sunshine-yellow.jpg"
    ],
    colorName: "Sunshine Yellow / White Band",
    colorHex: "#EAB308",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Bold dopamine dressing piece that commands attention everywhere.",
    description: "Spread pure positive energy. Sunshine Gold brings energetic warmth to your outfit with pillowy footbed cushioning that keeps your feet fresh from sunrise to midnight.",
    features: [
      "UV-resistant formulation retains bright color in Indian sunlight",
      "Wide toe box allowing toes to relax naturally",
      "Waterproof & anti-slip textured grip",
      "Easy rinse-and-go maintenance",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 260
  },
  {
    id: 5,
    name: "Classic Street Clog — Crimson Flame Red",
    slug: "classic-street-clog-crimson-flame-red",
    category: "Clogs",
    gender: "Unisex",
    price: 799,
    originalPrice: 1599,
    inStock: true,
    badge: "HOT DROP",
    badgeType: "hot",
    image: "images/products/clog-crimson-red.jpg",
    gallery: [
      "images/products/clog-crimson-red.jpg"
    ],
    colorName: "Crimson Flame Red / White Band",
    colorHex: "#DC2626",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "High-voltage fire red built for fearless streetwear statements.",
    description: "Turn heads wherever you step. Rich crimson red body paired with crisp white sport branding makes this an essential piece for bold fashion enthusiasts.",
    features: [
      "High-visibility crimson red with sleek glossy accents",
      "Anatomically molded arch support prevents fatigue",
      "Superior shock absorption for hard paved roads",
      "Quick-drying buoyant EVA construction",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 215
  },
  {
    id: 6,
    name: "Classic Street Clog — Dark Grey & Pastel Green",
    slug: "classic-street-clog-dark-grey-pastel-green",
    category: "Clogs",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/clog-darkgrey-green.jpg",
    gallery: [
      "images/products/clog-darkgrey-green.jpg"
    ],
    colorName: "Dark Grey / Pastel Volt Green",
    colorHex: "#475569",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Matte stealth grey highlighted with fresh pastel green racing line.",
    description: "Understated cool. The Dark Grey & Pastel Green colorway combines dark utility style with a tasteful touch of energetic neon green.",
    features: [
      "Stealth dark chassis that masks daily city dust",
      "Ventilation ports shed water and debris in seconds",
      "Non-marking slip-resistant tread pattern",
      "Featherlight foam under 190 grams per shoe",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.7,
    reviewsCount: 194
  },
  {
    id: 7,
    name: "Classic Street Clog — Deep Navy & Pastel Green",
    slug: "classic-street-clog-deep-navy-pastel-green",
    category: "Clogs",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    inStock: true,
    badge: "LIMITED DROP",
    badgeType: "cyan",
    image: "images/products/clog-navy-green.jpg",
    gallery: [
      "images/products/clog-navy-green.jpg"
    ],
    colorName: "Deep Navy / Pastel Mint Green",
    colorHex: "#1E293B",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Sophisticated midnight navy balanced with crisp pastel mint.",
    description: "A fan favorite limited edition drop. Offers a premium subdued aesthetic with ergonomic contouring for 24/7 comfort on your feet.",
    features: [
      "Limited batch production run",
      "Ergonomic forward-rocker sole for smooth natural stride",
      "Pivoting heel strap with branded side pivots",
      "Antimicrobial, odor-resistant EVA compound",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 238
  },
  {
    id: 8,
    name: "Classic Street Clog — Light Grey & Crimson Red",
    slug: "classic-street-clog-light-grey-crimson-red",
    category: "Clogs",
    gender: "Unisex",
    price: 899,
    originalPrice: 1599,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/clog-lightgrey-red.jpg",
    gallery: [
      "images/products/clog-lightgrey-red.jpg"
    ],
    colorName: "Light Grey / Crimson Sport Red",
    colorHex: "#94A3B8",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Clean aerial grey body with bold red racetrack accents.",
    description: "Versatile, clean, and effortlessly matched with denim, cargos, or shorts. The light grey hue provides a neutral foundation while the crimson red stripe adds sporty punch.",
    features: [
      "Dual-tone aesthetic that goes with any casual fit",
      "Massaging footbed nubs stimulate circulation",
      "100% waterproof and buoyant",
      "Dries completely in under 10 minutes",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 180
  },
  {
    id: 9,
    name: "LiteRide 360 Clog — Electric Volt & Mineral Grey",
    slug: "literide-360-clog-electric-volt-mineral-grey",
    category: "Clogs",
    gender: "Unisex",
    price: 999,
    originalPrice: 1799,
    inStock: true,
    badge: "TOP RATED",
    badgeType: "hot",
    image: "images/products/clog-literide-lime.jpg",
    gallery: [
      "images/products/clog-literide-lime.jpg",
      "images/products/clog-literide-grey.jpg"
    ],
    colorName: "Mineral Grey / Electric Volt Lime",
    colorHex: "#84CC16",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Next-gen 360 micro-mesh breathable upper with sink-in soft foam.",
    description: "The pinnacle of foam engineering. Features hundreds of micro-perforation breathability holes and a neon volt high-resilience foam footbed for unrivaled sink-in comfort.",
    features: [
      "Next-generation 360 LiteRide foam footbed",
      "Ultra-breathable micro-perforated upper prevents sweating",
      "Pressure-mapped cushioning for targeted arch relief",
      "Dynamic adjustable heel turbo strap",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 468
  },
  {
    id: 10,
    name: "LiteRide 360 Clog — Minimalist Slate & Pearl",
    slug: "literide-360-clog-minimalist-slate-pearl",
    category: "Clogs",
    gender: "Unisex",
    price: 999,
    originalPrice: 1799,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/clog-literide-grey.jpg",
    gallery: [
      "images/products/clog-literide-grey.jpg",
      "images/products/clog-literide-lime.jpg"
    ],
    colorName: "Minimalist Slate Grey / Pearl White Sole",
    colorHex: "#64748B",
    sizes: [6, 7, 8, 9, 10],
    tagline: "High-tech comfort dressed in elegant monochrome architecture.",
    description: "Refined, futuristic, and ultra-comfortable. Slate grey perforated body rests on a cloud-soft pearl white platform with an embossed RIDE turbo strap.",
    features: [
      "Super-soft LiteRide foam core for premium rebound",
      "Full perimeter airflow channels for cool dry feet",
      "Modern architectural heel badge with RIDE embossing",
      "Machine washable and bucket safe",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 312
  },
  {
    id: 11,
    name: "Streetwear Cloud Slide — Triple Carbon Black",
    slug: "streetwear-cloud-slide-triple-carbon-black",
    category: "Slides",
    gender: "Unisex",
    price: 799,
    originalPrice: 1499,
    inStock: true,
    badge: "BESTSELLER",
    badgeType: "hot",
    image: "images/products/slide-carbon-black.jpg",
    gallery: [
      "images/products/slide-carbon-black.jpg"
    ],
    colorName: "Triple Carbon Matte Black",
    colorHex: "#0F172A",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Chunky ribbed street slide with contoured bubble-cushion sole.",
    description: "The ultimate post-workout and lounge slide. Engineered with deep textured sidewall ribs, anti-slip bubble footbed nodes, and an aggressive street aesthetic.",
    features: [
      "Chunky street-aesthetic ribbed sole profile",
      "Bubble massage nubs along footbed for plantar relief",
      "Perforated wide strap prevents pressure points on bridge",
      "100% waterproof high-density foam",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 520
  },
  {
    id: 12,
    name: "Crocband Flip — Black & Pastel Green",
    slug: "crocband-flip-black-pastel-green",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 799,
    originalPrice: 1399,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/flipflop-black-green.jpg",
    gallery: [
      "images/products/flipflop-black-green.jpg"
    ],
    colorName: "Matte Black / Pastel Green Stripe",
    colorHex: "#111827",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Everyday featherlight thong sandal with iconic racing stripe.",
    description: "Lightweight summer comfort at its finest. Built with a soft TPU toe post that never chafes and an ergonomic footbed that cushions every step.",
    features: [
      "Soft flexible toe post for zero-chafing between toes",
      "Non-absorbent closed-cell foam — dries in minutes",
      "Sporty Crocband sidewall racing stripe",
      "Anti-slip textured insole grip",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 245
  },
  {
    id: 13,
    name: "Crocband Flip — Pearl White & Flame Red",
    slug: "crocband-flip-pearl-white-flame-red",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 599,
    originalPrice: 1199,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/flipflop-white-red.jpg",
    gallery: [
      "images/products/flipflop-white-red.jpg"
    ],
    colorName: "Pearl White / Flame Red Racing Line",
    colorHex: "#F8FAFC",
    sizes: [5, 6, 7, 8, 9],
    tagline: "Crisp white summer sandal with fiery red athletic accents.",
    description: "Bright, playful, and featherlight. Ideal for beach holidays, home lounging, or casual daily errands.",
    features: [
      "Ultra-plush pillowy footbed prevents heel fatigue",
      "Dirt-resistant wipe-clean surface finish",
      "Smooth contoured toe strap",
      "Waterproof & anti-slip textured grip",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 198
  },
  {
    id: 14,
    name: "Crocband Flip — Dark Grey & Pastel Green",
    slug: "crocband-flip-dark-grey-pastel-green",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 599,
    originalPrice: 1199,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/flipflop-darkgrey-green.jpg",
    gallery: [
      "images/products/flipflop-darkgrey-green.jpg"
    ],
    colorName: "Dark Slate Grey / Pastel Green",
    colorHex: "#374151",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Rugged dark grey casual sandal designed for wet Indian conditions.",
    description: "Built for tough everyday use. Masks dust and mud while offering unmatched comfort for feet during rainy monsoons or sweltering summer days.",
    features: [
      "Deep dark colorway resists visible street dirt",
      "Shock-absorbing sole protects knees and joints",
      "Quick rinse-and-go maintenance",
      "Lightweight under 150 grams per shoe",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.7,
    reviewsCount: 176
  },
  {
    id: 15,
    name: "Crocband Flip — Light Grey & Electric Orange",
    slug: "crocband-flip-light-grey-electric-orange",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 599,
    originalPrice: 1199,
    inStock: true,
    badge: "POPULAR",
    badgeType: "cyan",
    image: "images/products/flipflop-lightgrey-orange.jpg",
    gallery: [
      "images/products/flipflop-lightgrey-orange.jpg"
    ],
    colorName: "Light Grey / Electric Orange",
    colorHex: "#CBD5E1",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Modern cool grey with an energetic burst of neon orange.",
    description: "An eye-catching pairing of neutral urban grey and energetic orange. Perfect for stepping out in style without sacrificing comfort.",
    features: [
      "High-contrast neon orange sidewall detail",
      "Waterproof & anti-skid ribbed footbed",
      "Featherlight foam under 150 grams",
      "Ergonomic arch molding",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 220
  },
  {
    id: 16,
    name: "Crocband Flip — Deep Navy & Pastel Green",
    slug: "crocband-flip-deep-navy-pastel-green",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 799,
    originalPrice: 1399,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/flipflop-navy-green.jpg",
    gallery: [
      "images/products/flipflop-navy-green.jpg"
    ],
    colorName: "Deep Navy Blue / Pastel Green",
    colorHex: "#1E3A8A",
    sizes: [6, 7, 8, 9, 10],
    tagline: "Rich nautical navy blue paired with fresh mint green stripe.",
    description: "Clean, classic, and extremely durable. Designed to conquer wet puddle walks, beach holidays, and daily grocery runs with zero fatigue.",
    features: [
      "Classic navy blue tone that pairs with anything",
      "Contoured heel cup for balanced posture",
      "Anti-fungal closed-cell foam prevents odors",
      "Waterproof and quick-drying",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 165
  },
  {
    id: 17,
    name: "Crocband Flip — Pearl White & Midnight Black",
    slug: "crocband-flip-pearl-white-midnight-black",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 599,
    originalPrice: 1199,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/flipflop-white-black.jpg",
    gallery: [
      "images/products/flipflop-white-black.jpg"
    ],
    colorName: "Pearl White / Midnight Black Band",
    colorHex: "#FFFFFF",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Timeless monochrome flip-flop for effortless street aesthetics.",
    description: "The minimalist staple. Pure white body accented with clean black branding makes this flip-flop the ultimate understated choice for daily wear.",
    features: [
      "Monochrome street-style colorway",
      "Dirt-resistant wipe-clean coating",
      "Soft ergonomic toe thong",
      "Cushioned heel pod absorbs walking shock",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 288
  },
  {
    id: 18,
    name: "Crocband Flip — Pearl White & Sunset Orange",
    slug: "crocband-flip-pearl-white-sunset-orange",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 599,
    originalPrice: 1199,
    inStock: true,
    badge: "NEW DROP",
    badgeType: "hot",
    image: "images/products/flipflop-white-orange.jpg",
    gallery: [
      "images/products/flipflop-white-orange.jpg"
    ],
    colorName: "Pearl White / Sunset Orange Racing Line",
    colorHex: "#F97316",
    sizes: [5, 6, 7, 8, 9],
    tagline: "Warm sunset orange accents on pure white cloud foam.",
    description: "Vibrant and chic. Captures the relaxed warmth of golden hour with supreme arch comfort that keeps your feet smiling all day.",
    features: [
      "Warm sunset orange accent stripe",
      "Featherlight weight under 140 grams",
      "Waterproof & anti-skid grip",
      "Non-marking rubberized base",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.8,
    reviewsCount: 142
  },
  {
    id: 19,
    name: "Crocband Flip — Pearl White & Electric Sky Blue",
    slug: "crocband-flip-pearl-white-electric-sky-blue",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 599,
    originalPrice: 1199,
    inStock: true,
    badge: "NOW AVAILABLE",
    badgeType: "available",
    image: "images/products/flipflop-white-sky.jpg",
    gallery: [
      "images/products/flipflop-white-sky.jpg"
    ],
    colorName: "Pearl White / Electric Sky Blue",
    colorHex: "#0EA5E9",
    sizes: [5, 6, 7, 8, 9, 10],
    tagline: "Cool chill sky blue on crisp white ergonomic cloud foam.",
    description: "Refreshing, crisp, and unbelievably comfortable. The Sky Blue edition gives your feet a cool visual aesthetic while delivering all-day relief.",
    features: [
      "Electric sky blue accent stripe & branding",
      "Soft flexible toe strap eliminates friction",
      "100% waterproof and buoyant",
      "Fast rinsing and drying in minutes",
      "📹 Live WhatsApp packing video shared before dispatch",
      "🚚 Free delivery on orders over ₹999"
    ],
    rating: 4.9,
    reviewsCount: 205
  }
];

// ============================================================================
// HELPER FUNCTIONS (USEFUL ACROSS ALL PAGES)
// ============================================================================

/**
 * Check if a product is in stock and available for order
 */
function isProductInStock(product) {
  if (!product) return false;
  if (product.inStock === false) return false;
  if (product.badge && product.badge.toUpperCase() === "OUT OF STOCK") return false;
  if (product.badge && product.badge.toUpperCase() === "SOLD OUT") return false;
  return true;
}

/**
 * Get product by numeric ID
 */
function getProductById(id) {
  const numericId = parseInt(id, 10);
  return PRODUCTS.find(p => p.id === numericId) || null;
}

/**
 * Filter products by category or gender
 */
function getProductsByCategory(filter) {
  if (!filter || filter === "All") return PRODUCTS;
  const f = filter.toLowerCase();
  return PRODUCTS.filter(p => {
    const cat = (p.category || "").toLowerCase();
    const gender = (p.gender || "").toLowerCase();
    return cat === f || gender === f || (f === "men" && gender === "unisex") || (f === "women" && gender === "unisex");
  });
}
