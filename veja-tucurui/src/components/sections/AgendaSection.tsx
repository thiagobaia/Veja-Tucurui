import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SlideCarousel from '../carousel'

export const events = [
  {
    id: '1',
    name: 'Sons da Praça',
    category: 'Música',
    location: 'Praça das Memórias',
    time: '18h · Entrada gratuita',
    day: '17',
    month: 'OUT',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    slug: 'sons-da-praca',
  },
  {
    id: '2',
    name: 'Feira de Artesanato',
    category: 'Cultura',
    location: 'Orla de Tucuruí',
    time: '09h · Entrada gratuita',
    day: '19',
    month: 'OUT',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    slug: 'feira-de-artesanato',
  },
  {
    id: '3',
    name: 'Noite de Cinema',
    category: 'Lazer',
    location: 'Praça da Cultura',
    time: '20h · Entrada gratuita',
    day: '22',
    month: 'OUT',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
    slug: 'noite-de-cinema',
  },
  {
    id: '4',
    name: 'Festival Gastronômico do Peixe',
    category: 'Gastronomia',
    location: 'Complexo Beira Rio',
    time: '12h · Aberto ao público',
    day: '25',
    month: 'OUT',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    slug: 'festival-gastronomico-do-peixe',
  },
  {
    id: '5',
    name: 'Exposição Olhares da Região',
    category: 'Arte',
    location: 'Centro Cultural',
    time: '14h · Entrada franca',
    day: '28',
    month: 'OUT',
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
    slug: 'exposicao-olhares-da-regiao',
  },
  {
    id: '6',
    name: 'Luau na Praia',
    category: 'Música & Lazer',
    location: 'Ilha do Germano',
    time: '19h · Ingressos limitados',
    day: '31',
    month: 'OUT',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
    slug: 'luau-na-praia',
  },
  {
    id: '7',
    name: 'Encontro de Carros Antigos',
    category: 'Exposição',
    location: 'Praça da Prefeitura',
    time: '08h · Entrada gratuita',
    day: '05',
    month: 'NOV',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    slug: 'encontro-de-carros-antigos',
  },
  {
    id: '8',
    name: 'Corrida e Caminhada Ecológica',
    category: 'Esporte',
    location: 'Lago de Tucuruí',
    time: '06h · Inscrições abertas',
    day: '12',
    month: 'NOV',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
    slug: 'corrida-e-caminhada-ecologica',
  },
];

export function AgendaSection() {
  return (
    <section className="py-6" aria-label="Agenda cultural">
      {/* Label */}
      <p
        className="mb-2 px-4 text-xs font-bold tracking-[0.16em] uppercase"
        style={{ color: '#69766E' }}
      >
        Agenda cultural
      </p>

      {/* Título */}
      <h2
        className="mb-3 px-4 text-2xl leading-tight font-bold"
        style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        Tem coisa boa para acontecer
      </h2>

      {/* Subtítulo */}
      <div className="lg:flex lg:justify-between">
        <p className="mb-3 px-4 text-sm leading-relaxed" style={{ color: '#69766E' }}>
          Música, feiras e arte para viver a cidade em boa companhia.
        </p>

        {/* Link ver agenda */}
        <Link
          href="/agenda"
          className="mb-5 inline-flex items-center gap-1 px-4 text-sm font-semibold"
          style={{ color: '#233C34' }}
        >
          Ver agenda completa
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      {/* Cards deslizáveis */}
      <SlideCarousel>
        <div className="flex gap-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="w-60 shrink-0 overflow-hidden rounded-2xl shadow-sm lg:w-85"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Foto com badge */}
              <div className="relative h-44 w-full overflow-hidden lg:h-80">
                <Image
                  src={event.imageUrl}
                  alt={event.name}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.90)', color: '#233C34' }}
                >
                  {event.category}
                </span>
              </div>

              {/* Conteúdo — data box + info */}
              <div className="flex items-start gap-3 px-4 py-4">
                {/* Data box */}
                <div
                  className="flex shrink-0 flex-col items-center justify-center rounded-xl px-3 py-2 text-center"
                  style={{ backgroundColor: '#FBEDD1' }}
                >
                  <span
                    className="text-xl leading-none font-bold"
                    style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {event.day}
                  </span>
                  <span
                    className="mt-0.5 text-[10px] font-bold tracking-wide uppercase"
                    style={{ color: '#69766E' }}
                  >
                    {event.month}
                  </span>
                </div>

                {/* Texto */}
                <div className="flex flex-1 flex-col">
                  <h3
                    className="mb-1 text-base leading-snug font-bold"
                    style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {event.name}
                  </h3>
                  <p className="text-xs" style={{ color: '#69766E' }}>
                    {event.location}
                  </p>
                  <p className="text-xs" style={{ color: '#69766E' }}>
                    {event.time}
                  </p>
                  <Link
                    href={`/agenda/${event.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold"
                    style={{ color: '#233C34' }}
                  >
                    Ver programação
                    <ArrowUpRight size={13} strokeWidth={2.5} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SlideCarousel>
    </section>
  )
}
