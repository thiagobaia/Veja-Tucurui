import { type HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'primary' | 'outline' | 'muted'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  label: string
}

const variantStyles: Record<BadgeVariant, { backgroundColor: string; color: string; border?: string }> = {
  default: { backgroundColor: '#FBEDD1', color: '#233C34' },
  primary: { backgroundColor: '#F0B64B', color: '#233C34' },
  outline: { backgroundColor: 'transparent', color: '#233C34', border: '2px solid #233C34' },
  muted:   { backgroundColor: '#F7F5EF', color: '#69766E' },
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Badge({ variant = 'default', size = 'sm', label, className = '', style, ...props }: BadgeProps) {
  const vs = variantStyles[variant]
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${sizeStyles[size]} ${className}`}
      style={{ ...vs, ...style }}
      {...props}
    >
      {label}
    </span>
  )
}
