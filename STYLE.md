# Worldwide Acceptance Ministries - Design System & Style Guide

## Executive Summary

This comprehensive design system addresses critical issues identified across the site and establishes a cohesive, modern, and creative visual language that elevates the church's digital presence. This document serves as the single source of truth for all design decisions.

---

## 🎯 Identified Issues & Solutions

### Critical Issues Found:
1. **Navigation Chaos** - 11 links crammed into desktop header, overwhelming users
2. **Footer Layout Issues** - Content squished, inconsistent spacing, poor grid alignment
3. **Bland White Backgrounds** - Every page uses plain white, no visual interest or hierarchy
4. **Mobile Responsiveness** - Elements not optimized for all breakpoints
5. **Inconsistent Spacing** - Arbitrary padding/margins throughout
6. **Performance Concerns** - Heavy framer-motion usage, no image optimization strategy
7. **Typography Hierarchy** - Inconsistent heading sizes and weights
8. **Color Monotony** - Over-reliance on single gradient pattern

---

## 🎨 Enhanced Color Palette

### Primary Colors (Keep Existing)
```css
--primary-dark: #1e3a5f;    /* Deep Navy - Authority, Trust */
--primary: #2d4a6e;         /* Medium Navy */
--primary-light: #3d5a7e;   /* Light Navy */
```

### Accent Colors (Keep Existing)
```css
--accent: #d4af37;          /* Gold - Divine, Excellence */
--accent-light: #e5c158;    /* Light Gold */
```

### NEW: Extended Palette for Visual Interest
```css
/* Warm Neutrals - For rich backgrounds */
--warm-50: #fefbf3;         /* Cream white */
--warm-100: #fef6e7;        /* Light cream */
--warm-200: #fae8c8;        /* Warm beige */

/* Cool Neutrals - For contrast */
--cool-50: #f8fafc;         /* Cool white */
--cool-100: #f1f5f9;        /* Light blue-gray */
--cool-200: #e2e8f0;        /* Medium blue-gray */

/* Gradient Overlays */
--gradient-warm: linear-gradient(135deg, #fef6e7 0%, #fff 50%, #f8fafc 100%);
--gradient-cool: linear-gradient(135deg, #f8fafc 0%, #fff 50%, #fef6e7 100%);
--gradient-divine: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(30,58,95,0.05) 100%);

/* Spiritual Accents */
--spirit-purple: #9b87f5;   /* Gentle purple for spiritual themes */
--spirit-blue: #7dd3fc;     /* Sky blue for hope */
--spirit-green: #86efac;    /* Growth, renewal */
```

### Usage Guidelines:
- **Primary Dark**: Headers, navigation, footers, CTA buttons
- **Accent Gold**: Important highlights, icons, hover states, divine elements
- **Warm Neutrals**: Background sections, cards, welcoming areas
- **Cool Neutrals**: Alternate sections, create rhythm
- **Spiritual Accents**: Ministry cards, special events, testimonials

---

## 📐 Spacing System (8px Base)

Replace arbitrary spacing with a consistent scale:

```css
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 2.5rem;   /* 40px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-10: 5rem;    /* 80px */
--space-12: 6rem;    /* 96px */
--space-16: 8rem;    /* 128px */
--space-20: 10rem;   /* 160px */
```

### Section Spacing:
- **Mobile**: `py-12` (48px) to `py-16` (64px)
- **Tablet**: `py-16` (64px) to `py-20` (80px)
- **Desktop**: `py-20` (80px) to `py-32` (128px)

### Component Spacing:
- **Card padding**: `p-6` (mobile), `p-8` (tablet+)
- **Card gaps**: `gap-6` (mobile), `gap-8` (desktop)
- **Text blocks**: `mb-4` between paragraphs
- **Headings**: `mb-6` to `mb-8`

---

## 🔤 Typography System

### Font Families (Keep Existing)
```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
```

### Revised Type Scale
```css
/* Display - Hero sections only */
--text-display: 4rem;      /* 64px - Desktop hero */
--text-display-mobile: 2.5rem; /* 40px - Mobile hero */

/* Headings */
--text-h1: 3rem;           /* 48px - Page titles */
--text-h1-mobile: 2rem;    /* 32px */

--text-h2: 2.25rem;        /* 36px - Section titles */
--text-h2-mobile: 1.75rem; /* 28px */

--text-h3: 1.5rem;         /* 24px - Subsections */
--text-h3-mobile: 1.25rem; /* 20px */

--text-h4: 1.25rem;        /* 20px - Card titles */
--text-h4-mobile: 1.125rem;/* 18px */

/* Body */
--text-lg: 1.125rem;       /* 18px - Lead text */
--text-base: 1rem;         /* 16px - Body */
--text-sm: 0.875rem;       /* 14px - Secondary */
--text-xs: 0.75rem;        /* 12px - Captions */
```

