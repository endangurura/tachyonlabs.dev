import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-neutral-950 transition-colors">
      <Container>
        <FadeIn className="-mx-6 bg-neutral-950 dark:bg-neutral-900 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 border-2 border-black dark:border-white">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Build the future with us
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                Join our mission to develop safe, beneficial artificial superintelligence.
              </p>
              <div className="mt-6 flex">
                <Button href="/contact" invert>
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
