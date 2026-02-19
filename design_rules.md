# Design System Rules - Modern Blog Black

## Color Palette (Dark Theme)

### Primary Colors
- **Background Primary**: #090d1f (deep navy blue)
- **Background Secondary**: #12162e (slightly lighter navy)
- **Background Tertiary**: #1a1f35 (medium navy)
- **Text Primary**: #ffffff (white)
- **Text Secondary**: #a3a3a3 (light gray)
- **Text Muted**: #737373 (muted gray)

### Accent Colors
- **Accent Primary**: #6366f1 (indigo-500)
- **Accent Hover**: #4f46e5 (indigo-600)
- **Accent Light**: #818cf8 (indigo-400)

### Border Colors
- **Border Default**: #1a1f35
- **Border Hover**: #2d3352

## Typography

### Font Families
- **Primary**: Inter, system-ui, -apple-system, sans-serif
- **Mono**: JetBrains Mono, Fira Code, monospace

### Type Scale
- **Hero**: 3rem (48px), font-bold, tracking-tight, line-height: 1.1
- **H1**: 2.5rem (40px), font-bold, tracking-tight, line-height: 1.2
- **H2**: 1.875rem (30px), font-semibold, tracking-tight, line-height: 1.3
- **H3**: 1.5rem (24px), font-semibold, line-height: 1.4
- **Body Large**: 1.125rem (18px), line-height: 1.75
- **Body**: 1rem (16px), line-height: 1.6
- **Small**: 0.875rem (14px), line-height: 1.5
- **Caption**: 0.75rem (12px), line-height: 1.4

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System

### Container
- **Max Width**: 1440px
- **Padding X**: 112px (desktop), responsive on mobile
- **Section Padding Y**: py-16 (64px mobile), lg:py-24 (96px desktop)

### Component Spacing
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 3rem (48px)

## Components

### Header
- **Background**: #090d1f
- **Height**: 120px total (60px navbar content + padding)
- **Padding**: 30px top/bottom, 112px left/right
- **Brand**: "Your Name", Inter, 20px, font-weight 600, white
- **Nav Items**: Blog, Projects, About, Newsletter
- **Toggle Mode**: White bg, rounded-full (29px), sun/moon icons

### Buttons
**Primary Button**
- Background: #6366f1 (indigo-500)
- Text: white
- Padding: px-6 py-3
- Border Radius: rounded-lg
- Hover: bg-indigo-600, scale-[1.02]
- Transition: all 200ms ease

**Secondary Button**
- Background: transparent
- Border: 1px solid #1a1f35
- Text: #ffffff
- Hover: bg-white/5, border-gray-500

**Ghost Button**
- Background: transparent
- Text: #a3a3a3
- Hover: text-white

### Cards
- Background: #12162e
- Border Radius: rounded-xl
- Border: 1px solid #1a1f35
- Shadow: none (flat design)
- Hover: border-gray-600, subtle glow

### Input Fields
- Background: #090d1f
- Border: 1px solid #1a1f35
- Border Radius: rounded-lg
- Text: white
- Placeholder: #737373
- Focus: border-indigo-500, ring-2 ring-indigo-500/20
- Padding: px-4 py-3

### Navigation
- Background: #090d1f
- Height: 60px navbar
- Layout: space-between
- Text: Inter 20px, weight 400

## Layout Patterns

### Header Layout
- Container: max-w-[1440px], px-[112px]
- Navbar: flex, justify-between, h-[60px]
- Left: Brand name
- Right: Menu items + Toggle button

### Blog Article Layout
- Container: max-w-6xl, mx-auto, px-[112px]
- Header: Title + metadata row
- Content: prose prose-invert prose-lg
- Images: rounded-xl, my-8

### Newsletter Section
- Background: #090d1f with gradient overlay
- Padding: py-16
- Border Radius: rounded-2xl
- Centered content, max-w-xl

## Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: sm (640px+)
- **Desktop**: lg (1024px+)
- **Wide**: xl (1280px+)

## Assets
Use local paths from `/figma/` directory for all images and assets.

## Animations
- **Transitions**: duration-200 ease-out
- **Hover Scale**: scale-[1.02]
- **Fade In**: opacity-0 → opacity-100, duration-500
- **Slide Up**: translate-y-4 → translate-y-0

## Routes
- `/` - Home (Blog Detail)
- `/blog` - Blog listing
- `/projects` - Projects page
- `/about` - About page

## DaisyUI Configuration
```javascript
themes: [
  {
    dark: {
      primary: '#6366f1',
      secondary: '#1a1f35',
      accent: '#818cf8',
      neutral: '#12162e',
      'base-100': '#090d1f',
      'base-200': '#12162e',
      'base-300': '#1a1f35',
      info: '#3b82f6',
      success: '#22c55e',
      warning: '#eab308',
      error: '#ef4444',
    }
  }
]
```