### Font Weights:
```css
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

### Line Heights:
```css
--leading-tight: 1.25;     /* Headings */
--leading-snug: 1.375;     /* Subheadings */
--leading-normal: 1.5;     /* Body */
--leading-relaxed: 1.625;  /* Long-form content */
```

### Typography Classes Update:
```css
.heading-display {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

.heading-primary {
  font-size: clamp(2rem, 4vw, 3rem);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

.heading-secondary {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-family: var(--font-display);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

.heading-tertiary {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-family: var(--font-display);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

.text-lead {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  font-weight: var(--weight-normal);
}

.text-body {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--weight-normal);
}
```

---

## 🎭 Creative Background System

**Problem**: Every page uses plain white backgrounds with minimal variation.

**Solution**: Establish 5 distinct background patterns that rotate through sections.

### Pattern 1: Warm Divine
```css
.bg-pattern-warm-divine {
  background: linear-gradient(135deg, #fef6e7 0%, #fff 50%, #fefbf3 100%);
  position: relative;
}

.bg-pattern-warm-divine::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(30, 58, 95, 0.05) 0%, transparent 50%);
  pointer-events: none;
}
```

### Pattern 2: Cool Sanctuary
```css
.bg-pattern-cool-sanctuary {
  background: linear-gradient(135deg, #f8fafc 0%, #fff 50%, #f1f5f9 100%);
  position: relative;
}

.bg-pattern-cool-sanctuary::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 30% 40%, rgba(125, 211, 252, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(155, 135, 245, 0.08) 0%, transparent 40%);
}
```

### Pattern 3: Geometric Faith
```css
.bg-pattern-geometric {
  background-color: #fff;
  background-image:
    linear-gradient(30deg, rgba(212, 175, 55, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(212, 175, 55, 0.03) 87.5%, rgba(212, 175, 55, 0.03)),
    linear-gradient(150deg, rgba(212, 175, 55, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(212, 175, 55, 0.03) 87.5%, rgba(212, 175, 55, 0.03)),
    linear-gradient(30deg, rgba(30, 58, 95, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(30, 58, 95, 0.03) 87.5%, rgba(30, 58, 95, 0.03)),
    linear-gradient(150deg, rgba(30, 58, 95, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(30, 58, 95, 0.03) 87.5%, rgba(30, 58, 95, 0.03));
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px;
}
```

### Pattern 4: Radiant Cross
```css
.bg-pattern-radiant {
  background: radial-gradient(circle at 50% 50%, #fff 0%, #fef6e7 50%, #f8fafc 100%);
  position: relative;
}

.bg-pattern-radiant::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, transparent 49%, rgba(212, 175, 55, 0.05) 49%, rgba(212, 175, 55, 0.05) 51%, transparent 51%),
    linear-gradient(0deg, transparent 49%, rgba(212, 175, 55, 0.05) 49%, rgba(212, 175, 55, 0.05) 51%, transparent 51%);
  background-size: 200px 200px;
  opacity: 0.3;
}
```

### Pattern 5: Dotted Blessing
```css
.bg-pattern-dotted {
  background-color: #fefbf3;
  background-image: radial-gradient(circle, rgba(212, 175, 55, 0.15) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

### Section Pattern Assignment:
- **Hero**: Custom gradient with image
- **Welcome/Intro sections**: Pattern 1 (Warm Divine)
- **Content sections (odd)**: Pattern 2 (Cool Sanctuary)
- **Content sections (even)**: Pattern 3 (Geometric Faith)
- **CTA/Special sections**: Pattern 4 (Radiant Cross)
- **Testimonials/Cards**: Pattern 5 (Dotted Blessing)

---

## 🧭 Navigation System - COMPLETE REDESIGN

**Current Problem**: 11 links in a single row is overwhelming and unprofessional.

### Solution: Organized Dropdown Navigation

#### Desktop Navigation Structure:
```
Logo | About ▼ | Ministries ▼ | Connect ▼ | Media ▼ | [GIVE Button]
```

#### Dropdown Groups:

**About ▼**
- About Us
- Our Staff
- Our Beliefs

**Ministries ▼**
- All Ministries
- Children's Ministry
- Youth Ministry
- Counselling

**Connect ▼**
- Contact Us
- Events
- Prayer Requests
- Testimonies

**Media ▼**
- Watch Live
- Social Media

**Give** (Prominent CTA Button)
- Standalone accent button

### Header Layout Specs:
```css
/* Desktop Header (1024px+) */
.header-desktop {
  height: 80px;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 3rem;
}

.nav-logo {
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.nav-cta {
  /* Gold "Give" button */
  min-width: 120px;
}

/* Dropdown Menus */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  padding: 1rem 0;
  min-width: 200px;
  margin-top: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background: rgba(212, 175, 55, 0.08);
  color: #d4af37;
  padding-left: 2rem;
}
```

### Mobile Navigation:
- Keep hamburger menu
- Full-screen overlay with larger touch targets
- Accordion-style dropdowns
- Minimum touch target: 44x44px

---

## 🦶 Footer - COMPLETE REDESIGN

**Current Problems**:
- Quick Links grid is cramped (2 columns in tiny space)
- Uneven column widths
- Poor responsive behavior
- Social links feel disconnected

### Solution: Balanced 4-Column Grid

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Logo + Tagline]     [Quick Links]    [Contact]   [Connect] │
│  Wider column         Normal column    Normal col  Normal col│
│                                                               │
└───────────────────────────────────────────────────────────────┘
                        [Copyright Bar]
```

### Footer Grid Specs:
```css
/* Desktop Footer (1024px+) */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr;
  gap: 3rem;
  padding: 4rem 2rem;
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 1.5rem;
  }
}
```

### Footer Column Content:

**Column 1: Brand (2fr)**
```
[Church Icon] Worldwide Acceptance Ministries
Come worship with us and grow in faith together.
[Optional: Small image or scripture]
```

**Column 2: Quick Links (1.5fr)**
```
Quick Links
─────────
Home
About
Our Staff
Ministries
Events
Watch Live
```
**Single column list, better spacing**

**Column 3: Contact (1.5fr)**
```
Contact Us
─────────
📞 +1 (403) 681-4688
✉️ worldwideacceptanceministry@yahoo.com
📍 Unit 40, 2333 18 Ave NE
    Calgary, AB T2E 8T6
🕐 Mon-Thu: 9AM - 3PM
```

**Column 4: Connect (1.5fr)**
```
Stay Connected
─────────
[Facebook Icon] Church Facebook
[Facebook Icon] Pastor's Page
[YouTube Icon] YouTube Channel

[Prayer Requests Button]
[Give Now Button]
```

### Footer Styling:
```css
.footer {
  background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6e 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d4af37 0%, #e5c158 50%, #d4af37 100%);
}

.footer-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: #d4af37;
  padding-left: 0.5rem;
}

.footer-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
  color: #d4af37;
}

.copyright-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}
```

---

## 🎴 Card System

### Card Variants:

#### 1. Standard Card
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}
```

#### 2. Ministry Card
```css
.card-ministry {
  background: linear-gradient(135deg, white 0%, #fef6e7 100%);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.card-ministry::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
}
```

#### 3. Event Card
```css
.card-event {
  background: white;
  border-left: 4px solid #d4af37;
  border-radius: 12px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
}

.event-date {
  background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6e 100%);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  min-width: 80px;
}
```

#### 4. Testimony Card
```css
.card-testimony {
  background: linear-gradient(135deg, #f8fafc 0%, white 100%);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  border-top: 3px solid #d4af37;
}

.card-testimony::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: rgba(212, 175, 55, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}
```

---

## 🎬 Animation Guidelines (Performance Optimized)

**Current Issue**: Overuse of framer-motion on every element

### Revised Animation Strategy:

#### DO Animate:
- Hero sections (page load)
- Navigation interactions
- Button hovers
- Modal/dialog appearances
- Important CTAs

#### DON'T Animate:
- Static text blocks
- Footer content
- List items beyond the first 3
- Background patterns
- Icons in body content

### Performance-First Animations:
```css
/* Use CSS transforms instead of framer-motion where possible */

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animations with CSS delay */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
.card:nth-child(4) { animation-delay: 300ms; }
```

### Framer-Motion Guidelines:
```jsx
// Only use framer-motion for complex interactions
// Use whileInView sparingly - limit to section headers only

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }} // Optimize viewport detection
  transition={{ duration: 0.6 }}
>
```

---

## 🖼️ Image Optimization

### Next.js Image Component Standards:
```jsx
<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  quality={85}
  loading="lazy" // except hero images
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Image Specifications:
- **Hero Images**: 1920x1080px, JPEG, 85% quality, ~200KB
- **Card Images**: 800x600px, JPEG, 80% quality, ~100KB
- **Thumbnails**: 400x300px, JPEG, 75% quality, ~40KB
- **Icons**: Use Lucide React (already implemented) ✓

### Image Formats:
- Use WebP with JPEG fallback
- Consider AVIF for modern browsers
- Serve responsive images via Next.js Image API

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small: 0 - 639px */
/* Mobile phones */

/* Small: 640px - 767px */
@media (min-width: 640px) {
  /* Large phones, small tablets */
}

/* Medium: 768px - 1023px */
@media (min-width: 768px) {
  /* Tablets */
}

/* Large: 1024px - 1279px */
@media (min-width: 1024px) {
  /* Small laptops */
}

/* Extra Large: 1280px+ */
@media (min-width: 1280px) {
  /* Desktops */
}

/* 2XL: 1536px+ */
@media (min-width: 1536px) {
  /* Large desktops */
}
```

### Container Max-Widths:
```css
.container-custom {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 768px) {
  .container-custom {
    max-width: 768px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container-custom {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container-custom {
    max-width: 1400px; /* Don't go too wide */
  }
}
```

---

## 🎯 Component-Specific Guidelines

### Hero Section:
```css
.hero {
  min-height: 100vh;
  height: 100vh;
  max-height: 900px; /* Don't let it get too tall on ultrawide */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

@media (max-width: 767px) {
  .hero {
    min-height: 600px;
    height: auto;
    padding: 6rem 1rem;
  }
}
```

### Section Headers:
```jsx
<div className="text-center mb-12 md:mb-16 relative">
  <h2 className="heading-primary mb-4">
    Section Title
  </h2>
  <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-4"></div>
  <p className="text-lead text-gray-600 max-w-2xl mx-auto">
    Descriptive subtitle that provides context
  </p>
</div>
```

### Button System:
```css
/* Primary Button - Gold gradient */
.btn-primary {
  background: linear-gradient(135deg, #d4af37 0%, #e5c158 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  background: linear-gradient(135deg, #e5c158 0%, #d4af37 100%);
}

/* Secondary Button - Navy */
.btn-secondary {
  background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6e 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #2d4a6e 0%, #3d5a7e 100%);
  transform: translateY(-2px);
}

/* Outline Button */
.btn-outline {
  background: transparent;
  color: #1e3a5f;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  border: 2px solid #1e3a5f;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #1e3a5f;
  color: white;
  transform: translateY(-2px);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: inherit;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: rgba(212, 175, 55, 0.1);
  color: #d4af37;
}
```

### Form Inputs:
```css
.input-field {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: var(--font-body);
  transition: all 0.2s ease;
  background: #fafafa;
}

.input-field:focus {
  outline: none;
  border-color: #d4af37;
  background: white;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.input-field::placeholder {
  color: #94a3b8;
}

.input-error {
  border-color: #ef4444;
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

---

## ⚡ Performance Optimization Checklist

### Critical Optimizations:

1. **Reduce Framer-Motion Usage**
   - Replace decorative animations with CSS
   - Limit `whileInView` to 3-5 elements per page maximum
   - Use `viewport={{ once: true }}` always
   - Consider removing animations from cards beyond 4th item

2. **Image Optimization**
   - Convert all images to WebP
   - Implement lazy loading (except hero)
   - Use Next.js Image component everywhere
   - Compress images: Hero (<200KB), Cards (<100KB)

3. **Font Loading**
   ```jsx
   // Already using next/font/google - Good! ✓
   // Add display: swap for better performance
   const playfair = Playfair_Display({
     subsets: ['latin'],
     display: 'swap', // Add this
     variable: '--font-playfair',
   })
   ```

4. **Bundle Size**
   - Audit framer-motion usage
   - Consider splitting heavy components
   - Lazy load non-critical components:
   ```jsx
   const BeliefsSlideshow = dynamic(() => import('@/components/BeliefsSlideshow'), {
     loading: () => <div>Loading...</div>,
     ssr: false,
   })
   ```

5. **CSS Optimization**
   - Move repeated gradient strings to CSS variables
   - Reduce use of `backdrop-blur` (expensive on mobile)
   - Limit `box-shadow` complexity

6. **JavaScript**
   - Debounce scroll handlers
   - Use `IntersectionObserver` for scroll-triggered animations
   - Minimize state updates in Header component

---

## 📋 Implementation Priority

### Phase 1: Critical Fixes (Week 1)
1. ✅ Redesign navigation with dropdowns
2. ✅ Rebuild footer with proper grid
3. ✅ Implement new background patterns
4. ✅ Fix responsive breakpoints

### Phase 2: Visual Enhancement (Week 2)
5. ✅ Apply extended color palette
6. ✅ Implement card system variants
7. ✅ Update typography scale
8. ✅ Add section dividers/decorations

### Phase 3: Performance (Week 3)
9. ✅ Optimize images
10. ✅ Reduce animations
11. ✅ Implement lazy loading
12. ✅ Audit bundle size

### Phase 4: Polish (Week 4)
13. ✅ Micro-interactions
14. ✅ Accessibility improvements
15. ✅ Cross-browser testing
16. ✅ Mobile testing on real devices

---

## 🎨 Design Principles

### 1. Hierarchy
- Use size, weight, and color to establish clear visual hierarchy
- Most important content gets most visual weight
- White space is a design element - use generously

### 2. Consistency
- Maintain spacing system throughout
- Reuse card patterns and components
- Consistent button styles for similar actions

### 3. Rhythm
- Alternate background patterns to create visual rhythm
- Balance text-heavy and image-heavy sections
- Use consistent section padding

### 4. Personality
- Gold accents = Divine, Excellence, Importance
- Navy = Trust, Authority, Stability
- Cream/Warm tones = Welcoming, Comfort
- Purple accents = Spiritual, Transcendent

### 5. Accessibility
- Maintain 4.5:1 contrast ratio for body text
- 3:1 for large text (24px+)
- Test with screen readers
- Ensure keyboard navigation works
- Add focus states to all interactive elements

---

## 🔧 Code Snippets

### Tailwind Config Updates:
```js
// Add to tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1e3a5f',
          DEFAULT: '#2d4a6e',
          light: '#3d5a7e',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e5c158',
        },
        warm: {
          50: '#fefbf3',
          100: '#fef6e7',
          200: '#fae8c8',
        },
        cool: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        spirit: {
          purple: '#9b87f5',
          blue: '#7dd3fc',
          green: '#86efac',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.15)',
      }
    },
  },
}
```

### Global CSS Additions:
```css
/* Add to globals.css */

