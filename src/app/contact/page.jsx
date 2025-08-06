import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import ContactUsForm from "@/components/ContactUsForm"

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 pb-4 pt-12 text-base/6 text-neutral-950 dark:text-white ring-4 ring-transparent transition focus:border-neutral-950 dark:focus:border-white focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-white/10 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 dark:text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 dark:peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 dark:peer-[:not(:placeholder-shown)]:text-white"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault()
    // Form submission is handled by ContactUsForm component
  }
  
  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50 dark:bg-neutral-800/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Message" name="message" />
          {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$25K – $50K" name="budget" value="25" />
                <RadioInput label="$50K – $100K" name="budget" value="50" />
                <RadioInput label="$100K – $150K" name="budget" value="100" />
                <RadioInput label="More than $150K" name="budget" value="150" />
              </div>
            </fieldset>
          </div> */}
        </div>
        <Button type="submit" className="mt-10 mb-8">
          Let&apos;s work together
        </Button>
      </form>
    </FadeIn>
  )
}

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
