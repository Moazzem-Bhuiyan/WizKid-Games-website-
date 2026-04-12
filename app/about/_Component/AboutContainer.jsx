'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    title: 'Atmosphere First',
    description:
      "'Every environment, every sound, every line of dialogue should make the player feel like they've stepped into another world.'",
  },
  {
    title: 'Meaningful Choice',
    description:
      'We build games where decisions matter — where the story you tell becomes uniquely yours.',
  },
  {
    title: 'Deep Worldbuilding',
    description:
      'Rich lore, layered history, and a world that feels lived-in and real, even in its most fantastical moments.',
  },
  {
    title: 'Small Team, Big Vision',
    description: "We're a focused, passionate team building games we would love to play ourselves.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(45,27,78,0.4) 0%, transparent 60%),
            var(--deep-black)
          `,
        }}
      >
        {/* Large rune bg */}
        {/* Big background rune */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="relative">
            <div
              className="w-10 h-10  border-gold-dark flex items-center justify-center"
              style={{ borderColor: 'var(--gold-dark)' }}
            >
              <span
                className="font-display text-xs text-white/5"
                style={{ color: '', fontSize: '25vw' }}
              >
                WK
              </span>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <span
            className="font-heading text-xs tracking-widest uppercase mb-4 block"
            style={{ color: 'var(--gold)', letterSpacing: '0.25em', fontSize: '18px' }}
          >
            The Studio
          </span>
          <h1
            className="font-display mb-8"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: 'var(--gold)' }}
          >
            WizKid Games
          </h1>
          <p
            className="font-body text-xl md:text-2xl max-w-3xl"
            style={{
              color: 'var(--mist-light)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            An independent video game studio focused on creating atmospheric, story-driven fantasy
            adventures with deep magic, rich worldbuilding, and meaningful player choice.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="rune-divider mb-10">
              <span
                className="font-heading text-xs tracking-widest uppercase"
                style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.2rem' }}
              >
                Our Belief
              </span>
            </div>

            <blockquote
              className="font-body text-2xl md:text-3xl mb-8 leading-relaxed"
              style={{ color: 'var(--mist-light)', fontStyle: 'italic', fontWeight: 300 }}
            >
              "We believe games are more than entertainment —{' '}
              <span style={{ color: 'var(--gold-light)' }}>they're journeys into new worlds</span>,
              where creativity, challenge, and wonder come together."
            </blockquote>

            <p
              className="font-body mb-6"
              style={{ color: 'var(--mist)', fontSize: '1.05rem', lineHeight: 1.85 }}
            >
              WizKid Games is an independent video game studio based in the United Kingdom. We're
              focused on creating experiences that feel immersive, personal, and unforgettable —
              games where atmosphere, narrative, and player agency work in harmony to create
              something genuinely special.
            </p>

            <p
              className="font-body"
              style={{ color: 'var(--mist)', fontSize: '1.05rem', lineHeight: 1.85 }}
            >
              Our mission is simple: craft experiences that feel immersive, personal, and
              unforgettable. We're a small, focused team with big ambition — building games we would
              want to play ourselves, for players who love deep, atmospheric worlds.
            </p>
          </div>

          <div>
            <div className="rune-divider mb-10">
              <span
                className="font-heading text-xs tracking-widest uppercase"
                style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.2rem' }}
              >
                What We Stand For
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {values.map(({ title, description }, i) => (
                <div key={title} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 border flex items-center justify-center transition-all duration-300 group-hover:border-amber-400"
                      style={{
                        borderColor: 'rgba(201,168,76,0.25)',
                        background: 'rgba(201,168,76,0.04)',
                      }}
                    >
                      <span className="font-heading text-xs" style={{ color: 'var(--gold)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3
                      className="font-heading text-base mb-2"
                      style={{ color: 'var(--mist-light)' }}
                    >
                      {title}
                    </h3>
                    <p
                      className="font-body text-sm"
                      style={{ color: 'var(--mist)', fontSize: '0.95rem', lineHeight: 1.7 }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Debut Game */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="rune-divider mb-12">
            <span
              className="font-heading text-xs tracking-widest uppercase"
              style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.5rem' }}
            >
              Our Debut Title
            </span>
          </div>

          <div
            className="border p-8 md:p-12"
            style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div
                className="w-20 h-20 flex-shrink-0 border flex items-center justify-center"
                style={{ borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}
              >
                <span className="font-display" style={{ color: 'var(--gold)', fontSize: '2rem' }}>
                  ᛋ
                </span>
              </div>
              <div>
                <h2
                  className="font-display mb-2"
                  style={{ color: 'var(--gold)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
                >
                  Stormroot Saga
                </h2>
                <p
                  className="font-body italic mb-4"
                  style={{ color: 'var(--gold-light)', fontSize: '1.05rem' }}
                >
                  A fantasy game rooted in wilderness and legacy.
                </p>
                <p
                  className="font-body mb-6"
                  style={{ color: 'var(--mist)', fontSize: '1rem', lineHeight: 1.8 }}
                >
                  Our debut title is currently in active development. Stormroot Saga is the
                  embodiment of everything WizKid Games stands for — a dark, atmospheric RPG where
                  the world itself feels alive, where magic has weight, and where the choices you
                  make echo through the story long after you make them.
                </p>
                <Link href="/games" className="btn-ghost self-start inline-flex">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center max-w-2xl mx-auto px-4">
        <h2
          className="font-heading text-2xl md:text-3xl mb-4"
          style={{ color: 'var(--mist-light)' }}
        >
          Join Us on the Journey
        </h2>
        <p className="font-body mb-8" style={{ color: 'var(--mist)', fontSize: '1.05rem' }}>
          Follow development, get early updates, and be part of the WizKid Games community from the
          very beginning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <span>Join the Mailing List</span>
          </Link>
          <Link href="/contact" className="btn-ghost">
            <span>Get in Touch</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
