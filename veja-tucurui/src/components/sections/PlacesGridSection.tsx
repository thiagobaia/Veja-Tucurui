import { PlaceCard } from '@/components/cards/PlacesCard'

interface PlacesGridSectionProps {
  places: any[]
}

export function PlacesGridSection({ places }: PlacesGridSectionProps) {
  if (places.length === 0) {
    return (
      <p className="text-sm text-gray-500 col-span-full py-8 text-center">
        Nenhum lugar encontrado com os filtros selecionados.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place) => (
        <PlaceCard key={place.id} places={place} />
      ))}
    </div>
  )
}
