# Quick Setup Guide

## Installation

### If npm is Working
```bash
npm install
npm run dev
```

### If npm is Too Slow (Network Issues)

**Option 1 - Enable yarn:**
```bash
npm install -g yarn
yarn install
yarn dev
```

**Option 2 - Use a different npm registry:**
```bash
npm config set registry https://registry.npmmirror.com
npm install
npm run dev
```

**Option 3 - Manual download node_modules:**
If npm keeps failing, you can manually download a pre-built node_modules folder from a working machine or use a different internet connection.

## Immediate Testing

If npm is too slow, you can also use **Yarn** or **pnpm** which are often faster:

```bash
# Using Yarn
yarn install
yarn dev

# Using pnpm
pnpm install
pnpm dev
```

## What's Included

✅ Complete React website with 6 sections
✅ Luxury dark/gold theme inspired by EmmaGold Ghana
✅ Fully responsive mobile design
✅ Hero, About, Services, Team, Contact, Footer
✅ Working contact form with validation
✅ Smooth animations and transitions

## File Structure

All files are ready:
- ✅ index.html
- ✅ package.json
- ✅ vite.config.js
- ✅ src/main.jsx, App.jsx, index.css
- ✅ All 6 components (Navbar, Hero, About, Services, Team, Contact, Footer)
- ✅ All component CSS files

## Once Running

Open http://localhost:5173 in your browser to see the website.

## Customization

Edit these files to customize:
- **Company Name**: src/components/Navbar.jsx, Footer.jsx
- **Colors**: src/index.css (CSS variables)
- **Content**: Each component file (Hero.jsx, About.jsx, etc.)
- **Team Members**: src/components/Team.jsx
