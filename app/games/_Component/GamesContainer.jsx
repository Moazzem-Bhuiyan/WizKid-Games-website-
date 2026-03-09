'use client'

import Link from 'next/link'
import {  Star,  Map, Sparkles, BookOpen, ArrowRight } from 'lucide-react'
import VariableProximity from '../../../components/ScrollReveal/ScrollReveal'
import { useRef } from 'react'


const features = [
  {
    icon: BookOpen,
    title: 'Story-Driven Adventure',
    description: 'Embark on an epic narrative woven with choice and consequence. Every decision shapes your legacy in the world of Stormroot.',
  },
  {
    icon: Map,
    title: 'Atmospheric Open Wilderness',
    description: 'Traverse vast, untamed landscapes — from ancient storm-scarred forests to forgotten ruins swallowed by root and shadow.',
  },
  {
    icon: Sparkles,
    title: 'Unique Magic & Combat',
    description: 'Wield a fluid, skill-based magic system born from the primordial forces of storm and earth. No two mages fight alike.',
  },
  {
    icon: Star,
    title: 'Exploration & Discovery',
    description: 'Uncover hidden lore, secret paths, and forgotten civilisations buried beneath centuries of wilderness.',
  },
]

const artPlaceholders = [
  { label: 'The Stormroot Forest', desc: 'Concept art — WIP', rune: 'ᚠ' },
  { label: 'Ancient Ruins', desc: 'Environment concept — WIP', rune: 'ᚢ' },
  { label: 'Magic System', desc: 'Ability concept — WIP', rune: 'ᚦ' },
]



export default function GamesPage() {
  const containerRef = useRef(null);
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,27,78,0.6) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(212,82,42,0.1) 0%, transparent 50%),
            var(--deep-black)
          `
        }}
      >
        {/* Big background rune */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
         <div className="relative">
                <div className="w-10 h-10  border-gold-dark flex items-center justify-center"
                  style={{ borderColor: 'var(--gold-dark)' }}>
                  <span className="font-display text-xs text-white/5" style={{ color: '', fontSize: '25vw' }}>W</span>
                </div>
              </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span
              className="font-heading text-xs tracking-widest uppercase inline-block px-4 py-2 border animate-ember"
              style={{ color: 'var(--ember-light)', borderColor: 'rgba(212,82,42,0.4)', background: 'rgba(212,82,42,0.08)', letterSpacing: '0.25em' }}
            >
              ◆ In Development — Coming Soon ◆
            </span>
          </div>

          <h1
            className="font-display mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.05 }}
          >
            <span className="text-gold-gradient">Stormroot</span>
            <br />
            <span className="text-gold-gradient">Saga</span>
          </h1>

          <div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={' A dark fantasy adventure of magic, wilderness, and legacy.'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
    style={{ color: 'var(--mist-light)', fontStyle: 'italic', fontWeight: 200, fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)' }}
   
/>
</div>

          <p className="font-body text-base max-w-2xl mx-auto mb-10" style={{ color: 'var(--mist)', fontSize: '1rem' }}>
            WizKid Games' debut title — a story forged in shadow, storm, and ancient power.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#notify" className="btn-primary">
              <span>Get Notified at Launch</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/blog" className="btn-ghost">
              <span>Follow Development</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="rune-divider max-w-4xl mx-auto px-4 my-4">
        <span className="font-heading text-lg tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}>
          About the Game
        </span>
      </div>

      {/* Description */}
      <section className="section-padding max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-6" style={{ color: 'var(--gold)' }}>
              Enter the World of Stormroot
            </h2>
            <div className="font-body space-y-4" style={{ color: 'var(--mist)', fontSize: '1.05rem' }}>
              <p>
                Stormroot Saga is an atmospheric, story-driven fantasy RPG set in a world shaped by forgotten magic, ancient storms, and deep wilderness. Players step into a land where nature itself holds memory, and where the roots of an ancient power reach into the present.
              </p>
              <p>
                Explore a handcrafted world where every corner holds a story, every ruin a secret. Build your character's legacy through meaningful choices, fluid combat, and a magic system unlike anything you've experienced.
              </p>
              <p style={{ color: 'var(--mist-light)', fontStyle: 'italic' }}>
                More details, screenshots, and gameplay reveals coming as development progresses.
              </p>
            </div>
          </div>

          <div
            className="border p-8 flex flex-col gap-4"
            style={{ borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(255,255,255,0.02)' }}
          >
            <h3 className="font-heading text-sm tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              Game Details
            </h3>
            {[
              ['Developer', 'WizKid Games'],
              ['Genre', 'Dark Fantasy RPG'],
              ['Platform', 'TBA'],
              ['Release', 'Coming Soon'],
              ['Studio', 'United Kingdom'],
            ].map(([key, val]) => (
              <div key={key} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                <span className="font-heading text-xs tracking-wider uppercase" style={{ color: 'var(--mist)', letterSpacing: '0.1em', fontSize: '0.7rem' }}>{key}</span>
                <span className="font-body text-sm" style={{ color: 'var(--gold-light)', fontSize: '0.95rem' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="rune-divider mb-16">
            <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}>
              Key Features
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="card-hover p-6 border flex flex-col gap-4"
                style={{
                  borderColor: 'rgba(201,168,76,0.15)',
                  background: 'rgba(255,255,255,0.02)',
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div
                  className="w-10 h-10 border flex items-center justify-center"
                  style={{ borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)' }}
                >
                  <Icon size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 className="font-heading text-base" style={{ color: 'var(--mist-light)' }}>{title}</h3>
                <p className="font-body text-sm" style={{ color: 'var(--mist)', fontSize: '15px', lineHeight: 1.7 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Art Gallery (placeholder) */}
      <section className="section-padding max-w-6xl mx-auto px-4">
        <div className="rune-divider mb-16">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}>
            Visual Development
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {artPlaceholders.map(({ label, desc, rune }, i) => (
            <div
              key={label}
              className="card-hover relative overflow-hidden border"
              style={{
                borderColor: 'rgba(201,168,76,0.15)',
                aspectRatio: '4/3',
                background: `
                  radial-gradient(ellipse 80% 80% at 50% 50%, rgba(${i === 0 ? '45,27,78' : i === 1 ? '10,25,10' : '30,15,5'},0.8) 0%, var(--deep-black) 100%)
                `,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div
                  className="font-display mb-4 animate-float"
                  style={{ fontSize: '4rem', color: 'rgba(201,168,76,0.15)', lineHeight: 1, animationDelay: `${i * 0.5}s` }}
                >
                  {rune}
                </div>
                <p className="font-heading text-xl mb-1" style={{ color: 'var(--mist-light)', letterSpacing: '0.05em' }}>{label}</p>
                <p className="font-body text-xs" style={{ color: 'rgba(201,168,76,0.5)', fontSize: '18px' }}>{desc}</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
              />
            </div>
          ))}
        </div>

        <p className="font-body text-center mt-8 text-lg italic" style={{ color: 'rgba(168,180,192,0.5)', fontSize: '19px' }}>
          Concept art and screenshots will be shared as development progresses. Follow our{' '}
          <Link href="/blog" className="underline" style={{ color: 'var(--gold-dark)' }}>Dev Blog</Link>{' '}
          for updates.
        </p>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display mb-4" style={{ color: 'var(--gold)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Stay on the Journey
          </h2>
          <p className="font-body mb-8" style={{ color: 'var(--mist)', fontSize: '1.05rem' }}>
            Don't miss reveals, development updates, and the launch announcement.
          </p>
          <Link href="/" className="btn-primary">
            <span>Join the Mailing List</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
