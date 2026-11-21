/**
 * NecterNest - Main JavaScript File
 * Handles:
 * 1. Cart management with localStorage persistence
 * 2. Mobile hamburger menu toggle
 * 3. Dynamic Product Details Page (product.html?id=...)
 * 4. Shop filters, sorting, and search (shop.html)
 * 5. Cart calculations, coupons, and WhatsApp Checkout (cart.html)
 * 6. Interactive Size Chart Modal
 * 7. Toast notification popups
 */

// ==========================================
// STORE CONFIGURATION
// (Easily edit your store details here!)
// ==========================================
const STORE_CONFIG = {
  brandName: "NecterNest",
  // Put your real WhatsApp number with country code (e.g. 919876543210 without + or spaces)
  whatsappNumber: "918617751577",
  upiId: "necternest@upi",
  supportEmail: "support@necternest.in",
  freeShippingThreshold: 999,
  standardShippingFee: 49,
  couponCode: "FIRSTNEST",
  couponDiscount: 100
};

// ==========================================
// 1. CART MANAGEMENT (localStorage)
// ==========================================
const CART_STORAGE_KEY = "necternest_cart_v1";
const COUPON_STORAGE_KEY = "necternest_coupon_applied";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
  } catch (e) {
    console.error("Error saving cart to localStorage", e);
  }
}

function addToCart(productId, size = null, quantity = 1, showNotification = true) {
  const product = getProductById(productId);
  if (!product) {
    showToast("Product not found!", "error");
    return false;
  }

  // Default to first size if none passed
  const selectedSize = size || (product.sizes && product.sizes.length ? `UK ${product.sizes[0]}` : "Free Size");

  let cart = getCart();
  const existingItemIndex = cart.findIndex(
    item => item.id === product.id && item.size === selectedSize
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
      quantity: quantity
    });
  }

  saveCart(cart);

  if (showNotification) {
    showToast(`Added to Bag: ${product.name} (${selectedSize})`, "success");
  }
  return true;
}

function updateCartItemQuantity(index, delta) {
  let cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
      showToast("Item removed from cart", "info");
    }
    saveCart(cart);
  }
}

function removeCartItem(index) {
  let cart = getCart();
  if (index >= 0 && index < cart.length) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart(cart);
    showToast(`Removed ${item.name}`, "info");
  }
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  localStorage.removeItem(COUPON_STORAGE_KEY);
  updateCartBadge();
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadge() {
  const count = getCartCount();
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add("has-items");
      badge.style.display = "inline-flex";
    } else {
      badge.classList.remove("has-items");
      badge.style.display = "none";
    }
  });
}

