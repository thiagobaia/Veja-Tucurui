import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowLeft,
  ExternalLink,
  Utensils,
  CheckCircle2,
  DollarSign,
  Instagram
} from 'lucide-react'
import { placesInterface } from '@/data/google-maps'
import ModalGallery from '@/components/ModalGallery'

interface SpotDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export const instant = false

export async function generateStaticParams() {
  return placesInterface.map((spot) => ({
    slug: spot.slug,
  }))
}

export default async function SpotDetailPage({ params }: SpotDetailPageProps) {
  const { slug } = await params

  const spot = placesInterface.find((s) => s.slug === slug)

  if (!spot) {
    notFound()
  }

  const categoriesList = Array.isArray(spot.categoria) ? spot.categoria : [spot.categoria]

  const rating = spot.google_maps?.nota ?? null
  const reviewsCount = spot.google_maps?.quantidade_avaliacoes ?? 0

  const address = spot.endereco || spot.google_maps?.endereco
  const phone = spot.telefone || spot.google_maps?.telefone

  const openingHours = spot.google_maps?.horarios
  const hasOpeningHours = openingHours && Object.keys(openingHours).length > 0

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pb-16 md:px-8">
      <div className="flex w-full flex-col gap-y-2">
        <div className="my-5">
          <Link href="/lugares" className="inline-flex items-center gap-2 py-2 text-xs font-bold">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
        <h1
          className="text-sx font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl"
          style={{ color: '#233C34', fontFamily: 'Roboto, sans-serif' }}
        >
          {spot.nome}
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col flex-wrap gap-y-3">
            {rating !== null && (
              <div className="flex items-center gap-2 text-amber-400">
                <Star className="h-5 w-5 fill-amber-400" />
                <span className="text-lg font-bold text-gray-800">{rating}</span>
                {reviewsCount > 0 && (
                  <span className="text-sm text-slate-700">({reviewsCount} avaliações)</span>
                )}
              </div>
            )}

            <div className="inline-flex gap-x-2">
              {categoriesList.map((cat, index) => (
                <span
                  key={index}
                  className="border-s-brand-primary-alt rounded-full border bg-white px-3 py-1 text-xs font-semibold backdrop-blur-md"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {spot.descricao && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-gray-800">Sobre</h2>
              <p className="leading-relaxed text-gray-800">{spot.descricao}</p>
            </section>
          )}

          {spot.especialidades && spot.especialidades.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
                Especialidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {spot.especialidades.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-slate-800 px-3 py-1.5 text-sm font-medium text-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Galeria de Fotos Isolada com Modal */}
          <ModalGallery images={spot.images || []} spotName={spot.nome} />

          {hasOpeningHours && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
                Horário de Funcionamento
              </h2>
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                {Object.entries(openingHours!).map(([dia, horario]) => (
                  <div
                    key={dia}
                    className="flex justify-between rounded-lg border border-slate-800 px-3 py-2"
                  >
                    <span className="font-semibold text-slate-700 capitalize">{dia}</span>
                    <span className="text-slate-600">{horario}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-6">
          <div className="sticky top-6 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="border-b border-slate-100 pb-3 text-lg font-bold text-slate-900">
              Informações Práticas
            </h3>

            {address && (
              <div className="flex items-start gap-3 text-slate-900">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm leading-relaxed">{address}</span>
              </div>
            )}

            {phone && (
              <div className="flex items-center gap-3 text-slate-900">
                <Phone className="h-5 w-5 shrink-0 text-emerald-500" />
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="text-sm font-medium transition-colors"
                >
                  {phone}
                </a>
              </div>
            )}

            {(spot.google_maps?.faixa_preco) && (
              <div className="flex items-center gap-3 text-slate-900">
                <DollarSign className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-medium">
                  {spot.google_maps?.faixa_preco}
                </span>
              </div>
            )}

                   {spot.instagram && (

                <div className="flex items-start gap-3 text-xs text-slate-900">
                  <Instagram className="h-5 w-5 shrink-0 text-emerald-500" />
                  <a className="text-sm font-medium" href={spot.instagram} target='_blank'>Instagram</a>
                </div>

            )}

            {spot.google_maps?.link_busca_google_maps && (
              <a
                href={spot.google_maps.link_busca_google_maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                Abrir no Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            )}


          </div>
        </div>
      </div>
    </main>
  )
}
