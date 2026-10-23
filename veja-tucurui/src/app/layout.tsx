import type { Metadata, Viewport } from 'next'
import { Header, Footer, BottomNav } from '@/components/layout'
import { Suspense } from 'react'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#233C34',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'VejaTucuruí — Seu guia da cidade',
  description: 'Descubra turismo, gastronomia, eventos e cultura em Tucuruí, Pará.',
  keywords: ['Tucuruí', 'turismo', 'gastronomia', 'eventos', 'Pará', 'Amazônia'],
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'VejaTucuruí' },
  openGraph: {
    title: 'VejaTucuruí',
    description: 'Seu guia completo sobre Tucuruí',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { apple: '/icons/logo.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});})}`,
          }}
        />
      </head>
      <body>
        <Suspense>
          <Header />
        </Suspense>
        {/* pb-20 mobile (clearance para tab bar) | md:pb-0 tablet+ (sem tab bar) */}
        <main id="main-content" tabIndex={-1} className="container-page pb-20 md:pb-0">
          {children}
        </main>
        <Suspense>
          {' '}
          <Footer />
        </Suspense>
        <Suspense>
          <BottomNav />
        </Suspense>
      </body>
    </html>
  )
}
