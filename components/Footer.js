"use client"
import Link from 'next/link'
import { Twitter, Instagram, MessageCircle } from 'lucide-react'

const socials = [
  { icon: Twitter, label: 'Twitter/X', href: 'https://twitter.com/wizkidgames' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/wizkidgames' },
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/wizkidgames' },
]

export default function Footer() {
  return (
    <footer
      className="relative mt-20 border-t"
      style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(0,0,0,0.3)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg mb-3" style={{ color: 'var(--gold)', fontSize: '19px' }}>
              WizKid Games
            </h3>
            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: 'var(--mist)', fontSize: '1.05rem' }}>
              An independent UK game studio crafting dark, magical fantasy adventures.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgba(201,168,76,0.25)',
                    color: 'var(--mist)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold)'
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(201,168,76,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
                    e.currentTarget.style.color = 'var(--mist)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg tracking-widest uppercase mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/games', label: 'Stormroot Saga' },
                { href: '/blog', label: 'Dev Blog' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-lg transition-colors duration-200 hover:text-amber-400"
                  style={{ color: 'var(--mist)', fontSize: '0.95rem' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg tracking-widest uppercase mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              Get in Touch
            </h4>
            <a
              href="mailto:office@wizkidgames.co.uk"
              className="font-body text-lg transition-colors duration-200 hover:text-amber-400 block mb-2"
              style={{ color: 'var(--mist)', fontSize: '0.95rem' }}
            >
              office@wizkidgames.co.uk
            </a>
            <p className="font-body text-xs" style={{ color: 'rgba(168,180,192,0.5)', fontSize: '0.85rem' }}>
              For business & press enquiries
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs" style={{ color: 'rgba(168,180,192,0.4)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} WizKid Games Ltd. All rights reserved. United Kingdom.
          </p>
          <p className="font-heading text-xs tracking-widest" style={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
            STORMROOT SAGA — IN DEVELOPMENT
          </p>
        </div>
      </div>
    </footer>
  )
}
