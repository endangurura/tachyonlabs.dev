import { useId } from 'react'
import clsx from 'clsx'

// Quantum Loop Logomark - the incomplete circle with ghost path
export function Logomark({ 
  invert = false, 
  filled = false, 
  className,
  ...props 
}) {
  return (
    <svg 
      viewBox="0 0 26 26" 
      fill="none"
      aria-hidden="true" 
      className={className}
      {...props}
    >
      <path 
        d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" 
        fill="none"
        className={clsx(
          'transition-all duration-300',
          invert ? 'stroke-white' : 'stroke-neutral-950 dark:stroke-white'
        )}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M2 13 C2 6.925, 6.925 2, 13 2" 
        fill="none"
        className={clsx(
          'transition-all duration-300',
          invert ? 'stroke-white' : 'stroke-neutral-950 dark:stroke-white'
        )}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle 
        cx="13" 
        cy="13" 
        r="3"
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950 dark:fill-white'
        )}
      />
    </svg>
  )
}

// Full Logo with text - matching Humanloop's 144x24 viewBox pattern
export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <div className={clsx('flex items-center gap-x-3', className)} {...props}>
      <div className={clsx('group/logo', { 'hover:cursor-pointer': fillOnHover })}>
        <Logomark 
          invert={invert} 
          filled={filled || (fillOnHover && false)} 
          className={clsx('h-10 w-10', {
            'group-hover/logo:[&_circle]:opacity-100 [&_circle]:opacity-0 [&_circle]:transition-opacity': fillOnHover
          })}
        />
      </div>
      <div className="flex flex-col">
        <span className={clsx(
          'font-display text-2xl font-semibold tracking-tight leading-none',
          invert ? 'text-white' : 'text-neutral-950 dark:text-white'
        )}>
          Tachyon Labs
        </span>
      </div>
    </div>
  )
}

// Icon-only version for small spaces
export function LogoIcon({ className, invert = false, ...props }) {
  return (
    <Logomark 
      invert={invert} 
      filled={true} 
      className={clsx('h-6 w-6', className)} 
      {...props} 
    />
  )
}

// Samaritan Logo
export function SamaritanLogo({
  className,
  invert = false,
  ...props
}) {
  return (
    <div className={clsx('flex items-center gap-x-3', className)} {...props}>
      <Logomark 
        invert={invert} 
        filled={true}
        className="h-10 w-10"
      />
      <div className="flex flex-col">
        <span className={clsx(
          'font-display text-2xl font-semibold tracking-tight leading-none',
          invert ? 'text-white' : 'text-neutral-950 dark:text-white'
        )}>
          Samaritan
        </span>
      </div>
    </div>
  )
}

// Export function to create static SVG files for media kit
export function exportLogoAsSVG(type = 'tachyon', variant = 'color') {
  const isInvert = variant === 'white'
  const strokeColor = isInvert ? '#ffffff' : '#000000'
  const fillColor = isInvert ? '#ffffff' : '#000000'
  
  if (type === 'mark') {
    return `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="${fillColor}"/>
</svg>`
  }
  
  if (type === 'tachyon') {
    return `<svg width="180" height="26" viewBox="0 0 180 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="${fillColor}"/>
  <text x="32" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="${fillColor}">Tachyon Labs</text>
</svg>`
  }
  
  if (type === 'samaritan') {
    return `<svg width="140" height="26" viewBox="0 0 140 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="${fillColor}"/>
  <text x="32" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="${fillColor}">Samaritan</text>
</svg>`
  }
}