
"use client"
import Link from 'next/link'
import { notFound, useSearchParams } from 'next/navigation'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { blogPosts, getPostBySlug } from '../../../../lib/blog'



export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params?.slug)
  if (!post) return {}
  return {
    title: `${post.title} – WizKid Games Dev Blog`,
    description: post.excerpt,
  }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Very simple markdown-ish renderer
function renderContent(content) {
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <h3 key={i} className="font-heading text-lg mt-8 mb-3" style={{ color: 'var(--mist-light)' }}>
          {line.slice(2, -2)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 font-body" style={{ color: 'var(--mist)', fontSize: '1rem' }}>
              <span style={{ color: 'var(--gold)', marginTop: '0.6em', fontSize: '0.4rem' }}>◆</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*(.*?)\*/g, '<em style="color:var(--gold-light)">$1</em>') }} />
            </li>
          ))}
        </ul>
      )
      continue
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--mist-light)">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em style="color:var(--gold-light)">$1</em>')
      elements.push(
        <p key={i} className="font-body mb-4" style={{ color: 'var(--mist)', fontSize: '1.05rem', lineHeight: 1.85 }}
          dangerouslySetInnerHTML={{ __html: html }} />
      )
    }
    i++
  }
  return elements
}

export default  function BlogPostPage({ params }) {
   const { slug } = params;
   const post = getPostBySlug(slug);
  if (!post) notFound()

  return (
    <div className="min-h-screen pt-24">
      {/* Back */}
      <div className="max-w-3xl mx-auto px-4 pt-8 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-heading text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: 'var(--mist)', letterSpacing: '0.15em', fontSize: '0.7rem' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--mist)'}
        >
          <ArrowLeft size={12} /> Back to Dev Blog
        </Link>
      </div>

      {/* Post */}
      <article className="max-w-3xl mx-auto px-4 pb-24">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="font-heading text-xs tracking-widest uppercase px-3 py-1 border"
              style={{ color: 'var(--gold)', borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)', letterSpacing: '0.2em', fontSize: '0.65rem' }}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar size={10} style={{ color: 'var(--mist)' }} />
              <span className="font-body text-xs" style={{ color: 'var(--mist)', fontSize: '0.8rem' }}>
                {formatDate(post.date)}
              </span>
            </div>
          </div>

          <h1 className="font-heading mb-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: 'var(--mist-light)', lineHeight: 1.25 }}>
            {post.title}
          </h1>

          <div className="flex items-center gap-2 mb-8">
            <User size={10} style={{ color: 'var(--mist)' }} />
            <span className="font-body text-sm" style={{ color: 'var(--mist)', fontSize: '0.85rem' }}>
              {post.author}
            </span>
          </div>

          <div className="h-px" style={{ background: 'linear-gradient(90deg, var(--gold-dark), transparent)' }} />
        </header>

        {/* Body */}
        <div className="prose-wizkid">
          {renderContent(post.content)}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
          <p className="font-body text-sm mb-4" style={{ color: 'var(--mist)', fontSize: '0.9rem' }}>
            — WizKid Games
          </p>
          <Link href="/blog" className="btn-ghost">
            <ArrowLeft size={14} />
            <span>All Posts</span>
          </Link>
        </div>
      </article>
    </div>
  )
}
