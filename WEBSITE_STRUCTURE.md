# Kestrel Security - Multi-Page Website Structure

## 🌐 Website Overview

Your Kestrel Security consignment company website has been transformed from a single-page site into a comprehensive, professional multi-page application using **React Router**.

**Live URL:** http://localhost:5173/

## 📄 Pages & Routes

### Public Pages (Accessible to Everyone)

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home Page** | Hero section, about, services, team, contact |
| `/gold-consignment` | **Gold Consignment** | Detailed gold services - bullion, coins, doré, scrap |
| `/diamond-consignment` | **Diamond Consignment** | Diamond services - certified, rough, parcels |
| `/jewelry-consignment` | **Fine Jewellery & Watches** | Luxury jewelry and timepiece consignment |
| `/services` | **Services Overview** | All service offerings with detailed descriptions |
| `/about` | **About Kestrel** | Company history, values, certifications, timeline |
| `/prices` | **Live Prices** | Real-time precious metals pricing, estimator tool |
| `/contact` | **Contact Us** | Inquiry form and contact information |
| `/faq` | **Frequently Asked Questions** | Comprehensive Q&A across 6 categories |
| `/login` | **Client Login** | Sign in for existing clients |
| `/register` | **Create Account** | Register as individual, business, or institutional |

## 🎨 Design System

### Color Palette
- **Primary Gold:** `#c9a84c`
- **Gold Light:** `#e8c97a`
- **Gold Dark:** `#9a7a2e`
- **Dark Background:** `#1a1a1a`
- **Darker Background:** `#0f0f0f`
- **Off-white Text:** `#f5f0e8`

### Typography
- **Headers:** Playfair Display (serif)
- **Body Text:** Inter (sans-serif)
- **Font Sizes:** Responsive with clamp()

### Responsive Breakpoints
- **Desktop:** Full layout, dropdowns visible
- **Tablet:** `(max-width: 900px)` - adjusted spacing
- **Mobile:** `(max-width: 600px)` - stacked layout
- **Small Mobile:** `(max-width: 400px)` - compact design

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Main navigation with dropdowns
│   ├── Navbar.css
│   ├── Footer.jsx              # Footer with links and branding
│   ├── Footer.css
│   ├── Hero.jsx                # Homepage hero section
│   ├── Hero.css
│   ├── About.jsx               # About section
│   ├── About.css
│   ├── Services.jsx            # Services cards
│   ├── Services.css
│   ├── Team.jsx                # Team members
│   ├── Team.css
│   ├── Contact.jsx             # Contact form
│   └── Contact.css
├── pages/
│   ├── HomePage.jsx            # Home page layout
│   ├── GoldConsignment.jsx      # Gold services page (280+ lines)
│   ├── DiamondConsignment.jsx   # Diamond services page (280+ lines)
│   ├── JewelryConsignment.jsx   # Jewelry services page (280+ lines)
│   ├── AboutPage.jsx           # Expanded about page
│   ├── AboutPage.css
│   ├── ServicesPage.jsx        # Services overview
│   ├── PricesPage.jsx          # Live prices page
│   ├── PricesPage.css
│   ├── ContactPage.jsx         # Contact page wrapper
│   ├── FAQPage.jsx             # FAQ with accordion (100+ items)
│   ├── FAQPage.css
│   ├── LoginPage.jsx           # Client login form
│   ├── RegisterPage.jsx        # Registration form
│   ├── AuthPages.css           # Auth page styling
│   ├── ConsignmentPages.css    # Shared consignment page styles
│   └── ... (more pages)
├── App.jsx                     # React Router setup
├── main.jsx                    # Entry point
├── index.css                   # Global design system
└── App.css                     # Main app styles
```

## 🔄 Navigation Structure

### Navbar Features
- **Logo:** Your uploaded logo image with responsive sizing
- **Desktop Menu:** Horizontal layout with dropdown submenus
- **Mobile Menu:** Hamburger menu that expands into drawer
- **Dropdowns:** "Consignment" dropdown shows Gold, Diamond, Jewelry options
- **Login Button:** Top-right CTA button linking to /login

### Navbar Responsive
- **Normal:** Logo 50px, full menu visible
- **Scrolled:** Logo shrinks to 40px
- **Mobile (< 900px):** Hamburger menu appears, nav hides
- **Small Mobile:** All text and logo scale down further

### Footer Links
- **Services:** Gold, Diamond, Jewelry, Pricing
- **Company:** About, Contact, FAQ, Careers
- **Legal:** Privacy, Terms, AML, Compliance

## 📄 Page Details

### Consignment Pages (Gold, Diamond, Jewelry)
Each consignment page includes:
- **Hero Banner:** Large background image with overlay
- **Introduction:** Why choose Kestrel for this asset type
- **Types Accepted:** Grid of card showing asset categories
- **Process Steps:** 5-step numbered process
- **Features:** 4-column feature grid with icons
- **Pricing Table:** Transparent fee structure
- **CTA Section:** Call-to-action buttons

### About Page
- Company values (6 core values)
- Certifications & memberships grid
- Historical timeline (6 milestones from 2010-2026)

### FAQ Page
- 6 categories with expandable accordions
- 24+ Q&A items covering all common questions
- Smooth expand/collapse animations
- Contact CTA at bottom

### Prices Page
- Live price display for 4 metals
- Price indicators (up/down with colors)
- Educational info grid (6 sections)
- Simple price estimator tool

### Auth Pages (Login/Register)
- Professional form layouts
- Email, password, account type fields
- Remember me / Forgot password options
- Form validation states
- Links between login and register

## 🎯 Key Features

### ✅ Fully Responsive
- Mobile-first design approach
- Touch-friendly buttons and links
- Responsive images and typography
- Optimized for all screen sizes

### ✅ Professional Styling
- Gold/navy luxury aesthetic
- Smooth animations and transitions
- Hover effects on buttons and cards
- Icon integration with react-icons

### ✅ Rich Content
- Professional descriptions
- Real-world pricing information
- Historical timelines
- Feature highlights with icons

### ✅ User Experience
- Smooth page transitions
- Clear navigation hierarchy
- Intuitive dropdown menus
- Fast-loading with optimized images

### ✅ SEO-Ready Structure
- Proper heading hierarchy (H1-H4)
- Semantic HTML elements
- Meaningful page titles
- Clean URL structure

## 🔧 Technologies Used

- **Framework:** React 18.2.0
- **Routing:** React Router DOM v6
- **Build Tool:** Vite (fast development)
- **Styling:** Custom CSS with CSS variables
- **Icons:** React Icons (FaXXX icons)
- **Images:** Unsplash CDN

## 🚀 Running the Website

```bash
# Development server
npm run dev

