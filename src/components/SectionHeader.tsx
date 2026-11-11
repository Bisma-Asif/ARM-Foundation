type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-none text-ink md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  )
}
