# Customization Guide

## Quick Start Customization

### 1. Update Colors

All menus use consistent color variables. To change the primary blue color:

```tsx
// Find and replace in components:
blue-600  → your-color-600
blue-700  → your-color-700
blue-50   → your-color-50
blue-100  → your-color-100
```

#### Tailwind Colors Available
- `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, 
- `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

### 2. Change Menu Items

Edit the `menuData` object in each component:

```tsx
// Example: components/MenuOption1.tsx
const menuData = {
  mainLinks: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },  // Edit here
  ],
  services: {
    'Your Category': [                    // Edit category name
      { title: 'Your Service', href: '/service' },  // Edit services
    ],
  },
};
```

### 3. Add Your Logo

Replace the text logo with an image:

```tsx
// In each MenuOption component, replace:
<span className="text-xl font-bold text-gray-800">Pennington Dental</span>

// With:
<Image 
  src="/logo.png" 
  alt="Your Logo" 
  width={200} 
  height={50}
  priority
/>
```

Then add your logo to the `public` folder.

---

## Detailed Customizations

### Option 1: Clean Mega Menu

#### Change Grid Layout
```tsx
// Change from 2 columns to 3 columns:
<div className="grid grid-cols-3 gap-8">  {/* was grid-cols-2 */}
```

#### Adjust Mega Menu Width
```tsx
// Make it narrower or wider:
<div className="... w-[900px]">  {/* default: 720px */}
```

#### Modify Hover Effects
```tsx
// Change dot color:
<span className="... bg-green-600">  {/* was bg-blue-600 */}

// Remove dots entirely:
// Delete the span element
```

---

### Option 2: Featured Services

#### Change Featured Services
```tsx
featured: [
  { 
    title: 'Your Featured Service',        // Change these
    href: '/your-service',
    description: 'Your description here',  // Add custom description
  },
]
```

#### Adjust Featured/All Services Split
```tsx
// Change width ratio:
<div className="w-1/3 ...">     {/* Featured section: 33% */}
<div className="w-2/3 ...">     {/* All services: 67% */}

// Try: w-1/2 and w-1/2 for equal split
// Try: w-2/5 and w-3/5 for 40/60 split
```

#### Change Gradient Colors
```tsx
// Featured section background:
<div className="... from-blue-50 to-blue-100">
// Try: from-purple-50 to-pink-100
// Try: from-green-50 to-emerald-100
```

---

### Option 3: Interactive Tabbed Menu

#### Change Category Icons
```tsx
import { Shield, Stethoscope, Sparkles, Smile, Heart, Star } from 'lucide-react';

// Then update in menuData:
icon: Heart,  // was Shield
```

[Browse all icons at lucide.dev](https://lucide.dev)

#### Change Icon Colors
```tsx
// In menuData:
iconColor: 'text-purple-600',  // was text-green-600
color: 'from-purple-50 to-pink-50',  // gradient background
```

#### Add More Categories
```tsx
services: [
  // ... existing categories ...
  {
    category: 'New Category',
    icon: YourIcon,
    color: 'from-gray-50 to-slate-50',
    iconColor: 'text-gray-600',
    items: [
      { title: 'Service 1', href: '/service1' },
    ]
  },
]
```

#### Remove Popular Badges
```tsx
// Find and remove this code:
{item.highlight && (
  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
    Popular
  </span>
)}
```

---

## Global Customizations

### Change Font

1. Update `app/layout.tsx`:
```tsx
import { Inter, Roboto, Open_Sans } from 'next/font/google';

const font = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
});
```

2. Or use a custom font:
```tsx
// Add to app/globals.css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/your-font.woff2');
}

// Then in tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      sans: ['YourFont', 'sans-serif'],
    },
  },
}
```

### Add Shadows
```tsx
// Stronger shadow:
className="... shadow-2xl"

// Custom shadow in globals.css:
.custom-shadow {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
```

### Adjust Animations
```tsx
// Faster transitions:
className="... transition-all duration-100"  // was duration-200

// Smoother hover:
className="... hover:scale-105 transition-transform"

// Add bounce:
className="... hover:animate-bounce"
```

### Rounded Corners
```tsx
// More rounded:
className="... rounded-xl"  // was rounded-lg

// Less rounded:
className="... rounded-md"

// Fully rounded (pills):
className="... rounded-full"
```

---

## Mobile Customizations

### Change Breakpoint
```tsx
// Make mobile menu appear at different screen size:
// Default: lg:hidden (hidden on screens >= 1024px)

// Use md: instead (768px):
className="md:hidden"
className="hidden md:flex"

// Use xl: instead (1280px):
className="xl:hidden"
className="hidden xl:flex"
```

### Adjust Mobile Menu Height
```tsx
// Mobile header:
<div className="... h-16">  // default height

// Try: h-20 for taller header
```

---

## Advanced Customizations

### Add Search to Menu
```tsx
import { Search } from 'lucide-react';

// Add to desktop menu:
<div className="flex items-center space-x-4">
  <div className="relative">
    <input 
      type="text"
      placeholder="Search services..."
      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
    />
    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
  </div>
</div>
```

### Add Mega Menu Images
```tsx
// Add images to categories:
import Image from 'next/image';

<div className="flex items-center space-x-3">
  <Image 
    src="/images/service-icon.jpg" 
    alt="" 
    width={40} 
    height={40}
    className="rounded-lg"
  />
  <span>{item.title}</span>
</div>
```

### Add Contact Info to Menu
```tsx
// Add to right side of desktop menu:
<div className="flex items-center space-x-6">
  <a href="tel:609-737-0288" className="flex items-center text-gray-700">
    <Phone className="w-4 h-4 mr-2" />
    (609) 737-0288
  </a>
  <a href="/book" className="...">Book Appointment</a>
</div>
```

### Add Dropdown Delay
```tsx
// Prevent accidental menu closes:
const [showMenu, setShowMenu] = useState(false);
const timeoutRef = useRef<NodeJS.Timeout>();

const handleMouseEnter = () => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  setShowMenu(true);
};

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setShowMenu(false);
  }, 300); // 300ms delay
};
```

---

## Testing Your Changes

1. **Development Server**
   ```bash
   npm run dev
   ```

2. **Check Mobile**
   - Open browser DevTools (F12)
   - Click device toolbar icon
   - Test different screen sizes

3. **Check All Browsers**
   - Chrome
   - Safari
   - Firefox
   - Edge

4. **Test Accessibility**
   - Tab through menu with keyboard
   - Test with screen reader
   - Check color contrast

---

## Common Issues

### Menu Not Showing
- Check z-index: `z-50` should be high enough
- Verify `opacity-0 invisible group-hover:opacity-100 group-hover:visible`

### Icons Not Loading
- Ensure `lucide-react` is installed: `npm install lucide-react`
- Check import statement

### Styles Not Applying
- Restart dev server: `npm run dev`
- Check for Tailwind class typos
- Verify Tailwind config includes your files

### Mobile Menu Not Opening
- Check state management: `isOpen` variable
- Verify button onClick handler
- Check conditional rendering

---

## Need More Help?

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Lucide Icons](https://lucide.dev)
- [React Docs](https://react.dev)