// ==========================================
// 2. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
  if (type === "error") {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  } else if (type === "info") {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("visible"), 10);

  // Auto remove after 3.2s
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 3. CURRENCY FORMATTER
// ==========================================
function formatCurrency(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// ==========================================
// 4. MOBILE NAVIGATION TOGGLE
// ==========================================
function setupMobileMenu() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navMenu = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.contains("active");
    if (isOpen) {
      navMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      if (overlay) overlay.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      navMenu.classList.add("active");
      hamburgerBtn.classList.add("active");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      if (overlay) overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // prevent background scroll
    }
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  if (overlay) {
    overlay.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close menu when clicking link
  const navItems = navMenu.querySelectorAll("a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// ==========================================
// 5. SIZE CHART MODAL
// ==========================================
function setupSizeModal() {
  let modal = document.getElementById("size-chart-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "size-chart-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="sizeModalTitle">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-icon">📏</span>
            <h3 id="sizeModalTitle">NecterNest Clog Size Guide</h3>
          </div>
          <button type="button" class="modal-close-btn" aria-label="Close size guide">&times;</button>
        </div>
        <div class="modal-body">
          <p class="size-guide-tip">
            <strong>Pro Tip:</strong> NecterNest clogs fit true to standard Indian / UK shoe sizes. If you wear a half size (e.g. UK 7.5), we recommend sizing up to UK 8 for relaxed, comfortable room.
          </p>
          <div class="table-responsive">
            <table class="size-table">
              <thead>
                <tr>
                  <th>UK / India</th>
                  <th>Foot Length (cm)</th>
                  <th>US Size</th>
                  <th>EU Size</th>
                  <th>Best Fit For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>UK 5</strong></td>
                  <td>23.5 cm</td>
                  <td>US 6 Men / 7 Women</td>
                  <td>EU 38</td>
                  <td>Slim / Small feet</td>
                </tr>
                <tr>
                  <td><strong>UK 6</strong></td>
                  <td>24.5 cm</td>
                  <td>US 7 Men / 8 Women</td>
                  <td>EU 39-40</td>
                  <td>Standard Women / Small Men</td>
                </tr>
                <tr>
                  <td><strong>UK 7</strong></td>
                  <td>25.5 cm</td>
                  <td>US 8 Men / 9 Women</td>
                  <td>EU 41</td>
                  <td>Most Common Unisex</td>
                </tr>
                <tr>
                  <td><strong>UK 8</strong></td>
                  <td>26.5 cm</td>
                  <td>US 9 Men / 10 Women</td>
                  <td>EU 42</td>
                  <td>Standard Men Fit</td>
                </tr>
                <tr>
                  <td><strong>UK 9</strong></td>
                  <td>27.5 cm</td>
                  <td>US 10 Men / 11 Women</td>
                  <td>EU 43</td>
                  <td>Medium-Large Men</td>
                </tr>
                <tr>
                  <td><strong>UK 10</strong></td>
                  <td>28.5 cm</td>
                  <td>US 11 Men</td>
                  <td>EU 44-45</td>
                  <td>Large Men Fit</td>
                </tr>
                <tr>
                  <td><strong>UK 11</strong></td>
                  <td>29.5 cm</td>
                  <td>US 12 Men</td>
                  <td>EU 46</td>
                  <td>Extra Roomy / Tall</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="size-measure-tips">
            <h4>How to measure your foot length at home:</h4>
            <ol>
              <li>Place a piece of plain paper on a flat floor against the wall.</li>
              <li>Stand on the paper with your heel firmly touching the wall.</li>
              <li>Mark the tip of your longest toe with a pencil.</li>
              <li>Measure the distance from the edge of paper to your mark in centimeters (cm).</li>
            </ol>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary modal-close-action">Got it, thanks!</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeButtons = modal.querySelectorAll(".modal-close-btn, .modal-close-action");
    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => modal.classList.remove("active"));
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }
}

function openSizeModal() {
  const modal = document.getElementById("size-chart-modal");
  if (modal) {
    modal.classList.add("active");
  }
}

// ==========================================
// 6. PRODUCT CARD BUILDER (Reusable HTML)
// ==========================================
function createProductCardHTML(product) {
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return `
    <article class="product-card" data-category="${product.category}" data-id="${product.id}">
      <div class="product-card-media">
        <a href="product.html?id=${product.id}" class="product-card-link" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name} - comfortable lightweight Indian clogs" loading="lazy" class="product-card-img">
        </a>
        ${product.badge ? `<span class="badge badge-${product.badgeColor || 'bestseller'}">${product.badge}</span>` : ""}
        <span class="discount-pill">-${discountPercent}%</span>
      </div>

      <div class="product-card-info">
        <div class="product-card-category">${product.category} Clogs</div>
        <h3 class="product-card-title">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>

        <div class="product-card-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-value">${product.rating}</span>
          <span class="review-count">(${product.reviewsCount})</span>
        </div>

        <div class="product-card-price-row">
          <div class="prices">
            <span class="current-price">${formatCurrency(product.price)}</span>
            <span class="original-price">${formatCurrency(product.originalPrice)}</span>
          </div>
          <span class="savings-tag">Save ${formatCurrency(product.originalPrice - product.price)}</span>
        </div>

        <div class="product-card-actions">
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">Select Size</a>
          <button type="button" class="btn btn-primary btn-sm quick-add-btn" onclick="addToCart(${product.id}, 'UK 8', 1, true)" title="Quick Add UK 8 to Bag">
            + Quick Add
          </button>
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// 7. HOME PAGE (index.html)
// ==========================================
function initHomePage() {
  const featuredContainer = document.getElementById("featured-products-grid");
  if (!featuredContainer || typeof PRODUCTS === "undefined") return;

  // Show first 6 products (Bestsellers & Drops)
  const featured = PRODUCTS.slice(0, 6);
  featuredContainer.innerHTML = featured.map(createProductCardHTML).join("");
}

// ==========================================
// 8. SHOP PAGE (shop.html)
// ==========================================
function initShopPage() {
  const shopGrid = document.getElementById("shop-products-grid");
  const countDisplay = document.getElementById("results-count");
  const categoryFilters = document.querySelectorAll(".filter-chip");
  const sortSelect = document.getElementById("sort-select");
  const searchInput = document.getElementById("search-input");

  if (!shopGrid || typeof PRODUCTS === "undefined") return;

  let currentCategory = "All";
  let currentSort = "featured";
  let searchQuery = "";

  function filterAndRender() {
    let filtered = PRODUCTS.filter(product => {
      // Category match
      let matchCategory = true;
      if (currentCategory !== "All") {
        matchCategory = product.category === currentCategory || product.category === "Unisex";
      }

      // Search match
      let matchSearch = true;
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        matchSearch = product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.colorName.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query);
      }

      return matchCategory && matchSearch;
    });

    // Sorting
    if (currentSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Render results
    if (filtered.length === 0) {
      shopGrid.innerHTML = `
        <div class="empty-results-box">
          <div class="empty-icon">🔍</div>
          <h3>No clogs found matching your criteria</h3>
          <p>Try resetting the category filter or searching for another color like Honey Amber, Mint, or Carbon Black.</p>
          <button class="btn btn-secondary mt-3" onclick="resetShopFilters()">Show All 12 Clogs</button>
        </div>
      `;
    } else {
      shopGrid.innerHTML = filtered.map(createProductCardHTML).join("");
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Styles`;
    }
  }

  // Category chip clicks
  categoryFilters.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryFilters.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.category || "All";
      filterAndRender();
    });
  });

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  window.resetShopFilters = function () {
    currentCategory = "All";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    categoryFilters.forEach(c => {
      if (c.dataset.category === "All") c.classList.add("active");
      else c.classList.remove("active");
    });
    filterAndRender();
  };

  // Initial render
  filterAndRender();
}

