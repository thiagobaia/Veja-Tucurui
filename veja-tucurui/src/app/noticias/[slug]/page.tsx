import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { NewsData } from '@/data/NewsData'
import { colors } from '@/styles/theme'
import { YouTubeVideo } from '@/components/YouTubeVideo'


interface SpotDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export const instant = false

export async function generateStaticParams() {
  return NewsData.map((news) => ({
    slug: news.slug,
  }))
}

export default async function SpotDetailPage({
  params,
}: SpotDetailPageProps) {
  const { slug } = await params
  const news = NewsData.find((item) => item.slug === slug)

  if (!news) {
    notFound()
  }

  const paragraphs = news.texto
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: colors.offWhite }}
    >
      <article className="mx-auto flex w-full max-w-5xl flex-col px-4 pb-16 pt-8 md:px-8">
        <Link
          href="/noticias"
          className="mb-6 inline-flex w-fit items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
          style={{ color: colors.primary }}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar para notícias
        </Link>

        <header className="mb-6">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-wide"
            style={{ color: colors.accent }}
          >
            {news.category}
          </p>

          <h1
            className="text-3xl font-bold leading-tight md:text-5xl"
            style={{ color: colors.primary }}
          >
            {news.name}
          </h1>

          {news.description && (
            <p
              className="mt-4 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: colors.secondary }}
            >
              {news.description}
            </p>
          )}
        </header>

        <figure className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-[#E8EEE9] shadow-sm">
          {news.imageUrl ? (
            <Image
              src={news.imageUrl}
              alt={news.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center"
              style={{ color: colors.secondary }}
            >
              Imagem da notícia indisponível
            </div>
          )}

          <figcaption
            className="absolute bottom-4 right-4 rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
            style={{
              backgroundColor: colors.amber,
              color: colors.primary,
            }}
          >
            {news.category}
          </figcaption>
        </figure>

        <div className="mx-auto w-full max-w-5xl">
          <div
            className="space-y-5 text-base leading-8 md:text-lg"
            style={{ color: colors.textPrimary }}
          >
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={`${news.slug}-paragraph-${index}`}>{paragraph}</p>
              ))
            ) : (
              <p>{news.description}</p>
            )}
          </div>
        </div>
        <YouTubeVideo
  url="https://www.youtube.com/watch?v=cW5edoJjVes"
  title="Reportagem"
/>
      </article>
    </main>
  )
}
