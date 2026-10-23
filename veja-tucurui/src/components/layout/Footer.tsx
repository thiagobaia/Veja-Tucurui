import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import { Instagram, Facebook, Youtube, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="hidden lg:block" style={{ backgroundColor: '#203E35', color: '#BBCAC1' }}>
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Brand */}

        <div className="grid gap-8 grid-cols-5">
          <div className='col-span-2'>
            <div className="mb-8 flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Logo Veja Tucuruí"
                width={52}
                height={52}
                priority
                className="shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-xl font-bold"
                  style={{ color: '#FFFFFF', fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Veja Tucurui
                </span>
                <span
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: '#BBCAC1' }}
                >
                  Viva o que é daqui
                </span>
              </div>
            </div>

            <p className="mb-6 flex items-center gap-1.5 text-sm" style={{ color: '#BBCAC1' }}>
              <MapPin size={14} style={{ color: '#F0B64B' }} className="shrink-0" />
              Tucuruí, Pará - Amazônia
            </p>
          </div>

          <div>
            <h3
              className="mb-3 text-xs font-bold tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '/' },
                { label: 'Lugares', href: '/lugares' },
                { label: 'Notícias', href: '/noticias' },
                { label: 'Galeria', href: '/galeria' },
                { label: 'Agenda cultural', href: '/agenda' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: '#BBCAC1' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-3 text-xs font-bold tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Categorias
            </h3>
            <ul className="space-y-2">
              {['Turismo', 'Gastronomia', 'Eventos', 'Cultura', 'Natureza'].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: '#BBCAC1' }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3
              className="mb-3 text-xs font-bold tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Siga-nos
            </h3>
            <div className="flex gap-3">
              {(
                [
                  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
                ] as const
              ).map(({ icon: SocialIcon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#233C34', color: '#BBCAC1' }}
                >
                  <SocialIcon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-6 text-center text-xs"
          style={{ borderColor: '#233C34', color: '#69766E' }}
        >
          © 2026 VejaTucuruí. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