// ==========================================
// 9. DYNAMIC PRODUCT PAGE (product.html)
// ==========================================
function initProductPage() {
  const container = document.getElementById("product-detail-container");
  if (!container || typeof PRODUCTS === "undefined") return;

  // Extract ID from URL (?id=...)
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || 1;
  const product = getProductById(productId) || PRODUCTS[0];

  let selectedSize = `UK ${product.sizes[0]}`;
  let selectedQty = 1;
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // Update Page Title and Meta for SEO
  document.title = `${product.name} - ₹${product.price} | NecterNest Footwear`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", `Buy ${product.name} at ₹${product.price}. 100% waterproof cloud-cushioned EVA foam clogs. Free delivery & 7-day easy exchange.`);
  }

  container.innerHTML = `
    <div class="breadcrumb-nav">
      <a href="index.html">Home</a> &rsaquo; 
      <a href="shop.html">Shop All</a> &rsaquo; 
      <a href="shop.html?cat=${product.category}">${product.category}</a> &rsaquo; 
      <span>${product.name}</span>
    </div>

    <div class="product-detail-grid">
      <!-- Media Gallery -->
      <div class="pdp-media-col">
        <div class="pdp-main-image-wrapper">
          <img id="pdp-main-image" src="${product.image}" alt="${product.name} comfortable clog" class="pdp-main-img">
          ${product.badge ? `<span class="badge badge-${product.badgeColor || 'bestseller'} pdp-badge">${product.badge}</span>` : ""}
          <span class="pdp-discount-pill">-${discountPercent}% OFF</span>
        </div>
        <div class="pdp-thumbnails">
          <button class="thumb-btn active" onclick="updateMainImage('${product.image}', this)">
            <img src="${product.image}" alt="Main View">
          </button>
          <button class="thumb-btn" onclick="updateMainImage('images/clog-honey-amber.svg', this)">
            <img src="images/clog-honey-amber.svg" alt="Amber Angle">
          </button>
          <button class="thumb-btn" onclick="updateMainImage('images/clog-pearl-white.svg', this)">
            <img src="images/clog-pearl-white.svg" alt="White Angle">
          </button>
        </div>
      </div>

      <!-- Product Information -->
      <div class="pdp-info-col">
        <div class="pdp-category-pill">${product.category} Footwear</div>
        <h1 class="pdp-title">${product.name}</h1>
        <p class="pdp-tagline">${product.tagline}</p>

        <!-- Rating & Trust -->
        <div class="pdp-ratings-bar">
          <div class="stars">★★★★★</div>
          <span class="rating-number"><strong>${product.rating}</strong> / 5.0</span>
          <span class="review-divider">|</span>
          <span class="verified-buyer-text">✓ ${product.reviewsCount} Verified Customer Reviews</span>
        </div>

        <!-- Pricing Card -->
        <div class="pdp-pricing-box">
          <div class="price-stack">
            <span class="pdp-current-price">${formatCurrency(product.price)}</span>
            <span class="pdp-original-price">${formatCurrency(product.originalPrice)}</span>
            <span class="pdp-save-badge">You Save ${formatCurrency(product.originalPrice - product.price)} (${discountPercent}%)</span>
          </div>
          <p class="tax-shipping-note">Inclusive of all taxes. <strong>FREE Delivery</strong> on prepaid orders.</p>
        </div>

        <!-- Launch Offer Hook -->
        <div class="pdp-offer-alert">
          <span class="offer-icon">🎁</span>
          <div class="offer-text">
            <strong>Launch Special Offer:</strong> Use coupon code <span class="coupon-highlight">${STORE_CONFIG.couponCode}</span> at checkout for an extra <strong>₹${STORE_CONFIG.couponDiscount} OFF</strong>!
          </div>
        </div>

        <!-- Size Selector -->
        <div class="pdp-size-section">
          <div class="size-header">
            <label class="size-label">Select Your Size (UK / India):</label>
            <button type="button" class="size-guide-trigger" onclick="openSizeModal()">
              📏 Size Guide
            </button>
          </div>
          <div class="size-pills-group" id="size-options">
            ${product.sizes.map((s, idx) => `
              <button type="button" class="size-pill ${idx === 0 ? 'active' : ''}" data-size="UK ${s}">
                UK ${s}
              </button>
            `).join("")}
          </div>
          <div class="selected-size-feedback">Selected: <strong id="selected-size-text">${selectedSize}</strong></div>
        </div>

        <!-- Quantity & Action Buttons -->
        <div class="pdp-actions-row">
          <div class="quantity-stepper">
            <button type="button" class="qty-btn" id="qty-minus" aria-label="Decrease quantity">-</button>
            <span id="qty-display" class="qty-display">1</span>
            <button type="button" class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
          </div>

          <button type="button" class="btn btn-outline pdp-add-cart-btn" id="pdp-add-cart">
            🛒 Add to Bag
          </button>
        </div>

        <!-- Instant Buy Now via WhatsApp -->
        <button type="button" class="btn btn-whatsapp-order w-100" id="pdp-buy-whatsapp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
          Instant Order via WhatsApp (₹${product.price})
        </button>

        <!-- Highlights & Badges -->
        <div class="pdp-badges-grid">
          <div class="feature-badge-item">
            <span class="icon">💧</span>
            <div class="text">
              <strong>100% Waterproof</strong>
              <small>Rinse & ready in seconds</small>
            </div>
          </div>
          <div class="feature-badge-item">
            <span class="icon">☁️</span>
            <div class="text">
              <strong>Featherlight EVA</strong>
              <small>Under 180 grams</small>
            </div>
          </div>
          <div class="feature-badge-item">
            <span class="icon">🛡️</span>
            <div class="text">
              <strong>7-Day Easy Exchange</strong>
              <small>Hassle-free sizing swap</small>
            </div>
          </div>
          <div class="feature-badge-item">
            <span class="icon">⚡</span>
            <div class="text">
              <strong>Fast Dispatch</strong>
              <small>Dispatched within 24h</small>
            </div>
          </div>
        </div>

        <!-- Description Accordion / Tabs -->
        <div class="pdp-tabs-accordion">
          <div class="accordion-card">
            <button type="button" class="accordion-head active" onclick="toggleAccordion(this)">
              <span>Product Description & Comfort Tech</span>
              <span class="chevron">▼</span>
            </button>
            <div class="accordion-body" style="display: block;">
              <p>${product.description}</p>
              <ul class="feature-bullets">
                ${product.features.map(f => `<li>✓ ${f}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="accordion-card">
            <button type="button" class="accordion-head" onclick="toggleAccordion(this)">
              <span>Shipping & Indian Delivery Times</span>
              <span class="chevron">▼</span>
            </button>
            <div class="accordion-body">
              <p>We ship all orders directly from our fulfillment center via Bluedart, Delhivery, or Xpressbees with live tracking.</p>
              <ul>
                <li><strong>Metro Cities (Mumbai, Delhi, Bengaluru, etc.):</strong> 2 to 4 business days</li>
                <li><strong>Rest of India:</strong> 4 to 6 business days</li>
                <li><strong>Tracking:</strong> Real-time tracking link sent via SMS and WhatsApp upon dispatch</li>
              </ul>
            </div>
          </div>

          <div class="accordion-card">
            <button type="button" class="accordion-head" onclick="toggleAccordion(this)">
              <span>Cleaning & Care Guide</span>
              <span class="chevron">▼</span>
            </button>
            <div class="accordion-body">
              <p>NecterNest clogs are extremely low maintenance! Simply clean with cold water and a mild hand soap using a soft sponge. Wipe dry or air-dry in shade. <em>Note: Avoid leaving clogs in extreme direct hot sunlight or hot car trunks for days to prevent shrinkage.</em></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="related-products-section mt-5">
      <div class="section-header">
        <h2 class="section-title">You Might Also Love</h2>
        <a href="shop.html" class="view-all-link">Browse Full Collection &rarr;</a>
      </div>
      <div class="products-grid">
        ${PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(createProductCardHTML).join("")}
      </div>
    </div>
  `;

  // Size pill click listener
  const sizePills = container.querySelectorAll(".size-pill");
  const sizeTextDisplay = document.getElementById("selected-size-text");
  sizePills.forEach(pill => {
    pill.addEventListener("click", () => {
      sizePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedSize = pill.dataset.size;
      if (sizeTextDisplay) sizeTextDisplay.textContent = selectedSize;
    });
  });

  // Quantity stepper
  const qtyMinus = document.getElementById("qty-minus");
  const qtyPlus = document.getElementById("qty-plus");
  const qtyDisplay = document.getElementById("qty-display");

  if (qtyMinus && qtyPlus && qtyDisplay) {
    qtyMinus.addEventListener("click", () => {
      if (selectedQty > 1) {
        selectedQty--;
        qtyDisplay.textContent = selectedQty;
      }
    });

    qtyPlus.addEventListener("click", () => {
      if (selectedQty < 10) {
        selectedQty++;
        qtyDisplay.textContent = selectedQty;
      }
    });
  }

  // Add to Cart button
  const addCartBtn = document.getElementById("pdp-add-cart");
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      addToCart(product.id, selectedSize, selectedQty, true);
    });
  }

  // Instant Buy Now via WhatsApp
  const buyWhatsAppBtn = document.getElementById("pdp-buy-whatsapp");
  if (buyWhatsAppBtn) {
    buyWhatsAppBtn.addEventListener("click", () => {
      const orderMessage = `*Hi NecterNest!* 👋
