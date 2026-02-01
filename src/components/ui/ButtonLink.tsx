import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  variant: 'primary' | 'ghost'
  target?: '_blank'
  rel?: string
}

export function ButtonLink({ href, children, variant, target, rel }: Props) {
  return (
    <a className={`btn ${variant}`} href={href} target={target} rel={rel}>
      {children}
    </a>
  )
}
