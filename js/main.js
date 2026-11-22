/**
 * NecterNest - Main JavaScript File
 * Theme: Modern Streetwear with Dark & White Mode Toggle
 * Handles:
 * 1. Dark & White Mode state with localStorage persistence
 * 2. Cart management with localStorage persistence
 * 3. Mobile hamburger menu toggle
 * 4. Dynamic Product Details Page (product.html?id=...)
 * 5. Shop filters, sorting, and search (shop.html)
 * 6. Cart calculations, coupons, and WhatsApp Checkout (cart.html)
 * 7. Interactive Size Chart Modal
 * 8. Toast notification popups
 */

// ==========================================
// 0. THEME MANAGEMENT (DARK & WHITE MODE)
// ==========================================
const THEME_STORAGE_KEY = "necternest_theme_mode";

function getStoredTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  updateThemeToggleButtons(theme);
}

function toggleTheme() {
  const current = getStoredTheme();
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  showToast(`Switched to ${next === "dark" ? "🌙 Dark" : "☀️ White"} Mode`, "info");
}

function updateThemeToggleButtons(theme) {
  const btns = document.querySelectorAll(".theme-toggle-btn");
  btns.forEach(btn => {
    if (theme === "light") {
      btn.setAttribute("title", "Switch to Dark Mode");
      btn.classList.add("is-light");
    } else {
      btn.setAttribute("title", "Switch to White Mode");
      btn.classList.remove("is-light");
    }
  });
}

// Immediate application to prevent theme flash
(function() {
  const theme = getStoredTheme();
  document.documentElement.setAttribute("data-theme", theme);
})();

