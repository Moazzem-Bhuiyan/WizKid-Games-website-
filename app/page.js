'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Twitter, Instagram, MessageCircle, TikTok, ChevronDown } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import FloatingRunes from '../components/FloatingRunes'

// TikTok icon (not in lucide)
const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.16 8.16 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

const socials = [
  { icon: Twitter, label: 'Twitter/X', href: 'https://twitter.com/wizkidgames' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/wizkidgames' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://tiktok.com/@wizkidgames' },
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/wizkidgames' },
]

// Floating particles
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: `${4 + Math.random() * 8}s`,
  delay: `${Math.random() * 5}s`,
  opacity: 5 + Math.random() * 0.6,
  size: Math.random() > 1.5 ? 3 : 2,
}))



export default function HomePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Replace with your actual email service (Mailchimp, ConvertKit, etc.)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setEmail('')
  }

  return (
    <div className="relative min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ paddingTop: '6rem' }}
      >
        {/* Background layers */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 100%, rgba(10,20,8,0.95) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,27,78,0.5) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 85% 30%, rgba(212,82,42,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 15% 70%, rgba(124,58,237,0.1) 0%, transparent 50%),
            var(--deep-black)
          `
        }} />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.id % 3 === 0 ? 'var(--ember)' : 'var(--gold)',
                opacity: p.opacity,
                animation: `float ${p.duration} ease-in-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
<section className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Other content */}
  <FloatingRunes />
