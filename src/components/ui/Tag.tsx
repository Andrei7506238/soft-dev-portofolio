type Props = {
  label: string
}

export function Tag({ label }: Props) {
  return <span className="tag">{label}</span>
}
