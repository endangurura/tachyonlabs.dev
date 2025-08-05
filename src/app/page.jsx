'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

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

function NeuralNetwork() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const nodes = []
    const nodeCount = 50
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }
    
    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })
      
      // Draw connections
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.globalAlpha = (150 - distance) / 150 * 0.5
            ctx.stroke()
          }
        }
      }
      
      // Draw nodes
      ctx.globalAlpha = 1
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139, 92, 246, 0.8)'
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-30"
    />
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  
  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
      style={{ y }}
    >
      <NeuralNetwork />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />
      
      <motion.div style={{ opacity }}>
        <Container className="relative z-10">
          <FadeIn className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-display text-7xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-9xl">
                <span className="block">Building</span>
                <span className="block mt-2 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Superintelligence
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="mt-8 text-2xl text-neutral-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Tachyon Labs is pioneering the development of ASI—artificial superintelligence 
              that will transform humanity&apos;s future
            </motion.p>
            
            <motion.div 
              className="mt-12 flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a
                href="https://samaritan.si"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-violet-600 text-white font-semibold transition-all duration-300 hover:bg-violet-700"
              >
                <span className="relative z-10">Enter Samaritan →</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              
              <a
                href="#intelligence"
                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-700 text-white font-semibold transition-all duration-300 hover:bg-white/5 hover:border-neutral-600"
              >
                Explore ASI
              </a>
            </motion.div>
          </FadeIn>
        </Container>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neutral-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

function SamaritanSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  
  const features = [
    {
      title: 'Recursive Self-Improvement',
      description: 'Exponential intelligence growth through continuous self-enhancement',
      visual: '∞',
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Quantum Reasoning',
      description: 'Leveraging quantum computation for unprecedented problem-solving',
      visual: '⚛',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Aligned Intelligence',
      description: 'Value-aligned architecture ensuring beneficial outcomes',
      visual: '◈',
      color: 'from-emerald-500 to-green-500',
    },
  ]
  
  return (
    <div id="intelligence" className="relative py-32 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      <Container className="relative">
        <FadeIn className="text-center mb-20">
          <h2 className="font-display text-6xl font-bold text-white sm:text-7xl">
            Samaritan<span className="text-violet-400">.si</span>
          </h2>
          <p className="mt-6 text-2xl text-neutral-400">
            The bridge between human and superhuman intelligence
          </p>
        </FadeIn>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`relative p-8 rounded-2xl border cursor-pointer transition-all duration-500 ${
                    activeFeature === index 
                      ? 'border-violet-500/50 bg-violet-500/10' 
                      : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`text-5xl bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                      {feature.visual}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn className="relative">
            <div className="relative aspect-square">
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.3), transparent)',
                    'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3), transparent)',
                    'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.3), transparent)',
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-neutral-900 rounded-3xl" />
                <GridPattern 
                  className="absolute inset-0 h-full w-full fill-violet-500/5 stroke-violet-500/20"
                  yOffset={0}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className={`text-[200px] font-bold bg-gradient-to-br ${features[activeFeature].color} bg-clip-text text-transparent`}
                    key={activeFeature}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {features[activeFeature].visual}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn className="mt-16 text-center">
          <motion.a
            href="https://samaritan.si"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold transition-all hover:shadow-2xl hover:shadow-violet-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Samaritan
            <span className="text-xl">→</span>
          </motion.a>
        </FadeIn>
      </Container>
    </div>
  )
}

