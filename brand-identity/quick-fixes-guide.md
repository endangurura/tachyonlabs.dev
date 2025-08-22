# Quick Brand Compliance Fixes for tachyonlabs.dev

## 1. Update Tailwind Config (5 minutes)

Add this to your `tailwind.config.js`:

```javascript
module.exports = {
  // ... existing config ...
  theme: {
    // ... existing theme ...
    extend: {
      colors: {
        // Brand-specific neutral scale
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Accent colors
        accent: {
          green: '#10B981',
          DEFAULT: '#10B981',
        },
        // Semantic colors
        quantum: {
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontSize: {
        // Match brand typography scale exactly
        'display-large': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],    // 48px
        'display-medium': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 36px
        'display-small': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 30px
        'heading-1': ['1.5rem', { lineHeight: '1.375' }],     // 24px
        'heading-2': ['1.25rem', { lineHeight: '1.375' }],    // 20px
        'heading-3': ['1.125rem', { lineHeight: '1.5' }],     // 18px
        'body-large': ['1.125rem', { lineHeight: '1.625' }],  // 18px
        'body-base': ['1rem', { lineHeight: '1.5' }],         // 16px
        'body-small': ['0.875rem', { lineHeight: '1.5' }],    // 14px
        'caption': ['0.75rem', { lineHeight: '1.5' }],        // 12px
      },
      // ... rest of extend ...
    },
  },
}
```

## 2. Add Brand CSS Variables (2 minutes)

Add to `src/styles/base.css`:

```css
@layer base {
  :root {
    /* Brand Colors */
    --color-quantum-black: #000000;
    --color-quantum-white: #FFFFFF;
    --color-accent-green: #10B981;
    
    /* Logo Constraints */
    --logo-min-width: 120px;
    --icon-min-width: 20px;
    --wordmark-min-width: 80px;
    --logo-clear-space: 8px; /* Based on dot height */
  }
}
```

## 3. Update Logo Component (3 minutes)

Add these props to `src/components/Logo.jsx`:

```jsx
export function Logo({
  className,
  invert = false,
  size = 'medium', // small, medium, large
  ...props
}) {
  const sizeClasses = {
    small: 'h-8 w-8',     // Icon: 32px
    medium: 'h-10 w-10',  // Icon: 40px
    large: 'h-12 w-12',   // Icon: 48px
  }
  
  const textSizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
  }
  
  return (
    <div 
      className={clsx(
        'flex items-center gap-x-3',
        'min-w-[120px]', // Enforce minimum width
        className
      )} 
      {...props}
    >
      <Logomark 
        invert={invert} 
        className={clsx(sizeClasses[size])}
      />
      <span className={clsx(
        'font-display font-semibold tracking-tight leading-none',
        textSizeClasses[size],
        invert ? 'text-white' : 'text-neutral-950 dark:text-white'
      )}>
        Tachyon Labs
      </span>
    </div>
  )
}
```

## 4. Add Accent Color Usage (2 minutes)

Update the home page CTAs to use the accent color:

```jsx
// In src/app/page.jsx - Update primary button
<Link
  href="https://samaritan.si"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
    bg-accent-green text-white hover:bg-accent-green/90
    transition-all duration-200"
>
  Get started with Samaritan
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
```

## 5. Typography Quick Fixes (3 minutes)

Update hero section typography:

```jsx
// In src/app/page.jsx - HeroSection
<h1 className="font-display text-display-small sm:text-display-medium lg:text-display-large font-bold tracking-tight text-neutral-950 dark:text-white">
  Tachyon Labs
</h1>
<p className="mt-6 text-heading-2 sm:text-heading-1 text-neutral-600 dark:text-neutral-400">
  An applied AI lab building{' '}
  <span className="text-neutral-950 dark:text-white font-semibold">
    artificial superintelligence
  </span>
</p>
```

## Total Time: ~15 minutes

These changes will immediately improve brand compliance by:
- ✅ Implementing the exact color palette
- ✅ Using proper typography scale
- ✅ Adding accent color for CTAs
- ✅ Enforcing logo minimum sizes
- ✅ Creating consistent spacing

## Testing Checklist

After implementing:
- [ ] Check logo at different sizes (shouldn't break below 120px width)
- [ ] Verify accent green appears on hover states
- [ ] Confirm typography matches brand scale
- [ ] Test dark mode color transitions
- [ ] Validate minimum logo sizes on mobile

## Next Steps

1. Import SVG logos from `/brand-identity/figma-assets/`
2. Create component documentation
3. Add Storybook for component testing
4. Build comprehensive style guide page