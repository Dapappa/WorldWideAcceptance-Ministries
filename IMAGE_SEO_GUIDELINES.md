# Image SEO Guidelines for Worldwide Acceptance Ministries

## Overview
This document outlines the requirements and best practices for adding images to the Worldwide Acceptance Ministries website to ensure optimal SEO performance, particularly for Calgary-related searches.

## Critical Requirements

### 1. Alt Text Requirements

**MANDATORY**: Every image MUST have descriptive alt text that includes:
- Location keyword: "Calgary" or "Calgary church"
- Context: What the image shows (e.g., "worship service", "Bible study", "congregation")
- Brand: "Worldwide Acceptance Ministries" when appropriate

#### Alt Text Format
```
[Location] [Context] at [Brand/Organization]
```

#### Examples:
- ✅ `Calgary church congregation at Worldwide Acceptance Ministries worship service`
- ✅ `Bible study session at Calgary church Worldwide Acceptance Ministries`
- ✅ `Weekly Sunday service at Worldwide Acceptance Ministries Calgary church`
- ✅ `Calgary Pentecostal church worship background at Worldwide Acceptance Ministries`
- ❌ `Church photo` (too generic)
- ❌ `Image 1` (not descriptive)
- ❌ `Congregation` (missing location)

### 2. Image File Naming

**BEST PRACTICE**: Use descriptive, keyword-rich file names:
- Include location: `calgary-church-`
- Include context: `-worship-service`, `-bible-study`, `-congregation`
- Use hyphens, not underscores
- Use lowercase letters
- Avoid special characters

#### Examples:
- ✅ `calgary-church-worship-service.jpg`
- ✅ `calgary-bible-study-session.jpg`
- ✅ `calgary-church-congregation-banner.jpg`
- ❌ `IMG_1234.jpg` (not descriptive)
- ❌ `church photo.png` (spaces not recommended)

### 3. Image Optimization

#### Technical Requirements:
- **Format**: Use WebP when possible, fallback to JPEG/PNG
- **Size**: Optimize images before upload (aim for < 200KB when possible)
- **Dimensions**: Use appropriate dimensions (Next.js Image component will handle resizing)
- **Quality**: Balance quality vs file size (85-90% quality is usually optimal)

#### Next.js Image Component Usage:
```tsx
import Image from 'next/image'

<Image
  src="/images/calgary-church-worship-service.jpg"
  alt="Calgary church congregation at Worldwide Acceptance Ministries worship service"
  width={1200}
  height={630}
  quality={85}
  priority={false} // Set to true for above-the-fold images
  loading="lazy" // Automatic for non-priority images
/>
```

### 4. Calgary Keyword Integration

#### Primary Keywords to Include:
- "Calgary"
- "Calgary church"
- "Calgary Pentecostal church"
- "church in Calgary"
- "Calgary AB church"
- "Northeast Calgary church"
- "Calgary worship"
- "Calgary Bible study"

#### Natural Integration:
- Use keywords naturally in alt text
- Don't keyword stuff
- Focus on describing what the image actually shows
- Include location context when relevant

### 5. Image Context Requirements

#### For Different Image Types:

**Worship Service Images:**
- Alt text should mention: "Calgary church worship service" or "Calgary worship"
- Include context: "Sunday service", "evening service", etc.

**Bible Study Images:**
- Alt text should mention: "Calgary Bible study" or "Bible study at Calgary church"
- Include context: "Bible study session", "group Bible study", etc.

**Congregation Images:**
- Alt text should mention: "Calgary church congregation" or "congregation at Calgary church"
- Include context: "worshiping", "praying", "fellowship", etc.

**Staff/Leadership Images:**
- Alt text format: `[Name], [Title] at Worldwide Acceptance Ministries Calgary church`
- Example: `John Adeyemi, Pastor at Worldwide Acceptance Ministries Calgary church`

**Event Images:**
- Alt text should mention: "Calgary church event" or specific event name
- Include location context: "at Worldwide Acceptance Ministries Calgary"

**Location/Building Images:**
- Alt text should mention: "Calgary church location" or "Worldwide Acceptance Ministries Calgary"
- Include address context when relevant: "Northeast Calgary"

### 6. Image Placement Guidelines

#### Above-the-Fold Images:
- Use `priority={true}` for hero images and main banners
- These images should have the most optimized alt text
- Include primary Calgary keywords

#### Below-the-Fold Images:
- Use `loading="lazy"` (automatic with Next.js Image)
- Still require descriptive alt text
- Can include secondary keywords

### 7. Image Schema Markup

For important images, consider adding structured data:
- Use `image` property in JSON-LD schemas
- Include image URLs in Open Graph tags
- Add `og:image:alt` for social media sharing

### 8. Checklist Before Adding Images

Before adding any new image to the website, ensure:

- [ ] Descriptive, keyword-rich alt text is provided
- [ ] Alt text includes "Calgary" or "Calgary church" when relevant
- [ ] Image file name is descriptive and uses hyphens
- [ ] Image is optimized for web (compressed, appropriate size)
- [ ] Next.js Image component is used (not `<img>` tag)
- [ ] Appropriate `width` and `height` attributes are set
- [ ] `priority` is set correctly (true for hero images)
- [ ] Image is placed in `/public/images/` directory
- [ ] Image path is correct and accessible

### 9. Examples by Component

#### Hero Component:
```tsx
<Image
  src="/images/calgary-church-hero-background.jpg"
  alt="Worldwide Acceptance Ministries Calgary church worship service background"
  fill
  priority
  quality={85}
/>
```

#### Image Slideshow:
```tsx
const images = [
  {
    src: '/images/calgary-church-congregation.jpg',
    alt: 'Calgary church congregation at Worldwide Acceptance Ministries worship service',
  },
  {
    src: '/images/calgary-bible-study.jpg',
    alt: 'Bible study session at Calgary church Worldwide Acceptance Ministries',
  },
]
```

#### Staff Images:
```tsx
<Image
  src={member.image}
  alt={`${member.name}, ${member.title} at Worldwide Acceptance Ministries Calgary church`}
  width={400}
  height={400}
/>
```

### 10. Common Mistakes to Avoid

❌ **Don't:**
- Use generic alt text like "image" or "photo"
- Forget to include location keywords
- Use underscores in file names
- Upload unoptimized large images
- Use `<img>` tags instead of Next.js Image component
- Skip alt text entirely
- Keyword stuff alt text unnaturally

✅ **Do:**
- Write descriptive, natural alt text
- Include Calgary keywords when relevant
- Use descriptive file names with hyphens
- Optimize images before upload
- Use Next.js Image component
- Always include alt text
- Write for both SEO and accessibility

### 11. Maintenance

- Review images quarterly for SEO optimization
- Update alt text if image context changes
- Replace low-quality images with optimized versions
- Ensure all images follow these guidelines
- Monitor image loading performance

### 12. Resources

- Next.js Image Optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images
- Web.dev Image Optimization: https://web.dev/fast/#optimize-your-images
- Alt Text Best Practices: https://www.w3.org/WAI/tutorials/images/

---

**Last Updated**: 2025
**Maintained By**: Development Team
**Questions?** Contact the development team for clarification on image SEO requirements.

