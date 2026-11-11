import { BarChart3 } from 'lucide-react'
import { impactGoals } from '../data/content'
import { StatCounter } from '../components/StatCounter'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const sdgMap = [
  { tag: 'SDG 1', programs: ['Livelihood Support'] },
  { tag: 'SDG 2', programs: ['Food Security Program'] },
  { tag: 'SDG 3', programs: ['Health & Wellbeing'] },
  { tag: 'SDG 4', programs: ['Education for All', 'Youth Technology Academy'] },
  { tag: 'SDG 5', programs: ['Women Empowerment', 'Ali Raza Mujtaba Digital Empowerment Program'] },
  { tag: 'SDG 6', programs: ['Environmental Stewardship'] },
  { tag: 'SDG 8', programs: ['Youth Technology Academy', 'Livelihood Support'] },
  { tag: 'SDG 9', programs: ['Community Digital Trust Initiative', 'Ali Raza Mujtaba Digital Empowerment Program'] },
  { tag: 'SDG 13', programs: ['Environmental Stewardship'] },
  { tag: 'SDG 15', programs: ['Environmental Stewardship'] },
]

export function ImpactPage() {
  usePageMeta('impact')

  return (
    <div className="page-shell py-10">
      <section className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Impact & SDGs</p>
          <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">5-year goals for resilient communities</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Progress begins when communities learn, collaborate, and build practical opportunities together.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface-alt p-3">
          <img src={images.fieldStudents} alt="Young learners at a local school" className="h-[300px] w-full rounded-[2rem] object-cover md:h-[360px]" loading="lazy" />
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {impactGoals.map((goal) => (
          <div key={goal.label} className="rounded-[2rem] border border-border bg-paper p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{goal.description}</p>
            <div className="mt-4">
              <StatCounter value={goal.value} suffix={goal.suffix} label={goal.label} />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-border bg-surface-alt p-6 md:p-8">
        <div className="flex items-center gap-3">
          <BarChart3 className="text-primary" size={20} />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">SDG alignment</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sdgMap.map((item) => (
            <div key={item.tag} className="rounded-[2rem] border border-border bg-paper p-5">
              <span className="inline-flex rounded-full border border-primary/20 bg-surface-alt px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {item.tag}
              </span>
              <p className="mt-4 text-sm text-muted">Mapped to:</p>
              <ul className="mt-2 space-y-2 text-base text-ink">
                {item.programs.map((program) => (
                  <li key={program} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
