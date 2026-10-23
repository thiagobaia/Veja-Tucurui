import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, ArrowUpRight } from 'lucide-react'
import type { TouristSpot } from '@/types'

type SpotCardVariant = 'vertical' | 'horizontal' | 'editorial'

interface SpotCardProps {
  spot: TouristSpot
  variant?: SpotCardVariant
}

/* ── Editorial card ─────────────────────────────────────────────── */
function EditorialSpotCard({ spot }: { spot: TouristSpot }) {
  return (
    <Link
      href={`/lugares/${spot.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          fill
          sizes="240px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(255,255,255,0.90)', color: '#233C34' }}
        >
          {spot.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-4 py-3">
        <h3 className="mb-1 text-sm font-bold leading-snug" style={{ color: '#233C34' }}>
          {spot.name}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed" style={{ color: '#69766E' }}>
          {spot.description}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold"
          style={{ color: '#233C34' }}
        >
          Conhecer
          <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

/* ── Vertical card ──────────────────────────────────────────────── */
function VerticalSpotCard({ spot }: { spot: TouristSpot }) {
  return (
    <Link
      href={`/lugares/${spot.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-40 md:h-60 lg:h-80 w-full overflow-hidden">
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          fill
          sizes="(max-width: 768px) 80vw, 300px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {spot.rating && (
          <div
            className="absolute right-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold text-white backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
          >
            <Star size={11} fill="#F0B64B" color="#F0B64B" aria-hidden="true" />
            {spot.rating}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <span
          className="mb-2 self-start rounded-full px-2.5 py-0.5 text-xs font-medium"
          style={{ backgroundColor: '#F7F5EF', color: '#69766E' }}
        >
          {spot.category}
        </span>
        <h3 className="mb-1 line-clamp-1 text-sm font-bold" style={{ color: '#233C34' }}>
          {spot.name}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed" style={{ color: '#69766E' }}>
          {spot.description}
        </p>
        <div className="mt-2 flex items-center gap-1 text-xs" style={{ color: '#BBCAC1' }}>
          <MapPin size={12} aria-hidden="true" />
          <span>Tucuruí, PA</span>
        </div>
      </div>
    </Link>
  )
}

/* ── Horizontal card ────────────────────────────────────────────── */
function HorizontalSpotCard({ spot }: { spot: TouristSpot }) {
  return (
    <Link
      href={`/lugares/${spot.slug}`}
      className="group flex gap-3 overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-l-2xl">
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center py-2 pr-3">
        <h3 className="line-clamp-1 text-sm font-bold" style={{ color: '#233C34' }}>
          {spot.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-xs" style={{ color: '#69766E' }}>
          {spot.description}
        </p>
        {spot.rating && (
          <div className="mt-1.5 flex items-center gap-1">
            <Star size={12} fill="#F0B64B" color="#F0B64B" aria-hidden="true" />
            <span className="text-xs font-semibold" style={{ color: '#233C34' }}>{spot.rating}</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export function SpotCard({ spot, variant = 'vertical' }: SpotCardProps) {
  if (variant === 'editorial') return <EditorialSpotCard spot={spot} />
  if (variant === 'horizontal') return <HorizontalSpotCard spot={spot} />
  return <VerticalSpotCard spot={spot} />
}
