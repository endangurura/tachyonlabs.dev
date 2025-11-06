import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'About Us - Tachyon Labs',
  description:
    'Tachyon Labs builds advanced AI and data intelligence platforms: Hadron for enterprise data operations and Samaritan for artificial superintelligence research.',
}

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About us" title="Building Intelligence Platforms for the Future">
        <p>
          Tachyon Labs develops next-generation AI and data intelligence platforms that enable organizations
          to harness the full potential of their data and artificial intelligence.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We operate at two frontiers of intelligent systems: enterprise data intelligence through Hadron,
            and artificial superintelligence research through Samaritan. Each platform represents a distinct
            approach to solving complex problems with advanced technology.
          </p>
          <p>
            <strong>Hadron</strong> brings enterprise-grade data intelligence capabilities to organizations
            that need to unify, analyze, and operationalize their data. Built for speed and clarity, Hadron
            enables mid-market companies to achieve capabilities typically reserved for the largest enterprises.
          </p>
          <p>
            <strong>Samaritan</strong> represents our work on artificial superintelligence—building systems
            that can reason, learn, and solve problems beyond current AI capabilities. Through rigorous research
            and careful development, we&apos;re working toward safe, beneficial ASI that can tackle humanity&apos;s
            most complex challenges.
          </p>
          <p>
            Whether optimizing operations or pushing the boundaries of AI research, Tachyon Labs is committed
            to building platforms that create meaningful impact.
          </p>
        </div>
      </PageIntro>

      <ContactSection />
    </>
  )
}
