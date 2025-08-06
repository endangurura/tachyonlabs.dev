'use client'

import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'




function RootLayoutInner({ children }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header />
      
      <main className="flex-auto bg-white dark:bg-neutral-950 transition-colors">
        {children}
      </main>

      <Footer />
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  const pathname = usePathname()

  return (
    <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
  )
}
