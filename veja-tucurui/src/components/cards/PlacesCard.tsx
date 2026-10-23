import { PlaceType } from '@/types'
import { MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function PlaceCard({ places }: { places: PlaceType }) {
  // Tratamento seguro da imagem (fallback caso imageUrl esteja vazio)
  const cardImage = places.foto

  return (
    <Link
      href={`/lugares/${places.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-40 w-full overflow-hidden md:h-60 lg:h-80">
        <Image
          src={cardImage}
          alt={places.nome || 'Lugar em Tucuruí'}
          fill
          sizes="(max-width: 768px) 80vw, 300px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {places.avaliacao_publica?.nota && (
          <div
            className="absolute top-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold text-white backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
          >
            <Star size={11} fill="#F0B64B" color="#F0B64B" aria-hidden="true" />
            {places.avaliacao_publica?.nota}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3">
        {places.categoria && (
          <div className="mb-2 flex flex-wrap gap-1 self-start">
            {(() => {
              const categorias = Array.isArray(places.categoria)
                ? places.categoria
                : typeof places.categoria === 'string'
                  ? places.categoria.split(',')
                  : [places.categoria]

              return categorias.map((cat, index) => (
                <span
                  key={index}
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: '#F7F5EF', color: '#69766E' }}
                >
                  {typeof cat === 'string' ? cat.trim() : cat}
                </span>
              ))
            })()}
          </div>
        )}
        <h3 className="mb-1 line-clamp-1 text-sm font-bold" style={{ color: '#233C34' }}>
          {places.nome}
        </h3>
        {places.descricao && (
          <p className="line-clamp-2 text-xs leading-relaxed" style={{ color: '#69766E' }}>
            {places.descricao}
          </p>
        )}
        <div className="mt-2 flex items-center gap-1 text-xs" style={{ color: '#BBCAC1' }}>
          <MapPin size={12} aria-hidden="true" />
          <span>Tucuruí, PA</span>
        </div>
      </div>
    </Link>
  )
}
