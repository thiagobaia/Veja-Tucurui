// src/app/noticias/page.tsx
'use client'

import { SearchBar } from '@/components/SearchBar'
import { CategoryFilter } from '@/components/CategoryFilter'
import { PageHeaderSection } from '@/components/sections/LugaresHeaderSection'
import { Pagination } from '@/components/Pagination'
import { useNewsFilter} from '@/hooks/useNewsFilter'

import { NEWS_CATEGORIES} from '@/constants/NewsCategories'
import { NewsGridSection } from '@/components/sections/NewsGridSection'

export default function NoticiasPage() {
  const {
    selectedCategory,
    currentPage,
    filteredNews,
    paginatedNews,
    totalPages,
    startIndex,
    endIndex,
    handleSearch,
    handleCategoryChange,
    setCurrentPage,
  } = useNewsFilter()

  return (
    <main className="mx-auto w-full max-w-7xl pb-16">
      <PageHeaderSection
        breadcrumbItems={[{ label: 'Notícias', href: '/noticias' }]}
        title="Fique por dentro das últimas novidades."
        description="Acompanhe acontecimentos, reportagens, avisos importantes e utilidade pública em um só lugar."
      />

      <div className="my-4 w-full space-y-6 px-4 md:px-8">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Busque pelo título da notícia..."
        />

        <CategoryFilter
          categories={NEWS_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </div>

      <div className="mt-8 w-full space-y-8 px-4 md:px-8">
        {/* Renderiza o grid usando o ArticleCard em modo vertical */}
        <NewsGridSection news={paginatedNews} />

        {filteredNews.length > 0 && (
          <Pagination.Root>
            <Pagination.Info
              from={startIndex}
              to={endIndex}
              total={filteredNews.length}
              itemName="notícias encontradas"
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
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </Pagination.List>
          </Pagination.Root>
        )}
      </div>
    </main>
  )
}
