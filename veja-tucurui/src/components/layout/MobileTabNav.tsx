'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Newspaper, Image as ImageIcon, Calendar } from 'lucide-react'

export function MobileTabNav() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Lugares', href: '/lugares', icon: Compass },
    { label: 'Notícias', href: '/noticias', icon: Newspaper },
    { label: 'Galeria', href: '/galeria', icon: ImageIcon },
    { label: 'Agenda', href: '/agenda', icon: Calendar },
  ]

  return (
    <nav
      aria-label="Navegação inferior mobile"
      className="block lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur-md shadow-lg"
      style={{ borderColor: '#E5E7EB' }}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                isActive ? 'text-brand-primary font-bold' : 'text-gray-500 hover:text-brand-primary'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-brand-amber' : 'text-gray-500'} />
              <span className="text-[10px] mt-1 tracking-tight">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
