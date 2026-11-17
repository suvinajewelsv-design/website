/**
 * SUVINA JEWELS
 * Core Application Engine & E-Commerce Logic
 */

// --- APPLICATION STATE ---
const AppState = {
  cart: [],
  wishlist: [],
  activeCategory: "all",
  searchQuery: "",
  sortBy: "code-asc",
  appliedCoupon: null,
  activeProductModal: null,
  activeModalAngle: "full",
  modalQuantity: 1,
  // Default WhatsApp Business Number
  whatsappNumber: localStorage.getItem("suvina_whatsapp_number") || "918072322276"
};

// Available Promo Codes
const VALID_COUPONS = {
  "FIRST100": { type: "flat", value: 100, label: "₹100 OFF First Order", minOrder: 999 },
  "FESTIVE15": { type: "percent", value: 15, label: "15% OFF Festive Special", minOrder: 1999 },
  "GOLD10": { type: "percent", value: 10, label: "10% OFF Gold Jewels", minOrder: 1499 }
};

// Circular Category Navigation Data (All images verified with ai 02)
const CATEGORY_ITEMS = [
  { id: "all", name: "All Jewels", image: "image/with ai 02/01_Floral_Rosette_01_Full_Set.jpg" },
  { id: "necklace-sets", name: "Chokers & Sets", image: "image/with ai 02/05_Rectangle_Stone_Link_01_Full_Set.jpg" },
  { id: "emerald-collection", name: "Emerald Luxe", image: "image/with ai 02/08_Emerald_Floral_Drop_01_Full_Set.jpg" },
  { id: "ruby-kemp", name: "Ruby & Kemp", image: "image/with ai 02/07_Ruby_Floral_Drop_01_Full_Set.jpg" },
  { id: "ad-stones", name: "AD & CZ Stones", image: "image/with ai 02/10_Double_Row_Round_Stones_01_Full_Set.jpg" },
  { id: "daily-wear", name: "Daily Wear", image: "image/with ai 02/16_Open_Teardrop_Pendant_01_Full_Set.jpg" },
  { id: "bridal-combos", name: "Bridal Combos", image: "image/with ai 02/04_Emerald_Loop_Fan_01_Full_Set.jpg" },
  { id: "temple-jewels", name: "Temple Jewels", image: "image/with ai 02/06_Paisley_Leaf_Pendant_01_Necklace_Overview.jpg" }
];

// Verified Customer Reviews
const CUSTOMER_REVIEWS = [
  {
    name: "Pooja Sundaram",
    location: "Chennai, Tamil Nadu",
    product: "SVJ102",
    rating: 5,
    date: "2 days ago",
    verified: true,
    comment: "The antique gold finish and ruby stones look remarkably royal! Received in 2 days in secure luxury packing."
  },
  {
    name: "Ananya Iyer",
    location: "Bangalore, Karnataka",
    product: "SVJ112",
    rating: 5,
    date: "1 week ago",
    verified: true,
    comment: "Stunning double-row CZ stones and perfect shine under lighting. Best jewelry purchase on WhatsApp!"
  },
  {
    name: "Deepika Rao",
    location: "Hyderabad, Telangana",
    product: "SVJ105",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    comment: "Necklace and matching earrings are lightweight yet feel very premium. Highly recommend Suvina Jewels!"
  },
  {
    name: "Kavitha Ramanathan",
    location: "Coimbatore, Tamil Nadu",
    product: "SVJ110",
    rating: 5,
    date: "3 days ago",
    verified: true,
    comment: "The floral rosette medallion and matte micro-gold finish look just like real 22K gold! Safe packaging and fast delivery."
  }
];

// --- HELPER: DYNAMIC PRODUCT DISPLAY NAME ---
// When product.name is empty (as currently requested), displays the product code (e.g. "SVJ101").
// When jewels names are provided later, it will automatically display the jewel name!
function getProductDisplayName(product) {
  if (!product) return "";
  if (product.name && product.name.trim() !== "" && product.name.trim() !== product.code.trim()) {
    return product.name.trim();
  }
  return product.code;
}

