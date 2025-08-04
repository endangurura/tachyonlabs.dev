import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import logoOpenai from '@/images/technologies/openai.png'
import logoAnthropic from '@/images/technologies/anthropic.png'
import logoMeta from '@/images/technologies/meta.png'
import logoXai from '@/images/technologies/xai.png'
import logoMicrosoftAzure from '@/images/technologies/microsoft-azure.png'

const researchPartners = [
  ['OpenAI', logoOpenai],
  ['Anthropic', logoAnthropic],
  ['Meta AI', logoMeta],
  ['xAI', logoXai],
  ['Microsoft', logoMicrosoftAzure],
]

function SamaritanShowcase() {
  return (
    <div className="mt-24 rounded-4xl bg-gradient-to-b from-neutral-950 to-neutral-900 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Introducing Samaritan
          </h2>
          <p className="mt-6 text-xl text-neutral-300">
            Our path to ASI—a superintelligence platform designed to transcend human cognitive limits
          </p>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeInStagger>
            <FadeIn className="rounded-3xl bg-white/5 p-8 backdrop-blur">
              <h3 className="font-display text-xl font-semibold text-white">
                Advanced Reasoning
              </h3>
              <p className="mt-4 text-neutral-300">
                Multi-step reasoning capabilities that break down complex problems into manageable components
              </p>
            </FadeIn>
            <FadeIn className="rounded-3xl bg-white/5 p-8 backdrop-blur">
              <h3 className="font-display text-xl font-semibold text-white">
                Autonomous Agents
              </h3>
              <p className="mt-4 text-neutral-300">
                Self-directed AI agents capable of planning, executing, and learning from complex tasks
              </p>
            </FadeIn>
            <FadeIn className="rounded-3xl bg-white/5 p-8 backdrop-blur">
              <h3 className="font-display text-xl font-semibold text-white">
                Safety-First Design
              </h3>
              <p className="mt-4 text-neutral-300">
                Built with alignment and safety at its core, ensuring beneficial outcomes for humanity
              </p>
            </FadeIn>
          </FadeInStagger>
        </div>
        <FadeIn className="mt-12 text-center">
          <a
            href="https://samaritan.si"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Explore Samaritan →
          </a>
        </FadeIn>
      </Container>
    </div>
  )
}

function ResearchPartners() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Research Collaborations
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {researchPartners.map(([partner, logo]) => (
              <li key={partner}>
                <FadeIn>
                  <Image src={logo} alt={partner} width={184} height={36} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function ResearchAreas() {
  const areas = [
    {
      title: 'ASI Alignment',
      description: 'Ensuring artificial superintelligence systems remain beneficial and aligned with human values through advanced safety research.',
    },
    {
      title: 'Multi-Agent Systems',
      description: 'Developing coordinated AI agents that can collaborate, negotiate, and solve problems collectively.',
    },
    {
      title: 'Reasoning & Planning',
      description: 'Building systems capable of complex reasoning, long-term planning, and adaptive problem-solving.',
    },
  ]

  return (
    <>
      <SectionIntro
        title="The Path to Artificial Superintelligence"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our research roadmap toward ASI focuses on breakthrough capabilities
          while ensuring safety and alignment remain paramount at every stage.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {areas.map((area) => (
            <FadeIn key={area.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50">
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
                  {area.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {area.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Capabilities() {
  return (
    <>
      <SectionIntro
        eyebrow="Capabilities"
        title="Building the Future of Artificial Intelligence"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Advancing the frontiers of AI through groundbreaking research and development.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="ASI Development">
              We&apos;re building artificial superintelligence—systems that will exceed human intelligence
              across all domains. Our research focuses on achieving ASI that is not only vastly more capable
              but fundamentally safe, interpretable, and aligned with human values.
            </ListItem>
            <ListItem title="AI Safety & Alignment Research">
              Safety isn&apos;t an afterthought—it&apos;s fundamental to our approach. We conduct cutting-edge research
              in AI alignment, interpretability, and robustness to ensure our systems remain beneficial
              as they become more capable.
            </ListItem>
            <ListItem title="Open Research & Collaboration">
              We believe ASI development requires collective wisdom. Our research is conducted openly,
              with findings shared globally to ensure humanity achieves ASI that is both
              transformative and safe.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  title: 'Tachyon Labs - AI Research Lab',
  description:
    'Building Samaritan: Advanced artificial superintelligence systems for solving humanity\'s greatest challenges. Pioneering ASI research with safety at the core.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Building Superintelligence for Humanity
          </h1>
          <p className="mt-6 text-2xl text-neutral-600">
            Tachyon Labs is advancing toward ASI—safe artificial superintelligence that will 
            transform our ability to solve humanity&apos;s greatest challenges.
          </p>
          <p className="mt-4 text-xl text-neutral-600">
            Our flagship platform, <span className="font-semibold text-neutral-950">Samaritan</span> (.si), 
            embodies our ASI vision—combining unprecedented reasoning capabilities with 
            rigorous safety alignment to ensure beneficial outcomes for all humanity.
          </p>
        </FadeIn>
      </Container>

      <SamaritanShowcase />

      <ResearchAreas />

      <ResearchPartners />

      <Capabilities />

      <ContactSection />
    </>
  )
}
