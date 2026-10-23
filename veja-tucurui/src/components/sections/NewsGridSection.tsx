// src/components/sections/ArticlesGridSection.tsx
import type { NewsTypeData } from '@/types'
import { NewsCard } from '../cards/NewsCard'

interface NewsGridSectionProps {
  news: NewsTypeData[]
}

export function NewsGridSection({ news }: NewsGridSectionProps) {
  if (news.length === 0) {
    return (
      <div className="py-12 text-center text-slate-500">
        Nenhuma notícia encontrada com os filtros aplicados.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news.map((NewsData) => (
        <NewsCard key={NewsData.id} news={NewsData} />
      ))}
    </div>
  )
}
