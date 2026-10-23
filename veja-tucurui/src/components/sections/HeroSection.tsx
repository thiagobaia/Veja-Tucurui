import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className=" pb-2" aria-label="Destaque principal">
      <div className="relative h-120 overflow-hidden sm:h-130 md:h-140 lg:h-200">

        <Image
          src="/hero-img.jpg"
          alt="Vista aérea do farol e orla de Tucuruí ao pôr do sol"
          fill priority sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% 35%' }}
        />

        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(32,62,53,0.20) 0%, rgba(32,62,53,0.45) 40%, rgba(32,62,53,0.88) 100%)' }}
        />

        <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 md:px-12 md:py-12">
          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border-2" style={{ borderColor: '#F0B64B' }} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.90)' }}>
              Novas descobertas.
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 md:max-w-lg">
            <h1
              className="text-[2.5rem] font-bold leading-[1.1] md:text-[3.2rem]"
              style={{ color: '#FFFFFF', fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Pequenos<br />caminhos.<br />Grandes<br />
              <span style={{ color: '#F0B64B' }}>encontros.</span>
            </h1>

            <p className="max-w-70 text-[0.92rem] leading-relaxed md:max-w-sm md:text-base" style={{ color: 'rgba(255,255,255,0.80)' }}>
              Descubra o que faz em Tucuruí: os sabores, a natureza, a cultura e quem vive por aqui.
            </p>

            <div>
              <Link
                href="/lugares"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-md transition-opacity hover:opacity-90 active:scale-95 md:px-8 md:py-4 md:text-base"
                style={{ backgroundColor: '#F0B64B', color: '#233C34' }}
              >
                Comece a explorar
                <ArrowUpRight size={17} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
