# Kestrel Security - Pages Visual Guide

## 🏠 Page Navigation Map

```
HOME (/)
├── Logo → Returns to home
├── Navigation Menu:
│   ├── Home → /
│   ├── Services → /services
│   ├── Consignment (Dropdown)
│   │   ├── Gold → /gold-consignment
│   │   ├── Diamond → /diamond-consignment
│   │   └── Jewelry & Watches → /jewelry-consignment
│   ├── Prices → /prices
│   ├── About → /about
│   ├── FAQ → /faq
│   └── Contact → /contact
└── Login Button (Top Right) → /login

LOGIN (/login)
├── Email & Password fields
├── Remember me checkbox
├── Forgot password link
├── Sign In button
└── Create Account link → /register

REGISTER (/register)
├── Full Name field
├── Email field
├── Account Type dropdown (Individual/Business/Institutional)
├── Password & Confirm Password
├── Terms acceptance checkbox
├── Create Account button
└── Already have account link → /login

SERVICES (/services)
├── Service Cards Grid (4 cards):
│   ├── Gold Consignment → /gold-consignment
│   ├── Diamond Consignment → /diamond-consignment
│   ├── Fine Jewelry & Watches → /jewelry-consignment
│   └── Institutional Services
├── Process Steps (5 steps)
└── Contact CTA

GOLD CONSIGNMENT (/gold-consignment)
├── Hero Banner with CTA
├── Introduction Section
├── Types of Gold Grid (4 types)
│   ├── Investment Bullion
│   ├── Gold Coins
│   ├── Refined Doré & Nuggets
│   └── Scrap & Estate Gold
├── Consignment Process (5 steps)
├── Features Grid (4 features with icons)
├── Pricing Table
├── CTA Buttons
└── Footer with links

DIAMOND CONSIGNMENT (/diamond-consignment)
├── Hero Banner
├── Introduction Section
├── Types of Diamonds Grid (4 types)
│   ├── Certified Polished
│   ├── Uncertified Polished
│   ├── Rough Diamonds
│   └── Parcel Lots
├── Certification Section (4 certifications)
├── The 4 Cs Section (C1-C4)
├── Consignment Process (5 steps)
├── Commission & Fees Table
├── CTA Buttons
└── Footer

JEWELRY CONSIGNMENT (/jewelry-consignment)
├── Hero Banner
├── Introduction Section
├── Types of Jewelry Grid (4 types)
│   ├── Designer Jewelry
│   ├── Estate Jewelry
│   ├── Luxury Watches
│   └── Gemstone Jewelry
├── Authentication Section (4 methods)
├── Market Access (5 channels)
├── Consignment Process (5 steps)
├── Commission Table
├── CTA Buttons
└── Footer

ABOUT (/about)
├── About Section (from Home)
├── Team Section (from Home)
├── Core Values Grid (6 values):
│   ├── Security First
│   ├── Absolute Integrity
│   ├── Transparency
│   ├── Global Reach
│   ├── Compliance
│   └── Client Focus
├── Certifications & Memberships (6 items):
│   ├── LBMA Member
│   ├── RJC Certified
│   ├── Kimberley Process
│   ├── Lloyd's of London
│   ├── ISO 9001:2015
│   └── Class III Vault
├── Historical Timeline (6 milestones):
│   ├── 2010 - Foundation
│   ├── 2013 - Diamond Division
│   ├── 2016 - LBMA Membership
│   ├── 2019 - Global Expansion
│   ├── 2022 - $1B Milestone
│   └── 2026 - Today
└── Footer

PRICES (/prices)
├── Prices Hero Section
├── Live Metal Prices Grid (4 metals):
│   ├── Gold (1 oz)
│   ├── Silver (1 oz)
│   ├── Platinum (1 oz)
│   └── Palladium (1 oz)
├── Understanding Precious Metals Info Grid (6 sections):
│   ├── Spot Price
│   ├── Bid-Ask Spread
│   ├── Troy Ounce
│   ├── Purity Standards
│   ├── Weight vs. Price
│   └── Market Volatility
├── Value Estimator Form:
│   ├── Metal Type Dropdown
│   ├── Weight Input (grams)
│   └── Calculate Button
└── Footer

CONTACT (/contact)
├── Contact Form:
│   ├── Name field
│   ├── Email field
│   ├── Subject field
│   ├── Message textarea
│   └── Send button
├── Contact Information:
│   ├── Email address
│   ├── Phone number
│   ├── Office address
│   └── Business hours
├── Map (if available)
└── Footer

FAQ (/faq)
├── FAQ Hero Section
├── Accordion Sections (6 categories):
│   ├── General Questions (4 FAQs)
│   ├── Gold Consignment (4 FAQs)
│   ├── Diamond Consignment (4 FAQs)
│   ├── Jewellery & Watches (4 FAQs)
│   ├── Fees & Payments (4 FAQs)
│   └── Storage & Security (4 FAQs)
├── Each FAQ Item:
│   ├── Question (clickable)
│   ├── Expandable Answer
│   └── Smooth animations
└── CTA: Contact our team link

HOME (/home - Full Page)
├── Navbar (fixed)
├── Hero Section
│   ├── Background image
│   ├── Headline
│   ├── Subheading
│   └── CTA buttons
├── About Section
│   ├── Company intro
│   └── Key points
├── Services Section
│   ├── 4 Service cards
│   ├── Features list
│   └── CTA buttons
├── Team Section
│   ├── Team members grid
│   ├── Names & titles
│   └── Social links
├── Contact Section
│   ├── Contact form
│   └── Contact info
└── Footer (fixed)
```

