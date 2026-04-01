'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Logo/wizkid logo.svg'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/blog', label: 'Dev Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(5,5,7,0.92)'
            : 'linear-gradient(to bottom, rgba(5,5,7,0.8), transparent)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10  flex items-center justify-center"
                  style={{ borderColor: 'var(--gold-dark)' }}>
                  <span className="font-display text-xs" style={{ color: 'var(--gold)', fontSize: '10px' }}>
                    <Image src={logo} alt="WizKid Games" width={40} height={40} />
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0  transition-opacity duration-300"
                  style={{ boxShadow: '0 0 20px rgba(201,168,76,0.4)' }} />
              </div>
              <div>
                <span className="font-heading text-sm font-semibold tracking-widest uppercase"
                  style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
                  WizKid Games
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-heading text-sm tracking-widest uppercase transition-all duration-300 relative group"
                  style={{
                    color: pathname === href ? 'var(--gold)' : 'var(--mist)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {label}
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px transition-all duration-300 origin-left"
                    style={{
                      background: 'var(--gold)',
                      transform: pathname === href ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px transition-all duration-300 origin-left group-hover:scale-x-100 scale-x-0"
                    style={{ background: 'rgba(201,168,76,0.5)' }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 transition-colors duration-200"
              style={{ color: 'var(--gold)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          background: 'rgba(5,5,7,0.97)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className="font-heading text-2xl tracking-widest uppercase transition-all duration-300"
              style={{
                color: pathname === href ? 'var(--gold)' : 'var(--mist)',
                letterSpacing: '0.15em',
                transitionDelay: `${i * 60}ms`,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
