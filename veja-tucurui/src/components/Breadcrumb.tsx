import Link from 'next/link'


export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full py-4">
      <ol className="flex items-center gap-2 text-sm font-medium" style={{ color: '#69766E' }}>
        {/* Item fixo de Início */}
        <li className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: '#233C34' }}>
            <span>Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              <span aria-hidden="true" style={{ color: '#BBCAC1' }}>/</span>
              {isLast ? (
                <span className="font-semibold" style={{ color: '#233C34' }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:opacity-80 transition-opacity" style={{ color: '#69766E' }}>
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
