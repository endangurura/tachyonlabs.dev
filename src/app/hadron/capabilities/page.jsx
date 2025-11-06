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
            Capabilities
          </h1>
          <p className="mt-6 text-2xl text-neutral-600 dark:text-neutral-400 sm:text-3xl max-w-3xl">
            Enterprise-grade data intelligence capabilities designed for complex operational environments
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function CapabilitiesSection() {
  const capabilities = [
    {
      category: 'Data Foundation',
      features: [
        {
          title: 'Universal Data Integration',
          description: 'Connect to any data source across your enterprise. Hadron provides flexible integration capabilities that work with your existing infrastructure.',
        },
        {
          title: 'Data Transformation & Pipelines',
          description: 'Build reliable data pipelines that transform raw data into actionable insights. Automate complex workflows with intuitive pipeline builders.',
        },
        {
          title: 'Data Quality & Governance',
          description: 'Maintain data integrity with built-in quality checks, lineage tracking, and governance controls that meet enterprise standards.',
        },
      ]
    },
    {
      category: 'Analytics & Intelligence',
      features: [
        {
          title: 'Advanced Analytics Engine',
          description: 'Powerful analytical capabilities that scale to billions of records. Perform complex analyses without compromising performance.',
        },
        {
          title: 'Real-Time Processing',
          description: 'Process and analyze data streams in real-time. Get immediate insights from operational data as it flows through your organization.',
        },
        {
          title: 'Predictive Intelligence',
          description: 'Leverage advanced algorithms to identify patterns, forecast trends, and surface insights that drive strategic decisions.',
        },
      ]
    },
    {
      category: 'Visualization & Collaboration',
      features: [
        {
          title: 'Interactive Dashboards',
          description: 'Build custom dashboards that provide clear visibility into key metrics. Empower teams with self-service analytics.',
        },
        {
          title: 'Collaborative Workspaces',
          description: 'Enable cross-functional collaboration with shared workspaces. Teams can explore data together and share insights seamlessly.',
        },
        {
          title: 'Automated Reporting',
          description: 'Generate comprehensive reports automatically. Schedule delivery and ensure stakeholders always have current information.',
        },
      ]
    },
    {
      category: 'Enterprise Features',
      features: [
        {
          title: 'Security & Compliance',
          description: 'Enterprise-grade security controls with granular access management. Meet regulatory requirements with built-in compliance features.',
        },
        {
          title: 'Scalable Infrastructure',
          description: 'Architecture designed to handle enterprise data volumes. Scale seamlessly as your organization grows.',
        },
        {
          title: 'Flexible Deployment',
          description: 'Deploy on-premises, in the cloud, or in hybrid environments. Hadron adapts to your infrastructure requirements.',
        },
      ]
    },
  ]

  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container>
        <FadeInStagger className="space-y-24">
          {capabilities.map((section) => (
            <FadeIn key={section.category}>
              <div>
                <h2 className="font-display text-3xl font-bold text-neutral-950 dark:text-white mb-12">
                  {section.category}
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {section.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-6 bg-white dark:bg-neutral-950 border-2 border-black dark:border-white"
                    >
                      <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function IntegrationSection() {
  return (
    <section className="py-32 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white sm:text-5xl mb-6">
            Built for Your Environment
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12">
            Hadron integrates seamlessly with your existing technology stack. Whether you&apos;re working with
            modern cloud infrastructure or legacy systems, our platform adapts to your environment.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border-2 border-black dark:border-white">
              <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                Cloud Native
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Designed for modern cloud environments with elastic scaling and distributed processing.
              </p>
            </div>
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border-2 border-black dark:border-white">
              <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                API-First
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Comprehensive APIs enable custom integrations and workflow automation.
              </p>
            </div>
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border-2 border-black dark:border-white">
              <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                Extensible
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Build custom modules and extensions tailored to your specific requirements.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function Capabilities() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <IntegrationSection />
      <ContactSection />
    </>
  )
}