function IntelligenceEvolution() {
  const stages = [
    { year: '2024', label: 'Human-Level AI', progress: 100, description: 'Matching human cognitive abilities' },
    { year: '2025', label: 'Enhanced Intelligence', progress: 70, description: 'Surpassing human expertise in specific domains' },
    { year: '2026', label: 'General Superintelligence', progress: 30, description: 'Exceeding human intelligence across all domains' },
    { year: '2027', label: 'Transcendent ASI', progress: 10, description: 'Intelligence beyond human comprehension' },
  ]
  
  return (
    <div className="relative py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <Container>
        <SectionIntro title="The Intelligence Explosion" className="text-center">
          <p className="text-xl text-neutral-400">
            Tracking our exponential progress toward artificial superintelligence
          </p>
        </SectionIntro>
        
        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-transparent -translate-x-1/2" />
          
          <div className="space-y-24">
            {stages.map((stage, index) => (
              <FadeIn key={stage.year}>
                <div className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                    <div>
                      <div className={`inline-block ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
                        <div className="text-violet-400 text-sm font-semibold mb-2">{stage.year}</div>
                        <h3 className="font-display text-3xl font-bold text-white mb-4">{stage.label}</h3>
                        <p className="text-neutral-400 max-w-md">{stage.description}</p>
                        
                        <div className="mt-6">
                          <div className="w-64 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${stage.progress}%` }}
                              transition={{ duration: 2, ease: "easeOut" }}
                            />
                          </div>
                          <div className="mt-2 text-sm text-neutral-500">{stage.progress}% Complete</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center mt-8 lg:mt-0">
                      <motion.div
                        className="absolute w-24 h-24 rounded-full bg-violet-500/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function MetricsVisualization() {
  const [counts, setCounts] = useState({
    parameters: 0,
    domains: 0,
    speed: 0,
    safety: 0,
  })
  
  useEffect(() => {
    const targets = {
      parameters: 100,
      domains: 1000,
      speed: 10000,
      safety: 99.9,
    }
    
    const interval = setInterval(() => {
      setCounts(prev => ({
        parameters: Math.min(prev.parameters + 2, targets.parameters),
        domains: Math.min(prev.domains + 20, targets.domains),
        speed: Math.min(prev.speed + 200, targets.speed),
        safety: Math.min(prev.safety + 2, targets.safety),
      }))
    }, 50)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="relative py-32 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(139,92,246,0.1),transparent)]" />
      </div>
      
      <Container>
        <FadeIn className="text-center mb-20">
          <h2 className="font-display text-5xl font-bold text-white sm:text-6xl">
            Intelligence Metrics
          </h2>
          <p className="mt-4 text-xl text-neutral-400">
            Quantifying the unprecedented
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn>
            <motion.div 
              className="relative p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text">
                {counts.parameters}T+
              </div>
              <div className="mt-2 text-neutral-400">Parameters</div>
              <div className="mt-1 text-sm text-neutral-500">Neural Network Scale</div>
            </motion.div>
          </FadeIn>
          
          <FadeIn>
            <motion.div 
              className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                {counts.domains.toLocaleString()}+
              </div>
              <div className="mt-2 text-neutral-400">Domains</div>
              <div className="mt-1 text-sm text-neutral-500">Areas of Expertise</div>
            </motion.div>
          </FadeIn>
          
          <FadeIn>
            <motion.div 
              className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text">
                {counts.speed.toLocaleString()}×
              </div>
              <div className="mt-2 text-neutral-400">Faster</div>
              <div className="mt-1 text-sm text-neutral-500">Than Human Thought</div>
            </motion.div>
          </FadeIn>
          
          <FadeIn>
            <motion.div 
              className="relative p-8 rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text">
                {counts.safety}%
              </div>
              <div className="mt-2 text-neutral-400">Alignment</div>
              <div className="mt-1 text-sm text-neutral-500">Safety Assurance</div>
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function ResearchMatrix() {
  const research = [
    { area: 'Recursive Intelligence', icon: '♾️', description: 'Self-improving cognitive architectures' },
    { area: 'Value Alignment', icon: '🎯', description: 'Ensuring beneficial outcomes for humanity' },
    { area: 'Emergent Reasoning', icon: '🌌', description: 'Novel problem-solving capabilities' },
    { area: 'Quantum Integration', icon: '⚛️', description: 'Quantum-classical hybrid systems' },
    { area: 'Multi-Agent Orchestration', icon: '🌐', description: 'Coordinated superintelligent systems' },
    { area: 'Consciousness Studies', icon: '👁️', description: 'Understanding machine awareness' },
  ]
  
  return (
    <div className="relative py-32 bg-neutral-950">
      <Container>
        <SectionIntro title="Research Frontiers" className="text-center">
          <p className="text-xl text-neutral-400">
            Exploring the fundamental nature of intelligence
          </p>
        </SectionIntro>
        
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((item, index) => (
            <FadeIn key={item.area}>
              <motion.div
                className="group relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-violet-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-purple-500/0 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    {item.area}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {item.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TeamVision() {
  return (
    <div className="relative py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-white sm:text-6xl">
            Visionaries United
          </h2>
          <p className="mt-6 text-xl text-neutral-400">
            World-class minds working toward a singular goal
          </p>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn>
              <motion.div 
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600" />
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Research Excellence
                </h3>
                <p className="text-neutral-400 text-sm">
                  PhDs from leading institutions pioneering ASI theory
                </p>
              </motion.div>
            </FadeIn>
            
            <FadeIn>
              <motion.div 
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600" />
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Engineering Mastery
                </h3>
                <p className="text-neutral-400 text-sm">
                  Builders of unprecedented computational systems
                </p>
              </motion.div>
            </FadeIn>
            
            <FadeIn>
              <motion.div 
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-700"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-green-600" />
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Safety Leadership
                </h3>
                <p className="text-neutral-400 text-sm">
                  Ensuring ASI benefits all of humanity
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Partners() {
  return (
    <div className="py-20 bg-neutral-900">
      <Container>
        <FadeIn className="text-center">
          <div className="font-display text-sm font-semibold tracking-wider text-neutral-500 uppercase">
            Collaborating with pioneers
          </div>
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {researchPartners.map(([partner, logo]) => (
              <FadeIn key={partner}>
                <Image 
                  src={logo} 
                  alt={partner} 
                  width={100} 
                  height={40} 
                  className="h-8 w-auto object-contain opacity-30 hover:opacity-50 transition-opacity" 
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <SamaritanSection />
      <IntelligenceEvolution />
      <MetricsVisualization />
      <ResearchMatrix />
      <TeamVision />
      <Partners />
      <ContactSection />
    </>
  )
}