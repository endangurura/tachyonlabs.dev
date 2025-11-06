import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Products',
    links: [
      { title: 'Hadron', href: '/hadron' },
      { title: 'Samaritan', href: 'https://samaritan.si' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 dark:text-white">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950 dark:hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950 dark:text-white">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        Subscribe to get the latest updates on data intelligence, AI research,
        and platform announcements from Tachyon Labs.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 py-4 pl-6 pr-20 text-base/6 text-neutral-950 dark:text-white transition placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:border-neutral-950 dark:focus:border-white focus:outline-none"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 transition hover:bg-neutral-800 dark:hover:bg-neutral-100 border-2 border-black dark:border-white"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container className="pt-24 pb-20 sm:pt-32 lg:pt-40">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <Navigation />
            <div className="flex lg:justify-end">
              <NewsletterForm />
            </div>
          </div>
          <div className="mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-12">
            <Link href="/" aria-label="Home">
              <Logo className="transition-colors" />
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © Tachyon Labs. {new Date().getFullYear()}
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  )
}