## 📊 Page Statistics

| Page | Type | Sections | Elements | Lines |
|------|------|----------|----------|-------|
| Home | Multi-section | 5 | 30+ | N/A |
| Gold Consignment | Detailed | 7 | 50+ | 280+ |
| Diamond Consignment | Detailed | 7 | 50+ | 280+ |
| Jewelry Consignment | Detailed | 7 | 50+ | 280+ |
| About | Expanded | 4 | 25+ | 150+ |
| Services | Overview | 2 | 15+ | 50+ |
| Prices | Interactive | 3 | 20+ | 100+ |
| Contact | Form | 2 | 10+ | 50+ |
| FAQ | Accordion | 6 | 24 Q&As | 150+ |
| Login | Form | 1 | 5 | 60+ |
| Register | Form | 1 | 6 | 80+ |

## 🎯 User Journey Examples

### Journey 1: New Customer Exploring Services
```
/ (Home)
  → /services (View all services)
    → /gold-consignment (Learn about gold)
      → /prices (Check current prices)
        → /contact (Get in touch)
```

### Journey 2: Potential Institutional Client
```
/ (Home)
  → /about (Learn about company)
    → /faq (Answer questions)
      → /register (Create account)
        → /login (Sign in)
```

### Journey 3: Diamond Seller Research
```
/ (Home)
  → /diamond-consignment (Explore service)
    → /prices (Check metal prices)
      → /faq (Learn process)
        → /contact (Request valuation)
```

## 🔗 Cross-Page Links

### Navigation Hierarchy
1. **Top Priority:** Navbar visible on all pages
2. **Secondary:** Footer links on all pages
3. **Tertiary:** In-page CTAs and links

### Internal Links
- Logo → Always returns to home
- Navbar items → Navigate to respective pages
- Footer links → Navigate to corresponding pages
- CTA buttons → Usually to /contact or /login
- Breadcrumbs → Show current page path

## 🎨 Visual Consistency

### Header Styling
- All pages use same Navbar component
- Logo scaling: 50px (normal) → 40px (scrolled)
- Consistent navigation dropdown style

### Page Layouts
- Consistent padding and margins
- Same color scheme throughout
- Matching button styles and animations
- Responsive grid layouts

### Typography Hierarchy
- H1: Page titles (Playfair, 2.5-3.5rem)
- H2: Section titles (Playfair, 2rem)
- H3: Subsection titles (Playfair, 1.5rem)
- Body: Inter regular font

### Footer Consistency
- Same footer on all pages
- Logo + links grid
- Copyright and registration info
- Responsive column layout

## 📱 Mobile Navigation

### Mobile Menu Structure
```
Hamburger Icon ☰
├── Home
├── Services
├── Consignment ▼
│   ├── Gold
│   ├── Diamond
│   └── Jewelry
├── Prices
├── About
├── FAQ
├── Contact
└── Login Button
```

### Touch Interactions
- 44px minimum tap targets
- Visible hover states
- Smooth drawer animations
- No hover-only content

## 🔄 Page Transitions

All pages use React Router for smooth transitions:
- No page reload
- Smooth scroll to top
- URL updates instantly
- Browser history works

## 📈 Content Organization

### Information Architecture
1. **Public Pages:** Accessible without login
2. **Auth Pages:** Login and Register
3. **Detailed Pages:** Consignment services (Gold, Diamond, Jewelry)
4. **Reference Pages:** About, FAQ, Prices
5. **Contact Page:** Lead capture

### Content Depth
- **Surface Level:** Home page overview
- **Intermediate:** Services, About, Prices pages
- **Deep Dive:** Consignment detail pages
- **Support:** FAQ, Contact pages

---

**Total Unique Pages:** 11
**Total Routes:** 11
**Navigation Paths:** 100+
**Internal Links:** 50+
