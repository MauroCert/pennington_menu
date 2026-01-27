# Pennington Dental Menu Options

This Next.js project showcases 3 modern menu design options for the Pennington Dental Associates website.

## 🎨 Menu Options

### Option 1: Clean Mega Menu
- **Layout**: 2-column grid with 4 service categories
- **Features**: 
  - Grouped services by type (General Dentistry, Restorative, Cosmetic, Specialized Care)
  - Dental Implants submenu displayed inline
  - Hover animations with dot indicators
  - Clean, professional design

### Option 2: Featured Services Layout
- **Layout**: Two-section mega menu (Featured | All Services)
- **Features**:
  - Left side highlights featured services with gradient cards
  - Right side shows all services in organized categories
  - Dental Implants submenu appears on hover to the right
  - Modern card-based design with descriptions

### Option 3: Interactive Tabbed Menu
- **Layout**: Sidebar tabs with content area
- **Features**:
  - Icon-based category navigation
  - Color-coded sections with unique gradients
  - Popular services highlighted with badges
  - Interactive tab switching on hover
  - Visual hierarchy with icons

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the menu options.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your site will be live in minutes!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 📱 Responsive Design

All menu options include:
- Desktop navigation with mega menus
- Mobile navigation with hamburger menu
- Fully responsive layouts
- Touch-friendly mobile interactions

## 📝 Customization

To customize the menus:

1. Edit the `menuData` object in each component (`components/MenuOption1.tsx`, etc.)
2. Modify colors in the Tailwind classes
3. Adjust spacing, shadows, and animations as needed
4. Update links to match your actual page routes

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ for Pennington Dental Associates
