'use client'

import React, { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface SearchBarProps {
  defaultValue?: string
  onSearch: (searchTerm: string) => void
  placeholder?: string
  className?: string
}

export function SearchBar({
  defaultValue = '',
  onSearch,
  placeholder = 'Busque pelo nome do lugar...',
  className = '',
}: SearchBarProps) {
  // Estado interno apenas para o input localmente
  const [searchTerm, setSearchTerm] = useState(defaultValue)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Só dispara a função de busca externa quando o formulário é enviado
    onSearch(searchTerm)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full flex items-center justify-between bg-white rounded-full border px-2 py-1.5 shadow-sm transition-all focus-within:ring-2 focus-within:ring-brand-primary/20 ${className}`}
      style={{ borderColor: 'var(--color-brand-muted, #BBCAC1)' }}
    >
      {/* Campo de entrada com o ícone de busca */}
      <div className="flex items-center flex-1 gap-3 px-4">
        <Search size={20} style={{ color: 'var(--color-brand-secondary, #69766E)' }} className="shrink-0 hidden sm:block" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm sm:text-base font-normal placeholder:text-brand-secondary"
          style={{
            color: 'var(--color-brand-primary, #233C34)',
            fontFamily: 'var(--font-sans), Roboto, sans-serif',
          }}
        />
      </div>

      {/* Botão para disparar a busca */}
      <Button
        type="submit"
        variant="secondary"
        size="md"
        className="shrink-0"
      >
        <span>Buscar</span>
        <ArrowRight size={18} className="shrink-0" />
      </Button>
    </form>
  )
}
