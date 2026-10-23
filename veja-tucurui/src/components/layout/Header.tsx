'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Início',           href: '/' },
  { label: 'Lugares',         href: '/lugares' },
  { label: 'Notícias',        href: '/noticias' },
  { label: 'Galeria',         href: '/galeria' },
  { label: 'Agenda cultural', href: '/agenda' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header
      className="top-0 z-50 w-full border-b bg-transparent"
      style={{ borderColor: '#BBCAC1' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Veja Tucuruí — página inicial">
          <Image src="/logo.svg" alt="Logo Veja Tucuruí" width={48} height={48} priority className="shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold" style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Veja Tucurui
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest" style={{ color: '#69766E' }}>
              Viva o que é daqui
            </span>
          </div>
        </Link>

        {/* Desktop nav — visível em tablet+ */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-5 text-sm font-semibold transition-colors ${
                  isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ color: '#233C34' }}
              >
                {link.label}
                {/* Linha amarela de destaque na aba ativa */}
                {isActive && (
                  <span
                    className="absolute top-10 left-0 right-0 h-0.75 rounded-full"
                    style={{ backgroundColor: '#F0B64B' }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
