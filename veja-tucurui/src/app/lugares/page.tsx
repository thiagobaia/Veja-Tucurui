'use client'

import { SearchBar } from '@/components/SearchBar'

import { PageHeaderSection } from '@/components/sections/LugaresHeaderSection'
import { PlacesGridSection } from '@/components/sections/PlacesGridSection'
import { Pagination } from '@/components/Pagination'
import { useLugaresFilter } from '@/hooks/useLugaresFilter'
import { PLACE_CATEGORIES } from '@/constants/PlacesCategories'
import { CategoryFilter } from '@/components/CategoryFilter'



export default function LugaresPage() {
  const {
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
  } = useLugaresFilter()



  return (
    <main className="w-full pb-16 max-w-7xl mx-auto">
      <PageHeaderSection
        breadcrumbItems={[{ label: 'Lugares', href: '/lugares' }]}
        title="A cidade inteira, mais perto de você."
        description="Encontre atrações, restaurantes, comércios e serviços. Escolha uma categoria e descubra o que combina com o seu caminho."
      />

      <div className="w-full px-4 md:px-8 space-y-6 my-4">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Busque pelo nome do lugar..."
        />

  <CategoryFilter
  categories={PLACE_CATEGORIES}
  selectedCategory={selectedCategory}
  onSelectCategory={handleCategoryChange}
/>
      </div>

      <div className="w-full px-4 md:px-8 mt-8 space-y-8">
        <PlacesGridSection places={paginatedPlaces} />

        {filteredPlaces.length > 0 && (
          <Pagination.Root>
            <Pagination.Info
              from={startIndex}
              to={endIndex}
              total={filteredPlaces.length}
              itemName="resultados demonstrativos"
            />

            <Pagination.List>
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1
                return (
                  <Pagination.Item
                    key={pageNumber}
                    page={pageNumber}
                    active={currentPage === pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                  />
                )
              })}

              <Pagination.Item
                isNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              />
            </Pagination.List>
          </Pagination.Root>
        )}
      </div>
    </main>
  )
}
