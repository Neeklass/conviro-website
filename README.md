# Conviro Marketing Website

Modern, performance-focused marketing website built with Astro and Tailwind CSS v4.

##  Design

- **Color Scheme**: Purple/Violet gradient theme (modern and professional)
- **Style**: Glassmorphism effects, animated backgrounds, smooth transitions
- **Features**: Animated blob backgrounds, gradient text effects, hover animations

##  Quick Start

```sh
# Install dependencies
npm install

# Start development server (opens at localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

##  Project Structure

```text
/
 src/
    content/
       config.json          # Content configuration (edit text here!)
    layouts/
       MainLayout.astro     # Main layout with nav & footer
    pages/
       index.astro          # Homepage with hero & services
    styles/
        global.css           # Tailwind CSS v4 import
 astro.config.mjs             # Astro configuration
 tailwind.config.ts           # Tailwind CSS v4 configuration
 package.json
```

##  Editing Content

All website content is managed in `src/content/config.json`:

```json
{
  "agencyName": "Conviro Marketing",
  "hero": {
    "title": "Wir machen Marketing messbar.",
    "subtitle": "Performance-Marketing für Firmen...",
    "cta": "Jetzt anfragen"
  },
  "services": [...]
}
```

Simply edit this file to update text across the entire site!

##  Key Features

- **Hero Section**: Full-screen hero with animated gradient backgrounds and stats
- **Services Grid**: Three service cards with hover effects and icons
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Astro for optimal loading speed
- **Modern Stack**: Tailwind CSS v4, TypeScript support

##  Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1
- **Language**: TypeScript
- **Package Manager**: npm

##  Adding New Pages

1. Create a new .astro file in `src/pages/`
2. Import and use MainLayout component
3. Add your content

Example:
```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout title="About" description="About us">
  <section class="py-20">
    <!-- Your content here -->
  </section>
</MainLayout>
```

##  Customizing Colors

The site uses purple/violet gradients. To change colors, edit the Tailwind classes in `src/pages/index.astro`:

- `purple-400`, `purple-500`, `purple-600` for primary colors
- `violet-400`, `violet-500`, `violet-600` for secondary colors
- `fuchsia-400`, `fuchsia-500` for accent colors

##  Common Issues

**Tailwind not working?**
- Make sure `tailwind.config.ts` exists
- Verify `global.css` has `@import "tailwindcss";` (v4 syntax)
- Restart dev server after config changes

**Missing description error?**
- All pages using MainLayout need both title and description props

##  Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [Astro Discord](https://astro.build/chat)
