/**
 * Tema VejaTucuruí
 * Fonte única de verdade para todas as cores do design system.
 * Importe este arquivo em qualquer lugar que precise de uma cor.
 */

export const colors = {
  // Verdes — paleta principal
  primary:   '#233C34', // verde escuro principal (headers, botões primários)
  primaryAlt:'#203E35', // verde escuro alternativo (overlays, footer bg)
  secondary: '#69766E', // verde acinzentado (textos secundários, bordas)
  accent:    '#005315', // verde intenso (links ativos, destaques)
  muted:     '#BBCAC1', // verde acinzentado claro (placeholders, disabled)

  // Âmbar — CTA e destaques quentes
  amber:     '#F0B64B', // botão "Comece a explorar", badges de destaque
  amberLight:'#FBEDD1', // fundo de cards de destaque, hover suave

  // Neutros
  black:     '#000000',
  white:     '#FFFFFF',
  offWhite:  '#F7F5EF', // cards, surfaces claras
  background:'#DDDFD5', // fundo do app

  // Aliases semânticos
  textPrimary:   '#233C34',
  textSecondary: '#69766E',
  textMuted:     '#BBCAC1',
  textOnDark:    '#FFFFFF',
  surface:       '#FFFFFF',
  surfaceAlt:    '#F7F5EF',
  border:        '#BBCAC1',
} as const

export type ColorToken = keyof typeof colors