</section>
        {/* Large decorative rune behind text */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontSize: 'clamp(200px, 40vw, 500px)',
            fontFamily: 'Cinzel Decorative, serif',
            color: 'rgba(201,168,76,0.025)',
            lineHeight: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          ᛋ
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          {/* Studio name */}
          <div className="animate-fadeInUp mb-4">
            <span
              className="font-heading text-xs tracking-widest uppercase inline-block px-4 py-2 border"
              style={{
                color: 'var(--gold)',
                borderColor: 'rgba(201,168,76,0.3)',
                letterSpacing: '0.25em',
                background: 'rgba(201,168,76,0.05)',
              }}
            >
              WizKid Games
            </span>
          </div>

          {/* Game title */}
          <h1
            className="animate-fadeInUp delay-200 font-display mb-6 font-bold  leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              lineHeight: '1.05',
              animationFillMode: 'both',
            }}
          >
            <span className="text-gold-gradient block">Stormroot</span>
            <span className="text-gold-gradient block">Saga</span>
          </h1>

          {/* Coming soon badge */}
          <div className="animate-fadeInUp delay-300 mb-8" style={{ animationFillMode: 'both' }}>
            <span
              className="font-heading text-lg tracking-widest uppercase animate-ember"
              style={{ color: 'var(--ember-light)', letterSpacing: '0.3em' }}
            >
              ◆ Coming Soon ◆
            </span>
          </div>

          {/* Tagline */}
          <p
            className="animate-fadeInUp delay-400 font-body text-lg md:text-xl max-w-2xl mx-auto mb-4"
            style={{
              color: 'var(--mist)',
              lineHeight: 1.8,
              animationFillMode: 'both',
            }}
          >
            A UK independent game studio crafting dark, magical fantasy adventures.
            Our debut game —&nbsp;<em style={{ color: 'var(--gold-light)' }}>Stormroot Saga</em>&nbsp;— is in development.
          </p>

          {/* CTA buttons */}
          <div className="animate-fadeInUp delay-500 flex flex-col sm:flex-row gap-4 justify-center mb-16 mt-8" style={{ animationFillMode: 'both' }}>
            <Link href="/games" className="btn-primary">
              <span>Explore the Game</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/blog" className="btn-ghost">
              <span>Dev Blog</span>
            </Link>
          </div>

          {/* ── MAILING LIST ── */}
          <div
            className="animate-fadeInUp delay-600 max-w-xl mx-auto"
            style={{ animationFillMode: 'both' }}
          >
            <div
              className="p-6 md:p-8 border"
              style={{
                borderColor: 'rgba(201,168,76,0.2)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-center gap-2 justify-center mb-3">
                <Mail size={14} style={{ color: 'var(--gold)' }} />
                <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold)', letterSpacing: '0.2em' }}>
                  Be the First to Know
                </span>
              </div>
              <p className="font-body text-sm mb-5" style={{ color: 'var(--mist)', fontSize: '0.95rem' }}>
                Join our mailing list for exclusive updates, reveal announcements, and early access.
              </p>

              {status === 'success' ? (
                <div className="py-3 text-center">
                  <p className="font-heading text-sm tracking-wide" style={{ color: 'var(--gold)', letterSpacing: '0.1em' }}>
                    ✦ You're on the list. Welcome, adventurer.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="input-dark flex-1"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary whitespace-nowrap"
                    style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                  >
                    <span>{status === 'loading' ? 'Joining...' : 'Notify Me'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social links */}
          <div className="animate-fadeInUp delay-700 flex !pb-2 items-center justify-center gap-6 mt-10" style={{ animationFillMode: 'both' }}>
            <span className="font-heading text-xs tracking-widest" style={{ color: 'rgba(168,180,192,0.4)', letterSpacing: '0.2em', fontSize: '0.7rem' }}>
              FOLLOW US
            </span>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border flex items-center justify-center transition-all duration-300"
                  style={{ borderColor: 'rgba(201,168,76,0.2)', color: 'var(--mist)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(201,168,76,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                    e.currentTarget.style.color = 'var(--mist)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-0 -translate-x-1/2 animate-float mb-5 pointer-events-none">
           <DotLottieReact
           src="https://lottie.host/f470bd2d-35d9-4edc-af7d-e09879cb6039/lgpQ2h53Gu.lottie"
            loop
           autoplay
    />
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(26,13,46,0.5) 0%, transparent 70%)',
        }} />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="rune-divider mb-12">
            <span className="font-heading text-sm tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}>
              The Studio
            </span>
          </div>

          <blockquote
            className="font-body text-2xl md:text-3xl lg:text-4xl mb-8 leading-relaxed"
            style={{ color: 'var(--mist-light)', fontStyle: 'italic', fontWeight: 300 }}
          >
            "We believe games are more than entertainment —{' '}
            <em style={{ color: 'var(--gold-light)' }}>they're journeys into new worlds</em>,
            where creativity, challenge, and wonder come together."
          </blockquote>

          <Link href="/about" className="btn-ghost">
            <span>Our Story</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── GAME PREVIEW CARD ── */}
      <section className="section-padding relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rune-divider mb-16">
            <span className="font-heading text-sm tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}>
              Our Debut Title
            </span>
          </div>

          <div
            className="relative overflow-hidden border card-hover"
            style={{
              borderColor: 'rgba(201,168,76,0.2)',
              background: 'linear-gradient(135deg, rgba(26,13,46,0.6) 0%, rgba(8,11,20,0.8) 50%, rgba(15,18,24,0.9) 100%)',
            }}
          >
            {/* Decorative corner accents */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-8 h-8`} style={{
                borderTop: i < 2 ? '1px solid var(--gold-dark)' : 'none',
                borderBottom: i >= 2 ? '1px solid var(--gold-dark)' : 'none',
                borderLeft: i % 2 === 0 ? '1px solid var(--gold-dark)' : 'none',
                borderRight: i % 2 === 1 ? '1px solid var(--gold-dark)' : 'none',
              }} />
            ))}

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: placeholder art area */}
              <div
                className="relative min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,13,46,0.9) 0%, rgba(10,15,8,0.95) 100%)',
                  borderRight: '1px solid rgba(201,168,76,0.1)',
                }}
              >
                {/* Placeholder art / atmosphere */}
                <div className="absolute inset-0" style={{
                  background: `
                    radial-gradient(ellipse 60% 60% at 50% 40%, rgba(124,58,237,0.15) 0%, transparent 60%),
                    radial-gradient(ellipse 40% 50% at 70% 70%, rgba(212,82,42,0.1) 0%, transparent 50%)
                  `
                }} />
                <div className="relative text-center p-8">
                  <div
                    className="font-display mb-4 animate-float"
                    style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', color: 'rgba(201,168,76,0.15)', lineHeight: 1 }}
                  >
                    ᛋ
                  </div>
                  <div
                    className="border px-4 py-2 inline-block"
                    style={{ borderColor: 'rgba(212,82,42,0.4)', background: 'rgba(212,82,42,0.1)' }}
                  >
                    <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--ember-light)', letterSpacing: '0.2em', fontSize: '0.65rem' }}>
                      Concept Art Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span
                  className="font-heading text-xs tracking-widest uppercase mb-4 block"
                  style={{ color: 'var(--ember-light)', letterSpacing: '0.25em', fontSize: '0.65rem' }}
                >
                  ◆ In Development
                </span>

                <h2 className="font-display mb-4" style={{ color: 'var(--gold)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                  Stormroot Saga
                </h2>

                <p className="font-body text-base mb-8" style={{ color: 'var(--mist)', fontStyle: 'italic', fontSize: '1.05rem' }}>
                  A dark fantasy adventure of magic, wilderness, and legacy.
                </p>

                <div className="space-y-3 mb-10">
                  {[
                    'Story-driven fantasy adventure',
                    'Atmospheric open wilderness',
                    'Unique magic & combat system',
                    'Deep exploration & discovery',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>◆</span>
                      <span className="font-body text-sm" style={{ color: 'var(--mist)', fontSize: '0.95rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/games" className="btn-primary self-start">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS TEASER ── */}
      <section className="section-padding relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rune-divider mb-12">
            <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}>
              Latest News
            </span>
          </div>

          <div
            className="p-8 md:p-12 border card-hover"
            style={{
              borderColor: 'rgba(201,168,76,0.2)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <span className="font-heading text-xs tracking-widest uppercase mb-3 block" style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.9rem' }}>
              — Studio Update —
            </span>
            <h3 className="font-heading text-xl md:text-2xl mb-4" style={{ color: 'var(--mist-light)' }}>
              WizKid Games Official Website Launched!
            </h3>
            <p className="font-body mb-6" style={{ color: 'var(--mist)', fontSize: '1rem' }}>
              We're thrilled to officially launch our website and introduce WizKid Games to the world. Stormroot Saga's development journey begins here.
            </p>
            <Link href="/blog" className="btn-ghost">
              <span>Read Dev Blog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
