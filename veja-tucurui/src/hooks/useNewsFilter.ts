// src/hooks/useNoticiasFilter.ts
'use client'

import { useMemo, useState } from 'react'
import { NewsData } from '@/data/NewsData'
import type { NewsTypeData } from '@/types'
import { NEWS_CATEGORIES } from '@/constants/NewsCategories'

const ITEMS_PER_PAGE = 6



function normalize(value: string | number) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
}

export function useNewsFilter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredNews = useMemo(() => {
    const selectedCategoryLabel = NEWS_CATEGORIES.find(
      (category) => category.id === selectedCategory,
    )?.label

    return NewsData.filter((news: NewsTypeData) => {
      const searchableText = normalize(
        `${news.name} ${news.description} ${news.texto}`,
      )
      const matchesSearch = searchableText.includes(normalize(searchQuery))

      const matchesCategory =
        selectedCategory === 0 ||
        (!!selectedCategoryLabel &&
          normalize(news.category) === normalize(selectedCategoryLabel))

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedNews = filteredNews.slice(startIndex, endIndex)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  return {
    selectedCategory,
    currentPage,
    filteredNews,
    paginatedNews,
    totalPages,
    startIndex: filteredNews.length === 0 ? 0 : startIndex + 1,
    endIndex: Math.min(endIndex, filteredNews.length),
    handleSearch,
    handleCategoryChange,
    setCurrentPage,
  }
}
