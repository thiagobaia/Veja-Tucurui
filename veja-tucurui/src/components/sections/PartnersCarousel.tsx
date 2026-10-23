'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const partners = [
  {
    id: '1',
    name: 'Distrito 7',
    description:
      'Comida caseira, um café bem passado ou uma receita para compartilhar. Descubra restaurantes e cafés no guia local.',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    href: '/parceiros/distrito-7',
  },
  {
    id: '2',
    name: 'Pousada Lago Verde',
    description:
      'Hospedagem à beira do lago com conforto e tranquilidade. O melhor ponto de partida para explorar Tucuruí.',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    href: '/parceiros/pousada-lago-verde',
  },
  {
    id: '3',
    name: 'Amazônia Aventuras',
    description:
      'Passeios de barco, trilhas e experiências únicas na floresta. Turismo de natureza com guias locais especializados.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    href: '/parceiros/amazonia-aventuras',
  },
    {
    id: '4',
    name: 'Posto 10',
    description:
      'Passeios de barco, trilhas e experiências únicas na floresta. Turismo de natureza com guias locais especializados.',
    imageUrl: '/images/restaurantes/p10/banner-p10.jpg',
    href: '/parceiros/amazonia-aventuras',
  },
]

const INTERVAL_MS = 3500

export function PartnersCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % partners.length)
  }, [])

  // Auto-play
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, next])

  const partner = partners[current]

  return (
    <section className="px-4 pb-6" aria-label="Nossos Parceiros">
      {/* Label */}
      <p
        className="mb-4 text-xs font-semibold"
        style={{ color: '#69766E' }}
      >
        Nossos Parceiros
      </p>

      {/* Card */}
      <Link
        href={partner.href}
        className="block overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
        style={{ backgroundColor: '#FFFFFF' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => { setPaused(false); next() }}
        aria-label={`Parceiro: ${partner.name}`}
      >

        {/* Foto */}
        <div className="relative h-56 lg:h-100 w-full overflow-hidden">
          <Image
            key={partner.id}
            src={partner.imageUrl}
            alt={partner.name}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-opacity duration-500"
          />
        </div>

        {/* Texto */}
        <div className="px-5 py-5">
          <h3
            className="mb-3 text-[1.7rem] font-bold leading-tight"
            style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {partner.name}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#69766E' }}>
            {partner.description}
          </p>
        </div>

      </Link>

      {/* Dots de paginação */}
      <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Slides">
        {partners.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => { setCurrent(i); setPaused(false) }}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === current ? '10px' : '8px',
              height: i === current ? '10px' : '8px',
              backgroundColor: i === current ? '#233C34' : '#BBCAC1',
            }}
          />
        ))}
      </div>
    </section>
  )
}
