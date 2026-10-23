// src/components/SpotGallery.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ModalGalleryProps {
  images: string[]
  spotName: string
}

export default function ModalGallery({ images, spotName }: ModalGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length <= 1) return null

  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Galeria de Fotos
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(imgUrl)}
              className="group relative h-32 cursor-pointer overflow-hidden rounded-xl bg-slate-100"
            >
              <Image
                src={imgUrl}
                alt={`${spotName} foto ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-colors duration-300 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DE TELA CHEIA */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-black/40 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-slate-900/80 p-2 text-white transition-colors hover:bg-slate-900"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage}
                alt="Foto ampliada"
                fill
                className="rounded-lg object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