// ==========================================
// STORE CONFIGURATION
// ==========================================
const STORE_CONFIG = {
  brandName: "NecterNest",
  whatsappNumber: "919876543210", 
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

  if (typeof isProductInStock === "function" && !isProductInStock(product)) {
    showToast("Sorry, this drop is currently Out of Stock!", "error");
    return false;
  }

  const selectedSize = size || (product.sizes && product.sizes.length ? `${product.sizes[0]}` : "8");

  let cart = getCart();
  const existingItemIndex = cart.findIndex(
    item => item.id === product.id && String(item.size) === String(selectedSize)
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
      size: String(selectedSize),
      quantity: quantity
    });
  }

  saveCart(cart);

  if (showNotification) {
    showToast(`Added to Bag: ${product.name} (Size: ${selectedSize})`, "success");
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

  setTimeout(() => toast.classList.add("visible"), 10);

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
      document.body.style.overflow = "hidden";
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
            <h3 id="sizeModalTitle">NecterNest Sizing Guide</h3>
          </div>
          <button type="button" class="modal-close-btn" aria-label="Close size guide">&times;</button>
        </div>
        <div class="modal-body">
          <p class="size-guide-tip">
            <strong>Pro Fit Tip:</strong> NecterNest footwear fits true to standard Indian shoe sizes (5 to 10). If you wear a half size (e.g. 7.5), size up to 8 for relaxed, comfortable room.
          </p>
          <div class="table-responsive">
            <table class="size-table">
              <thead>
                <tr>
                  <th>Size (India)</th>
                  <th>Foot Length (cm)</th>
                  <th>US Size</th>
                  <th>EU Size</th>
                  <th>Best Fit For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color: var(--primary);">5</strong></td>
                  <td>23.5 cm</td>
                  <td>US 6 Men / 7 Women</td>
                  <td>EU 38</td>
                  <td>Slim / Small feet</td>
                </tr>
                <tr>
                  <td><strong style="color: var(--primary);">6</strong></td>
                  <td>24.5 cm</td>
                  <td>US 7 Men / 8 Women</td>
                  <td>EU 39-40</td>
                  <td>Standard Women / Small Men</td>
                </tr>
                <tr>
                  <td><strong style="color: var(--primary);">7</strong></td>
                  <td>25.5 cm</td>
                  <td>US 8 Men / 9 Women</td>
                  <td>EU 41</td>
                  <td>Most Common Unisex</td>
                </tr>
                <tr>
                  <td><strong style="color: var(--primary);">8</strong></td>
                  <td>26.5 cm</td>
                  <td>US 9 Men / 10 Women</td>
                  <td>EU 42</td>
                  <td>Standard Men Fit</td>
                </tr>
                <tr>
                  <td><strong style="color: var(--primary);">9</strong></td>
                  <td>27.5 cm</td>
                  <td>US 10 Men / 11 Women</td>
                  <td>EU 43</td>
                  <td>Medium-Large Men</td>
                </tr>
                <tr>
                  <td><strong style="color: var(--primary);">10</strong></td>
                  <td>28.5 cm</td>
                  <td>US 11 Men</td>
                  <td>EU 44-45</td>
                  <td>Large Men Fit</td>
                </tr>
                <tr>
                  <td><strong style="color: var(--primary);">11</strong></td>
                  <td>29.5 cm</td>
                  <td>US 12 Men</td>
                  <td>EU 46</td>
                  <td>Roomy Streetwear Fit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="size-measure-tips">
            <h4>Quick at-home foot measurement:</h4>
            <ol>
              <li>Place a sheet of plain paper against a wall on a flat floor.</li>
              <li>Stand with your heel firmly touching the wall.</li>
              <li>Mark the tip of your longest toe with a pen.</li>
              <li>Measure the length from the wall edge to your line in centimeters (cm).</li>
            </ol>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary modal-close-action">Got It, Let's Shop!</button>
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
// 6. PRODUCT CARD BUILDER
// ==========================================
function createProductCardHTML(product) {
  const inStock = typeof isProductInStock === "function" ? isProductInStock(product) : true;
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const defaultSize = (product.sizes && product.sizes.length ? product.sizes[0] : 8);

  // Stock Badge determination
  let badgeLabel = product.badge;
  let badgeClass = product.badgeType || "available";
  if (!inStock) {
    badgeLabel = "OUT OF STOCK";
    badgeClass = "soldout";
  }

  return `
    <article class="product-card ${!inStock ? 'out-of-stock' : ''}" data-category="${product.category}" data-id="${product.id}">
      <div class="product-card-media">
        <a href="product.html?id=${product.id}" class="product-card-link" aria-label="View ${product.name}">
          <img id="card-img-${product.id}" src="${product.image}" alt="${product.name}" loading="lazy" class="product-card-img">
        </a>
        ${badgeLabel ? `<span class="badge badge-${badgeClass}">${badgeLabel}</span>` : ""}
        <span class="discount-pill">-${discountPercent}%</span>
      </div>

      <div class="product-card-info">
        <div class="product-card-meta-row">
          <span class="product-card-category">${product.category} DROP</span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">Sizes: ${product.sizes.join(", ")}</span>
        </div>

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
          <span class="savings-tag">SAVE ${formatCurrency(product.originalPrice - product.price)}</span>
        </div>

        <div class="product-card-actions">
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">Select Size</a>
          ${inStock ? `
            <button type="button" class="btn btn-primary btn-sm quick-add-btn" onclick="addToCart(${product.id}, '${defaultSize}', 1, true)" title="Quick Add Size ${defaultSize} to Bag">
              + Quick Cop
            </button>
          ` : `
            <button type="button" class="btn btn-secondary btn-sm quick-add-btn disabled" disabled title="Out of Stock">
              Sold Out
            </button>
          `}
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

  // Check URL parameters (e.g. ?cat=Men or ?cat=Flip-Flops)
  const urlParam = new URLSearchParams(window.location.search).get("cat");
  if (urlParam) {
    currentCategory = urlParam;
    categoryFilters.forEach(c => {
      if ((c.dataset.category || "").toLowerCase() === urlParam.toLowerCase()) {
        categoryFilters.forEach(x => x.classList.remove("active"));
        c.classList.add("active");
      }
    });
  }

  function filterAndRender() {
    let filtered = PRODUCTS.filter(product => {
      let matchCategory = true;
      if (currentCategory !== "All") {
        const cat = (product.category || "").toLowerCase();
        const gen = (product.gender || "").toLowerCase();
        const target = currentCategory.toLowerCase();
        if (target === "men") {
          matchCategory = gen === "men" || gen === "unisex";
        } else if (target === "women") {
          matchCategory = gen === "women" || gen === "unisex";
        } else {
          matchCategory = cat === target;
        }
      }

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

    if (currentSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      shopGrid.innerHTML = `
        <div class="empty-results-box">
          <div class="empty-icon">🔍</div>
          <h3>No styles found matching your search</h3>
          <p>Try searching for Clogs, Flip-Flops, Slides, or colors like White, Black, Navy, or Red.</p>
          <button class="btn btn-secondary mt-3" onclick="resetShopFilters()">Show All ${PRODUCTS.length} Drops</button>
        </div>
      `;
    } else {
      shopGrid.innerHTML = filtered.map(createProductCardHTML).join("");
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Styles`;
    }
  }

  categoryFilters.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryFilters.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.category || "All";
      filterAndRender();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  window.resetShopFilters = function() {
    currentCategory = "All";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    categoryFilters.forEach(c => {
      if (c.dataset.category === "All") c.classList.add("active");
      else c.classList.remove("active");
    });
    filterAndRender();
  };

  filterAndRender();
}