:root {
  --nav-height: 80px;
  --section-padding-mobile: 3rem;
  --section-padding-desktop: 5rem;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}

/* Selection color */
::selection {
  background: rgba(212, 175, 55, 0.3);
  color: #1e3a5f;
}

/* Focus visible for accessibility */
*:focus-visible {
  outline: 3px solid #d4af37;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #d4af37;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c49d2e;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 📊 Before & After Metrics

### Before (Current State):
- Navigation: 11 links, cluttered
- Footer: Cramped 4-column grid
- Backgrounds: 95% plain white
- Animations: 50+ framer-motion instances
- Images: No optimization strategy
- Typography: Inconsistent scaling
- Performance: Not measured

### After (Goals):
- Navigation: 5 main links with organized dropdowns
- Footer: Balanced 4-column grid, responsive
- Backgrounds: 5 creative patterns, visual interest
- Animations: <20 framer-motion instances, CSS animations
- Images: WebP, lazy loading, optimized sizes
- Typography: Consistent clamp() scaling
- Performance: Lighthouse score 90+

---

## 🎓 Design Rationale

### Why Gold & Navy?
- **Navy Blue (#1e3a5f)**: Represents trust, authority, depth, and stability - perfect for a spiritual institution
- **Gold (#d4af37)**: Symbolizes divinity, excellence, value, and warmth - highlights important spiritual moments
- **Combination**: Creates a premium, trustworthy, and spiritually elevated brand

### Why Multiple Background Patterns?
- **Problem**: Monotonous white backgrounds create visual fatigue
- **Solution**: Rotating patterns create rhythm and guide the eye through content
- **Subtle Approach**: Patterns are light enough to not distract from content
- **Spiritual Connection**: Geometric patterns reference sacred geometry and divine order

### Why Reorganize Navigation?
- **Cognitive Load**: Humans can process 5-9 items comfortably (Miller's Law)
- **Categorization**: Grouping reduces mental effort and increases discoverability
- **Professional Standards**: Modern websites use organized navigation, not endless lists
- **Mobile First**: Organized structure adapts better to mobile screens

### Why Reduce Animations?
- **Performance**: Framer-motion adds ~50KB to bundle size
- **Mobile Battery**: Constant animations drain battery on mobile devices
- **Accessibility**: Many users have vestibular disorders (motion sensitivity)
- **Professional Polish**: Subtle animations > excessive movement
- **SEO**: Faster sites rank better

---

## 🎯 Success Metrics

### User Experience:
- [ ] Users can find any page in 2 clicks or less
- [ ] Footer information is readable on all devices
- [ ] No horizontal scrolling on any viewport
- [ ] All touch targets minimum 44x44px on mobile

### Performance:
- [ ] Lighthouse Performance score: 90+
- [ ] First Contentful Paint: <1.5s
- [ ] Largest Contentful Paint: <2.5s
- [ ] Cumulative Layout Shift: <0.1
- [ ] Time to Interactive: <3.5s

### Visual Quality:
- [ ] Every section has visual interest (not plain white)
- [ ] Consistent spacing throughout site
- [ ] Typography scales smoothly across breakpoints
- [ ] Cards and components follow established patterns

### Accessibility:
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation works completely
- [ ] Screen reader friendly
- [ ] Color contrast meets standards
- [ ] Focus indicators visible

---

## 🚀 Quick Start Guide

### For Developers:

1. **Update Tailwind Config**
   - Copy color extensions from this guide
   - Add new spacing values
   - Update box-shadow presets

2. **Update globals.css**
   - Add CSS custom properties
   - Implement background pattern classes
   - Add animation keyframes

3. **Rebuild Header Component**
   - Implement dropdown navigation
   - Add state management for dropdowns
   - Style according to specs

4. **Rebuild Footer Component**
   - Update grid structure
   - Reorganize content into 4 columns
   - Fix responsive breakpoints

5. **Apply Background Patterns**
   - Add pattern classes to sections
   - Alternate patterns for visual rhythm
   - Test on all pages

6. **Optimize Images**
   - Convert to WebP
   - Use Next.js Image component
   - Add proper sizing attributes

7. **Reduce Animations**
   - Replace framer-motion with CSS where possible
   - Limit whileInView usage
   - Add reduced-motion support

### For Designers:

- Use this guide as source of truth for all design decisions
- When creating new components, reference card system
- Maintain spacing system in all mockups
- Use specified color palette only
- Test designs at all breakpoints

---

## 📚 Resources

### Tools:
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Palette Generator**: https://coolors.co/
- **Image Optimizer**: https://squoosh.app/
- **Font Pairing**: https://fontpair.co/

### Inspiration:
- https://www.lifechurch.tv/ (navigation organization)
- https://www.elevationchurch.org/ (visual hierarchy)
- https://www.hillsong.com/ (modern church design)

### Documentation:
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Framer Motion Performance](https://www.framer.com/motion/guide-reduce-bundle-size/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## ✅ Final Checklist

Before considering the redesign complete:

- [ ] Navigation has max 5 top-level items with logical grouping
- [ ] Footer has balanced 4-column grid, fully responsive
- [ ] Every page uses at least 3 different background patterns
- [ ] Typography scales smoothly with clamp() functions
- [ ] All images use Next.js Image component with optimization
- [ ] Framer-motion usage reduced to <20 instances
- [ ] Lighthouse performance score 90+ on all pages
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Tested on mobile devices (iOS, Android)
- [ ] Keyboard navigation works completely
- [ ] Screen reader tested
- [ ] WCAG 2.1 AA compliant
- [ ] No console errors
- [ ] All links work
- [ ] Forms validated properly

---

## 🎬 Conclusion

This design system transforms Worldwide Acceptance Ministries from a functional but bland website into a modern, engaging, and professional digital presence that reflects the church's spiritual mission while providing an excellent user experience.

**Key Improvements:**
1. ✅ Organized, professional navigation
2. ✅ Visually interesting backgrounds throughout
3. ✅ Proper footer layout and organization
4. ✅ Consistent, scalable typography
5. ✅ Performance-first approach
6. ✅ Responsive on all devices
7. ✅ Accessible to all users

This living document should be updated as the site evolves. All new features and pages should reference this guide to maintain consistency.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-09
**Next Review**: 2025-12-09
