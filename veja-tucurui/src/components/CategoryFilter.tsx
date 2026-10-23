'use client'

export interface CategoryItem {
  id: number
  label: string
}

interface CategoryFilterProps {
  categories: CategoryItem[]
  selectedCategory: number
  onSelectCategory: (categoryId: number) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-hide">
      <div className="grid grid-cols-2 gap-2 auto-rows-fr md:flex md:flex-wrap md:items-center md:gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              aria-pressed={isSelected}
              className={`shrink-0 cursor-pointer select-none rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                isSelected ? 'shadow-sm' : 'hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: isSelected ? '#233C34' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#233C34',
                border: isSelected
                  ? '1px solid #233C34'
                  : '1px solid #BBCAC1',
                fontFamily: 'var(--font-sans), Roboto, sans-serif',
              }}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
