# Content Honesty Pass — Design Spec

**Date:** 2026-04-14
**Project:** EnnBi website content audit
**Scope:** Fix fabricated claims, stats, descriptions, and testimonials across the live site.

## Goal

Scrub the site of content that was invented during the design-system rebuild or inherited from template data. Replace with either verified facts (where the user confirmed truth) or plausible-but-grounded descriptions (where the user authorized rewrites). Remove content that can't be defended in a client discovery call.

## Changes

### 1. Hero stat strip (`Hero.tsx`)

Replace the 4-column stat strip with a 3-column strip using verified numbers:

| Before | After |
|---|---|
| 2022 · Founded | 2022 · Founded (unchanged) |
| 30+ · Projects shipped | **8 · Shipped projects** |
| 12 · Industries | **6 · Industries** |
| ∞ · Timezones served | **(removed)** |

Grid changes from `grid-cols-2 md:grid-cols-4` to `grid-cols-3`.

Hero headline, subhead, and eyebrow (including "WORLDWIDE") stay unchanged.

### 2. Portfolio rewrites (`src/data/index.ts` `projects`)

Replace card 1 (FinTech Platform) with Mosque Accounts Platform. Rewrite all 6 descriptions to be grounded and specific:

| # | Title | Description | Tags |
|---|---|---|---|
| 1 | Mosque Accounts Platform | Account management software for mosque committees — tracks day-to-day collections (zakat, sadaqah, general donations), running expenses, and dedicated fund drives, with auto-generated receipts and monthly statements for committee review. | Accounting, Web App, Non-profit, Reports |
| 2 | Healthcare Management System | Patient-facing booking and records portal for a multi-specialty clinic — connects front-desk operations with consultant calendars, lab uploads, and follow-up reminders. | Healthcare, Web App, Mobile |
| 3 | E-Commerce Transformation | D2C storefront and inventory platform for a Kashmiri craft retailer, replacing a fragmented marketplace setup with a self-managed Shopify storefront and a centralized product catalog. | E-Commerce, Mobile, Cloud |
| 4 | Smart Restaurant System | POS, kitchen display, and self-service kiosk software for a multi-outlet F&B operator. Real-time order status across stations and unified daily reporting. | POS, Kiosk, Mobile Ordering, Real-time |
| 5 | AI-Powered Customer Service | First-line LLM agent for a fast-growing logistics operator — handles tracking queries, parcel rebookings, and refund initiation across web chat and WhatsApp, with human escalation. | AI, NLP, Machine Learning, Customer Service |
| 6 | Predictive Analytics Dashboard | Sales-forecasting and customer-cohort dashboard for a pharma distributor, replacing scattered Excel models with a single Power BI workspace fed by their CRM and ERP. | AI, Analytics, Data Visualization, Predictive Modeling |

Also remove the Pexels stock `image` URLs from the data entries (images are not rendered in the current UI but should not ship in the data file).

### 3. Testimonials → "Trusted by" strip (`Testimonials.tsx`)

Replace the 3 full-quote testimonial cards with a compact "Trusted by" client strip:

```
// TRUSTED BY

Heritage Craft.              Logisco Courier Service         M Studio
Mr Abid · Business Owner     Adnan · Director                Kamran Lone · MD
```

No fabricated quotes, no percentage stats. Just verified client names, titles, and companies.

### 4. Trim 5 Platforms from Stack (`src/data/technologies.ts`)

Remove from `technologyColumns[2]` (Platforms column):
- Dynamics 365
- Salesforce
- ServiceNow
- Pimcore
- Adobe Commerce

Also remove the corresponding 5 entries from `technologyDetails` array so the `/technologies` detail page stays in sync.

Keep: Microsoft, Azure, Power Apps, SharePoint and Microsoft 365, Power BI, Amazon Web Services, Shopify.

### 5. Phone number fix (`index.html`)

Schema.org JSON-LD currently has `"telephone": "+91-7006016082"`. Change to `"+91-7889449921"` to match Contact and Footer.

### 6. OG image (`public/og-image.jpg`)

Generate a 1200×630 brutalist Open Graph image:
- Background: ink-950 (#050505)
- Grid texture (matching Hero)
- "ENNBI" in Archivo Black, mint teal (#14b8a6)
- "CUSTOM SOFTWARE. SHIPPED." in ink-50 (#fafafa)
- Subtle mint accent bar at bottom

Approach: write an HTML template at 1200×630, render via headless browser (Puppeteer or Playwright), save as `public/og-image.jpg`. If no headless browser is available, provide the HTML for manual screenshot.

## What stays unchanged

- Hero headline, subhead, eyebrow ("WORLDWIDE" stays)
- All 4 service cards (taglines, descriptions, bullets)
- Process section (all 4 stages, timeframes, deliverables)
- Service detail page (8 services with deliverables)
- Contact form and info
- Footer
- Stack — Emerging Tech column (11 items) and Languages & Engineering column (10 items)
- SEO meta tags and schema.org (except phone fix)
- Login page
- Styleguide

## Validation

- `npm run build` passes
- Phone number is consistent across Contact, Footer, and index.html schema.org
- No "30+", "12 industries", "∞", "revolutionized", "leading financial institution", or percentage-stat testimonial quotes remain in the codebase
- `/technologies` page shows 28 entries (down from 33)
- OG image loads at `https://www.ennbi.com/og-image.jpg`
