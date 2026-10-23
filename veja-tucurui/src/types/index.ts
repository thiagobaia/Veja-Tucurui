export interface Category {
  id: string
  label: string
  description: string // subtitle shown under the label in the grid
  icon: string
  lucideIcon: string
  slug: string
}

export interface Article {
  id: string
  title: string
  excerpt: string
  imageUrl: string
  category: string
  categorySlug: string
  publishedAt: string
  slug: string
  featured?: boolean
}

export interface TouristSpot {
  id: string
  name: string
  description: string
  imageUrl: string
  category: string
  rating?: number
  slug: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export interface GalleryEventItem {
  id: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  publishedAt: string
  photoCount: number
  imageUrl: string
  slug: string
  ownerContactUrl?: string
}

export interface PlaceType {
  id: number
  nome: string
  slug: string
  categoria: string | string[]
  descricao?: string
  endereco?: string
  telefone?: string
  especialidades?: string[]
  instagram: string
  foto: string
  images?: string[] | null
  faixa_preco_listada?: string
  status_verificacao?: string
  horarios_listados?: Record<string, string>
  avaliacao_publica?: {
    nota?: number
    quantidade_avaliacoes?: number
  }
  google_maps?: {
    endereco?: string
    telefone?: string
    nota?: number
    quantidade_avaliacoes?: number
    horarios?: Record<string, string>
    categorias?: string[]
    faixa_preco?: string | null
    link_busca_google_maps?: string
  }
}

export interface NewsTypeData {
  id: string
  name: string
  description: string
  imageUrl?: string | null
  category: string
  rating: number
  texto: string
  slug: string
}
