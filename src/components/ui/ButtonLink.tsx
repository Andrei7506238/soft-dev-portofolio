import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

type Props = {
  href: string
  variant?: Variant
  className?: string
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>

export function ButtonLink({ href, variant = 'primary', className, children, ...rest }: Props) {
  const classes = ['btn', variant, className].filter(Boolean).join(' ')

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}
