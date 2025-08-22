# Figma Import Guide for Tachyon Labs Brand Assets

## Quick Start

1. **Import Design Tokens**
   - Install "Design Tokens" plugin in Figma
   - Import `design-tokens.json` to automatically create:
     - Color styles
     - Typography styles
     - Spacing variables
     - Effect styles (shadows)

2. **Import Logo Components**
   - Drag all SVG files into Figma
   - Select each and convert to component (Ctrl/Cmd + Alt + K)
   - Create variants for each logo:
     - Color: Black, White, Green accent
     - Size: Small (24px), Medium (32px), Large (48px)

## Setting Up Your Figma Library

### 1. Create Color Styles
```
Primary/Black → #000000
Primary/White → #FFFFFF
Neutral/950 → #0a0a0a
Neutral/900 → #171717
Neutral/800 → #262626
Neutral/700 → #404040
Neutral/600 → #525252
Neutral/500 → #737373
Neutral/400 → #a3a3a3
Neutral/300 → #d4d4d4
Neutral/200 → #e5e5e5
Neutral/100 → #f5f5f5
Neutral/50 → #fafafa
Accent/Green → #10B981
```

### 2. Create Text Styles

Since Mona Sans might not be available, use Inter with these settings:

**Display/Large**
- Font: Inter
- Size: 48px
- Weight: 600
- Line height: 120%

**Display/Medium**
- Font: Inter
- Size: 36px
- Weight: 600
- Line height: 120%

**Heading/H1**
- Font: Inter
- Size: 30px
- Weight: 600
- Line height: 137.5%

**Heading/H2**
- Font: Inter
- Size: 24px
- Weight: 600
- Line height: 137.5%

**Heading/H3**
- Font: Inter
- Size: 20px
- Weight: 500
- Line height: 150%

**Body/Large**
- Font: Inter
- Size: 18px
- Weight: 400
- Line height: 162.5%

**Body/Base**
- Font: Inter
- Size: 16px
- Weight: 400
- Line height: 150%

**Body/Small**
- Font: Inter
- Size: 14px
- Weight: 400
- Line height: 150%

**Caption**
- Font: Inter
- Size: 12px
- Weight: 400
- Line height: 150%

### 3. Logo Component Structure

Create a main component for each logo with these layers:

```
📁 Logo/Tachyon-Labs-Horizontal
  ├── 📁 Constraints (Frame - Auto Layout)
  │   ├── 🔷 Logomark (Instance)
  │   └── 📝 Wordmark (Instance)
  └── Properties:
      ├── Variant: Default | Inverted | Accent
      ├── Size: S (h:24px) | M (h:32px) | L (h:48px)
      └── Type: Full | Icon | Wordmark
```

### 4. Component Properties

Set up interactive component properties:

**Color Variant**
- Default: currentColor → Black (#000000)
- Inverted: currentColor → White (#FFFFFF)
- Accent: currentColor → Green (#10B981)

**Size Constraints**
- Small: Height 24px, Width auto
- Medium: Height 32px, Width auto
- Large: Height 48px, Width auto

**Type Toggle**
- Full: Show both logomark and wordmark
- Icon: Hide wordmark, show logomark only
- Wordmark: Hide logomark, show wordmark only

### 5. Auto Layout Settings

For horizontal logos:
- Direction: Horizontal
- Spacing: 8px (S), 10px (M), 12px (L)
- Padding: 0
- Alignment: Center

For vertical logos:
- Direction: Vertical
- Spacing: 12px (S), 16px (M), 20px (L)
- Padding: 0
- Alignment: Center

### 6. Export Settings

Set up export presets for each component:

**Web (SVG)**
- Format: SVG
- Include "id" attribute: ✓
- Outline text: ✓
- Suffix: None

**Web (PNG)**
- Format: PNG
- Scale: 1x, 2x, 3x
- Suffix: @1x, @2x, @3x

**Print (PDF)**
- Format: PDF
- Outline text: ✓

## Best Practices

1. **Never stretch or distort logos** - Always maintain aspect ratio
2. **Minimum sizes**:
   - Horizontal logo: 120px width
   - Icon only: 20px width
   - Wordmark only: 80px width

3. **Clear space**: Maintain minimum clear space equal to the height of the dot in the logomark

4. **Backgrounds**: 
   - On light backgrounds: Use black variant
   - On dark backgrounds: Use white variant
   - On green backgrounds: Use white variant
   - Avoid placing on busy or patterned backgrounds

5. **Component organization**:
   ```
   🗂 Brand Assets
     📁 Logos
       📁 Tachyon Labs
         - Logo/Horizontal
         - Logo/Vertical
         - Logo/Icon
         - Logo/Wordmark
       📁 Samaritan
         - Logo/Horizontal
         - Logo/Vertical
         - Logo/Icon
         - Logo/Wordmark
     📁 Colors
     📁 Typography
     📁 Icons
   ```

## Sharing with Team

1. Publish as Team Library
2. Name: "Tachyon Labs - Brand Design System"
3. Description: "Official brand assets and design system components"
4. Include link to brand guidelines PDF

## Plugins Recommended

- **Design Tokens**: For importing token files
- **Figma Tokens**: For managing design tokens
- **Stark**: For accessibility checking
- **Able**: For color contrast checking

## Questions?

Contact: design@tachyonlabs.ai