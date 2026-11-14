# 👑 SUVINA JEWELS - Luxury E-Commerce Website

An authentic, regal Indian luxury jewellery e-commerce website inspired by **[SUVINA JEWELS](https://jasvikcreations.com/)** and **[Nila Bangles](https://nilabangles.com/)**, handcrafted for South Indian bridal, temple, and festive collections.

---

## ✨ Key Features

### 1. 🛍️ Complete E-Commerce Shopping Cart System
- **Slide-over Shopping Bag Drawer** with smooth animations and backdrop blur.
- **Dynamic Free Shipping Progress Bar**: Automatically calculates remaining amount needed for **FREE All-India Delivery** (unlocked at ₹999).
- **Cart Management**: Real-time quantity steppers (`[-] 1 [+]`), item deletion, subtotal calculation.
- **Coupon Code Applicator**:
  - `FIRST100` — Flat ₹100 OFF on orders above ₹999.
  - `FESTIVE15` — 15% OFF on festive orders above ₹1,999.
  - `GOLD10` — 10% OFF on gold collections above ₹1,499.
- **Dual Checkout System**:
  - 🟢 **Checkout via WhatsApp**: Formats full order summary with line items, quantities, coupon discounts, shipping, and grand total.
  - 🟡 **Instant Direct Checkout Modal**: Form for Customer Name, WhatsApp number, Delivery Address, Pincode, and Payment Method (UPI, COD, WhatsApp Pay).

### 2. 💬 Full WhatsApp Integration
- **Floating Pulsing WhatsApp Button** with unread notification ripple and speech tooltip.
- **Interactive WhatsApp Assistant Modal**:
  - 👰 *Inquire about Bridal Combos*
  - 📹 *Book a Live Video Call Preview* (360° inspection of jewelry before ordering)
  - 🚚 *Check Delivery Time to Pincode*
  - 🏷️ *Ask for Today's Extra Discount*
  - Custom message box sending directly to WhatsApp.
- **Single Product Order via WhatsApp**:
  - Every product card and quick-view modal includes a direct **WhatsApp** button that opens WhatsApp pre-filled with the item's name, SKU code, price, plating, and direct link.
- **Customizable WhatsApp Number**:
  - Click the **⚙️ WhatsApp Settings** pill at the bottom-left to set your own WhatsApp Business number anytime! Persisted in `localStorage`.

### 3. 💎 19 Complete Jewellery Collections (with 3-Angle Photos)
- Selected from the **`image/with ai 02`** collection for studio lighting, warm gold shimmer, and deep contrast.
- Each product features **3 multi-angle views**:
  1. **Full Set View**
  2. **Necklace Detail View**
  3. **Earring Detail View**
- **Interactive Quick View Modal** with thumbnail switching, hover zoom preview, and complete technical specifications table.

### 4. 🎨 Regal Design Inspired by References
- **Theme**: Royal Emerald Green (`#072B1E`), Imperial Antique Gold (`#D4AF37`), Ivory Cream (`#FAF7F2`), and Ruby Red accents.
- **Announcement Ticker**: Scrolling promo banner with discounts and shipping policies.
- **Trust Pillars Bar** (as seen in SUVINA JEWELS):
  - 🚚 All India Fast & Secure Shipping
  - 💎 24K Micro Gold Plating & Anti-Tarnish Guarantee
  - 🏷️ Direct Artisan Pricing
  - 📞 24/7 Dedicated WhatsApp Support
- **Shop by Category** circular carousel (as seen in SUVINA JEWELS Screenshot 3).
- **Product Cards** with discount badges, wishlist toggle, star ratings, and dual action buttons.
- **Happy Customers ❤️**: Verified reviews from South Indian brides.
- **Mobile Sticky Navigation Bar**: Quick bottom bar for mobile shoppers.

---

## 🚀 How to Run the Website

### Option 1: Double-Click or Open Directly
Simply double-click `index.html` or open it in any modern browser:
```bash
# On Linux
xdg-open index.html
```

### Option 2: Run with Local HTTP Server
```bash
# Using Python
python3 -m http.server 8088

# Open in browser:
http://localhost:8088
```

---

## 📁 Project Structure

```
├── index.html                  # Main e-commerce storefront
├── README.md                   # Documentation & setup guide
├── css/
│   └── style.css               # Regal Emerald & Gold design system
├── js/
│   ├── products.js             # 19 jewelry sets metadata & image paths
│   └── app.js                  # Cart, wishlist, WhatsApp engine & modals
└── image/
    ├── with ai 02/             # Best studio photography (selected)
    ├── with ai/                # Variant 1
    └── without ai/             # Raw studio shots
```

---

## 📱 Store Contact & Social Information
- **Brand Title**: SUVINA JEWELS
- **WhatsApp / Helpline**: `+91 8072322276`
- **Contact Email**: `suvinajewelsv@gmail.com`

---

## 📱 Updating the Store WhatsApp Number
By default, the store is configured with `+91 8072322276`. You can change it directly from the UI:
1. Click the **⚙️ WhatsApp Settings** pill at the bottom left.
2. Enter your 10 or 12 digit WhatsApp business phone number with country code (e.g. `918072322276`).
3. Click OK — all WhatsApp checkout and product links will instantly update!
