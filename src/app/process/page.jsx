import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Research() {
  return (
    <Section title="Research" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our research process begins with identifying fundamental questions about intelligence, reasoning,
          and alignment. We explore the theoretical foundations of ASI while maintaining a practical focus
          on building systems that can solve real-world problems.
        </p>
        <p>
          We conduct extensive literature reviews, collaborate with leading institutions, and perform
          rigorous experiments to validate our hypotheses. Every research direction is evaluated through
          the lens of both capability advancement and safety assurance.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Research Areas
      </h3>
      <TagList className="mt-4">
        <TagListItem>Neural Architecture Search</TagListItem>
        <TagListItem>Reinforcement Learning</TagListItem>
        <TagListItem>Interpretability Studies</TagListItem>
        <TagListItem>Alignment Research</TagListItem>
      </TagList>
    </Section>
  )
}

function Development() {
  return (
    <Section title="Development" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development process transforms research breakthroughs into robust, scalable AI systems.
          We employ cutting-edge machine learning frameworks and distributed computing infrastructure
          to train models that push the boundaries of what&apos;s possible.
        </p>
        <p>
          Safety is integrated at every stage of development. We implement multiple layers of testing,
          validation, and alignment checks to ensure our systems behave reliably and beneficially.
          Our red team continuously probes for potential failure modes and edge cases.
        </p>
        <p>
          We maintain transparency through regular publications and open-source contributions.
          Our development practices set industry standards for responsible AI development,
          balancing rapid innovation with careful consideration of long-term impacts.
        </p>
      </div>

      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

function Deployment() {
  return (
    <Section title="Deployment" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our deployment process ensures that AI systems are released safely and responsibly.
          We conduct extensive testing across diverse scenarios, evaluating performance, safety,
          and alignment before any system reaches production.
        </p>
        <p>
          We implement graduated deployment strategies, starting with limited access programs
          that allow us to gather feedback and refine our systems. This measured approach
          ensures that we can identify and address any issues before wider release.
        </p>
        <p>
          Post-deployment, we maintain continuous monitoring and improvement cycles.
          Our systems learn from real-world interactions while maintaining strict safety
          boundaries, ensuring they become more capable while remaining aligned with human values.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Deployment Practices
      </h3>
      <List className="mt-8">
        <ListItem title="Safety Testing">
          Comprehensive evaluation of system behavior across edge cases and adversarial inputs.
        </ListItem>
        <ListItem title="Staged Rollout">
          Graduated deployment from research preview to production, with careful monitoring at each stage.
        </ListItem>
        <ListItem title="Continuous Monitoring">
          Real-time monitoring of system performance, safety metrics, and alignment indicators.
        </ListItem>
      </List>
    </Section>
  )
}

function Principles() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our principles"
        title="Guided by Safety and Innovation"
      >
        <p>
          Our research and development principles ensure that we advance the frontiers
          of AI while maintaining an unwavering commitment to safety and beneficial outcomes.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Safety First">
            Every system we build undergoes rigorous safety evaluation. We prioritize
            alignment and beneficial behavior over raw capability advancement.
          </GridListItem>
          <GridListItem title="Transparency">
            We publish our research openly and engage with the global AI community
            to ensure collective progress toward safe ASI.
          </GridListItem>
          <GridListItem title="Scalable Oversight">
            We develop techniques that allow humans to effectively oversee and guide
            AI systems even as they become more capable than their creators.
          </GridListItem>
          <GridListItem title="Robustness">
            Our systems are designed to handle edge cases, adversarial inputs, and
            unexpected scenarios while maintaining safe and reliable behavior.
          </GridListItem>
          <GridListItem title="Beneficial by Design">
            We architect our systems from the ground up to be helpful, harmless,
            and honest, embedding these values into their core objectives.
          </GridListItem>
          <GridListItem title="Continuous Improvement">
            We maintain a culture of rapid iteration and learning, incorporating
            feedback from research, deployment, and the broader community.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Research Process - Tachyon Labs',
  description:
    'Learn about our rigorous research methodology for developing safe, beneficial artificial superintelligence.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our methodology" title="From Research to Reality">
        <p>
          Our approach to building ASI combines fundamental research with practical engineering,
          always guided by our commitment to safety and beneficial outcomes. We follow a rigorous
          methodology that ensures every advancement brings us closer to aligned superintelligence.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Research />
        <Development />
        <Deployment />
      </div>

      <Principles />

      <ContactSection />
    </>
  )
}
