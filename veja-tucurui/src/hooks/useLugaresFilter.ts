import { useMemo, useState } from 'react'
import { placesInterface } from '@/data/google-maps'
import { PLACE_CATEGORIES } from '@/constants/PlacesCategories' // ajuste o caminho do import

const ITEMS_PER_PAGE = 6

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export function useLugaresFilter() {
  const [appliedSearch, setAppliedSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPlaces = useMemo(() => {
    const selectedLabel = PLACE_CATEGORIES.find(
      (category) => category.id === selectedCategory,
    )?.label

    return placesInterface.filter((place) => {
      let matchesCategory = selectedCategory === 0

      if (selectedCategory !== 0 && selectedLabel) {
        const categories = (
          Array.isArray(place.categoria)
            ? place.categoria
            : [String(place.categoria ?? '')]
        ).map((category) => normalize(String(category)))

        const targetCategory = normalize(selectedLabel)

        if (targetCategory === 'natureza e lazer') {
          matchesCategory = categories.some((category) =>
            ['natureza', 'lazer', 'praia'].some((term) =>
              category.includes(term),
            ),
          )
        } else if (targetCategory === 'cultura e historia') {
          matchesCategory = categories.some((category) =>
            ['cultura', 'historia', 'historico'].some((term) =>
              category.includes(term),
            ),
          )
        } else if (targetCategory === 'servicos e utilidade publica') {
          matchesCategory = categories.some((category) =>
            ['servico', 'utilidade publica'].some((term) =>
              category.includes(term),
            ),
          )
        } else {
          matchesCategory = categories.some((category) =>
            category.includes(targetCategory),
          )
        }
      }

      const searchTerm = normalize(appliedSearch)
      const matchesSearch =
        normalize(place.nome ?? '').includes(searchTerm) ||
        normalize(place.descricao ?? '').includes(searchTerm)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, appliedSearch])

  const totalPages = Math.ceil(filteredPlaces.length / ITEMS_PER_PAGE) || 1

  const paginatedPlaces = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredPlaces.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredPlaces, currentPage])

  const startIndex =
    filteredPlaces.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredPlaces.length)

  const handleSearch = (term: string) => {
    setAppliedSearch(term)
    setCurrentPage(1)
  }

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  return {
    selectedCategory,
    currentPage,
    filteredPlaces,
    paginatedPlaces,
    totalPages,
    startIndex,
    endIndex,
    handleSearch,
    handleCategoryChange,
    setCurrentPage,
  }
}