// ==========================================
// 9. DYNAMIC PRODUCT PAGE (product.html)
// ==========================================
function initProductPage() {
  const container = document.getElementById("product-detail-container");
  if (!container || typeof PRODUCTS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || 1;
  const product = getProductById(productId) || PRODUCTS[0];

  let selectedSize = `${product.sizes[0] || 8}`;
  let selectedQty = 1;
  const inStock = typeof isProductInStock === "function" ? isProductInStock(product) : true;
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  document.title = `${product.name} - ₹${product.price} | NecterNest Street Footwear`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", `Buy ${product.name} at ₹${product.price}. 100% waterproof cloud-cushioned EVA foam footwear. ₹100 off first order, free packing video & free delivery over ₹999.`);
  }

  // Stock Badge determination
  let badgeLabel = product.badge;
  let badgeClass = product.badgeType || "available";
  if (!inStock) {
    badgeLabel = "OUT OF STOCK";
    badgeClass = "soldout";
  }

  const galleryList = (product.gallery && product.gallery.length) ? product.gallery : [product.image];

  container.innerHTML = `
    <div class="breadcrumb-nav">
      <a href="index.html">Home</a> &rsaquo; 
      <a href="shop.html">Shop Drops</a> &rsaquo; 
      <a href="shop.html?cat=${product.category}">${product.category}</a> &rsaquo; 
      <span>${product.name}</span>
    </div>

    <div class="product-detail-grid">
      <!-- Media Gallery -->
      <div class="pdp-media-col">
        <div class="pdp-main-image-wrapper">
          <img id="pdp-main-image" src="${product.image}" alt="${product.name} comfortable footwear" class="pdp-main-img">
          ${badgeLabel ? `<span class="badge badge-${badgeClass} pdp-badge">${badgeLabel}</span>` : ""}
          <span class="pdp-discount-pill">-${discountPercent}% OFF</span>
        </div>
        <div class="pdp-thumbnails">
          ${galleryList.map((imgSrc, idx) => `
            <button type="button" class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="updateMainImage('${imgSrc}', this)">
              <img src="${imgSrc}" alt="${product.name} view ${idx + 1}">
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Product Information -->
      <div class="pdp-info-col">
        <div class="pdp-category-pill">${product.category} Street Drop</div>
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
            <span class="pdp-save-badge">Save ${formatCurrency(product.originalPrice - product.price)} (${discountPercent}%)</span>
          </div>
          <p class="tax-shipping-note">Inclusive of all taxes. <strong>FREE Express Delivery</strong> on orders over ₹${STORE_CONFIG.freeShippingThreshold}.</p>
        </div>

        <!-- Launch Offer Hook -->
        <div class="pdp-offer-alert">
          <span class="offer-icon">🎁</span>
          <div class="offer-text">
            <strong>100 RUPEES OFF ON FIRST ORDER:</strong> Use code <span class="badge-code">${STORE_CONFIG.couponCode}</span> at checkout!
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">📹 Live packing video sent to your WhatsApp before dispatch • 🚚 Free delivery over ₹999</div>
          </div>
        </div>

        <!-- Colorway Preview -->
        <div class="pdp-colorway-section" style="margin-bottom: 1.5rem;">
          <label style="display: block; font-family: 'Outfit', sans-serif; font-size: 0.95rem; font-weight: 800; margin-bottom: 0.5rem;">
            Colorway: <strong style="color: var(--primary);">${product.colorName}</strong>
          </label>
          <div style="display: flex; gap: 0.65rem; align-items: center;">
            <span style="width: 26px; height: 26px; border-radius: 50%; background-color: ${product.colorHex}; border: 2px solid var(--text-main); box-shadow: 0 0 10px ${product.colorHex};"></span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Explore all styles in <a href="shop.html" style="color: var(--neon-cyan); text-decoration: underline;">Shop Drops</a></span>
          </div>
        </div>

        <!-- Size Selector -->
        <div class="pdp-size-section">
          <div class="size-header">
            <label class="size-label">Select Your Size:</label>
            <button type="button" class="size-guide-trigger" onclick="openSizeModal()">
              📏 Size Guide
            </button>
          </div>
          <div class="size-pills-group" id="size-options">
            ${product.sizes.map((s, idx) => `
              <button type="button" class="size-pill ${idx === 0 ? 'active' : ''}" data-size="${s}">
                ${s}
              </button>
            `).join("")}
          </div>
          <div class="selected-size-feedback">Selected: <strong id="selected-size-text" style="color: var(--primary);">${selectedSize}</strong></div>
        </div>

        <!-- Quantity & Action Buttons -->
        <div class="pdp-actions-row">
          <div class="quantity-stepper">
            <button type="button" class="qty-btn" id="qty-minus" aria-label="Decrease quantity">-</button>
            <span id="qty-display" class="qty-display">1</span>
            <button type="button" class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
          </div>

          ${inStock ? `
            <button type="button" class="btn btn-outline pdp-add-cart-btn" id="pdp-add-cart">
              🛒 Add to Bag
            </button>
          ` : `
            <button type="button" class="btn btn-outline pdp-add-cart-btn disabled" disabled>
              ❌ Out of Stock
            </button>
          `}
        </div>

        <!-- Instant Buy Now via WhatsApp -->
        ${inStock ? `
          <button type="button" class="btn btn-whatsapp-order w-100" id="pdp-buy-whatsapp">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
            Instant Order via WhatsApp (${formatCurrency(product.price)})
          </button>
        ` : `
          <button type="button" class="btn btn-whatsapp-order w-100 disabled" disabled style="opacity: 0.6; cursor: not-allowed;">
            ❌ Currently Out of Stock
          </button>
        `}

        <!-- Highlights & Badges -->
        <div class="pdp-badges-grid">
          <div class="feature-badge-item">
            <span class="icon">📹</span>
            <div class="text">
              <strong>Packing Video</strong>
              <small>WhatsApp dispatch clip</small>
            </div>
          </div>
          <div class="feature-badge-item">
            <span class="icon">🚚</span>
            <div class="text">
              <strong>Free Delivery</strong>
              <small>On orders over ₹999</small>
            </div>
          </div>
          <div class="feature-badge-item">
            <span class="icon">⚡</span>
            <div class="text">
              <strong>₹100 Off</strong>
              <small>Code: FIRSTNEST</small>
            </div>
          </div>
          <div class="feature-badge-item">
            <span class="icon">🛡️</span>
            <div class="text">
              <strong>7-Day Swap</strong>
              <small>Hassle-free exchange</small>
            </div>
          </div>
        </div>

        <!-- Description Accordion / Tabs -->
        <div class="pdp-tabs-accordion">
          <div class="accordion-card">
            <button type="button" class="accordion-head active" onclick="toggleAccordion(this)">
              <span>Product Specs &amp; Comfort Engineering</span>
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
              <span>Indian Delivery &amp; Express Tracking</span>
              <span class="chevron">▼</span>
            </button>
            <div class="accordion-body">
              <p>Dispatched via Bluedart, Delhivery, or Xpressbees with real-time SMS &amp; WhatsApp tracking updates.</p>
              <ul>
                <li><strong>Packing Video:</strong> A live video of your package being packed will be sent to your WhatsApp before dispatch!</li>
                <li><strong>Metro Cities (Mumbai, Bengaluru, Delhi, Kolkata, etc.):</strong> 2 to 4 business days</li>
                <li><strong>Rest of India:</strong> 4 to 6 business days</li>
              </ul>
            </div>
          </div>

          <div class="accordion-card">
            <button type="button" class="accordion-head" onclick="toggleAccordion(this)">
              <span>Cleaning &amp; Footwear Care</span>
              <span class="chevron">▼</span>
            </button>
            <div class="accordion-body">
              <p>Wash under running tap water with mild hand soap using a soft sponge. Wipe dry or air-dry in shade. <em>Note: Do not leave baking in extreme hot midday car trunks or radiators to avoid thermal shrinkage.</em></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="related-products-section mt-5">
      <div class="section-header">
        <h2 class="section-title">YOU MIGHT ALSO COP</h2>
        <a href="shop.html" class="view-all-link">Browse Full Archive &rarr;</a>
      </div>
      <div class="products-grid">
        ${PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(createProductCardHTML).join("")}
      </div>
    </div>
  `;

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

  const addCartBtn = document.getElementById("pdp-add-cart");
  if (addCartBtn && inStock) {
    addCartBtn.addEventListener("click", () => {
      addToCart(product.id, selectedSize, selectedQty, true);
    });
  }

  const buyWhatsAppBtn = document.getElementById("pdp-buy-whatsapp");
  if (buyWhatsAppBtn && inStock) {
    buyWhatsAppBtn.addEventListener("click", () => {
      openQuickOrderModal(product, selectedSize, selectedQty);
    });
  }
}

/**
 * ⚡ INSTANT WHATSAPP CHECKOUT MODAL
 * Collects Customer Details (Name, Phone, Full Address, City, Pincode)
 * before opening WhatsApp so the business owner gets complete order information!
 */
function openQuickOrderModal(product, size, qty) {
  if (!product || (typeof isProductInStock === "function" && !isProductInStock(product))) {
    showToast("Sorry, this item is currently out of stock!", "error");
    return;
  }

  // Retrieve saved customer details from localStorage if available
  let savedCust = {};
  try {
    const raw = localStorage.getItem("necternest_customer_details");
    if (raw) savedCust = JSON.parse(raw);
  } catch (e) {}

  const currentSize = size || (product.sizes && product.sizes.length ? product.sizes[0] : "8");
  const currentQty = qty || 1;
  const totalPrice = product.price * currentQty;
  const isFreeDelivery = totalPrice >= STORE_CONFIG.freeShippingThreshold;

  // Remove existing modal if any
  const existing = document.getElementById("quick-order-modal");
  if (existing) existing.remove();

  const modalBackdrop = document.createElement("div");
  modalBackdrop.className = "modal-backdrop active";
  modalBackdrop.id = "quick-order-modal";
  modalBackdrop.setAttribute("role", "dialog");
  modalBackdrop.setAttribute("aria-modal", "true");

  modalBackdrop.innerHTML = `
    <div class="modal-dialog quick-order-dialog" style="max-width: 520px; width: 92%;">
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-icon">⚡</span>
          <h3 class="modal-title" style="font-size: 1.25rem;">Instant WhatsApp Checkout</h3>
        </div>
        <button type="button" class="modal-close-btn" onclick="closeQuickOrderModal()" aria-label="Close modal">&times;</button>
      </div>

      <div class="modal-body" style="padding: 1.35rem;">
        <!-- Product Quick Summary -->
        <div class="quick-order-product-card" style="display: flex; gap: 0.85rem; align-items: center; background: var(--bg-surface-elevated); padding: 0.85rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 1.15rem;">
          <img src="${product.image}" alt="${product.name}" style="width: 65px; height: 65px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="flex: 1;">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.25rem; color: var(--text-main); font-weight: 800; line-height: 1.2;">${product.name}</h4>
            <div style="font-size: 0.825rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 0.65rem;">
              <span>Size: <strong style="color: var(--neon-cyan);">${currentSize}</strong></span>
              <span>Qty: <strong>${currentQty}</strong></span>
              <span>Total: <strong style="color: var(--cyber-amber); font-size: 0.95rem;">${formatCurrency(totalPrice)}</strong></span>
            </div>
          </div>
        </div>

        <!-- Trust Callout -->
        <div style="background: rgba(0, 240, 255, 0.08); border-left: 3px solid var(--neon-cyan); padding: 0.65rem 0.85rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 0.825rem; margin-bottom: 1.15rem; color: var(--text-main);">
          ⚡ <strong>₹100 OFF on first order</strong> with code <span class="badge-code">FIRSTNEST</span> • 📹 <strong>Live packing video</strong> sent before dispatch • 🚚 ${isFreeDelivery ? '<strong>FREE Express Delivery</strong>' : 'Free delivery over ₹999'}
        </div>

        <!-- Customer Delivery Form -->
        <form id="quick-order-form">
          <div class="form-group" style="margin-bottom: 0.85rem;">
            <label for="quick-cust-name" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">Full Name *</label>
            <input type="text" id="quick-cust-name" class="form-control" required placeholder="e.g. Rahul Sharma" value="${savedCust.name || ''}" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); font-family: inherit;">
          </div>

          <div class="form-group" style="margin-bottom: 0.85rem;">
            <label for="quick-cust-phone" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">WhatsApp Mobile Number *</label>
            <input type="tel" id="quick-cust-phone" class="form-control" required pattern="[0-9]{10}" placeholder="10-digit number (e.g. 9876543210)" value="${savedCust.phone || ''}" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); font-family: inherit;">
          </div>

          <div class="form-group" style="margin-bottom: 0.85rem;">
            <label for="quick-cust-address" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">Delivery Address (House/Flat, Street, Area) *</label>
            <input type="text" id="quick-cust-address" class="form-control" required placeholder="Flat/House No, Street, Landmark" value="${savedCust.address || ''}" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); font-family: inherit;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.25rem;">
            <div class="form-group">
              <label for="quick-cust-city" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">City *</label>
              <input type="text" id="quick-cust-city" class="form-control" required placeholder="City" value="${savedCust.city || ''}" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); font-family: inherit;">
            </div>
            <div class="form-group">
              <label for="quick-cust-pincode" style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">Pincode *</label>
              <input type="text" id="quick-cust-pincode" class="form-control" required pattern="[0-9]{6}" placeholder="6 digits" value="${savedCust.pincode || ''}" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); font-family: inherit;">
            </div>
          </div>

          <button type="submit" class="btn btn-whatsapp-order w-100 btn-lg" style="min-height: 48px; font-size: 1rem; font-weight: 800;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
            Send Order to WhatsApp (${formatCurrency(totalPrice)})
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);

  // Close on backdrop click
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeQuickOrderModal();
    }
  });

  // Form submit handler
  const form = document.getElementById("quick-order-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("quick-cust-name").value.trim();
    const phone = document.getElementById("quick-cust-phone").value.trim();
    const address = document.getElementById("quick-cust-address").value.trim();
    const city = document.getElementById("quick-cust-city").value.trim();
    const pincode = document.getElementById("quick-cust-pincode").value.trim();

    if (!name || !phone || !address || !city || !pincode) {
      showToast("Please fill in all delivery details!", "error");
      return;
    }

    if (phone.length < 10) {
      showToast("Please enter a valid 10-digit WhatsApp number!", "error");
      return;
    }

    // Save details for next time
    localStorage.setItem("necternest_customer_details", JSON.stringify({ name, phone, address, city, pincode }));

    // Prepare WhatsApp Message
    const orderMessage = `🛍️ *NEW INSTANT ORDER — NECTERNEST*
---------------------------------------
👤 *Customer:* ${name}
📞 *WhatsApp:* ${phone}
📍 *Address:* ${address}
🏙️ *City & Pincode:* ${city} - ${pincode}
---------------------------------------
👟 *Product:* ${product.name}
📏 *Size:* ${currentSize}
🔢 *Quantity:* ${currentQty}
💰 *Total Amount:* ${formatCurrency(totalPrice)} (Inclusive of all taxes)
📹 *Packing Video:* Yes, please share packing video before dispatch!
🚚 *Shipping:* ${isFreeDelivery ? "FREE Express Delivery" : "Standard Delivery"}
---------------------------------------
Please confirm dispatch timeline and share UPI payment confirmation! Thanks squad!`;

    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    closeQuickOrderModal();
    window.open(whatsappUrl, "_blank");
    showToast("Opening WhatsApp with your complete order details!", "success");
  });
}