# Production build
npm build

# Preview production build
npm preview
```

The website runs on **http://localhost:5173/** and automatically reloads on code changes.

## 📚 Component Reusability

### Shared Components
- `Navbar` - Used on all pages
- `Footer` - Used on all pages
- `Hero` - Reusable hero section component
- `Contact` - Contact form component

### Shared Styles
- `index.css` - Global design system (colors, typography, buttons)
- `ConsignmentPages.css` - Shared styles for Gold/Diamond/Jewelry pages
- `AuthPages.css` - Shared styles for Login/Register pages

## 🔐 Security Considerations

### Current State
- No backend authentication implemented yet
- Login/Register forms are UI-only (no database)
- Forms don't submit anywhere currently

### Next Steps for Production
1. Create Django backend with user authentication
2. Implement JWT token-based auth
3. Add form validation and submission
4. Connect to PostgreSQL database
5. Add role-based access control (RBAC)

## 📱 Mobile Optimization

All pages are fully responsive with:
- **320px+:** Full mobile support
- **768px+:** Tablet optimizations
- **1200px+:** Desktop full layout
- Touch-friendly click targets (44px minimum)
- Fast-loading images with proper sizing

## 🎯 Next Development Phases

### Phase 1 (Recommended Next)
- [ ] Create Django backend project
- [ ] Set up PostgreSQL database
- [ ] Implement user authentication
- [ ] Build admin dashboard

### Phase 2
- [ ] Customer dashboard for tracking consignments
- [ ] File upload for asset photos
- [ ] Real consignment form submission
- [ ] Email notifications

### Phase 3
- [ ] Live price integration (third-party API)
- [ ] Payment processing
- [ ] Shipment tracking module
- [ ] Advanced analytics

### Phase 4
- [ ] Mobile app (React Native)
- [ ] Admin portal
- [ ] Logistics management system
- [ ] Reporting and compliance tools

## 📞 Support & Customization

Each page is fully customizable. To make changes:

1. **Edit page content:** Modify text in respective JSX file
2. **Update styling:** Edit corresponding .css file
3. **Add new page:** Create new .jsx file in `/pages`, import in App.jsx, add route
4. **Update navigation:** Modify NAV_LINKS in Navbar.jsx

## 🎨 Brand Assets

- **Logo:** `/public/4.jpeg` (Your uploaded logo)
- **Images:** All from Unsplash CDN (free, high-quality)
- **Colors:** Gold and navy luxury aesthetic
- **Fonts:** Google Fonts (Playfair Display + Inter)

---

**Status:** ✅ Complete Multi-Page Website
**Ready For:** Further backend development or deployment
**Total Pages:** 11 unique routes + components
