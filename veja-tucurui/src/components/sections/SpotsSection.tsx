import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SpotCard } from '@/components/cards'
import type { TouristSpot } from '@/types'
import SlideCarousel from '../carousel'

interface SpotsSectionProps {
  spots: TouristSpot[]
  viewAllHref?: string
}

export function SpotsSection({ spots, viewAllHref }: SpotsSectionProps) {
  return (
    <section className="py-6" aria-label="Lugares que merecem uma pausa">
      <p
        className="mb-2 px-4 text-xs font-semibold tracking-[0.16em] uppercase"
        style={{ color: '#69766E' }}
      >
        Um convite para sair de casa
      </p>

      <h2
        className="mb-3 px-4 text-2xl leading-tight font-bold"
        style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        Lugares que merecem uma pausa
      </h2>

      <div className="lg:flex lg:justify-between">
        <p className="mb-3 px-4 text-sm leading-relaxed" style={{ color: '#69766E' }}>
          Da vista lá do alto ao banco da praça: encontre o seu jeito de passear.
        </p>

        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="mb-5 inline-flex items-center gap-1 px-4 text-sm font-semibold"
            style={{ color: '#233C34' }}
          >
            Todas as atrações
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
      <SlideCarousel>
        <div className="flex gap-3">
          {spots.map((spot) => (
            <div key={spot.id} className="w-60 lg:w-85 shrink-0">
              <SpotCard spot={spot} variant="vertical" />
            </div>
          ))}
        </div>
      </SlideCarousel>
    </section>
  )
}
