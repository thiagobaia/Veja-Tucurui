'use client'

interface YouTubeVideoProps {
  url: string
  title?: string
  className?: string
}

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url)
    const host = parsedUrl.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      return parsedUrl.pathname.slice(1).split('/')[0] || null
    }

    if (
      host === 'youtube.com' ||
      host === 'm.youtube.com' ||
      host === 'youtube-nocookie.com'
    ) {
      if (parsedUrl.pathname === '/watch') {
        return parsedUrl.searchParams.get('v')
      }

      const match = parsedUrl.pathname.match(
        /^\/(?:embed|shorts|live)\/([^/]+)/,
      )

      return match?.[1] ?? null
    }

    return null
  } catch {
    return null
  }
}

export function YouTubeVideo({
  url,
  title = 'Vídeo do YouTube',
  className = '',
}: YouTubeVideoProps) {
  const videoId = getYouTubeVideoId(url)

  if (!videoId) {
    return (
      <p className="text-sm text-red-600" role="alert">
        Não foi possível identificar um vídeo nessa URL do YouTube.
      </p>
    )
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-black ${className}`}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
