'use client'

import { useState } from 'react'
import { Twitter, Instagram, MessageCircle, Mail, Send, CheckCircle } from 'lucide-react'
import SplashCursor from '../../components/SplashCursor'

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.16 8.16 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

const socials = [
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/wizkidgames', handle: '@wizkidgames' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/wizkidgames', handle: '@wizkidgames' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://tiktok.com/@wizkidgames', handle: '@wizkidgames' },
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/wizkidgames', handle: 'Join our server' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Replace with your backend / Formspree / Netlify Forms endpoint
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section
        className="py-20 md:py-28 relative overflow-hidden "
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(45,27,78,0.35) 0%, transparent 60%),
            var(--deep-black)
          `
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="font-heading text-xs tracking-widest uppercase mb-4 block" style={{ color: 'var(--gold)', letterSpacing: '0.25em', fontSize: '18px' }}>
            WizKid Games
          </span>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'var(--gold)' }}>
            Get in Touch
          </h1>
          <p className="font-body text-lg" style={{ color: 'var(--mist)', fontSize: '1.5rem' }}>
            For business & press enquiries, collaborations, or just to say hello.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Left: info */}
          <div className="md:col-span-2 flex flex-col gap-10">
            {/* Email */}
            <div>
              <div className="rune-divider mb-6">
                <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.1rem' }}>
                  Email
                </span>
              </div>
              <a
                href="mailto:office@wizkidgames.co.uk"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-amber-400"
                  style={{ borderColor: 'rgba(201,168,76,0.25)' }}
                >
                  <Mail size={14} style={{ color: 'var(--gold)' }} />
                </div>
                <span
                  className="font-body text-sm transition-colors duration-200 group-hover:text-amber-400"
                  style={{ color: 'var(--mist)', fontSize: '0.95rem' }}
                >
                  office@wizkidgames.co.uk
                </span>
              </a>
              <p className="font-body text-xs mt-3 ml-12" style={{ color: 'rgba(168,180,192,0.5)', fontSize: '0.8rem' }}>
                For business & press enquiries
              </p>
            </div>

            {/* Socials */}
            <div>
              <div className="rune-divider mb-6">
                <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.1rem' }}>
                  Community
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ borderColor: 'rgba(201,168,76,0.2)', color: 'var(--mist)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--gold)'
                        e.currentTarget.style.color = 'var(--gold)'
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(201,168,76,0.2)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                        e.currentTarget.style.color = 'var(--mist)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="font-heading text-xs tracking-wide uppercase" style={{ color: 'var(--mist)', letterSpacing: '0.1em', fontSize: '0.65rem' }}>{label}</p>
                      <p className="font-body text-sm transition-colors duration-200 group-hover:text-amber-400" style={{ color: 'rgba(168,180,192,0.7)', fontSize: '0.85rem' }}>{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Discord join */}
            <div
              className="border p-6"
              style={{ borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(255,255,255,0.02)' }}
            >
              <h3 className="font-heading text-sm mb-3" style={{ color: 'var(--mist-light)' }}>
                Join Our Community
              </h3>
              <p className="font-body text-sm mb-4" style={{ color: 'var(--mist)', fontSize: '0.9rem' }}>
                Join the Discord to chat with the team, get exclusive updates, and connect with fellow adventurers.
              </p>
              <a
                href="https://discord.gg/wizkidgames"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex"
              >
                <MessageCircle size={14} />
                <span>Join Discord</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <div className="rune-divider mb-8">
              <span className="font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--gold-dark)', letterSpacing: '0.2em', fontSize: '1.1rem' }}>
                Send a Message
              </span>
            </div>

            {status === 'success' ? (
              <div
                className="border p-12 text-center"
                style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(255,255,255,0.02)' }}
              >
                <CheckCircle size={40} className="mx-auto mb-4" style={{ color: 'var(--gold)' }} />
                <h3 className="font-heading text-xl mb-3" style={{ color: 'var(--mist-light)' }}>Message Sent</h3>
                <p className="font-body" style={{ color: 'var(--mist)', fontSize: '1rem' }}>
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-heading text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--mist)', letterSpacing: '0.15em', fontSize: '0.65rem' }}>
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="font-heading text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--mist)', letterSpacing: '0.15em', fontSize: '0.65rem' }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="input-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-heading text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--mist)', letterSpacing: '0.15em', fontSize: '0.65rem' }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Business enquiry, press, etc."
                    className="input-dark"
                  />
                </div>

                <div>
                  <label className="font-heading text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--mist)', letterSpacing: '0.15em', fontSize: '0.65rem' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell us about your enquiry..."
                    className="input-dark resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="font-body text-xs" style={{ color: 'rgba(168,180,192,0.4)', fontSize: '16px' }}>
                    We typically respond within 2–3 business days.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary"
                    style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                  >
                    <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
