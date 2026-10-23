import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import type { Article } from '@/types'

interface SpotlightSectionProps {
  article: Article
  reversed?: boolean
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export function SpotlightSection({ article, reversed = false }: SpotlightSectionProps) {
  return (
    <section
      aria-label={`Destaque: ${article.title}`}
      className="mx-4 overflow-hidden rounded-2xl shadow-sm"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="relative h-52 w-full shrink-0 md:h-auto md:w-2/5 lg:h-100">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-3 p-5 md:p-8">
          <span
            className="self-start rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: '#FBEDD1', color: '#233C34' }}
          >
            {article.category}
          </span>

          <h2 className="text-lg font-bold leading-snug md:text-xl" style={{ color: '#233C34' }}>
            {article.title}
          </h2>

          <p className="text-sm leading-relaxed" style={{ color: '#69766E' }}>
            {article.excerpt}
          </p>

          <div className="flex items-center gap-1 text-xs" style={{ color: '#BBCAC1' }}>
            <Calendar size={12} aria-hidden="true" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>

          <Link
            href={`/artigos/${article.slug}`}
            className="mt-1 inline-flex items-center gap-2 self-start rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors"
            style={{ borderColor: '#233C34', color: '#233C34' }}
          >
            Saiba mais
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
