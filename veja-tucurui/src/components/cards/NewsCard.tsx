import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import type { NewsTypeData } from '@/types'

type NewsCardVariant = 'horizontal' | 'vertical' | 'featured'

interface NewsCardProps {
  news: NewsTypeData
  variant?: NewsCardVariant
}

function NewsImage({
  news,
  sizes,
  className,
}: {
  news: NewsTypeData
  sizes: string
  className: string
}) {
  return news.imageUrl ? (
    <Image
      src={news.imageUrl}
      alt={news.name}
      fill
      sizes={sizes}
      className={className}
    />
  ) : (
    <div
      aria-hidden="true"
      className={`${className} bg-[#E8EEE9]`}
    />
  )
}

function VerticalCard({ news }: { news: NewsTypeData }) {
  return (
    <Link
      href={`/noticias/${news.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <NewsImage
          news={news}
          sizes="(max-width: 768px) 75vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span
          className="mb-2 self-start rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: '#FBEDD1', color: '#233C34' }}
        >
          {news.category}
        </span>

        <h3
          className="mb-2 line-clamp-2 text-sm font-bold leading-snug"
          style={{ color: '#233C34' }}
        >
          {news.name}
        </h3>

        <p className="line-clamp-2 text-sm text-gray-600">
          {news.description}
        </p>
      </div>
    </Link>
  )
}

function HorizontalCard({ news }: { news: NewsTypeData }) {
  return (
    <Link
      href={`/noticias/${news.slug}`}
      className="group flex gap-3 overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-l-2xl md:h-28 md:w-28">
        <NewsImage
          news={news}
          sizes="112px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center py-3 pr-3">
        <span
          className="mb-1.5 self-start rounded-full px-2 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: '#FBEDD1', color: '#233C34' }}
        >
          {news.category}
        </span>

        <h3
          className="line-clamp-2 text-sm font-bold leading-snug"
          style={{ color: '#233C34' }}
        >
          {news.name}
        </h3>

        <div className="mt-1.5 flex items-center justify-between">
          <p className="line-clamp-1 text-xs text-gray-500">
            {news.description}
          </p>
          <ChevronRight
            size={16}
            aria-hidden="true"
            style={{ color: '#BBCAC1' }}
          />
        </div>
      </div>
    </Link>
  )
}

function FeaturedCard({ news }: { news: NewsTypeData }) {
  return (
    <Link
      href={`/noticias/${news.slug}`}
      className="group relative block overflow-hidden rounded-2xl shadow-md"
    >
      <div className="relative h-56 w-full overflow-hidden md:h-72">
        <NewsImage
          news={news}
          sizes="100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(32,62,53,0.85) 0%, rgba(32,62,53,0.20) 100%)',
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span
          className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: '#F0B64B', color: '#233C34' }}
        >
          {news.category}
        </span>

        <h3 className="line-clamp-2 text-base font-bold leading-snug text-white md:text-lg">
          {news.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-white/80">
          {news.description}
        </p>
      </div>
    </Link>
  )
}

export function NewsCard({
  news,
  variant = 'vertical',
}: NewsCardProps) {
  if (variant === 'horizontal') {
    return <HorizontalCard news={news} />
  }

  if (variant === 'featured') {
    return <FeaturedCard news={news} />
  }

  return <VerticalCard news={news} />
}
