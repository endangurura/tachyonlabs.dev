# Figma/Canva Import Guide

## SVG Assets for Design Tools

This directory contains optimized SVG files and resources for importing the Tachyon Labs brand into Figma, Canva, and other design tools.

### Available Assets

#### Logo Files
- `quantum-loop-icon.svg` - Standalone icon (26x26)
- `quantum-loop-icon-padded.svg` - Icon with safe area padding (32x32)
- `tachyon-labs-logo-horizontal.svg` - Full horizontal logo (180x26)
- `tachyon-labs-logo-vertical.svg` - Vertical stacked logo (64x82)
- `tachyon-labs-wordmark.svg` - Text only, no icon (148x26)
- `samaritan-logo-horizontal.svg` - Full horizontal logo (140x26)
- `samaritan-logo-vertical.svg` - Vertical stacked logo (64x64)
- `samaritan-wordmark.svg` - Text only, no icon (108x26)

#### Resource Files
- `design-tokens.json` - Complete design system tokens for automated import
- `figma-import-guide.md` - Detailed Figma setup instructions
- `canva-brand-kit-guide.md` - Canva Brand Kit configuration guide

### Quick Start

#### For Figma
1. Read `figma-import-guide.md` for detailed setup
2. Import `design-tokens.json` using Design Tokens plugin
3. Drag SVG files into Figma and convert to components
4. Set up color and size variants as documented

#### For Canva
1. Read `canva-brand-kit-guide.md` for brand kit setup
2. Upload SVG files to Brand Kit
3. Configure colors and fonts as specified
4. Use provided templates for consistency

### Logo Usage Guidelines

#### Minimum Sizes
- Horizontal logo: 120px width
- Vertical logo: 48px width
- Icon only: 20px width
- Wordmark only: 80px width

#### Clear Space
Maintain minimum clear space equal to the height of the dot in the logomark around all logos.

#### Color Variants
- **Default**: Use on light backgrounds (#000000)
- **Inverted**: Use on dark backgrounds (#FFFFFF)
- **Accent**: Special applications only (#10B981)

### Typography in Design Tools

Since Mona Sans may not be available in all tools:

**Figma**: Use Inter (similar geometric properties)
**Canva**: Use Montserrat or Open Sans
**Adobe**: Use Helvetica Neue

### Color Palette

**Primary**
- Black: #000000
- White: #FFFFFF

**Neutrals**
- 950: #0a0a0a
- 900: #171717
- 800: #262626
- 700: #404040
- 600: #525252
- 500: #737373
- 400: #a3a3a3
- 300: #d4d4d4
- 200: #e5e5e5
- 100: #f5f5f5
- 50: #fafafa

**Accent**
- Green: #10B981

### File Organization

```
figma-assets/
├── README.md                          # This file
├── design-tokens.json                 # Design system tokens
├── figma-import-guide.md             # Figma setup guide
├── canva-brand-kit-guide.md          # Canva setup guide
├── quantum-loop-icon.svg             # Base icon
├── quantum-loop-icon-padded.svg      # Icon with padding
├── tachyon-labs-logo-horizontal.svg  # Primary logo
├── tachyon-labs-logo-vertical.svg    # Stacked logo
├── tachyon-labs-wordmark.svg         # Text only
├── samaritan-logo-horizontal.svg     # Product logo
├── samaritan-logo-vertical.svg       # Product stacked
└── samaritan-wordmark.svg            # Product text only
```

### Support

For questions about brand implementation:
- Email: design@tachyonlabs.ai
- Brand Guidelines: See `/brand-identity/guidelines.pdf`