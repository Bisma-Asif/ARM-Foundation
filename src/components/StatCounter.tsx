import { animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type StatCounterProps = {
  value: number
  suffix?: string
  label: string
  description?: string
}

export function StatCounter({ value, suffix = '', label, description }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(latest),
    })

    return () => controls.stop()
  }, [inView, value])

  const formattedValue =
    value >= 1000 ? `${(displayValue / 1000).toFixed(1).replace(/\.0$/, '')}k` : Math.round(displayValue).toString()

  return (
    <div ref={ref} className="rounded-[2rem] border border-border bg-surface-alt p-6">
      <p className="text-4xl font-semibold text-primary md:text-5xl">
        {formattedValue}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">{label}</p>
      {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
    </div>
  )
}
