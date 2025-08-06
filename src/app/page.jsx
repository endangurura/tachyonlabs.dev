'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
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
              An applied AI lab building{' '}
              <span className="text-neutral-950 dark:text-white font-semibold">
                artificial superintelligence
              </span>
            </p>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
              We&apos;re the makers of{' '}
              <Link 
                href="https://samaritan.si" 
                className="font-semibold text-neutral-950 dark:text-white hover:underline underline-offset-4 transition-all"
              >
                Samaritan
              </Link>
              {' '}— The ASI platform designed to solve humanity&apos;s greatest challenges.
            </p>
          </FadeIn>
          
          <FadeIn className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://samaritan.si"
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                transition-all duration-200
                ${mounted && resolvedTheme === 'dark' 
                  ? 'bg-white text-neutral-950 hover:bg-neutral-100' 
                  : 'bg-neutral-950 text-white hover:bg-neutral-800'
                }
              `}
            >
              Get started with Samaritan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                border border-neutral-200 dark:border-neutral-800
                text-neutral-700 dark:text-neutral-300
                hover:border-neutral-300 dark:hover:border-neutral-700
                hover:text-neutral-950 dark:hover:text-white
                transition-all duration-200"
            >
              Learn more
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function SamaritanShowcase() {
  const [activeTab, setActiveTab] = useState('capabilities')

  const tabs = {
    capabilities: {
      title: 'Capabilities',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Autonomous Problem Solving
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Samaritan independently identifies, analyzes, and solves complex multi-domain problems
              that require reasoning beyond human capability.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Continuous Self-Improvement
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Through recursive enhancement, Samaritan improves its own architecture and algorithms,
              accelerating progress toward superintelligence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Aligned Decision Making
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Built with advanced alignment techniques to ensure all actions and recommendations
              prioritize human values and beneficial outcomes.
            </p>
          </div>
        </div>
      )
    },
    applications: {
      title: 'Applications',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Scientific Discovery
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Accelerating research in physics, chemistry, biology, and medicine through
              pattern recognition and hypothesis generation at superhuman speeds.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Climate Solutions
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Developing and optimizing sustainable technologies, carbon capture methods,
              and ecosystem management strategies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Global Coordination
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Facilitating international cooperation on existential challenges through
              advanced modeling and policy optimization.
            </p>
          </div>
        </div>
      )
    },
    safety: {
      title: 'Safety',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Interpretable Architecture
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Every decision process is traceable and understandable, enabling
              human oversight even as capabilities scale beyond human comprehension.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Robust Value Alignment
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Multiple redundant alignment mechanisms ensure Samaritan&apos;s goals
              remain consistent with human flourishing across all scenarios.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-950 dark:text-white mb-2">
              Controlled Deployment
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Gradual capability unlock with extensive testing at each stage,
              ensuring safety without sacrificing transformative potential.
            </p>
          </div>
        </div>
      )
    }
  }

  return (
    <section id="samaritan" className="py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl">
            Samaritan Platform
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            The bridge between current AI and superintelligence
          </p>
        </FadeIn>

        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-8">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`
                    flex-1 px-4 py-2 rounded-md font-medium transition-all duration-200
                    ${activeTab === key
                      ? 'bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-neutral-950 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800"
              >
                {tabs[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function ResearchSection() {
  const research = [
    {
      title: 'Scalable Oversight',
      description: 'Developing techniques for humans to effectively guide and monitor AI systems that exceed human cognitive capabilities.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Interpretability',
      description: 'Building transparent AI architectures where decision-making processes can be understood and verified.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Recursive Improvement',
      description: 'Enabling AI systems to enhance their own capabilities while maintaining alignment and safety constraints.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Multi-Agent Systems',
      description: 'Coordinating multiple specialized AI agents to solve complex problems through collaborative intelligence.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Value Learning',
      description: 'Teaching AI systems to understand and prioritize human values through advanced preference modeling.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Robustness',
      description: 'Ensuring AI systems perform reliably across diverse scenarios and edge cases.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ]

  return (
    <section id="research" className="py-32 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl">
            Research Areas
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            Fundamental advances toward safe superintelligence
          </p>
        </FadeIn>

        <FadeInStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {research.map((item) => (
            <FadeIn key={item.title}>
              <div className="group relative rounded-xl p-8 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}


export default function Home() {
  return (
    <>
      <HeroSection />
      <SamaritanShowcase />
      <ResearchSection />
      <ContactSection />
    </>
  )
}