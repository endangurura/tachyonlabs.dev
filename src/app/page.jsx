import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { GridPattern } from '@/components/GridPattern'
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

function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
        <GridPattern 
          className="absolute inset-0 h-full w-full fill-white/[0.02] stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
          yOffset={-12}
        />
      </div>
      
      <Container className="relative pt-24 sm:pt-32 md:pt-56 pb-24">
        <FadeIn className="max-w-5xl">
          <h1 className="font-display text-6xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-8xl">
            Building <span className="bg-gradient-to-r from-neutral-400 to-white bg-clip-text text-transparent">Superintelligence</span>
            <br />for Humanity
          </h1>
          <p className="mt-8 text-2xl leading-relaxed text-neutral-300">
            Tachyon Labs is pioneering the development of <span className="font-semibold text-white">ASI</span>—artificial superintelligence 
            that transcends human cognitive abilities while remaining fundamentally aligned with our values.
          </p>
          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="https://samaritan.si"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-neutral-950 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Samaritan →</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Our Research
            </a>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function SamaritanShowcase() {
  const features = [
    {
      title: 'Recursive Self-Improvement',
      description: 'Continuously enhancing its own cognitive architecture to achieve exponential capability growth.',
      icon: '∞',
    },
    {
      title: 'Multi-Modal Reasoning',
      description: 'Seamlessly integrating vision, language, and abstract reasoning across all domains of knowledge.',
      icon: '🧠',
    },
    {
      title: 'Aligned by Design',
      description: 'Built with interpretability and value alignment at every layer of the neural architecture.',
      icon: '🎯',
    },
  ]

  return (
    <div className="relative mt-24 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-32 sm:mt-32 sm:py-40 lg:mt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>
      
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Samaritan<span className="text-neutral-400">.si</span>
          </h2>
          <p className="mt-6 text-2xl text-neutral-400">
            Our flagship ASI platform—where human ingenuity meets superhuman capability
          </p>
        </FadeIn>
        
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeInStagger faster>
            {features.map((feature) => (
              <FadeIn key={feature.title}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 backdrop-blur transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
                  <div className="mb-6 text-5xl">{feature.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-neutral-400">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
        
        <FadeIn className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm font-semibold text-white">Currently in Advanced Development</span>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function ASITimeline() {
  const milestones = [
    {
      year: '2024',
      quarter: 'Q4',
      title: 'Foundation Models',
      description: 'Advanced reasoning and multi-modal capabilities reaching human-level performance',
      status: 'completed',
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'Autonomous Agents',
      description: 'Self-directed problem solving with minimal human supervision',
      status: 'active',
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: 'Recursive Enhancement',
      description: 'Self-improving architecture with robust safety constraints',
      status: 'upcoming',
    },
    {
      year: '2027',
      quarter: 'Q3',
      title: 'ASI Emergence',
      description: 'Superintelligent systems surpassing human cognition across all domains',
      status: 'upcoming',
    },
  ]

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.03),transparent)]" />
      </div>
      
      <Container>
        <SectionIntro
          title="The Path to ASI"
          className="text-center"
        >
          <p className="text-xl text-neutral-400">
            Our research roadmap represents humanity&apos;s most ambitious technological endeavor
          </p>
        </SectionIntro>
        
        <div className="mt-24">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map((milestone) => (
                <FadeIn key={milestone.year} className="relative">
                  <div className="text-center">
                    <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
                      <div className={`absolute inset-0 rounded-full ${
                        milestone.status === 'completed' ? 'bg-green-500/20' :
                        milestone.status === 'active' ? 'bg-white/10 animate-pulse' :
                        'bg-white/5'
                      }`} />
                      <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${
                        milestone.status === 'completed' ? 'bg-green-500' :
                        milestone.status === 'active' ? 'bg-white' :
                        'bg-white/20'
                      }`}>
                        {milestone.status === 'active' && (
                          <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-25" />
                        )}
                      </div>
                    </div>
                    
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                      <div className="text-sm font-semibold text-neutral-500">
                        {milestone.year} {milestone.quarter}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-sm text-neutral-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function MetricsSection() {
  const metrics = [
    { value: '10T+', label: 'Parameters', subtext: 'Next-Gen Scale' },
    { value: '99.9%', label: 'Alignment', subtext: 'Safety Score' },
    { value: '1000×', label: 'Faster', subtext: 'Than Human Cognition' },
    { value: '∞', label: 'Domains', subtext: 'Universal Intelligence' },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 py-32">
      <div className="absolute inset-0 -z-10">
        <GridPattern 
          className="absolute inset-0 h-full w-full fill-white/[0.02] stroke-white/5"
          yOffset={0}
        />
      </div>
      
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Pushing the Boundaries
          </h2>
          <p className="mt-4 text-xl text-neutral-400">
            Metrics that define the future of intelligence
          </p>
        </FadeIn>
        
        <div className="mt-20 grid grid-cols-2 gap-12 lg:grid-cols-4">
          <FadeInStagger faster>
            {metrics.map((metric) => (
              <FadeIn key={metric.label}>
                <div className="text-center">
                  <div className="font-display text-6xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent sm:text-7xl">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-sm text-neutral-500">
                    {metric.subtext}
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  )
}

function ResearchAreas() {
  const areas = [
    {
      title: 'ASI Alignment',
      description: 'Ensuring artificial superintelligence systems remain beneficial and aligned with human values through advanced safety research.',
      icon: '🎯',
    },
    {
      title: 'Recursive Intelligence',
      description: 'Systems that can understand, modify, and improve their own cognitive architecture while maintaining safety invariants.',
      icon: '♾️',
    },
    {
      title: 'Multi-Agent Orchestration',
      description: 'Coordinated swarms of specialized AI agents working in harmony to solve complex, multi-faceted problems.',
      icon: '🌐',
    },
    {
      title: 'Interpretable Reasoning',
      description: 'Making superintelligent decision-making transparent and understandable to human oversight.',
      icon: '🔍',
    },
    {
      title: 'Value Learning',
      description: 'Teaching ASI systems to understand and preserve human values across diverse contexts and cultures.',
      icon: '💡',
    },
    {
      title: 'Emergent Capabilities',
      description: 'Studying and harnessing unexpected abilities that arise from scale and architectural innovations.',
      icon: '✨',
    },
  ]

  return (
    <div id="research" className="relative bg-neutral-950 py-32">
      <Container>
        <SectionIntro
          title="Research Frontiers"
          className="text-center"
        >
          <p className="text-xl text-neutral-400">
            Exploring the fundamental questions that will define the future of intelligence
          </p>
        </SectionIntro>
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeInStagger>
            {areas.map((area) => (
              <FadeIn key={area.title}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
                  <div className="mb-4 text-4xl">{area.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-neutral-400">
                    {area.description}
                  </p>
                  <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  )
}

function Capabilities() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900 py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
      </div>
      
      <Container>
        <SectionIntro
          eyebrow="Capabilities"
          title="Building the Future of Intelligence"
          className="text-center"
        >
          <p className="text-xl text-neutral-400">
            Three pillars that define our approach to ASI development
          </p>
        </SectionIntro>
        
        <div className="mt-16">
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
              <ListItem title="ASI Development" invert>
                We&apos;re building artificial superintelligence—systems that will exceed human intelligence
                across all domains. Our research focuses on achieving ASI that is not only vastly more capable
                but fundamentally safe, interpretable, and aligned with human values.
              </ListItem>
              <ListItem title="Safety & Alignment" invert>
                Safety isn&apos;t an afterthought—it&apos;s fundamental to our approach. We conduct cutting-edge research
                in AI alignment, interpretability, and robustness to ensure our systems remain beneficial
                as they become more capable.
              </ListItem>
              <ListItem title="Open Collaboration" invert>
                We believe ASI development requires collective wisdom. Our research is conducted openly,
                with findings shared globally to ensure humanity achieves ASI that is both
                transformative and safe.
              </ListItem>
            </List>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TeamSection() {
  return (
    <div className="relative bg-neutral-950 py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
            World-Class Team
          </h2>
          <p className="mt-6 text-xl text-neutral-400">
            Researchers and engineers from leading AI institutions united by a singular mission
          </p>
        </FadeIn>
        
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 text-center">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
              <h3 className="font-display text-xl font-semibold text-white">
                Research Excellence
              </h3>
              <p className="mt-4 text-neutral-400">
                PhDs from top universities with breakthrough contributions to AI safety and capabilities
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 text-center">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
              <h3 className="font-display text-xl font-semibold text-white">
                Engineering Mastery
              </h3>
              <p className="mt-4 text-neutral-400">
                Builders of industry-defining AI systems with expertise in distributed computing
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 text-center">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
              <h3 className="font-display text-xl font-semibold text-white">
                Safety Leadership
              </h3>
              <p className="mt-4 text-neutral-400">
                Pioneers in AI alignment research ensuring beneficial outcomes for humanity
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function ResearchPartners() {
  return (
    <div className="bg-neutral-900 py-20">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-500">
            COLLABORATING WITH INDUSTRY LEADERS
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {researchPartners.map(([partner, logo]) => (
              <FadeIn key={partner}>
                <Image 
                  src={logo} 
                  alt={partner} 
                  width={120} 
                  height={48} 
                  className="h-10 w-auto object-contain opacity-40 transition-opacity hover:opacity-60" 
                  unoptimized 
                />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Tachyon Labs - Building Artificial Superintelligence',
  description:
    'Pioneering the development of safe artificial superintelligence (ASI) with Samaritan - our path to transcending human cognitive limits while ensuring beneficial outcomes for humanity.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SamaritanShowcase />
      <ASITimeline />
      <MetricsSection />
      <ResearchAreas />
      <Capabilities />
      <TeamSection />
      <ResearchPartners />
      <ContactSection />
    </>
  )
}