I would like to instantly order this clog:

👟 *Product:* ${product.name}
📏 *Size:* ${selectedSize}
🔢 *Quantity:* ${selectedQty}
💰 *Total Amount:* ${formatCurrency(product.price * selectedQty)}

Please confirm order details and share your UPI payment QR code for confirmation!`;

      const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
      window.open(whatsappUrl, "_blank");
    });
  }
}

window.updateMainImage = function (src, btn) {
  const mainImg = document.getElementById("pdp-main-image");
  if (mainImg) mainImg.src = src;

  document.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
};

window.toggleAccordion = function (headBtn) {
  const body = headBtn.nextElementSibling;
  const isActive = headBtn.classList.contains("active");

  if (isActive) {
    headBtn.classList.remove("active");
    body.style.display = "none";
  } else {
    headBtn.classList.add("active");
    body.style.display = "block";
  }
};

// ==========================================
// 10. CART PAGE (cart.html)
// ==========================================
function initCartPage() {
  const cartContainer = document.getElementById("cart-page-content");
  if (!cartContainer) return;

  function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="empty-cart-view">
          <div class="empty-cart-icon">🛒</div>
          <h2>Your Shopping Bag is Empty</h2>
          <p>Treat your feet to cloud-like comfort today! Explore our vibrant collection of 12 comfortable clog styles.</p>
          <a href="shop.html" class="btn btn-primary btn-lg mt-3">Explore All Clogs</a>
        </div>
      `;
      return;
    }

    const subtotal = getCartSubtotal();
    const isCouponApplied = localStorage.getItem(COUPON_STORAGE_KEY) === "true";
    const discountAmount = isCouponApplied ? STORE_CONFIG.couponDiscount : 0;
    const isFreeShipping = subtotal >= STORE_CONFIG.freeShippingThreshold;
    const shippingFee = isFreeShipping ? 0 : STORE_CONFIG.standardShippingFee;
    const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

    cartContainer.innerHTML = `
      <div class="cart-layout-grid">
        <!-- Left: Cart Items -->
        <div class="cart-items-column">
          <div class="cart-header-row">
            <h2>Your Bag (${getCartCount()} items)</h2>
            <button type="button" class="btn-text-danger" onclick="confirmClearCart()">Clear All</button>
          </div>

          <!-- Free Shipping Progress -->
          <div class="shipping-progress-box">
            ${isFreeShipping ? `
              <div class="shipping-unlocked">
                <span>🎉</span> <strong>Congrats! You have unlocked FREE Express Delivery!</strong>
              </div>
            ` : `
              <div class="shipping-locked">
                Add <strong>${formatCurrency(STORE_CONFIG.freeShippingThreshold - subtotal)}</strong> more to get <strong>FREE Express Delivery</strong>!
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${Math.min(100, (subtotal / STORE_CONFIG.freeShippingThreshold) * 100)}%;"></div>
              </div>
            `}
          </div>

          <!-- Items List -->
          <div class="cart-items-list">
            ${cart.map((item, idx) => `
              <div class="cart-item-card">
                <a href="product.html?id=${item.id}" class="cart-item-img-link">
                  <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                </a>
                <div class="cart-item-details">
                  <div class="cart-item-top">
                    <h3 class="cart-item-title">
                      <a href="product.html?id=${item.id}">${item.name}</a>
                    </h3>
                    <button type="button" class="btn-remove-item" onclick="removeCartItem(${idx}); renderCartPage();" title="Remove item">&times;</button>
                  </div>
                  <div class="cart-item-size-badge">Size: <strong>${item.size}</strong></div>
                  
                  <div class="cart-item-bottom">
                    <div class="cart-qty-control">
                      <button type="button" class="btn-qty" onclick="updateCartItemQuantity(${idx}, -1); renderCartPage();">-</button>
                      <span class="cart-qty-num">${item.quantity}</span>
                      <button type="button" class="btn-qty" onclick="updateCartItemQuantity(${idx}, 1); renderCartPage();">+</button>
                    </div>

                    <div class="cart-item-pricing">
                      <span class="cart-item-total">${formatCurrency(item.price * item.quantity)}</span>
                      ${item.originalPrice ? `<span class="cart-item-orig">${formatCurrency(item.originalPrice * item.quantity)}</span>` : ""}
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="cart-continue-shopping">
            <a href="shop.html" class="continue-link">&larr; Continue Shopping</a>
          </div>
        </div>

        <!-- Right: Order Summary & Checkout Form -->
        <div class="cart-summary-column">
          <div class="summary-card">
            <h3>Order Summary</h3>
            
            <!-- Coupon Box -->
            <div class="coupon-box">
              <label for="coupon-input">Have a Promo Code?</label>
              <div class="coupon-input-group">
                <input type="text" id="coupon-input" placeholder="e.g. ${STORE_CONFIG.couponCode}" value="${isCouponApplied ? STORE_CONFIG.couponCode : ''}" ${isCouponApplied ? 'readonly' : ''}>
                ${isCouponApplied ? `
                  <button type="button" class="btn btn-secondary btn-sm" onclick="removeCoupon()">Remove</button>
                ` : `
                  <button type="button" class="btn btn-primary btn-sm" onclick="applyCoupon()">Apply</button>
                `}
              </div>
              <small class="coupon-hint">Use code <strong>${STORE_CONFIG.couponCode}</strong> for ₹100 off launch discount!</small>
            </div>

            <!-- Price Breakdown -->
            <div class="summary-breakdown">
              <div class="summary-line">
                <span>Subtotal</span>
                <span>${formatCurrency(subtotal)}</span>
              </div>
              ${isCouponApplied ? `
                <div class="summary-line discount-line">
                  <span>Launch Discount (${STORE_CONFIG.couponCode})</span>
                  <span>-₹${STORE_CONFIG.couponDiscount}</span>
                </div>
              ` : ""}
              <div class="summary-line">
                <span>Shipping</span>
                <span>${isFreeShipping ? '<strong class="text-success">FREE</strong>' : formatCurrency(shippingFee)}</span>
              </div>
              <hr class="summary-divider">
              <div class="summary-line total-line">
                <span>Total Amount</span>
                <span>${formatCurrency(finalTotal)}</span>
              </div>
            </div>

            <!-- Checkout Form: Customer Info -->
            <div class="checkout-form-section">
              <h4>Shipping Details</h4>
              <p class="form-subtext">Enter your details to generate your verified WhatsApp order &amp; UPI confirmation:</p>
              
              <form id="checkout-form" onsubmit="handleCheckoutSubmit(event)">
                <div class="form-group">
                  <label for="cust-name">Full Name *</label>
                  <input type="text" id="cust-name" required placeholder="e.g. Rahul Sharma">
                </div>

                <div class="form-group">
                  <label for="cust-phone">WhatsApp Number *</label>
                  <input type="tel" id="cust-phone" required pattern="[0-9]{10}" placeholder="10-digit mobile (e.g. 9876543210)">
                </div>

                <div class="form-group">
                  <label for="cust-address">Delivery Address (House/Flat, Street, Area) *</label>
                  <textarea id="cust-address" required rows="2" placeholder="Full house address for courier delivery"></textarea>
                </div>

                <div class="form-row">
                  <div class="form-group col">
                    <label for="cust-city">City *</label>
                    <input type="text" id="cust-city" required placeholder="e.g. Bengaluru">
                  </div>
                  <div class="form-group col">
                    <label for="cust-pincode">Pincode *</label>
                    <input type="text" id="cust-pincode" required pattern="[0-9]{6}" placeholder="6-digit pincode">
                  </div>
                </div>

                <!-- UPI Payment QR Section -->
                <div class="upi-payment-box">
                  <div class="upi-header">
                    <span class="upi-badge">BHIM UPI / GPAY / PHONEPE</span>
                    <h4>Direct UPI Payment</h4>
                  </div>
                  <p class="upi-note">You can pay directly via any UPI app to our registered merchant ID:</p>
                  
                  <div class="upi-id-copy-row">
                    <span class="upi-id-text" id="upi-id-val">${STORE_CONFIG.upiId}</span>
                    <button type="button" class="btn btn-outline btn-xs" onclick="copyUPIId()">Copy UPI ID</button>
                  </div>

                  <div class="upi-qr-preview">
                    <img src="images/qr-code.svg" alt="NecterNest UPI QR Code" class="upi-qr-img">
                    <small>Scan this QR code with GPay, PhonePe, Paytm, or CRED</small>
                  </div>
                </div>

                <!-- Submit WhatsApp Order Button -->
                <button type="submit" class="btn btn-whatsapp-order w-100 btn-lg mt-3" id="submit-order-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
                  Place Order on WhatsApp (${formatCurrency(finalTotal)})
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.renderCartPage = renderCart;
  renderCart();
}