window.closeQuickOrderModal = function() {
  const modal = document.getElementById("quick-order-modal");
  if (modal) modal.remove();
};

window.updateMainImage = function(src, btn) {
  const mainImg = document.getElementById("pdp-main-image");
  if (mainImg) mainImg.src = src;

  document.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
};

window.toggleAccordion = function(headBtn) {
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
          <p>Treat your feet to cloud comfort! Explore our street collection of 12 comfortable clog styles.</p>
          <a href="shop.html" class="btn btn-primary btn-lg mt-3">Explore All Drops</a>
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

    let savedCust = {};
    try {
      const raw = localStorage.getItem("necternest_customer_details");
      if (raw) savedCust = JSON.parse(raw);
    } catch (e) {}

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
                <span>🎉</span> <strong>Congrats! You unlocked FREE Express Delivery!</strong>
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
                  <div class="cart-item-size-badge">Size: <strong style="color: var(--primary);">${item.size}</strong></div>
                  
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
            <a href="shop.html" class="continue-link">&larr; Continue Exploring Drops</a>
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
              <p class="form-subtext">Enter your details for direct WhatsApp order &amp; instant UPI payment:</p>
              
              <form id="checkout-form" onsubmit="handleCheckoutSubmit(event)">
                <div class="form-group">
                  <label for="cust-name">Full Name *</label>
                  <input type="text" id="cust-name" required placeholder="e.g. Rahul Sharma" value="${savedCust.name || ''}">
                </div>

                <div class="form-group">
                  <label for="cust-phone">WhatsApp Number *</label>
                  <input type="tel" id="cust-phone" required pattern="[0-9]{10}" placeholder="10-digit mobile (e.g. 9876543210)" value="${savedCust.phone || ''}">
                </div>

                <div class="form-group">
                  <label for="cust-address">Delivery Address (House/Flat, Street, Area) *</label>
                  <textarea id="cust-address" required rows="2" placeholder="Full house address for courier delivery">${savedCust.address || ''}</textarea>
                </div>

                <div class="form-row">
                  <div class="form-group col">
                    <label for="cust-city">City *</label>
                    <input type="text" id="cust-city" required placeholder="e.g. Bengaluru" value="${savedCust.city || ''}">
                  </div>
                  <div class="form-group col">
                    <label for="cust-pincode">Pincode *</label>
                    <input type="text" id="cust-pincode" required pattern="[0-9]{6}" placeholder="6-digit pincode" value="${savedCust.pincode || ''}">
                  </div>
                </div>

                <!-- UPI Payment QR Section -->
                <div class="upi-payment-box">
                  <div class="upi-header">
                    <span class="upi-badge">⚡ ZERO FEES UPI</span>
                    <h4 style="font-size: 1.15rem; margin-top: 0.25rem;">Direct UPI Payment</h4>
                  </div>
                  <p class="upi-note">Scan via GPay, PhonePe, Paytm, or CRED:</p>
                  
                  <div class="upi-id-copy-row">
                    <span class="upi-id-text" id="upi-id-val">${STORE_CONFIG.upiId}</span>
                    <button type="button" class="btn btn-outline btn-xs" onclick="copyUPIId()">Copy</button>
                  </div>

                  <div class="upi-qr-preview">
                    <img src="images/qr-code.svg" alt="NecterNest UPI QR Code" class="upi-qr-img">
                    <small>Scan and pay with any UPI app</small>
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

window.applyCoupon = function() {
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

window.removeCoupon = function() {
  localStorage.removeItem(COUPON_STORAGE_KEY);
  showToast("Coupon removed", "info");
  if (typeof window.renderCartPage === "function") window.renderCartPage();
};

window.confirmClearCart = function() {
  if (confirm("Are you sure you want to empty your shopping bag?")) {
    clearCart();
    if (typeof window.renderCartPage === "function") window.renderCartPage();
    showToast("Shopping bag emptied", "info");
  }
};

window.copyUPIId = function() {
  navigator.clipboard.writeText(STORE_CONFIG.upiId).then(() => {
    showToast(`Copied UPI ID: ${STORE_CONFIG.upiId}`, "success");
  }).catch(() => {
    showToast(`UPI ID: ${STORE_CONFIG.upiId}`, "info");
  });
};

window.handleCheckoutSubmit = function(event) {
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

  // Save customer details for next orders
  localStorage.setItem("necternest_customer_details", JSON.stringify({ name, phone, address, city, pincode }));

  const subtotal = getCartSubtotal();
  const isCouponApplied = localStorage.getItem(COUPON_STORAGE_KEY) === "true";
  const discountAmount = isCouponApplied ? STORE_CONFIG.couponDiscount : 0;
  const isFreeShipping = subtotal >= STORE_CONFIG.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_CONFIG.standardShippingFee;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const itemsText = cart.map((item, i) => 
    `${i + 1}. *${item.name}* (Size: ${item.size}) x ${item.quantity} = ${formatCurrency(item.price * item.quantity)}`
  ).join("\n");

  const message = `🛍️ *NEW STREET DROP ORDER - NECTERNEST*
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
📹 *Packing Video:* Yes, please share packing video before dispatch!
---------------------------------------
📲 *Payment Option:* UPI (${STORE_CONFIG.upiId})
Please confirm my order and share dispatch timeline! Thanks squad!`;

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
  showToast("Opening WhatsApp with your order details...", "success");
};

// ==========================================
// 11. GLOBAL INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Setup theme toggle buttons
  setupThemeToggles();

  // Setup global mobile menu
  setupMobileMenu();

  // Setup size modal
  setupSizeModal();

  // Update cart badge
  updateCartBadge();

  // Floating WhatsApp button setup
  setupFloatingWhatsApp();
});

function setupThemeToggles() {
  const currentTheme = getStoredTheme();
  updateThemeToggleButtons(currentTheme);

  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });
}

function setupFloatingWhatsApp() {
  if (document.querySelector(".whatsapp-float")) return;

  const floatBtn = document.createElement("a");
  floatBtn.className = "whatsapp-float";
  floatBtn.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi NecterNest squad! I have a question about your drops.")}`;
  floatBtn.target = "_blank";
  floatBtn.rel = "noopener noreferrer";
  floatBtn.setAttribute("aria-label", "Chat with us on WhatsApp");
  floatBtn.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
    </svg>
    <span class="float-tooltip">Chat with Squad</span>
  `;

  document.body.appendChild(floatBtn);
}
