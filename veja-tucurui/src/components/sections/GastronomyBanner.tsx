import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import SlideCarousel from '../carousel'

const restaurants = [
  {
    id: '1',
    name: 'Sabor Paraense',
    description: 'Culinária regional com o melhor do Pará.',
    category: 'Culinária regional',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    slug: 'sabor-paraense',
  },
  {
    id: '2',
    name: 'Café do Rio',
    description: 'Café artesanal e lanches à beira do lago.',
    category: 'Café',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    slug: 'cafe-do-rio',
  },
  {
    id: '3',
    name: 'Tacacá da Dica',
    description: 'O tacacá mais famoso da cidade.',
    category: 'Comida de rua',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    slug: 'tacaca-da-dica',
  },
  {
    id: '4',
    name: 'Peixaria Tucunaré na Brasa',
    description: 'Especializado em peixes frescos da região.',
    category: 'Peixes e Frutos do Mar',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
    slug: 'peixaria-tucunare-na-brasa',
  },
  {
    id: '5',
    name: 'Açaí & Cia',
    description: 'O verdadeiro açaí grosso com peixe frito e camarão.',
    category: 'Regional',
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80',
    slug: 'acai-e-cia',
  },
  {
    id: '6',
    name: 'Bistrô da Orla',
    description: 'Ambiente aconchegante com vista panorâmica e drinks.',
    category: 'Bistrô / Bar',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    slug: 'bistro-da-orla',
  },
  {
    id: '7',
    name: 'Pizzaria Bella Massa',
    description: 'Pizzas artesanais assadas no forno a lenha.',
    category: 'Pizzaria',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
    slug: 'pizzaria-bella-massa',
  },
  {
    id: '8',
    name: 'Burger da Terra',
    description: 'Hambúrgueres artesanais com ingredientes amazônicos.',
    category: 'Hamburgueria',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    slug: 'burger-da-terra',
  },
];
export function GastronomyBanner() {
  return (
    <section className="py-6" aria-label="Gastronomia local">
      {/* Label */}
      <p
        className="mb-2 px-4 text-xs font-bold tracking-[0.16em] uppercase"
        style={{ color: '#69766E' }}
      >
        Sabores que contam histórias
      </p>

      {/* Título */}
      <h2
        className="mb-3 px-4 text-2xl leading-tight font-bold"
        style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        O melhor caminho também passa pela mesa.
      </h2>

      {/* Parágrafo */}
      <div className="lg:flex lg:justify-between">
        <p className="mb-3 px-4 text-sm leading-relaxed" style={{ color: '#69766E' }}>
          Comida caseira, um café bem passado ou uma receita para compartilhar.
        </p>

        {/* Link ver tudo */}
        <Link
          href="/restaurantes"
          className="mb-5 inline-flex items-center gap-1 px-4 text-sm font-semibold"
          style={{ color: '#233C34' }}
        >
          Encontrar restaurantes
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      {/* Cards deslizáveis */}
      <SlideCarousel>
        <div className="flex gap-3">
          {restaurants.map((r) => (
            <Link
              key={r.id}
              href={`/restaurantes/${r.slug}`}
              className="group flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md lg:w-85"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Foto */}
              <div className="relative h-44 w-full overflow-hidden lg:h-80">
                <Image
                  src={r.imageUrl}
                  alt={r.name}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.90)', color: '#233C34' }}
                >
                  {r.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col px-4 py-3">
                <h3 className="mb-1 text-sm leading-snug font-bold" style={{ color: '#233C34' }}>
                  {r.name}
                </h3>
                <p className="line-clamp-2 text-xs leading-relaxed" style={{ color: '#69766E' }}>
                  {r.description}
                </p>
                <span
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold"
                  style={{ color: '#233C34' }}
                >
                  Ver mais
                  <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SlideCarousel>
    </section>
  )
}
