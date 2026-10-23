import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ChevronRight } from 'lucide-react'
import type { Article } from '@/types'

type ArticleCardVariant = 'horizontal' | 'vertical' | 'featured'

interface ArticleCardProps {
  article: Article
  variant?: ArticleCardVariant
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateStr))
}

/* ── Vertical card ──────────────────────────────────────────────── */
function VerticalCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 75vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span
          className="mb-2 self-start rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: '#FBEDD1', color: '#233C34' }}
        >
          {article.category}
        </span>
        <h3
          className="mb-2 line-clamp-2 text-sm font-bold leading-snug"
          style={{ color: '#233C34' }}
        >
          {article.title}
        </h3>
        <div className="mt-auto flex items-center gap-1 pt-2 text-xs" style={{ color: '#BBCAC1' }}>
          <Calendar size={12} aria-hidden="true" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  )
}

/* ── Horizontal card ────────────────────────────────────────────── */
function HorizontalCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="group flex gap-3 overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-l-2xl md:h-28 md:w-28">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="112px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center py-3 pr-3">
        <span
          className="mb-1.5 self-start rounded-full px-2 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: '#FBEDD1', color: '#233C34' }}
        >
          {article.category}
        </span>
        <h3
          className="line-clamp-2 text-sm font-bold leading-snug"
          style={{ color: '#233C34' }}
        >
          {article.title}
        </h3>
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs" style={{ color: '#BBCAC1' }}>
            <Calendar size={11} aria-hidden="true" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          <ChevronRight size={16} style={{ color: '#BBCAC1' }} />
        </div>
      </div>
    </Link>
  )
}

/* ── Featured card ──────────────────────────────────────────────── */
function FeaturedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="group relative overflow-hidden rounded-2xl shadow-md"
    >
      <div className="relative h-56 w-full overflow-hidden md:h-72">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(32,62,53,0.85) 0%, rgba(32,62,53,0.20) 100%)' }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span
          className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: '#F0B64B', color: '#233C34' }}
        >
          {article.category}
        </span>
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-white md:text-lg">
          {article.title}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-xs" style={{ color: 'rgba(255,255,255,0.70)' }}>
          <Calendar size={11} aria-hidden="true" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  )
}

export function ArticleCard({ article, variant = 'vertical' }: ArticleCardProps) {
  if (variant === 'horizontal') return <HorizontalCard article={article} />
  if (variant === 'featured') return <FeaturedCard article={article} />
  return <VerticalCard article={article} />
}
