# E-Cell IIT Delhi Website Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Modern Startup Aesthetics

Drawing inspiration from:
- **Linear** - Clean typography, bold section breaks, minimalist UI
- **Stripe** - Gradient accents, card-based layouts, micro-interactions
- **Y Combinator/Startup School** - Energetic orange/red accents, community focus

This approach reflects the entrepreneurial, innovation-driven nature of E-Cell while maintaining professional credibility suitable for IIT Delhi.

## Core Design Principles

1. **Bold & Energetic** - Convey startup energy and innovation
2. **Clean & Modern** - Professional aesthetic befitting IIT Delhi's reputation
3. **Community-Focused** - Highlight people, events, and achievements
4. **Action-Oriented** - Clear CTAs driving engagement

## Color Palette

### Dark Mode (Primary)
- **Background**: 15 5% 8% (deep charcoal)
- **Surface**: 15 5% 12% (elevated surfaces)
- **Primary Brand**: 25 95% 55% (vibrant orange - entrepreneurial energy)
- **Secondary**: 220 70% 55% (electric blue - innovation)
- **Accent**: 340 75% 55% (energetic coral - sparingly for CTAs)
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 0 0% 70%

### Light Mode
- **Background**: 30 15% 98%
- **Surface**: 0 0% 100%
- **Primary Brand**: 25 90% 50%
- **Text Primary**: 15 10% 15%
- **Text Secondary**: 15 5% 40%

## Typography

**Font Stack:**
- **Headings**: 'Inter' (700-900 weight) - Bold, modern, tech-forward
- **Body**: 'Inter' (400-600 weight) - Excellent readability
- **Accents**: 'Space Grotesk' (500-700) - For stats, numbers, special callouts

**Scale:**
- Hero Headline: text-6xl to text-7xl (bold)
- Section Headers: text-4xl to text-5xl (bold)
- Card Titles: text-xl to text-2xl (semibold)
- Body Text: text-base to text-lg (normal)
- Small Text: text-sm (secondary color)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8, p-12
- Section spacing: py-20, py-24, py-32
- Card gaps: gap-8, gap-12
- Micro-spacing: m-4, space-y-4

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl mx-auto
- Content containers: max-w-6xl
- Text content: max-w-4xl
- Multi-column grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
- Sticky top bar (backdrop-blur-lg with bg-opacity-90)
- Clean horizontal links with hover underline animation
- Mobile: Hamburger menu expanding to full-screen overlay

### Hero Section
**Large Hero Image:** Yes - Full-screen hero with diagonal gradient overlay
- Image: Dynamic startup environment (team collaborating, innovation lab, IIT Delhi campus energy)
- Gradient overlay: from-orange-600/20 via-transparent to-transparent
- Typography: Massive headline (text-6xl lg:text-7xl) with animated gradient text effect on "Entrepreneurship"
- Dual CTAs: Solid primary button + outline secondary with backdrop-blur

### Cards
**Initiative Cards:**
- Rounded-2xl with hover lift (translateY(-8px))
- Border glow effect on hover (border-orange-500/30)
- Image top, content below with gradient background
- Subtle shadow: shadow-xl shadow-orange-500/10

**Team Cards:**
- Rounded-lg with team member photo
- Minimal border, clean typography
- Role badge with subtle color background

**Stats Cards:**
- Extra large numbers (text-5xl to text-6xl) with gradient
- Counter animation on scroll into view
- Light background glow effect

### Buttons
- **Primary CTA:** bg-orange-500 with hover:bg-orange-600, rounded-lg, px-8 py-4
- **Secondary CTA (on images):** variant="outline" with backdrop-blur-md bg-white/10, NO custom hover states
- **Tertiary:** Ghost style with arrow icon

### Gallery
- Masonry grid layout (3-4 columns desktop, 2 tablet, 1 mobile)
- Lightbox on click with smooth zoom transition
- Lazy loading for performance

### Footer
- Three-column layout (Quick Links | Connect | Newsletter)
- Social icons with hover color transitions
- Minimal divider lines

## Animations

Use sparingly for impact:
- **Hero:** Subtle parallax scroll on background image
- **Stats:** Count-up animation on scroll reveal (once)
- **Cards:** Fade-in + slide-up on scroll (stagger by 100ms)
- **Navigation:** Smooth backdrop blur transition on scroll
- **Buttons:** Subtle scale on hover (scale-105)
- **Preloader:** Fade out with 0.5s ease transition

**Avoid:** Excessive motion, auto-playing carousels, distracting background animations

## Images

### Required Images:
1. **Hero Background** - IIT Delhi innovation lab or team collaboration scene, modern and energetic
2. **About Section** - Team workshop or event photo showing community
3. **Initiative Cards (6)** - Each initiative needs representative imagery (hackathon, startup pitch, networking event)
4. **Past Speakers** - Logo grid or professional headshots in circular frames
5. **Team Section** - Professional headshots of coordinators
6. **BCON Banner** - Large event branding image
7. **Gallery** - 20+ event photos in masonry layout

### Image Treatment:
- Subtle gradient overlays on hero images
- Rounded corners (rounded-2xl) on cards
- Aspect ratio consistency: 16:9 for initiatives, 1:1 for team

## Responsive Breakpoints

- **Mobile (<768px)**: Single column, stacked navigation, full-width cards
- **Tablet (768-1024px)**: Two-column grids, condensed spacing
- **Desktop (>1024px)**: Full multi-column layouts, generous whitespace

## Page-Specific Guidelines

**Homepage:** 7-8 sections (Hero, About, Stats, Initiatives, Speakers, Testimonials, CTA)
**About:** Vision/Mission text-heavy section + team grid
**Initiatives:** Detailed 3-column grid with expandable cards
**BCON:** Event hero + schedule timeline + sponsor logos
**Gallery:** Full masonry with filter tabs
**Contact:** Split layout - form left, info/map right

This comprehensive design creates a modern, energetic brand identity that positions E-Cell IIT Delhi as a leading innovation hub while maintaining professional credibility.