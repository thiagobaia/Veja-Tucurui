// src/constants/ArticleCategories.ts

export interface CategoryItem {
  id: number
  label: string
}

export const NEWS_CATEGORIES: CategoryItem[] = [
  { id: 0, label: 'Todas as Notícias' },
  { id: 1, label: 'Cidade e Região' },
  { id: 2, label: 'Política' },
  { id: 3, label: 'Economia & Negócios' },
  { id: 4, label: 'Segurança & Polícia' },
  { id: 5, label: 'Esportes' },
  { id: 6, label: 'Cultura & Eventos' },
  { id: 7, label: 'Saúde & Bem-Estar' },
  { id: 8, label: 'Educação' },
  { id: 9, label: 'Tecnologia & Inovação' },
  { id: 10, label: 'Utilidade Pública' },
]
