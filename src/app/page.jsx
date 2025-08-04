import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { GridPattern } from '@/components/GridPattern'
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
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-5xl">
          <h1 className="font-display text-6xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-8xl">
            Building <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Superintelligence</span> for Humanity
          </h1>
          <p className="mt-8 text-2xl leading-relaxed text-neutral-700">
            Tachyon Labs is pioneering the development of <span className="font-semibold">ASI</span>—artificial superintelligence 
            that transcends human cognitive abilities while remaining fundamentally aligned with our values.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://samaritan.si"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Samaritan →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center rounded-full border-2 border-neutral-950 px-8 py-4 font-semibold text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Our Research
            </a>
          </div>
        </FadeIn>
      </Container>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

function SamaritanShowcase() {
  const features = [
    {
      title: 'Recursive Self-Improvement',
      description: 'Continuously enhancing its own cognitive architecture to achieve exponential capability growth.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Multi-Modal Reasoning',
      description: 'Seamlessly integrating vision, language, and abstract reasoning across all domains of knowledge.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Aligned by Design',
      description: 'Built with interpretability and value alignment at every layer of the neural architecture.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="relative mt-32 overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-24 sm:mt-40 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          yOffset={-12}
        />
      </div>
      
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl">
            Samaritan<span className="text-purple-600">.si</span>
          </h2>
          <p className="mt-6 text-2xl text-neutral-600">
            Our flagship ASI platform—where human ingenuity meets superhuman capability
          </p>
        </FadeIn>
        
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeInStagger faster>
            {features.map((feature) => (
              <FadeIn key={feature.title}>
                <div className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30`} />
                  <h3 className="relative font-display text-2xl font-semibold text-neutral-950">
                    {feature.title}
                  </h3>
                  <p className="relative mt-4 text-lg text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
        
        <FadeIn className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-6 py-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-purple-600" />
            <span className="text-sm font-semibold text-purple-900">Currently in Advanced Development</span>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function ASIRoadmap() {
  const milestones = [
    {
      year: '2024',
      title: 'Foundation Models',
      description: 'Advanced reasoning and multi-modal capabilities',
      status: 'completed',
    },
    {
      year: '2025',
      title: 'Autonomous Agents',
      description: 'Self-directed problem solving and task execution',
      status: 'active',
    },
    {
      year: '2026',
      title: 'Recursive Enhancement',
      description: 'Self-improving architecture with safety constraints',
      status: 'upcoming',
    },
    {
      year: '2027',
      title: 'ASI Emergence',
      description: 'Superintelligent systems surpassing human cognition',
      status: 'upcoming',
    },
  ]

  return (
    <div className="mt-32 py-24 sm:mt-40 sm:py-32">
      <Container>
        <SectionIntro
          title="The Path to ASI"
          className="text-center"
        >
          <p className="text-xl">
            Our research roadmap represents humanity&apos;s most ambitious technological endeavor
          </p>
        </SectionIntro>
        
        <div className="mt-20">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-600 via-blue-600 to-transparent" />
            
            {milestones.map((milestone, index) => (
              <FadeIn key={milestone.year} className="relative">
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16`}>
                  <div className="flex-1">
                    <div className={`rounded-2xl bg-white p-8 shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`text-sm font-semibold ${
                        milestone.status === 'completed' ? 'text-green-600' :
                        milestone.status === 'active' ? 'text-purple-600' :
                        'text-neutral-400'
                      }`}>
                        {milestone.year}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-neutral-950">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-neutral-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center">
                    <div className={`h-full w-full rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-600' :
                      milestone.status === 'active' ? 'animate-pulse bg-purple-600' :
                      'bg-neutral-300'
                    }`} />
                    {milestone.status === 'active' && (
                      <div className="absolute h-full w-full animate-ping rounded-full bg-purple-600 opacity-25" />
                    )}
                  </div>
                  
                  <div className="flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function MetricsSection() {
  const metrics = [
    { value: '10B+', label: 'Parameters', subtext: 'Model Scale' },
    { value: '99.9%', label: 'Alignment', subtext: 'Safety Score' },
    { value: '1000x', label: 'Faster', subtext: 'Than Human Reasoning' },
    { value: '∞', label: 'Domains', subtext: 'Universal Intelligence' },
  ]

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      </div>
      
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pushing the Boundaries of Intelligence
          </h2>
        </FadeIn>
        
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <FadeInStagger faster>
            {metrics.map((metric) => (
              <FadeIn key={metric.label}>
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text sm:text-6xl">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">
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
      icon: '🧠',
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
    <div id="research" className="mt-32 py-24 sm:mt-40 sm:py-32">
      <Container>
        <SectionIntro
          title="Research Frontiers"
          className="text-center"
        >
          <p className="text-xl">
            Exploring the fundamental questions that will define the future of intelligence
          </p>
        </SectionIntro>
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeInStagger>
            {areas.map((area) => (
              <FadeIn key={area.title}>
                <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-purple-200 hover:shadow-xl">
                  <div className="text-4xl">{area.icon}</div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-neutral-600">
                    {area.description}
                  </p>
                  <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-50" />
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  )
}

function TeamSection() {
  return (
    <div className="mt-32 bg-gradient-to-b from-neutral-50 to-white py-24 sm:mt-40 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Founded by Visionaries
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            A team of world-class researchers and engineers united by a singular mission
          </p>
        </FadeIn>
        
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="flex flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
              <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Research Leadership
              </h3>
              <p className="mt-4 text-center text-neutral-600">
                Former leaders from top AI labs, with decades of combined experience in 
                machine learning, neuroscience, and computer science.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="flex flex-col items-center rounded-3xl bg-white p-10 shadow-lg">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />
              <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Engineering Excellence
              </h3>
              <p className="mt-4 text-center text-neutral-600">
                Builders of the world&apos;s most advanced AI systems, with expertise spanning 
                distributed computing, neural architecture, and safety engineering.
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
    <div className="mt-32 py-20 sm:mt-40 sm:py-24">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-600">
            Collaborating with Industry Leaders
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {researchPartners.map(([partner, logo]) => (
              <FadeIn key={partner}>
                <Image 
                  src={logo} 
                  alt={partner} 
                  width={120} 
                  height={48} 
                  className="h-12 w-auto object-contain opacity-50 transition-opacity hover:opacity-100" 
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
      <ASIRoadmap />
      <MetricsSection />
      <ResearchAreas />
      <TeamSection />
      <ResearchPartners />
      <ContactSection />
    </>
  )
}