// Dynamic Category Counts
function getCategoryCount(catId) {
  if (catId === "all") {
    return `${JEWELRY_PRODUCTS.length} designs`;
  }
  const count = JEWELRY_PRODUCTS.filter(p => 
    (p.categories && p.categories.includes(catId)) || p.category === catId
  ).length;
  return `${count} designs`;
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  initHeroShowcase();
  renderCategoryCircles();
  renderCatalogTabs();
  renderProducts();
  renderCustomerReviews();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

// --- LOCAL STORAGE PERSISTENCE ---
function loadStoredData() {
  try {
    const savedCart = localStorage.getItem("suvina_jewelry_cart");
    if (savedCart) AppState.cart = JSON.parse(savedCart);
    
    const savedWishlist = localStorage.getItem("suvina_jewelry_wishlist");
    if (savedWishlist) AppState.wishlist = JSON.parse(savedWishlist);

    const savedCoupon = localStorage.getItem("suvina_jewelry_coupon");
    if (savedCoupon && VALID_COUPONS[savedCoupon]) {
      AppState.appliedCoupon = { code: savedCoupon, ...VALID_COUPONS[savedCoupon] };
    }
  } catch (err) {
    console.error("Error reading stored data", err);
  }
}

function saveCart() {
  localStorage.setItem("suvina_jewelry_cart", JSON.stringify(AppState.cart));
}

function saveWishlist() {
  localStorage.setItem("suvina_jewelry_wishlist", JSON.stringify(AppState.wishlist));
}

// --- HERO SHOWCASE DYNAMIC BINDING ---
function initHeroShowcase() {
  // Select featured showcase product (e.g., SVJ101 or first featured)
  const featured = JEWELRY_PRODUCTS.find(p => p.id === "svj101" || p.id === "svj-101") || JEWELRY_PRODUCTS[0];
  if (!featured) return;

  const displayName = getProductDisplayName(featured);
  const titleEl = document.getElementById("heroShowcaseTitle");
  const priceEl = document.getElementById("heroShowcasePrice");
  const origPriceEl = document.getElementById("heroShowcaseOriginalPrice");
  const discountEl = document.getElementById("heroShowcaseDiscount");
  const imgEl = document.getElementById("heroShowcaseImg");
  const viewBtn = document.getElementById("heroShowcaseViewBtn");
  const waBtn = document.getElementById("heroShowcaseWaBtn");
  const exploreBtnText = document.getElementById("heroExploreBtnText");

  if (titleEl) titleEl.textContent = displayName;
  if (priceEl) priceEl.textContent = `₹${featured.price.toLocaleString("en-IN")}`;
  if (origPriceEl) origPriceEl.textContent = `₹${featured.originalPrice.toLocaleString("en-IN")}`;
  if (discountEl) discountEl.textContent = `(${featured.discountPercent}% OFF)`;
  if (imgEl) {
    imgEl.src = featured.images.full;
    imgEl.alt = displayName;
  }
  if (viewBtn) {
    viewBtn.setAttribute("onclick", `openProductModal('${featured.id}')`);
  }
  if (waBtn) {
    waBtn.setAttribute("onclick", `orderProductViaWhatsApp('${featured.id}')`);
  }
  if (exploreBtnText) {
    exploreBtnText.textContent = `Explore All ${JEWELRY_PRODUCTS.length} Designs`;
  }
}

// --- RENDER CATEGORY CIRCLES ---
function renderCategoryCircles() {
  const container = document.getElementById("categoryCirclesContainer");
  if (!container) return;

  container.innerHTML = CATEGORY_ITEMS.map(cat => `
    <div class="category-circle-item ${AppState.activeCategory === cat.id ? 'active' : ''}" 
         onclick="selectCategory('${cat.id}')"
         role="button"
         tabindex="0"
         title="Browse ${cat.name}">
      <div class="category-avatar">
        <div class="category-avatar-inner">
          <img src="${cat.image}" alt="${cat.name}" loading="lazy" />
        </div>
      </div>
      <span class="category-circle-name">${cat.name}</span>
      <span class="category-circle-count">${getCategoryCount(cat.id)}</span>
    </div>
  `).join("");
}

// --- RENDER CATALOG TABS ---
function renderCatalogTabs() {
  const container = document.getElementById("catalogTabsContainer");
  if (!container) return;

  const tabs = [
    { id: "all", name: "All Jewels" },
    { id: "necklace-sets", name: "Chokers & Sets" },
    { id: "emerald-collection", name: "Emerald Luxe" },
    { id: "ruby-kemp", name: "Ruby & Kemp" },
    { id: "ad-stones", name: "AD & CZ Stones" },
    { id: "bridal-combos", name: "Bridal Combos" },
    { id: "temple-jewels", name: "Temple Jewels" },
    { id: "daily-wear", name: "Daily Wear" }
  ];

  container.innerHTML = tabs.map(tab => `
    <button class="catalog-tab ${AppState.activeCategory === tab.id ? 'active' : ''}" 
            onclick="selectCategory('${tab.id}')">
      ${tab.name}
    </button>
  `).join("");
}

// --- CATEGORY SELECTION ---
function selectCategory(categoryId) {
  AppState.activeCategory = categoryId;
  renderCategoryCircles();
  renderCatalogTabs();
  renderProducts();

  // Smooth scroll to catalog section if user clicked from top carousel
  const catalogSection = document.getElementById("catalogSection");
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// --- FILTER & SORT PRODUCTS ---
function getFilteredProducts() {
  let list = [...JEWELRY_PRODUCTS];

  // Category filter
  if (AppState.activeCategory && AppState.activeCategory !== "all") {
    list = list.filter(p => (p.categories && p.categories.includes(AppState.activeCategory)) || p.category === AppState.activeCategory);
  }

  // Search filter (by product code, description, or future jewel name)
  if (AppState.searchQuery.trim()) {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      (p.code && p.code.toLowerCase().includes(q)) ||
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // Sorting (Default to strict numerical code sequence: SVJ101 -> SVJ121)
  switch (AppState.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "discount":
      list.sort((a, b) => b.discountPercent - a.discountPercent);
      break;
    case "code-asc":
    case "featured":
    default:
      list.sort((a, b) => {
        const numA = parseInt(a.code.replace(/\D/g, ""), 10) || 0;
        const numB = parseInt(b.code.replace(/\D/g, ""), 10) || 0;
        return numA - numB;
      });
      break;
  }

  return list;
}

// --- RENDER PRODUCTS GRID ---
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countLabel = document.getElementById("resultsCountLabel");
  if (!grid) return;

  const products = getFilteredProducts();

  if (countLabel) {
    countLabel.textContent = `Showing ${products.length} of ${JEWELRY_PRODUCTS.length} designs`;
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">💎</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 8px;">
          No Jewelry Found
        </h3>
        <p style="color: var(--text-muted); margin-bottom: 18px;">
          We couldn't find any designs matching "${AppState.searchQuery}". Try a different category or search by code (e.g. SVJ101).
        </p>
        <button class="btn-gold" onclick="resetFilters()">View All Collections</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(p => {
    const isWishlisted = AppState.wishlist.includes(p.id);

    return `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-card-media" onclick="openProductModal('${p.id}')">
          <span class="product-card-badge">${p.badge || `-${p.discountPercent}%`}</span>
          
          <button class="wishlist-toggle-btn ${isWishlisted ? 'is-active' : ''}" 
                  onclick="event.stopPropagation(); toggleWishlist('${p.id}')"
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                  aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <img src="${p.images.full}" alt="${p.code}" loading="lazy" />

          <button class="quick-view-overlay-btn" onclick="event.stopPropagation(); openProductModal('${p.id}')">
            🔍 Quick View
          </button>
        </div>

        <div class="product-card-content">
          <h3 class="product-card-title product-code-title" onclick="openProductModal('${p.id}')" style="cursor: pointer;" title="View ${p.code}">
            ${p.code}
          </h3>

          <div class="product-card-price-row">
            <span class="card-current-price">₹${p.price.toLocaleString("en-IN")}</span>
            <span class="card-original-price">₹${p.originalPrice.toLocaleString("en-IN")}</span>
            <span class="card-discount-pill">${p.discountPercent}% OFF</span>
          </div>

          <div class="product-card-actions">
            <div id="card-btn-${p.id}" class="card-cart-btn-slot">
              ${getCardCartButtonHtml(p.id)}
            </div>

            <button class="btn-card-wa" onclick="orderProductViaWhatsApp('${p.id}')" title="Buy via WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Reset Search & Filters
function resetFilters() {
  AppState.activeCategory = "all";
  AppState.searchQuery = "";
  AppState.sortBy = "code-asc";
  const searchInput = document.getElementById("headerSearchInput");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  if (searchInput) searchInput.value = "";
  if (mobileSearchInput) mobileSearchInput.value = "";
  renderCategoryCircles();
  renderCatalogTabs();
  renderProducts();
}

// --- RENDER CUSTOMER REVIEWS ---
function renderCustomerReviews() {
  const container = document.getElementById("customerReviewsGrid");
  if (!container) return;

  container.innerHTML = CUSTOMER_REVIEWS.map(rev => `
    <div class="review-card">
      <div class="review-card-stars">★★★★★</div>
      <p class="review-card-text">"${rev.comment}"</p>
      <div class="review-card-product">Ordered: ${rev.product}</div>
      <div class="review-card-author">
        <div class="author-avatar">${rev.name.charAt(0)}</div>
        <div class="author-info">
          <h4>${rev.name} ${rev.verified ? '✓' : ''}</h4>
          <span>${rev.location} · ${rev.date}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// --- PRODUCT QUICK VIEW & MULTI-ANGLE MODAL ---
function openProductModal(productId) {
  const product = JEWELRY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  AppState.activeProductModal = product;
  AppState.activeModalAngle = "full";
  AppState.modalQuantity = 1;

  const overlay = document.getElementById("productModalOverlay");
  const modalContent = document.getElementById("productModalContent");
  if (!overlay || !modalContent) return;

  renderProductModalContent();
  overlay.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function renderProductModalContent() {
  const p = AppState.activeProductModal;
  const modalContent = document.getElementById("productModalContent");
  if (!p || !modalContent) return;

  const displayName = getProductDisplayName(p);
  const currentImg = p.images[AppState.activeModalAngle] || p.images.full;

  modalContent.innerHTML = `
    <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Close modal">✕</button>

    <div class="modal-grid">
      <!-- Left: Multi-Angle Gallery -->
      <div class="modal-gallery">
        <div class="modal-main-img-box">
          <img src="${currentImg}" id="modalMainImg" alt="${displayName}" />
        </div>

        <div class="modal-thumbnails-row">
          <button class="modal-thumb-btn ${AppState.activeModalAngle === 'full' ? 'is-active' : ''}" 
                  onclick="switchModalImageAngle('full')">
            <img src="${p.images.full}" alt="Full Set View" />
            <span class="modal-thumb-label">Full Set</span>
          </button>

          <button class="modal-thumb-btn ${AppState.activeModalAngle === 'necklace' ? 'is-active' : ''}" 
                  onclick="switchModalImageAngle('necklace')">
            <img src="${p.images.necklace || p.images.full}" alt="Necklace Detail" />
            <span class="modal-thumb-label">Necklace</span>
          </button>

          <button class="modal-thumb-btn ${AppState.activeModalAngle === 'earrings' ? 'is-active' : ''}" 
                  onclick="switchModalImageAngle('earrings')">
            <img src="${p.images.earrings || p.images.full}" alt="Earrings Detail" />
            <span class="modal-thumb-label">Earrings</span>
          </button>
        </div>
      </div>

      <!-- Right: Product Details & Purchase Actions -->
      <div class="modal-details">
        <span class="modal-code-tag">${p.code} · ${p.badge || 'AUTHENTIC CREATION'}</span>
        <h2 class="modal-product-title">${p.code}</h2>

        <div style="margin-bottom: 12px;">
          <span class="in-stock-tag">✓ In Stock (Dispatched within ${p.dispatchHours}h)</span>
        </div>

        <div class="modal-price-box">
          <span class="modal-current-price">₹${p.price.toLocaleString("en-IN")}</span>
          <span class="modal-original-price">₹${p.originalPrice.toLocaleString("en-IN")}</span>
          <span class="modal-discount-tag">Save ${p.discountPercent}% (₹${(p.originalPrice - p.price).toLocaleString("en-IN")})</span>
        </div>

        <p class="modal-desc-text">${p.description}</p>

        <!-- Specifications Table -->
        <table class="modal-specs-table">
          <tbody>
            <tr>
              <td>Product Code</td>
              <td><strong>${p.code}</strong></td>
            </tr>
            <tr>
              <td>Base Metal</td>
              <td>${p.details.baseMetal}</td>
            </tr>
            <tr>
              <td>Plating & Polish</td>
              <td>${p.details.plating}</td>
            </tr>
            <tr>
              <td>Stones / Gemstones</td>
              <td>${p.details.stoneType}</td>
            </tr>
            <tr>
              <td>Back Closure</td>
              <td>${p.details.closure}</td>
            </tr>
            <tr>
              <td>Package Includes</td>
              <td>${p.details.packageIncludes}</td>
            </tr>
          </tbody>
        </table>

        <!-- Actions Panel -->
        <div class="modal-actions-panel">
          <div class="modal-qty-row">
            <span style="font-weight: 600; font-size: 0.9rem;">Quantity:</span>
            <div class="modal-qty-stepper">
              <button onclick="changeModalQty(-1)">-</button>
              <span id="modalQtyDisplay">${AppState.modalQuantity}</span>
              <button onclick="changeModalQty(1)">+</button>
            </div>
            <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: auto;">
              Subtotal: <strong>₹${(p.price * AppState.modalQuantity).toLocaleString("en-IN")}</strong>
            </span>
          </div>

          <div class="modal-buttons-grid">
            <button class="btn-modal-cart" onclick="addToCart('${p.id}', AppState.modalQuantity); closeProductModal();">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Add to Cart</span>
            </button>

            <button class="btn-modal-wa" onclick="orderProductViaWhatsApp('${p.id}', AppState.modalQuantity)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
              </svg>
              <span>Buy on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchModalImageAngle(angleKey) {
  AppState.activeModalAngle = angleKey;
  renderProductModalContent();
}

function changeModalQty(delta) {
  AppState.modalQuantity = Math.max(1, AppState.modalQuantity + delta);
  const display = document.getElementById("modalQtyDisplay");
  if (display) display.textContent = AppState.modalQuantity;
  renderProductModalContent();
}

function closeProductModal() {
  const overlay = document.getElementById("productModalOverlay");
  if (overlay) overlay.classList.remove("is-active");
  AppState.activeProductModal = null;
  document.body.style.overflow = "";
}

// --- CARD ADD TO CART STEPPER LOGIC ---
function getCardCartButtonHtml(productId) {
  const item = AppState.cart.find(i => i.id === productId);
  if (item && item.quantity > 0) {
    return `
      <div class="card-qty-stepper-btn" onclick="event.stopPropagation();">
        <button class="card-stepper-btn" onclick="handleCardQtyChange('${productId}', -1, event)" aria-label="Decrease quantity" title="Decrease">−</button>
        <span class="card-stepper-val">${item.quantity}</span>
        <button class="card-stepper-btn" onclick="handleCardQtyChange('${productId}', 1, event)" aria-label="Increase quantity" title="Increase">+</button>
      </div>
    `;
  }

  return `
    <button class="btn-card-cart" onclick="handleCardAddToCart('${productId}', event)" title="Add to Cart">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      <span>Add Cart</span>
    </button>
  `;
}

function handleCardAddToCart(productId, event) {
  if (event) event.stopPropagation();
  addToCart(productId, 1);
  updateCardButton(productId);
}

function handleCardQtyChange(productId, delta, event) {
  if (event) event.stopPropagation();
  updateCartItemQty(productId, delta);
  updateCardButton(productId);
}

function updateCardButton(productId) {
  const slot = document.getElementById(`card-btn-${productId}`);
  if (slot) {
    slot.innerHTML = getCardCartButtonHtml(productId);
  }
}

// --- SHOPPING CART SYSTEM ---
function addToCart(productId, quantity = 1) {
  const product = JEWELRY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const displayName = getProductDisplayName(product);
  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      code: product.code,
      name: displayName,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images.full,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✨ Added "${displayName}" to cart!`);
}

function updateCartItemQty(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    AppState.cart = AppState.cart.filter(i => i.id !== productId);
    showToast("Item removed from cart");
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart");
}

function calculateCartTotals() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Shipping rule: Free if subtotal >= 999, else Rs 70
  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 70;

  // Discount calculation
  let discount = 0;
  if (AppState.appliedCoupon && subtotal >= (AppState.appliedCoupon.minOrder || 0)) {
    if (AppState.appliedCoupon.type === "flat") {
      discount = AppState.appliedCoupon.value;
    } else if (AppState.appliedCoupon.type === "percent") {
      discount = Math.round((subtotal * AppState.appliedCoupon.value) / 100);
    }
  }

  const grandTotal = Math.max(0, subtotal - discount + shippingFee);

  return { subtotal, shippingFee, isFreeShipping, discount, grandTotal, freeShippingThreshold };
}

function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update header badges
  const badgeEls = document.querySelectorAll(".cart-count-badge");
  badgeEls.forEach(b => b.textContent = totalCount);

  // Update Cart Drawer Items List
  const itemsContainer = document.getElementById("cartItemsList");
  const emptyState = document.getElementById("cartEmptyState");
  const foot = document.getElementById("cartDrawerFoot");
  const shippingBarNotice = document.getElementById("shippingBarNotice");

  const totals = calculateCartTotals();

  if (shippingBarNotice) {
    if (totals.subtotal === 0) {
      shippingBarNotice.innerHTML = `
        <span>🚚 Add items to unlock <strong>FREE Shipping</strong> (on orders ₹999+)</span>
        <div class="shipping-bar-track"><div class="shipping-bar-fill" style="width: 0%"></div></div>
      `;
    } else if (totals.isFreeShipping) {
      shippingBarNotice.innerHTML = `
        <span style="color: #0b6e4f; font-weight: 700;">🎉 Congratulations! You have unlocked <strong>FREE All-India Delivery</strong>!</span>
        <div class="shipping-bar-track"><div class="shipping-bar-fill" style="width: 100%; background: #25d366;"></div></div>
      `;
    } else {
      const remaining = totals.freeShippingThreshold - totals.subtotal;
      const percent = Math.min(100, Math.round((totals.subtotal / totals.freeShippingThreshold) * 100));
      shippingBarNotice.innerHTML = `
        <span>Add <strong>₹${remaining.toLocaleString("en-IN")}</strong> more to get <strong>FREE Delivery</strong>!</span>
        <div class="shipping-bar-track"><div class="shipping-bar-fill" style="width: ${percent}%"></div></div>
      `;
    }
  }

  if (AppState.cart.length === 0) {
    if (itemsContainer) itemsContainer.style.display = "none";
    if (emptyState) emptyState.style.display = "block";
    if (foot) foot.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (itemsContainer) {
    itemsContainer.style.display = "flex";
    itemsContainer.innerHTML = AppState.cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name || item.code}" />
        </div>
        <div class="cart-item-details">
          <div class="cart-item-code">${item.code}</div>
          ${item.name && item.name !== item.code ? `<h4 class="cart-item-name">${item.name}</h4>` : ''}
          <div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>
          <div class="cart-item-actions-row">
            <div class="cart-qty-ctrls">
              <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase">+</button>
            </div>
            <button class="btn-cart-item-wa" onclick="orderProductViaWhatsApp('${item.id}', ${item.quantity})" title="Order via WhatsApp">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
        <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" title="Remove item">
          ✕
        </button>
      </div>
    `).join("");
  }

  if (foot) {
    foot.style.display = "block";

    // Active coupon display
    const couponPillEl = document.getElementById("activeCouponPill");
    if (couponPillEl) {
      if (AppState.appliedCoupon && totals.discount > 0) {
        couponPillEl.style.display = "flex";
        couponPillEl.innerHTML = `
          <span>🏷️ Code <strong>${AppState.appliedCoupon.code}</strong> applied (-₹${totals.discount})</span>
          <button onclick="removeCoupon()" style="font-weight: bold; color: #a31d24;">✕</button>
        `;
      } else {
        couponPillEl.style.display = "none";
      }
    }

    // Bill totals
    const subtotalEl = document.getElementById("cartSubtotalDisplay");
    const shippingEl = document.getElementById("cartShippingDisplay");
    const discountRowEl = document.getElementById("cartDiscountRow");
    const discountEl = document.getElementById("cartDiscountDisplay");
    const grandTotalEl = document.getElementById("cartGrandTotalDisplay");

    if (subtotalEl) subtotalEl.textContent = `₹${totals.subtotal.toLocaleString("en-IN")}`;
    if (shippingEl) shippingEl.textContent = totals.isFreeShipping ? "FREE" : `₹${totals.shippingFee}`;
    
    if (discountRowEl && discountEl) {
      if (totals.discount > 0) {
        discountRowEl.style.display = "flex";
        discountEl.textContent = `-₹${totals.discount.toLocaleString("en-IN")}`;
      } else {
        discountRowEl.style.display = "none";
      }
    }

    if (grandTotalEl) grandTotalEl.textContent = `₹${totals.grandTotal.toLocaleString("en-IN")}`;
  }

  // Synchronize all product card Add to Cart / Stepper buttons
  JEWELRY_PRODUCTS.forEach(p => {
    updateCardButton(p.id);
  });
}

// --- APPLY PROMO COUPON ---
function applyCoupon() {
  const input = document.getElementById("couponInputBox");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast("Please enter a coupon code");
    return;
  }

  const coupon = VALID_COUPONS[code];
  if (!coupon) {
    showToast("Invalid coupon code. Try FIRST100, FESTIVE15, or GOLD10.");
    return;
  }

  const totals = calculateCartTotals();
  if (totals.subtotal < coupon.minOrder) {
    showToast(`Order total must be at least ₹${coupon.minOrder} to use ${code}.`);
    return;
  }

  AppState.appliedCoupon = { code, ...coupon };
  localStorage.setItem("suvina_jewelry_coupon", code);
  input.value = "";
  updateCartUI();
  showToast(`🎉 Coupon ${code} applied successfully!`);
}

function removeCoupon() {
  AppState.appliedCoupon = null;
  localStorage.removeItem("suvina_jewelry_coupon");
  updateCartUI();
  showToast("Coupon removed");
}

// --- DRAWER TOGGLES ---
function toggleCartDrawer(forceOpen = null) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (!drawer || !backdrop) return;

  const isOpen = forceOpen !== null ? forceOpen : !drawer.classList.contains("is-active");

  if (isOpen) {
    closeWishlistDrawer();
    drawer.classList.add("is-active");
    backdrop.classList.add("is-active");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.remove("is-active");
    backdrop.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}

function closeCartDrawer() {
  toggleCartDrawer(false);
}

// --- WISHLIST SYSTEM ---
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    AppState.wishlist.push(productId);
    showToast("❤️ Added to your wishlist!");
  }

  saveWishlist();
  updateWishlistUI();
  renderProducts(); // Refresh heart states
}

function updateWishlistUI() {
  const badges = document.querySelectorAll(".wishlist-count-badge");
  badges.forEach(b => b.textContent = AppState.wishlist.length);

  const container = document.getElementById("wishlistItemsList");
  const emptyState = document.getElementById("wishlistEmptyState");
  if (!container) return;

  const wishlistedProducts = JEWELRY_PRODUCTS.filter(p => AppState.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    container.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  container.innerHTML = wishlistedProducts.map(p => {
    const displayName = getProductDisplayName(p);
    return `
      <div class="cart-item-row">
        <div class="cart-item-thumb" onclick="openProductModal('${p.id}'); closeWishlistDrawer();" style="cursor: pointer;">
          <img src="${p.images.full}" alt="${displayName}" />
        </div>
        <div class="cart-item-details">
          <div class="cart-item-code">${p.code}</div>
          <h4 class="cart-item-name" onclick="openProductModal('${p.id}'); closeWishlistDrawer();" style="cursor: pointer;">
            ${displayName}
          </h4>
          <div class="cart-item-price">₹${p.price.toLocaleString("en-IN")}</div>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <button class="btn-card-cart" onclick="addToCart('${p.id}', 1); toggleWishlist('${p.id}');" style="padding: 4px 8px; font-size: 0.72rem;">
              Move to Cart
            </button>
            <button class="btn-card-wa" onclick="orderProductViaWhatsApp('${p.id}')" style="padding: 4px 8px; font-size: 0.72rem;">
              Order WA
            </button>
          </div>
        </div>
        <button class="cart-item-remove-btn" onclick="toggleWishlist('${p.id}')" title="Remove from wishlist">
          ✕
        </button>
      </div>
    `;
  }).join("");
}

function toggleWishlistDrawer(forceOpen = null) {
  const drawer = document.getElementById("wishlistDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (!drawer || !backdrop) return;

  const isOpen = forceOpen !== null ? forceOpen : !drawer.classList.contains("is-active");

  if (isOpen) {
    closeCartDrawer();
    drawer.classList.add("is-active");
    backdrop.classList.add("is-active");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.remove("is-active");
    backdrop.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}

function closeWishlistDrawer() {
  toggleWishlistDrawer(false);
}

// --- WHATSAPP INTEGRATION ENGINE ---

/**
 * 1. Single Product Order via WhatsApp
 */
function orderProductViaWhatsApp(productId, quantity = 1) {
  const p = JEWELRY_PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const currentUrl = window.location.href.split("#")[0];
  const totalPrice = p.price * quantity;
  const nameLine = p.name && p.name.trim() !== "" && p.name.trim() !== p.code.trim()
    ? `\n✨ *Product:* ${p.name.trim()}`
    : "";

  const message = 
`👑 *SUVINA JEWELS - ORDER ENQUIRY* 👑
--------------------------------------------------
Hello! I would like to order this jewelry set:

🔖 *Item Code:* ${p.code}${nameLine}
💰 *Price:* ₹${p.price.toLocaleString("en-IN")} each
🔢 *Quantity:* ${quantity}
💵 *Total Amount:* ₹${totalPrice.toLocaleString("en-IN")}

💎 *Metal / Finish:* ${p.details.plating}
📦 *Includes:* ${p.details.packageIncludes}
🌐 *Product Link:* ${currentUrl}#${p.id}

Please let me know if it is available for delivery to my pincode and share payment details. Thank you!`;

  openWhatsAppWithMessage(message);
}

/**
 * 2. Full Cart Checkout via WhatsApp
 */
function checkoutCartViaWhatsApp() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty! Please add jewelry first.");
    return;
  }

  const totals = calculateCartTotals();
  const orderDate = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  
  // Format items list cleanly by Product Code & Price
  const itemsText = AppState.cart.map((item, index) => {
    const hasName = item.name && item.name !== item.code;
    const label = hasName ? `*${item.code}* - ${item.name}` : `*Item Code: ${item.code}*`;
    return `${index + 1}. ${label}\n   Qty: ${item.quantity} × ₹${item.price.toLocaleString("en-IN")} = *₹${(item.price * item.quantity).toLocaleString("en-IN")}*`;
  }).join("\n\n");

  const couponText = totals.discount > 0 
    ? `🏷️ *Coupon Applied:* ${AppState.appliedCoupon.code} (-₹${totals.discount.toLocaleString("en-IN")})\n` 
    : "";

  const shippingText = totals.isFreeShipping ? "FREE (All-India Express)" : `₹${totals.shippingFee}`;

  const message = 
`🛍️ *NEW WEBSITE ORDER REQUEST* 🛍️
*Suvina Jewels*
📅 *Date:* ${orderDate}
--------------------------------------------------
*ORDERED JEWELRY:*
${itemsText}
--------------------------------------------------
💰 *Subtotal:* ₹${totals.subtotal.toLocaleString("en-IN")}
${couponText}🚚 *Shipping:* ${shippingText}
💎 *GRAND TOTAL PAYABLE:* *₹${totals.grandTotal.toLocaleString("en-IN")}*
--------------------------------------------------
*CUSTOMER DELIVERY DETAILS:*
Name: 
Delivery Address: 
City, State: 
Pincode: 
Contact Mobile: 

Please confirm stock availability and send UPI QR code / Bank details for payment. Thank you!`;

  openWhatsAppWithMessage(message);
}

/**
 * 3. Quick WhatsApp Chat Questions
 */
function sendWhatsAppInquiry(inquiryType) {
  let text = "";
  switch (inquiryType) {
    case "video-call":
      text = "Namaste! 🙏 I would like to book a WhatsApp Video Call to inspect bridal jewelry sets live before ordering. Please let me know your available timings.";
      break;
    case "bridal-combo":
      text = "Namaste! 👰 I'm planning for an upcoming wedding and would like recommendations for matching Bridal Combos (Choker, Haram, Bangles, and Jhumkis).";
      break;
    case "pincode":
      text = "Hello! 🚚 Can you please check delivery availability and express shipping timeline for my pincode?";
      break;
    case "discount":
      text = "Hello! ✨ Are there any special festive discounts or combo offers available today for jewelry orders?";
      break;
    default:
      text = "Hello Suvina Jewels! I have a question about your jewelry collection.";
      break;
  }

  openWhatsAppWithMessage(text);
  toggleWhatsAppAssistant(false);
}

function sendCustomWhatsAppMessage() {
  const input = document.getElementById("waAssistantInput");
  if (!input) return;

  const msg = input.value.trim();
  if (!msg) {
    showToast("Please enter a message");
    return;
  }

  openWhatsAppWithMessage(`Namaste! 🙏 ${msg}`);
  input.value = "";
  toggleWhatsAppAssistant(false);
}

/**
 * Core WhatsApp URL Generator
 */
function openWhatsAppWithMessage(message) {
  const encoded = encodeURIComponent(message);
  const number = AppState.whatsappNumber.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${number}?text=${encoded}`;
  window.open(waUrl, "_blank");
}

function toggleWhatsAppAssistant(forceOpen = null) {
  const modal = document.getElementById("waAssistantModal");
  if (!modal) return;

  const isOpen = forceOpen !== null ? forceOpen : !modal.classList.contains("is-open");
  if (isOpen) {
    modal.classList.add("is-open");
  } else {
    modal.classList.remove("is-open");
  }
}

// --- DIRECT CHECKOUT FORM MODAL ---
function openDirectCheckout() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  closeCartDrawer();
  const overlay = document.getElementById("checkoutModalOverlay");
  if (overlay) {
    overlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

  const totals = calculateCartTotals();
  const totalAmountEl = document.getElementById("checkoutPayableAmount");
  if (totalAmountEl) {
    totalAmountEl.textContent = `₹${totals.grandTotal.toLocaleString("en-IN")}`;
  }
}

function closeDirectCheckout() {
  const overlay = document.getElementById("checkoutModalOverlay");
  if (overlay) overlay.classList.remove("is-active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("checkoutName")?.value.trim();
  const phone = document.getElementById("checkoutPhone")?.value.trim();
  const address = document.getElementById("checkoutAddress")?.value.trim();
  const pincode = document.getElementById("checkoutPincode")?.value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "UPI";

  if (!name || !phone || !address || !pincode) {
    showToast("Please fill in all shipping details");
    return;
  }

  const totals = calculateCartTotals();
  const itemsText = AppState.cart.map(i => {
    const hasName = i.name && i.name !== i.code;
    const label = hasName ? `${i.code} (${i.name})` : `${i.code}`;
    return `${label} (x${i.quantity}) - ₹${(i.price * i.quantity).toLocaleString("en-IN")}`;
  }).join("\n");

  const confirmationMsg = 
`🛍️ *CONFIRMED WEBSITE ORDER*
Order ID: SJ-${Date.now().toString().slice(-6)}
Customer: ${name} (${phone})
Address: ${address}, Pincode: ${pincode}
Payment Method: ${paymentMethod}
Total: ₹${totals.grandTotal.toLocaleString("en-IN")}

Items:
${itemsText}
`;

  closeDirectCheckout();
  AppState.cart = [];
  saveCart();
  updateCartUI();

  // Show success dialog or redirect to WhatsApp with order summary
  alert(`Thank you ${name}! Your order has been placed successfully.\n\nWe will now open WhatsApp to send you the official order receipt and tracking updates.`);
  openWhatsAppWithMessage(confirmationMsg);
}

// --- STORE SETTINGS (CONFIGURABLE WHATSAPP NUMBER) ---
function promptWhatsAppNumberChange() {
  const current = AppState.whatsappNumber;
  const newNum = prompt("Enter your WhatsApp Business Number (with country code, e.g. 918072322276):", current);
  if (newNum && newNum.trim()) {
    const cleaned = newNum.replace(/[^0-9]/g, "");
    if (cleaned.length >= 10) {
      AppState.whatsappNumber = cleaned;
      localStorage.setItem("suvina_whatsapp_number", cleaned);
      showToast(`WhatsApp number updated to +${cleaned}`);
    } else {
      showToast("Please enter a valid phone number with country code.");
    }
  }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<span>💎</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- EVENT LISTENERS & SEARCH HOOKS ---
function setupEventListeners() {
  // Live Header Search Input
  const searchInput = document.getElementById("headerSearchInput");
  const mobileSearchInput = document.getElementById("mobileSearchInput");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (mobileSearchInput) mobileSearchInput.value = e.target.value;
      renderProducts();
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (searchInput) searchInput.value = e.target.value;
      renderProducts();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Keyboard Accessibility: Esc closes all modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeWishlistDrawer();
      closeDirectCheckout();
      toggleWhatsAppAssistant(false);
    }
  });

  // Sticky Header scroll shadow
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }
  });
}
