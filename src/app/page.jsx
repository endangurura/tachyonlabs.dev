'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { useTheme } from '@/contexts/ThemeContext'

function DotPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern
          id="dot-pattern"
          x="0"
          y="0"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" className="fill-neutral-900/20 dark:fill-white/10" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  )
}

function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-neutral-950 transition-colors">
      <div className="absolute inset-0">
        <DotPattern />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <FadeIn>
            <h1 className="font-display text-6xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-7xl lg:text-8xl">
              Tachyon Labs
            </h1>
            <p className="mt-6 text-2xl text-neutral-600 dark:text-neutral-400 sm:text-3xl">
              Advanced AI and data intelligence platforms for{' '}
              <span className="text-neutral-950 dark:text-white font-semibold">
                transformative impact
              </span>
            </p>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
              Building next-generation solutions: from enterprise data intelligence to artificial superintelligence.
            </p>
          </FadeIn>

          <FadeIn className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#products"
              className={`
                inline-flex items-center gap-2 px-6 py-3 font-semibold
                transition-all duration-200 border-2
                ${mounted && resolvedTheme === 'dark'
                  ? 'bg-white text-neutral-950 hover:bg-neutral-100 border-white'
                  : 'bg-neutral-950 text-white hover:bg-neutral-800 border-black'
                }
              `}
            >
              Explore our products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold
                border-2 border-neutral-950 dark:border-white
                text-neutral-950 dark:text-white
                hover:bg-neutral-950 dark:hover:bg-white
                hover:text-white dark:hover:text-neutral-950
                transition-all duration-200"
            >
              About us
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function ProductsSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="products" className="py-32 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            Enterprise-grade platforms driving intelligence and decision-making
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Hadron Card */}
          <FadeIn>
            <div className="relative h-full flex flex-col bg-neutral-50 dark:bg-neutral-900 p-8 lg:p-12 border-2 border-black dark:border-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200">
              <div className="flex-1">
                <div className="inline-flex p-3 mb-6 bg-neutral-950 dark:bg-white border-2 border-black dark:border-white">
                  <svg className="w-8 h-8 text-white dark:text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-bold text-neutral-950 dark:text-white mb-4">
                  Hadron
                </h3>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                  Enterprise data intelligence platform
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Transform your organization&apos;s data into actionable insights. Hadron provides the infrastructure
                  and tools to unify, analyze, and operationalize your enterprise data at scale.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-400">Unified data integration and pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-400">Advanced analytics and visualization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-400">Scalable for mid-market enterprises</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/hadron"
                className={`
                  inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold
                  transition-all duration-200 border-2 w-full
                  ${mounted && resolvedTheme === 'dark'
                    ? 'bg-white text-neutral-950 hover:bg-neutral-100 border-white'
                    : 'bg-neutral-950 text-white hover:bg-neutral-800 border-black'
                  }
                `}
              >
                Learn more about Hadron
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Samaritan Card */}
          <FadeIn>
            <div className="relative h-full flex flex-col bg-neutral-50 dark:bg-neutral-900 p-8 lg:p-12 border-2 border-black dark:border-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200">
              <div className="flex-1">
                <div className="inline-flex p-3 mb-6 bg-neutral-950 dark:bg-white border-2 border-black dark:border-white">
                  <svg className="w-8 h-8 text-white dark:text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-bold text-neutral-950 dark:text-white mb-4">
                  Samaritan
                </h3>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                  Artificial superintelligence platform
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  The next evolution of AI. Samaritan combines autonomous reasoning, continuous self-improvement,
                  and advanced alignment to tackle humanity&apos;s most complex challenges.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-400">Autonomous problem solving at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-400">Recursive self-improvement capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-400">Built-in safety and alignment</span>
                  </li>
                </ul>
              </div>
              <Link
                href="https://samaritan.si"
                className={`
                  inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold
                  transition-all duration-200 border-2 w-full
                  ${mounted && resolvedTheme === 'dark'
                    ? 'bg-white text-neutral-950 hover:bg-neutral-100 border-white'
                    : 'bg-neutral-950 text-white hover:bg-neutral-800 border-black'
                  }
                `}
              >
                Explore Samaritan
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ContactSection />
    </>
  )
}