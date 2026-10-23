import Link from 'next/link'
import Image from 'next/image'

import SlideCarousel from '../carousel'
import { GalleryEventItem } from '@/types'

import { ArrowRight, Info, MessageCircle } from 'lucide-react'

interface GallerySpotlightProps {
  events: GalleryEventItem[]
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export function GallerySpotlightSection({ events = [] }: GallerySpotlightProps) {
  // Se não houver eventos, não renderiza nada para evitar erros
  if (!events || events.length === 0) return null

  // O primeiro item do array vira o destaque principal
  const spotlightItem = events[0]

  // Os itens restantes formam o carrossel
  const carouselItems = events.slice(1)

  return (
    <div className="w-full space-y-10">
      {/* Seção Principal de Destaque (baseada no primeiro item) */}
      <section className="py-6 font-sans">
         <p
        className="mb-2 px-4 text-xs font-bold tracking-[0.16em] uppercase"
        style={{ color: '#69766E' }}
      >
        GALERIA
      </p>


  {/* Título */}
      <h2
        className="mb-3 px-4 text-2xl leading-tight font-bold"
        style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        Registros oficiais que eternizam os grandes momentos de Tucuruí.
      </h2>

      {/* Parágrafo */}
      <div className="lg:flex lg:justify-between">
      <p className="mb-3 px-4 text-sm leading-relaxed max-w-150 " style={{ color: '#69766E' }}>
          Coberturas fotográficas exclusivas produzidas em parceria oficial com os eventos da nossa plataforma.
        </p>

        {/* Link ver tudo */}
        <Link
          href="/restaurantes"
          className="mb-5 inline-flex items-center gap-1 px-4 text-sm font-semibold"
          style={{ color: '#233C34' }}
        >
          Ver todas galerias
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>



        {/* Carrossel*/}
        {carouselItems.length > 0 && (
          <section className="w-full">
            <SlideCarousel>
              {carouselItems.map((event) => (
                <Link
                  key={event.id}
                  href={`/galeria/${event.slug}`}
                  /*
                    AJUSTES APLICADOS AQUI:
                    - w-60 lg:w-85: largura fixa do card
                    - h-full flex flex-col: garante que o card estique e preencha 100% da altura da linha
                  */
                  className="w-60 lg:w-85 h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group shrink-0"
                >
                  {/* Container da Imagem com altura fixa rigorosa */}
                  <div className="relative h-44 w-full overflow-hidden lg:h-64 shrink-0">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      sizes="340px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Conteúdo interno com altura flexível e respiro uniforme */}
                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-amber-600">
                        {event.category} · {event.photoCount} fotos
                      </span>
                      {/* Título travado em exatamente 2 linhas para alinhar a altura */}
                      <h4 className="font-bold text-[#233C34] text-base leading-snug line-clamp-2 min-h-[2.5rem]">
                        {event.title}
                      </h4>
                    </div>

                    {/* Descrição travada em 2 linhas */}
                    <p className="text-xs text-gray-500 line-clamp-2 mt-auto">
                      {event.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </SlideCarousel>
          </section>
        )}
      </section>
    </div>
  )
}
