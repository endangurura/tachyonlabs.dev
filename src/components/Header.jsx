'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { useTheme } from '@/contexts/ThemeContext'

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SystemIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
    )
  }

  const themes = [
    { value: 'light', icon: SunIcon, label: 'Light' },
    { value: 'dark', icon: MoonIcon, label: 'Dark' },
    { value: 'system', icon: SystemIcon, label: 'System' },
  ]

  return (
    <div className="relative">
      <button
        type="button"
        className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10 transition-colors hover:shadow-md"
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.value === theme)
          const nextIndex = (currentIndex + 1) % themes.length
          setTheme(themes[nextIndex].value)
        }}
      >
        <span className="sr-only">Toggle theme</span>
        <AnimatePresence mode="wait">
          {themes.map(({ value, icon: Icon }) => (
            theme === value && (
              <motion.div
                key={value}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </button>
    </div>
  )
}

function MobileNavigation({ isOpen, setIsOpen }) {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Research' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs bg-white dark:bg-neutral-950 shadow-xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Navigation</h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-6 py-8">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center gap-8">
              <Link href="/" aria-label="Home" className="flex items-center">
                <Logo className="h-10 w-auto transition-colors" />
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="/about"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/process"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Research
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Contact us
              </Link>
              
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/10"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileNavigation isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
    </>
  )
}