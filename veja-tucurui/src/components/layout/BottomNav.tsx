'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Map, Newspaper, Images, CalendarDays, Contact } from 'lucide-react'

const tabs = [
  { label: 'Início',           href: '/',        icon: Home },
  { label: 'Lugares',         href: '/lugares',   icon: Map },
  { label: 'Notícias',        href: '/noticias',  icon: Newspaper },
  { label: 'Galeria',         href: '/galeria',   icon: Images },
  { label: 'Agenda', href: '/agenda',    icon: CalendarDays },
  { label: 'Contato', href: '/Contato',    icon: Contact },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    /* lg:hidden — visível apenas em mobile e tablet, oculto em desktop (lg+) */
    <nav
      aria-label="Navegação principal"
      className="fixed bottom-0 left-0 right-0 z-50 border-t lg:hidden"
      style={{ backgroundColor: '#FFFFFF', borderColor: '#BBCAC1' }}
    >
      <ul className="mx-auto flex max-w-7xl items-stretch px-2.5">
        {tabs.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className="flex flex-col items-center justify-center gap-1 py-2.5 text-center transition-colors duration-150"
                style={{ color: isActive ? '#233C34' : '#69766E' }}
              >
                <Icon size={24} strokeWidth={isActive ? 2 : 1.5} aria-hidden="true" />
                <span className={`text-[10px] leading-none ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