window.applyCoupon = function () {
  const input = document.getElementById("coupon-input");
  if (!input) return;
  const val = input.value.trim().toUpperCase();

  if (val === STORE_CONFIG.couponCode) {
    localStorage.setItem(COUPON_STORAGE_KEY, "true");
    showToast(`Coupon applied! You saved ₹${STORE_CONFIG.couponDiscount}`, "success");
    if (typeof window.renderCartPage === "function") window.renderCartPage();
  } else {
    showToast(`Invalid coupon! Try '${STORE_CONFIG.couponCode}'`, "error");
  }
};

window.removeCoupon = function () {
  localStorage.removeItem(COUPON_STORAGE_KEY);
  showToast("Coupon removed", "info");
  if (typeof window.renderCartPage === "function") window.renderCartPage();
};

window.confirmClearCart = function () {
  if (confirm("Are you sure you want to empty your shopping bag?")) {
    clearCart();
    if (typeof window.renderCartPage === "function") window.renderCartPage();
    showToast("Shopping bag emptied", "info");
  }
};

window.copyUPIId = function () {
  navigator.clipboard.writeText(STORE_CONFIG.upiId).then(() => {
    showToast(`Copied UPI ID: ${STORE_CONFIG.upiId}`, "success");
  }).catch(() => {
    showToast(`UPI ID: ${STORE_CONFIG.upiId}`, "info");
  });
};

