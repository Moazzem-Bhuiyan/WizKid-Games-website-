'use client'

import { useMemo } from 'react'

const runeChars = [
  'ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚾ','ᛁ','ᛃ','ᛇ','ᛈ','ᛉ','ᛊ','ᛏ','ᛒ','ᛖ','ᛗ','M','ᛜ','ᛞ','ᛟ','w','i','z','k','i','d'
]

export default function FloatingRunes({ count = 7 }) {
  // generate runes once
  const runes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      char: runeChars[Math.floor(Math.random() * runeChars.length)],
      left: `${Math.random() * 100}%`,
      top: `${20 + Math.random() * 70}%`,
      fontSize: `${1 + Math.random() * 2.5}rem`,
      duration: `${8 + Math.random() * 12}s`,
      delay: `${-Math.random() * 12}s`,
    }))
  }, [count])

  return (
    <div className="absolute inset-0 pointer-events-none" id="runesContainer">
      {runes.map((r, i) => (
        <div
          key={i}
          className="rune absolute select-none"
          style={{
            left: r.left,
            top: r.top,
            fontSize: r.fontSize,
            color: 'rgba(201,168,76,0.3)',
            animation: `floatRune ${r.duration} ease-in-out infinite`,
            animationDelay: r.delay,
          }}
        >
          {r.char}
        </div>
      ))}

      <style jsx>{`
        @keyframes floatRune {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}