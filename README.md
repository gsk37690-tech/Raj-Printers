# Raj Printers - Website & Local SEO Package

A high-converting, mobile-first website created specifically for **Raj Printers** (Samayapuram, Tiruchirappalli, Tamil Nadu).

## Verified Business Information
- **Business Name**: Raj Printers
- **Category**: Print Shop / Printing Service
- **Address**: 94, Kariyamanickam Road, Siva Complex, Samayapuram, Tamil Nadu 621112
- **Phone Numbers**: `070105 64303` / `93427 09489`
- **Google Rating**: 5.0 ★
- **Google Maps URL**: `https://maps.app.goo.gl/1FNJHGQRjnb7kzYv6`

---

## File Structure

```
c:\Workspace\
├── index.html                 # Main website HTML structure with semantic tags & Schema.org JSON-LD
├── css\
│   └── styles.css             # Vanilla CSS design system (tokens, mobile sticky CTA, responsive grid)
├── js\
│   ├── config.js              # Centralized business configuration (Single source of truth)
│   └── app.js                 # Dynamic rendering, WhatsApp pre-fills, mobile menu & form handling
├── images\                    # High-quality visual assets
│   ├── hero_banner.png
│   ├── visiting_cards.png
│   ├── flex_banner.png
│   ├── invitation_cards.png
│   ├── brochures_flyers.png
│   └── shop_exterior.png
├── robots.txt                 # Search engine crawling rules
├── sitemap.xml                # XML sitemap for Search Console indexation
├── README.md                  # System instructions & configuration guide
├── GBP_INTEGRATION.md         # Google Business Profile step-by-step connection guide
├── SEO_CHECKLIST.md           # Local SEO checklist for Samayapuram dominance
└── MARKETING_ASSETS.md        # Ready-to-use copy (GBP description, WhatsApp greetings, 10 post ideas, social templates)
```

---

## How to Edit Business Information (`js/config.js`)

All business details are stored in `js/config.js`. To edit any details without touching HTML:

1. Open `js/config.js`.
2. Update the fields you wish to change:
   - `PHONE_PRIMARY` / `PHONE_SECONDARY`
   - `WHATSAPP_NUMBER`
   - `EMAIL_ADDRESS`
   - `ADDRESS_STREET` / `CITY` / `POSTCODE`
   - `SERVICES` (Set `enabled: true/false` to show or hide services)
3. Save the file. The website updates automatically across all sections.

---

## How to Replace Work / Shop Photos

To replace the sample images with actual photos of Raj Printers:

1. Save your shop photos in the `images/` directory.
2. Rename your files to match:
   - `shop_exterior.png` (Real photo of front entrance)
   - `visiting_cards.png` (Real sample of printed business cards)
   - `flex_banner.png` (Real photo of printed flex board)
   - `invitation_cards.png` (Real sample of wedding invitation card)
3. Refresh the website in your browser.

---

## Local Deployment Instructions

### Option 1: Static Web Hosting (Netlify, Vercel, Cloudflare Pages, GitHub Pages)
1. Upload the entire `c:\Workspace` directory to your static host.
2. Set the custom domain (e.g., `https://rajprinters.in` or `https://rajprinters-samayapuram.in`).

### Option 2: Traditional CPanel / Shared Hosting
1. Upload all files from `c:\Workspace` into your hosting provider's `public_html` directory via FTP or CPanel File Manager.
2. Ensure `index.html` is in the root directory.

---

## Local Preview Instructions

You can run a local development server using Node.js:
```bash
npx serve .
```
Or simply double-click `index.html` to view in any modern web browser.
