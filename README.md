# Kestrel Security - Consignment Website

A professional React website for Kestrel Security, a premier consignment company specializing in gold, diamonds, and high-value assets.

## Design Inspiration

This website draws design inspiration from [EmmaGold Ghana](https://www.emmagoldghana.com/), featuring:
- Luxury dark/gold color scheme
- Professional layout with hero section, about, services, team, and contact
- Responsive mobile-first design
- Smooth animations and transitions

## Features

- **Hero Section**: Full-screen landing with company tagline, CTA buttons, and key statistics
- **About Section**: Company mission, vision, and core values
- **Services**: Detailed breakdown of consignment services for gold, diamonds, jewellery, and institutional clients
- **Team**: Leadership profiles
- **Contact Form**: Fully functional enquiry form with validation
- **Responsive Navigation**: Mobile hamburger menu with smooth animations

## Tech Stack

- React 18
- Vite (build tool)
- Custom CSS (no frameworks)
- React Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
kestrel-security/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── Team.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx / .css
│   ├── index.css (global styles)
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Color Palette

- **Gold**: #c9a84c (primary accent)
- **Black**: #0a0a0a (background)
- **Dark**: #111111, #181818 (cards)
- **Off-white**: #f5f0e8 (text)

## Typography

- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

## Customization

- Update company details in component files
- Modify colors in `src/index.css` CSS variables
- Replace hero background image in `Hero.css`
- Update team members in `src/components/Team.jsx`

## License

Proprietary - Kestrel Security © 2026
