import { Toaster } from 'sonner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SmoothScroll from '../components/SmoothScroll';
import SplashCursor from '../components/SplashCursor';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import Providers from '../lib/Providers';

export const metadata = {
  title: 'WizKid Games – Stormroot Saga',
  description:
    'A UK independent game studio crafting dark, magical fantasy adventures. Our debut game — Stormroot Saga — is in development.',
  keywords: 'WizKid Games, Stormroot Saga, indie game, fantasy game, dark fantasy, UK game studio',
  openGraph: {
    title: 'WizKid Games – Stormroot Saga',
    description: 'A UK independent game studio crafting dark, magical fantasy adventures.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise-overlay bg-atmospheric min-h-screen flex flex-col">
        <Providers>
          {' '}
          <NextTopLoader
            color="#FFD700"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <Navbar />
          <Toaster position="bottom-right" richColors />
          <SmoothScroll>
            <main className="flex-1">{children}</main>
          </SmoothScroll>
          <Footer />
          <div className=" inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden opacity-30 pr-12">
            <SplashCursor />
          </div>
        </Providers>
        {/* Wrap the entire app with Providers */}
      </body>
    </html>
  );
}
