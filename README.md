# Pennington Dental - Services Submenu Options

This Next.js project showcases 3 modern submenu design options for the Services dropdown on the Pennington Dental Associates website. The main navigation matches the exact styling from the current website.

## 🎨 Design Specifications

- **Font**: Proxima Nova, sans-serif
- **Color**: rgb(55, 68, 109) - Navy blue
- **Main Menu**: Exact replica of current website
- **Focus**: Only the Services submenu dropdown variations

## 📋 Submenu Options

### Submenu Option 1: Categorized Grid
- **Layout**: 2-column grid with 4 service categories
- **Categories**: 
  - General Dentistry
  - Restorative
  - Cosmetic
  - Specialized Care
- **Features**: 
  - Clean organization by service type
  - Dental Implants submenu shown inline with arrows
  - Easy to scan and navigate

### Submenu Option 2: Alphabetical List
- **Layout**: 2-column alphabetical list (no categories)
- **Features**:
  - All services in alphabetical order
  - Dental Implants submenu appears on hover to the right
  - Simple and straightforward
  - Chevron indicator for submenu items

### Submenu Option 3: Three Column Layout
- **Layout**: 3 equal columns with vertical dividers
- **Features**:
  - Balanced distribution of services
  - Visual separation with dividers
  - Dental Implants submenu inline in middle column
  - Clean, organized appearance

## 🚀 Getting Started

### View Locally

The development server should already be running at:
```
http://localhost:3000
```

If not, run:
```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

1. Push this repository to GitHub:
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your site will be live in minutes!

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Font**: Proxima Nova (via Adobe Typekit)
- **Icons**: Lucide React
- **Language**: TypeScript

## 📱 Responsive Design

All submenu options include:
- Desktop navigation with hover-activated mega menus
- Mobile navigation with hamburger menu
- Touch-friendly mobile interactions
- Consistent styling across all screen sizes

## 🎯 Main Navigation (Consistent Across All Options)

- HOME
- MEET THE TEAM
- **SERVICES** (3 different dropdown options)
- NEW PATIENT INFO
- DENTAL MEMBERSHIP CLUB
- ARTICLES
- CONTACT US

## 📝 Customization

To customize the menu items, edit the `menuData` object in each component:

```typescript
// components/MenuSubmenuOption1.tsx (or 2, 3)
const menuData = {
  mainLinks: [
    { title: 'HOME', href: '/' },
    // ... more links
  ],
  services: {
    // Your service categories here
  },
};
```

### Change Colors

The Pennington blue color is defined as `rgb(55, 68, 109)`. To change it globally, use find and replace across the component files.

### Change Font

The font is set in `app/layout.tsx` and `app/globals.css`:
```css
font-family: proxima-nova, sans-serif;
```

## 🌐 Services Included

All submenus include these services:

**General/Preventive:**
- Dental Cleaning and Exams
- Dental Emergencies
- Nightguards

**Extractions:**
- Tooth Extractions
- Wisdom Teeth Removal

**Restorative:**
- Dental Implants (with submenu)
  - All on 4 Dental Implants
  - Implant Retained Dentures
  - Dentures
- Crowns
- Dental Bridges
- Periodontal Care and Treatment

**Cosmetic:**
- Smile Makeover
- Invisalign
- Cosmetic Bonding
- Teeth Whitening
- Veneers

**Specialized:**
- Sedation Dentistry

## 📄 License

This project is open source and available under the MIT License.

---

Built for Pennington Dental Associates • 2026
