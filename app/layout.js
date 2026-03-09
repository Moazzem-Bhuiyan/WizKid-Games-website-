import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SmoothScroll from '../components/SmoothScroll'
import SplashCursor from '../components/SplashCursor'
import './globals.css'


export const metadata = {
  title: 'WizKid Games – Stormroot Saga',
  description: 'A UK independent game studio crafting dark, magical fantasy adventures. Our debut game — Stormroot Saga — is in development.',
  keywords: 'WizKid Games, Stormroot Saga, indie game, fantasy game, dark fantasy, UK game studio',
  openGraph: {
    title: 'WizKid Games – Stormroot Saga',
    description: 'A UK independent game studio crafting dark, magical fantasy adventures.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise-overlay bg-atmospheric min-h-screen flex flex-col">
        <Navbar />
        <SmoothScroll>
        <main className="flex-1">
          {children}
        </main>
        </SmoothScroll>
        <Footer />
        <div className=' inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden opacity-30 pr-12'>
         <SplashCursor/>
       </div>
      </body>
    </html>
  )
}