window.handleCheckoutSubmit = function (event) {
  event.preventDefault();

  const cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const address = document.getElementById("cust-address").value.trim();
  const city = document.getElementById("cust-city").value.trim();
  const pincode = document.getElementById("cust-pincode").value.trim();

  const subtotal = getCartSubtotal();
  const isCouponApplied = localStorage.getItem(COUPON_STORAGE_KEY) === "true";
  const discountAmount = isCouponApplied ? STORE_CONFIG.couponDiscount : 0;
  const isFreeShipping = subtotal >= STORE_CONFIG.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_CONFIG.standardShippingFee;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  // Build items formatted list
  const itemsText = cart.map((item, i) =>
    `${i + 1}. *${item.name}* (Size: ${item.size}) x ${item.quantity} = ${formatCurrency(item.price * item.quantity)}`
  ).join("\n");

  const message = `🛍️ *NEW ORDER - NECTERNEST*
---------------------------------------
👤 *Customer:* ${name}
📞 *Phone:* ${phone}
📍 *Address:* ${address}, ${city} - ${pincode}

📦 *ITEMS ORDERED:*
${itemsText}

---------------------------------------
💰 *Subtotal:* ${formatCurrency(subtotal)}
${isCouponApplied ? `🎁 *Coupon (${STORE_CONFIG.couponCode}):* -₹${STORE_CONFIG.couponDiscount}\n` : ""}🚚 *Shipping:* ${isFreeShipping ? "FREE" : formatCurrency(shippingFee)}
💵 *TOTAL AMOUNT:* ${formatCurrency(finalTotal)}
---------------------------------------
📲 *Payment Option:* UPI (${STORE_CONFIG.upiId})
Please confirm my order and dispatch timeline! Thank you!`;

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Show friendly confirmation toast
  showToast("Opening WhatsApp with your order details...", "success");
};

// ==========================================
// 11. GLOBAL INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Setup global mobile menu
  setupMobileMenu();

  // Setup size modal
  setupSizeModal();

  // Update cart badge
  updateCartBadge();

  // Floating WhatsApp button setup
  setupFloatingWhatsApp();
});

function setupFloatingWhatsApp() {
  if (document.querySelector(".whatsapp-float")) return;

  const floatBtn = document.createElement("a");
  floatBtn.className = "whatsapp-float";
  floatBtn.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi NecterNest team! I have a question about your cloud comfort clogs.")}`;
  floatBtn.target = "_blank";
  floatBtn.rel = "noopener noreferrer";
  floatBtn.setAttribute("aria-label", "Chat with us on WhatsApp");
  floatBtn.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
    </svg>
    <span class="float-tooltip">Chat with us!</span>
  `;

  document.body.appendChild(floatBtn);
}
