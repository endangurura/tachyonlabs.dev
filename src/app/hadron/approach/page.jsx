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
          <Link
            href="/hadron"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Hadron
          </Link>
          <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
            Our Approach
          </h1>
          <p className="mt-6 text-2xl text-neutral-600 dark:text-neutral-400 sm:text-3xl max-w-3xl">
            Enterprise capabilities designed for organizations that value speed, clarity, and results
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function PhilosophySection() {
  const principles = [
    {
      title: 'Speed to Value',
      description: 'We believe powerful data platforms shouldn\'t take years to deploy. Our architecture enables rapid implementation while maintaining enterprise-grade capabilities.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Operational Focus',
      description: 'Data platforms should drive operational excellence, not just analysis. Hadron is built to integrate into daily workflows and enable immediate action.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Transparent Complexity',
      description: 'Complex problems require sophisticated solutions, but those solutions shouldn\'t be opaque. We prioritize clarity at every layer of the platform.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Built for Growth',
      description: 'Organizations evolve. Hadron grows with you—from departmental deployments to enterprise-wide operations without requiring fundamental re-architecture.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl mb-6">
            Built on Core Principles
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Every decision in Hadron&apos;s design reflects our commitment to operational excellence
            and practical intelligence.
          </p>
        </FadeIn>

        <FadeInStagger className="grid gap-8 md:grid-cols-2">
          {principles.map((principle) => (
            <FadeIn key={principle.title}>
              <div className="p-10 bg-white dark:bg-neutral-950 border-2 border-black dark:border-white h-full">
                <div className="inline-flex p-4 mb-6 bg-neutral-950 dark:bg-white border-2 border-black dark:border-white">
                  <div className="text-white dark:text-neutral-950">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-neutral-950 dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function DifferentiatorsSection() {
  const differentiators = [
    {
      category: 'Implementation',
      points: [
        'Weeks, not months to operational deployment',
        'Lean methodology focused on immediate value',
        'Incremental rollout that proves value at each stage'
      ]
    },
    {
      category: 'Architecture',
      points: [
        'Modern cloud-native infrastructure',
        'Composable platform adapts to your needs',
        'Built for operational workloads, not just analytics'
      ]
    },
    {
      category: 'Integration',
      points: [
        'Works with your existing technology stack',
        'API-first design enables custom workflows',
        'Pre-built connectors for common enterprise systems'
      ]
    },
    {
      category: 'Collaboration',
      points: [
        'Built for cross-functional teams',
        'Self-service capabilities reduce bottlenecks',
        'Shared context across departments'
      ]
    }
  ]

  return (
    <section className="py-32 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl mb-6">
            What Makes Hadron Different
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            We built Hadron specifically for organizations that need enterprise-grade capabilities
            but can&apos;t afford the complexity, timeline, or overhead of traditional enterprise platforms.
          </p>
        </FadeIn>

        <FadeInStagger className="grid gap-8 md:grid-cols-2">
          {differentiators.map((section) => (
            <FadeIn key={section.category}>
              <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border-2 border-black dark:border-white">
                <h3 className="font-display text-2xl font-semibold text-neutral-950 dark:text-white mb-6">
                  {section.category}
                </h3>
                <ul className="space-y-4">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function IdealOrganizationSection() {
  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container>
        <FadeIn className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl mb-12 text-center">
            Is Hadron Right for Your Organization?
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-white dark:bg-neutral-950 border-2 border-black dark:border-white">
              <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                Hadron works best for organizations that:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Need to unify data from multiple sources into actionable intelligence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Want enterprise capabilities without multi-year implementation timelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Value operational decision-making over pure analytical reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Need flexibility to adapt the platform as requirements evolve
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Require clear visibility into how the platform processes and transforms data
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-8 bg-white dark:bg-neutral-950 border-2 border-black dark:border-white">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Common Use Cases
                </h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <li>• Operations intelligence</li>
                  <li>• Supply chain visibility</li>
                  <li>• Customer data unification</li>
                  <li>• Risk monitoring</li>
                  <li>• Regulatory reporting</li>
                </ul>
              </div>

              <div className="p-8 bg-white dark:bg-neutral-950 border-2 border-black dark:border-white">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Typical Profile
                </h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <li>• Mid-market to enterprise scale</li>
                  <li>• Complex data environments</li>
                  <li>• Cross-functional initiatives</li>
                  <li>• Growth-focused organizations</li>
                  <li>• Value rapid deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function Approach() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <DifferentiatorsSection />
      <IdealOrganizationSection />
      <ContactSection />
    </>
  )
}