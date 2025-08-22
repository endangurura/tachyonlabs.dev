# Tachyon Labs Design Guidelines

## Brand Identity

Tachyon Labs is an applied AI research laboratory building artificial superintelligence. Our visual identity reflects innovation, precision, and the continuous pursuit of advancement through the Quantum Loop symbol.

## Logo Architecture

### The Quantum Loop Symbol
The logomark consists of an incomplete circle with a ghost path, representing:
- **Continuous Innovation**: The incomplete circle symbolizes ongoing progress
- **Quantum Potential**: The ghost path (30% opacity) suggests unexplored possibilities
- **Focus Point**: The center dot represents convergence and clarity of purpose

### Ghost Path Specifications
The logo consists of two precise arc segments:
- **Main Path**: Starts at top (13, 2) and curves clockwise approximately 270° to bottom-left
- **Ghost Path**: Continues from bottom-left back to top with 30% opacity
- **Path Construction**: Uses cubic Bezier curves for smooth, precise rendering
- **Critical**: The ghost path placement must be consistent across all applications

### Logo Proportions

#### Full Logo Specifications
```
Total Width: 180 units (SVG)
Total Height: 26 units (SVG)
Aspect Ratio: ~6.9:1

Components:
- Logomark: 26×26 units
- Spacing: 6 units
- Text Height: 18 units (font size)
- Text Baseline: Aligned to logo center
```

#### Logomark Specifications
```
Viewbox: 26×26 units
Circle Radius: 11 units
Center Point: 13, 13
Stroke Width: 2.5 units
Center Dot Radius: 3 units

Path Data:
Main: M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13
Ghost: M2 13 C2 6.925, 6.925 2, 13 2 (opacity: 0.3)
```

### Proportional Relationships
1. **Logo to Text Ratio**: The logomark height should be 1.4× the x-height of the text
2. **Spacing**: The gap between logomark and text should be 0.23× the logomark width
3. **Minimum Clear Space**: Equal to the height of the logomark on all sides

## Typography

### Primary Typeface
- **Font Family**: System UI, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Logo Text Weight**: 600 (Semibold)
- **Logo Text Tracking**: -0.02em (tight)

### Type Scale
```
Display: 48-72px
Headline: 32-40px  
Title: 24-28px
Body: 16-18px
Caption: 12-14px
```

## Color Palette

### Primary Colors
```
Black:          #000000 (RGB: 0, 0, 0)
White:          #FFFFFF (RGB: 255, 255, 255)
```

### Neutral Scale
```
Neutral 950:    #0a0a0a (RGB: 10, 10, 10)
Neutral 900:    #171717 (RGB: 23, 23, 23)
Neutral 800:    #262626 (RGB: 38, 38, 38)
Neutral 700:    #404040 (RGB: 64, 64, 64)
Neutral 600:    #525252 (RGB: 82, 82, 82)
Neutral 500:    #737373 (RGB: 115, 115, 115)
Neutral 400:    #a3a3a3 (RGB: 163, 163, 163)
Neutral 300:    #d4d4d4 (RGB: 212, 212, 212)
Neutral 200:    #e5e5e5 (RGB: 229, 229, 229)
Neutral 100:    #f5f5f5 (RGB: 245, 245, 245)
Neutral 50:     #fafafa (RGB: 250, 250, 250)
```

### Accent Color (Optional)
```
Brand Green:    #2A6A43 (RGB: 42, 106, 67)
```

## Logo Usage Rules

### Correct Usage
- ✓ Use black logo on backgrounds lighter than Neutral 300
- ✓ Use white logo on backgrounds darker than Neutral 700
- ✓ Maintain aspect ratio when scaling
- ✓ Use provided logo files without modification

### Incorrect Usage
- ✗ Do not rotate the logo
- ✗ Do not change logo colors (except black/white variants)
- ✗ Do not add effects (shadows, gradients, outlines)
- ✗ Do not stretch or compress
- ✗ Do not separate the center dot from the logomark
- ✗ Do not recreate or trace the logo

### Minimum Sizes
| Context | Minimum Size |
|---------|--------------|
| Digital (Web) | 24px height |
| Digital (App) | 32px height |
| Print | 10mm height |
| Favicon | 16×16px |

### Co-branding
When displaying Tachyon Labs with Samaritan:
1. Tachyon Labs should appear first or above
2. Maintain equal visual weight
3. Use consistent color variants (both black or both white)

## Application Examples

### Website Header
- Logo height: 40px (desktop), 32px (mobile)
- Position: Left-aligned with navigation
- Color: Adapts to theme (black in light mode, white in dark mode)

### Business Cards
- Logo position: Top left
- Size: 15mm height
- Clear space: 5mm on all sides

### Email Signatures
- Logo height: 30px
- Format: PNG with transparent background
- Position: Above signature text

### Social Media
- Profile pictures: Use logomark only (centered)
- Cover images: Full logo on solid background
- Post graphics: Maintain clear space rules

## Accessibility

### Contrast Requirements
- Logo must maintain WCAG AA contrast ratio (4.5:1) with background
- For white logo: Use on backgrounds #737373 or darker
- For black logo: Use on backgrounds #a3a3a3 or lighter

### Alternative Text
- Full logo: "Tachyon Labs logo"
- Logomark only: "Tachyon Labs"
- Samaritan logo: "Samaritan by Tachyon Labs"

## File Naming Convention

```
[brand]-[type]-[variant].[format]

Examples:
tachyon-labs-logo-black.svg
tachyon-labs-mark-white.png
samaritan-logo-black.svg
```

## Implementation Notes

### CSS Implementation
```css
/* Logo container */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* ~12px at 16px base */
}

/* Logomark */
.logomark {
  width: 2.5rem;  /* 40px */
  height: 2.5rem; /* 40px */
}

/* Logo text */
.logo-text {
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1;
}
```

### React Component Structure
```jsx
<div className="logo">
  <Logomark className="logomark" />
  <span className="logo-text">Tachyon Labs</span>
</div>
```

## Version Control

- **Current Version**: 1.0 (December 2024)
- **Last Updated**: August 20, 2025
- Major updates require approval from brand team
- Minor fixes (technical corrections) can be implemented immediately

## Contact

For questions about brand implementation or to request additional assets:
- Email: brand@tachyonlabs.dev
- Include: Project description, intended use, required formats