"use client"
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { blogPosts } from '../../../lib/blog'


function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,27,78,0.4) 0%, transparent 60%),
            var(--deep-black)
          `
        }}
      >
          {/* Big background rune */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className='text-white/5' style={{ fontSize: '19vw', fontFamily: 'Cinzel Decorative, serif', color: '', lineHeight: 1 }}>
            Moazzem
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="font-heading text-sm tracking-widest uppercase mb-4 block" style={{ color: 'var(--gold)', letterSpacing: '0.25em', fontSize: '18px' }}>
            WizKid Games
          </span>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: 'var(--gold)' }}>
            Dev Blog
          </h1>
          <p className="font-body text-lg" style={{ color: 'var(--mist)', fontSize: '1.5rem' }}>
            Follow the development of Stormroot Saga — art, mechanics, studio news, and more.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding max-w-4xl mx-auto px-4">
        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-lg" style={{ color: 'var(--mist)' }}>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="border card-hover group"
                style={{
                  borderColor: 'rgba(201,168,76,0.15)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <div className="p-8 md:p-10">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Tag size={10} style={{ color: 'var(--gold)' }} />
                      <span
                        className="font-heading text-xs tracking-widest uppercase"
                        style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.65rem' }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={10} style={{ color: 'var(--mist)' }} />
                      <span className="font-body text-xs" style={{ color: 'var(--mist)', fontSize: '0.8rem' }}>
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-heading text-xl md:text-2xl mb-4 transition-colors duration-300 group-hover:text-amber-400"
                    style={{ color: 'var(--mist-light)' }}>
                    {post.title}
                  </h2>

                  <p className="font-body mb-6" style={{ color: 'var(--mist)', fontSize: '1rem', lineHeight: 1.8 }}>
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-heading text-xs tracking-widest uppercase transition-all duration-300"
                    style={{
                      color: 'var(--gold-dark)',
                      letterSpacing: '0.15em',
                      fontSize: '0.7rem',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-dark)'}
                  >
                    Read Post <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Coming soon notice */}
        <div
          className="mt-12 p-8 border text-center"
          style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(255,255,255,0.01)' }}
        >
          <p className="font-body italic mb-2" style={{ color: 'var(--mist)', fontSize: '1rem' }}>
            More development updates coming soon.
          </p>
          <p className="font-body text-sm" style={{ color: 'rgba(168,180,192,0.5)', fontSize: '0.85rem' }}>
            Sign up to the mailing list on the{' '}
            <Link href="/" className="underline" style={{ color: 'var(--gold-dark)' }}>homepage</Link>
            {' '}to be notified of new posts.
          </p>
        </div>
      </section>
    </div>
  )
}
