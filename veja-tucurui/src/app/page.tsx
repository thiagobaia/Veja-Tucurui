import {
  HeroSection,
  CategoryGrid,
  PartnersCarousel,
  SpotsSection,
  GastronomyBanner,
  ArticlesSection,
  AgendaSection,
} from '@/components/sections'
import { GallerySpotlightSection } from '@/components/sections/GallerySpotlightSection'
import { articles, categories, galleryEvents, touristSpots } from '@/data/mock'

export default function HomePage() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <HeroSection />

      <div className="lg:px-20">
        {/* "O que você procura hoje?" */}

        <CategoryGrid categories={categories} />

        {/* Banner de parceiros — carrossel automático */}
        <PartnersCarousel />

        {/* "Lugares que merecem uma pausa" — scroll horizontal */}
        <SpotsSection spots={touristSpots} viewAllHref="/lugares" />

        {/* "Sabores que contam histórias" — scroll horizontal */}
        <GastronomyBanner />

        {/* Agenda cultural — scroll horizontal */}
        <AgendaSection />

        <GallerySpotlightSection events={galleryEvents} />

        {/* Últimas notícias — lista */}
        <ArticlesSection
          title="Últimas notícias"
          articles={articles.slice(2)}
          viewAllHref="/noticias"
          variant="grid"
        />
      </div>
    </div>
  )
}
