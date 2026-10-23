import { Breadcrumb, BreadcrumbItem } from '@/components/Breadcrumb'

interface PageHeaderSectionProps {
  breadcrumbItems: BreadcrumbItem[]
  title: string
  description: string
}

export function PageHeaderSection({
  breadcrumbItems,
  title,
  description,
}: PageHeaderSectionProps) {
  return (
    <div className="w-full px-4 md:px-8 py-6 font-sans">
      {/* Breadcrumb reutilizável */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Título Principal com fonte Serif */}
      <h1
        className="mt-2 text-3xl sm:text-4xl md:text-5xl leading-tight font-normal"
        style={{
          color: 'var(--color-brand-primary, #233C34)',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        {title}
      </h1>

      {/* Descrição de apoio ajustada com Roboto, 16px (mobile/tablet) e 17px (desktop) */}
      <p
        className="mt-3 leading-relaxed max-w-3xl font-normal text-[16px] lg:text-[17px]"
        style={{
          color: 'var(--color-brand-secondary, #69766E)',
          fontFamily: 'var(--font-sans), Roboto, sans-serif',
        }}
      >
        {description}
      </p>
    </div>
  )
}
