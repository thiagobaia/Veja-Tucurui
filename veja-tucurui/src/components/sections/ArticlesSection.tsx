import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ArticleCard } from '@/components/cards'
import type { Article } from '@/types'

interface ArticlesSectionProps {
  title: string
  articles: Article[]
  viewAllHref?: string
  variant?: 'scroll' | 'grid' | 'list'
}

export function ArticlesSection({
  title,
  articles,
  viewAllHref,
  variant = 'scroll',
}: ArticlesSectionProps) {
  return (
    <section className="py-5" aria-label={title}>
      <div className="mb-3 flex items-center justify-between px-4">
        <h2 className="text-base font-bold md:text-lg" style={{ color: '#233C34' }}>
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex items-center gap-0.5 text-xs font-semibold"
            style={{ color: '#005315' }}
          >
            Ver tudo
            <ChevronRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>

      {variant === 'scroll' && (
        <div className="scrollbar-hide flex gap-3 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="w-60 shrink-0 md:w-auto">
              <ArticleCard article={article} variant="vertical" />
            </div>
          ))}
        </div>
      )}

      {variant === 'grid' && (
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="vertical" />
          ))}
        </div>
      )}

      {variant === 'list' && (
        <div className="flex flex-col gap-3 px-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      )}
    </section>
  )
}
