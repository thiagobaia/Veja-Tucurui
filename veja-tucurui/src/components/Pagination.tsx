import React from 'react'
import { ArrowRight } from 'lucide-react'

// --- Tipagens ---
export interface PaginationRootProps {
  children: React.ReactNode
}

export interface PaginationInfoProps {
  from: number
  to: number
  total: number
  itemName?: string
}

export interface PaginationListProps {
  children: React.ReactNode
}

export interface PaginationItemProps {
  page?: number
  active?: boolean
  onClick?: () => void
  isNext?: boolean
}

// --- Componentes ---

export function PaginationRoot({ children }: PaginationRootProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
      {children}
    </div>
  )
}

export function PaginationInfo({ from, to, total, itemName = 'resultados' }: PaginationInfoProps) {
  return (
    <p className="text-sm font-normal" style={{ color: '#69766E', fontFamily: 'var(--font-sans), Roboto, sans-serif' }}>
      Mostrando <span className="font-medium text-brand-primary">{from}–{to}</span> de <span className="font-medium text-brand-primary">{total}</span> {itemName}
    </p>
  )
}

export function PaginationList({ children }: PaginationListProps) {
  return (
    <div className="flex items-center gap-3">
      {children}
    </div>
  )
}

export function PaginationItem({ page, active = false, onClick, isNext = false }: PaginationItemProps) {
  if (isNext) {
    return (
      <button
        onClick={onClick}
        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:border-brand-primary"
        style={{ borderColor: '#BBCAC1', color: '#233C34' }}
        aria-label="Próxima página"
      >
        <ArrowRight size={18} />
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
        active ? 'shadow-sm' : 'border hover:border-brand-primary'
      }`}
      style={{
        backgroundColor: active ? '#F0B64B' : 'transparent',
        borderColor: active ? '#F0B64B' : '#BBCAC1',
        color: active ? '#FFFFFF' : '#233C34',
      }}
    >
      {page}
    </button>
  )
}

// Agrupando para exportação unificada (opcional)
export const Pagination = {
  Root: PaginationRoot,
  Info: PaginationInfo,
  List: PaginationList,
  Item: PaginationItem,
}
