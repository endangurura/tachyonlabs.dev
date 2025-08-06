import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert, href, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100'
  )

  let inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  )
}
