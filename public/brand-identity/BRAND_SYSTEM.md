# Tachyon Labs Brand Identity System

## Brand Foundation

### Mission
Building safe artificial superintelligence to solve humanity's greatest challenges.

### Brand Personality
- **Pioneering**: Leading the frontier of ASI development
- **Precise**: Mathematical accuracy and engineering excellence
- **Progressive**: Continuous evolution and improvement
- **Protective**: Safety-first approach to superintelligence

## Typography System

### Primary Typeface: Mona Sans
A modern, geometric sans-serif with variable width capabilities.

#### Font Stack
```css
font-family: 'Mona Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

#### Type Scale & Usage
| Level | Size | Weight | Width | Line Height | Usage |
|-------|------|--------|-------|-------------|--------|
| Display | 72px (4.5rem) | 600 | 125% | 1.1 | Hero headlines |
| H1 | 48px (3rem) | 600 | 125% | 1.2 | Page titles |
| H2 | 36px (2.25rem) | 600 | 100% | 1.25 | Section headers |
| H3 | 24px (1.5rem) | 600 | 100% | 1.35 | Subsections |
| H4 | 20px (1.25rem) | 500 | 100% | 1.4 | Card titles |
| Body | 16px (1rem) | 400 | 100% | 1.75 | Body text |
| Small | 14px (0.875rem) | 400 | 100% | 1.5 | Captions |
| Micro | 12px (0.75rem) | 500 | 100% | 1.35 | Labels |

### Logo Typography
- **Wordmark Font Size**: 24px (1.5rem)
- **Weight**: 600 (Semibold)
- **Tracking**: -0.02em (tight)
- **Width**: 100% (normal)

## Logo Construction Grid

### Master Grid System
The logo is built on a 13×13 unit grid system:

```
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤
├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤
├─┼─┼─┼─╭─────────╮─┼─┼─┼─┤
├─┼─┼─╱─┼─┼─┼─┼─┼─┼─╲─┼─┼─┤
├─┼─╱─┼─┼─┼─┼─┼─┼─┼─┼─╲─┼─┤
├─╱─┼─┼─┼─┼─●─┼─┼─┼─┼─┼─╲─┤  ● = Center dot (r=3)
├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤  ╱╲╮ = Main path
├─╲─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─╱─┤  ┅┅ = Ghost path (30% opacity)
├─┼─╲─┼─┼─┼─┼─┼─┼─┼─┼─╱─┼─┤
├─┼─┼─╲─┼─┼─┼─┼─┼─┼─╱─┼─┼─┤
├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘
```

### Proportions
1. **Icon to Text Ratio**: 1:1.5 (Icon height = 26 units, Text x-height = 17 units)
2. **Spacing**: Gap = 6 units (0.23× icon width)
3. **Total Logo Width**: 180 units (26 + 6 + 148)
4. **Clear Space**: Minimum 26 units on all sides

## Color System

### Primary Palette
| Color | Hex | RGB | CMYK | Pantone | Usage |
|-------|-----|-----|------|---------|--------|
| Quantum Black | #000000 | 0,0,0 | 0,0,0,100 | Black C | Primary brand color |
| Pure White | #FFFFFF | 255,255,255 | 0,0,0,0 | - | Reverse applications |
| Neutral 950 | #0a0a0a | 10,10,10 | 0,0,0,96 | Black 7 C | Dark backgrounds |

### Extended Palette
| Color | Hex | RGB | Usage |
|-------|-----|-----|--------|
| Neutral 900 | #171717 | 23,23,23 | Dark UI elements |
| Neutral 800 | #262626 | 38,38,38 | Secondary dark |
| Neutral 700 | #404040 | 64,64,64 | Disabled states |
| Neutral 600 | #525252 | 82,82,82 | Secondary text |
| Neutral 500 | #737373 | 115,115,115 | Muted text |
| Neutral 400 | #a3a3a3 | 163,163,163 | Borders |
| Neutral 300 | #d4d4d4 | 212,212,212 | Light borders |
| Neutral 200 | #e5e5e5 | 229,229,229 | Light backgrounds |
| Neutral 100 | #f5f5f5 | 245,245,245 | Subtle backgrounds |
| Neutral 50 | #fafafa | 250,250,250 | Faintest background |

### Accent Color (Special Use Only)
| Color | Hex | RGB | Pantone | Usage |
|-------|-----|-----|---------|--------|
| Tachyon Green | #10B981 | 16,185,129 | 3405 C | Success states, special emphasis |

## Logo Variations

### Primary Configurations
1. **Horizontal Logo** (Default)
   - Icon + Wordmark
   - Minimum width: 120px digital, 30mm print

2. **Stacked Logo** (Compact)
   - Icon above wordmark
   - For square constraints

3. **Icon Only** (Avatar)
   - Logomark solo
   - Minimum size: 16px digital, 5mm print

### File Formats & Specifications

#### Master Files
- **Vector**: .ai (Adobe Illustrator CC)
- **Vector Alternative**: .svg (scalable for web)
- **Exchange**: .eps (for legacy systems)
- **Documentation**: .pdf (for distribution)

#### Production Files
- **Web**: .svg (primary), .png (fallback)
- **Print**: .eps (vector), .pdf (press-ready)
- **Office**: .png (high-res for documents)
- **Social**: .png (optimized for each platform)

### Naming Convention
```
[brand]-[type]-[variant]-[color]-[size].[format]

Examples:
tachyon-labs-logo-horizontal-black.svg
tachyon-labs-icon-only-white-1024.png
samaritan-logo-stacked-black-cmyk.eps
```

## Application Guidelines

### Digital Applications
1. **Website Header**: 40px height (h-10)
2. **Mobile Header**: 32px height (h-8)
3. **App Icon**: 1024×1024px master
4. **Favicon**: 32×32px (with 16×16 fallback)

### Print Applications
1. **Business Card**: 15mm height
2. **Letterhead**: 20mm height
3. **Signage**: Minimum 50mm height

### Social Media
1. **Profile Picture**: Icon only, centered
2. **Cover Images**: Full horizontal logo
3. **Post Graphics**: Maintain clear space

## Don'ts
- ❌ Stretch or compress the logo
- ❌ Rotate or tilt
- ❌ Change colors outside approved palette
- ❌ Add effects (shadows, gradients, outlines)
- ❌ Place on busy backgrounds
- ❌ Recreate or trace the logo
- ❌ Separate elements
- ❌ Change typeface