'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideCarouselProps {
  children: React.ReactNode;
}

export default function SlideCarousel({ children }: SlideCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Função para avançar ou voltar um slide/card
  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    /*
      1. overflow-hidden aqui impede que qualquer elemento interno (como os botões
         deslocados para fora) cause barra de rolagem horizontal indesejada na página.
      2. px-5 abre espaço nas laterais para os botões flutuarem sem colar na borda da tela.
    */
    <div className="relative w-full group overflow-hidden px-5 py-2">
      {/* Botão Esquerdo (Voltar) */}
      <button
        onClick={() => scrollByAmount('left')}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md border border-gray-200 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Container dos Cards com Efeito de Snap (Slide) */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 w-full scroll-smooth"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="snap-start shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Botão Direito (Avançar) */}
      <button
        onClick={() => scrollByAmount('right')}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md border border-gray-200 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
