import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import ContactUsForm from "@/components/ContactUsForm"

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
        Get in touch
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm">
        <div>
          <dt className="font-semibold text-neutral-950 dark:text-white">Email</dt>
          <dd>
            <Link
              href="mailto:hello@tachyonlabs.dev"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              hello@tachyonlabs.dev
            </Link>
          </dd>
        </div>
      </dl>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us - Tachyon Labs',
  description: 'Get in touch with our team to learn more about our AI research, collaborate on projects, or explore partnership opportunities.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Join Us in Building the Future">
        <p>Whether you&apos;re interested in our research, exploring collaboration opportunities, 
           or want to learn more about Samaritan, we&apos;d love to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactUsForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
