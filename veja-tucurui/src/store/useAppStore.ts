import { create } from 'zustand'

interface AppStore {
  activeCategory: string | null
  searchQuery: string
  setActiveCategory: (slug: string | null) => void
  setSearchQuery: (query: string) => void
}

export const useAppStore = create<AppStore>((set) => ({
  activeCategory: null,
  searchQuery: '',
  setActiveCategory: (slug) => set({ activeCategory: slug }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}))
