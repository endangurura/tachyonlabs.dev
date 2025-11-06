'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import ContactUsForm from '@/components/ContactUsForm'

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
            Get in Touch
          </h1>
          <p className="mt-6 text-2xl text-neutral-600 dark:text-neutral-400 sm:text-3xl max-w-3xl">
            Let&apos;s discuss how Hadron can transform your organization&apos;s data capabilities
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function ContactFormSection() {
  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <Container>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-neutral-950 dark:text-white mb-6">
                Start Your Journey
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                Whether you&apos;re exploring data intelligence platforms or ready to get started,
                our team is here to help you understand how Hadron fits your needs.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-950 dark:text-white mb-2">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-400">Response within one business day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-400">Initial consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-400">Custom demo tailored to your use cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-neutral-950 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-400">Detailed implementation roadmap</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t-2 border-black dark:border-white">
                  <h3 className="font-semibold text-neutral-950 dark:text-white mb-2">
                    Enterprise Inquiries
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    For enterprise sales or partnership opportunities, email us directly:
                  </p>
                  <a
                    href="mailto:hadron@tachyonlabs.dev"
                    className="inline-flex items-center gap-2 text-neutral-950 dark:text-white font-semibold hover:underline underline-offset-4"
                  >
                    hadron@tachyonlabs.dev
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Most organizations are operational within 4-12 weeks, depending on data complexity and integration requirements.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive onboarding, training, and ongoing support. Standard and premium support tiers are available.',
    },
    {
      question: 'Can Hadron work with our existing systems?',
      answer: 'Yes. Hadron is designed to integrate with a wide range of data sources and existing infrastructure.',
    },
    {
      question: 'Do you offer proof-of-concept trials?',
      answer: 'We work with qualified organizations to design custom POCs that demonstrate value with your actual data.',
    },
  ]

  return (
    <section className="py-32 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-neutral-950 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="pb-8 border-b-2 border-neutral-200 dark:border-neutral-800 last:border-0"
              >
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <FAQSection />
    </>
  )
}