'use client'

import Link from 'next/link'
import {
  Mountain, UtensilsCrossed, Store, Landmark, Banknote, Ticket,
  ArrowRight, type LucideIcon,
} from 'lucide-react'
import type { Category } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Mountain, UtensilsCrossed, Store, Landmark, Banknote, Ticket,
}

interface CategoryGridProps {
  categories: Category[]
}

function CategoryCard({ category }: { category: Category }) {
  const IconComponent = iconMap[category.lucideIcon] ?? Mountain

  return (
    <Link
      href={`/${category.slug}`}
      className="flex flex-col gap-2 rounded-2xl p-4 shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <IconComponent size={28} strokeWidth={1.5} style={{ color: '#233C34' }} aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold leading-snug" style={{ color: '#233C34' }}>
          {category.label}
        </p>
        <p className="mt-0.5 text-xs" style={{ color: '#69766E' }}>
          {category.description}
        </p>
      </div>
    </Link>
  )
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="px-4 py-6" aria-label="O que você procura hoje?">

<div className='lg:flex items-center lg:justify-between lg:py-6'>


      <h2
        className="mb-1 text-2xl font-bold leading-tight"
        style={{ color: '#233C34', fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        O que você procura hoje?
      </h2>
      <Link
        href="/lugares"
        className="mb-5 inline-flex items-center gap-1 text-sm font-semibold lg:mb-0"
        style={{ color: '#233C34' }}
      >
        Todo o guia em um só lugar
        <ArrowRight size={14} aria-hidden="true" />
      </Link>


</div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
