'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ContactSection } from '@/components/ContactSection'

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hadron
          </h1>
          <p className="mt-6 text-2xl text-neutral-600 dark:text-neutral-400 sm:text-3xl">
            Enterprise data intelligence for organizations that demand{' '}
            <span className="text-neutral-950 dark:text-white font-semibold">
              operational excellence
            </span>
          </p>
          <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Transform fragmented data into unified intelligence. Hadron provides the infrastructure
            your organization needs to make data-driven decisions at scale.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function OverviewSection() {
  const capabilities = [
    {
      title: 'Data Integration',
      description: 'Connect and unify data from across your organization into a single source of truth.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: 'Advanced Analytics',
      description: 'Powerful analytical tools to uncover insights and drive strategic decision-making.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Operational Intelligence',
      description: 'Real-time visibility into operations, enabling faster response and continuous improvement.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your organization, from departmental deployments to enterprise-wide rollouts.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl">
            Built for Enterprise Scale
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Hadron delivers the capabilities modern organizations need to turn data into their most valuable asset.
          </p>
        </FadeIn>

        <FadeInStagger className="grid gap-8 md:grid-cols-2">
          {capabilities.map((capability) => (
            <FadeIn key={capability.title}>
              <div className="p-8 bg-white dark:bg-neutral-950 border-2 border-black dark:border-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200">
                <div className="inline-flex p-3 mb-6 bg-neutral-950 dark:bg-white border-2 border-black dark:border-white">
                  <div className="text-white dark:text-neutral-950">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-neutral-950 dark:text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {capability.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function WhyHadronSection() {
  const benefits = [
    'Unified data foundation across your organization',
    'Accelerated time-to-insight for critical decisions',
    'Scalable infrastructure that grows with your needs',
    'Enterprise-grade security and compliance',
    'Flexible deployment options',
    'Expert support and implementation guidance'
  ]

  return (
    <section className="py-32 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <FadeIn>
            <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl mb-8">
              Why Organizations Choose Hadron
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Leading organizations trust Hadron to power their most critical data operations.
              Our platform combines powerful capabilities with the flexibility needed for complex enterprise environments.
            </p>
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-400 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hadron/capabilities"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 border-2 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-black dark:border-white"
              >
                Explore capabilities
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/hadron/approach"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold
                  border-2 border-neutral-950 dark:border-white
                  text-neutral-950 dark:text-white
                  hover:bg-neutral-950 dark:hover:bg-white
                  hover:text-white dark:hover:text-neutral-950
                  transition-all duration-200"
              >
                Our approach
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-12 border-2 border-black dark:border-white">
              <blockquote className="space-y-6">
                <p className="text-2xl font-medium text-neutral-950 dark:text-white">
                  &ldquo;Hadron transformed how we understand and utilize our data. The platform gave us capabilities
                  we didn&apos;t know were possible.&rdquo;
                </p>
                <footer className="text-neutral-600 dark:text-neutral-400">
                  <div className="font-semibold text-neutral-950 dark:text-white">Director of Data Operations</div>
                  <div>Mid-Market Enterprise</div>
                </footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default function Hadron() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <WhyHadronSection />
      <ContactSection />
    </>
  )
}