import { useMemo, useState } from 'react'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { allPrograms, sdgBadges } from '../data/content'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const uniqueSdgTags: Array<'All' | (typeof sdgBadges)[number]> = ['All', ...sdgBadges]

export function ProgramsPage() {
  usePageMeta('programs')
  const [selectedTag, setSelectedTag] = useState<'All' | (typeof sdgBadges)[number]>('All')

  const filteredPrograms = useMemo(() => {
    if (selectedTag === 'All') return allPrograms
    return allPrograms.filter((program) => program.sdg.some((tag) => tag === selectedTag))
  }, [selectedTag])

  return (
    <div className="page-shell py-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Programs</p>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">Our approach to lasting impact</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {uniqueSdgTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                selectedTag === tag ? 'border-primary bg-primary text-paper' : 'border-border bg-paper text-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-[2rem] border border-border bg-surface-alt p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Jump to</p>
            <nav className="mt-4 space-y-2">
              {allPrograms.map((program) => (
                <a key={program.id} href={`#${program.id}`} className="block rounded-full px-3 py-2 text-sm text-muted transition hover:bg-paper hover:text-primary">
                  {program.name}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-16">
          {filteredPrograms.map((program, index) => {
            const image = images[program.image as keyof typeof images]
            const isReversed = index % 2 === 1

            return (
              <section key={program.id} id={program.id} className="scroll-mt-28 rounded-[2.5rem] border border-border bg-paper p-4 md:p-6">
                <div className={`grid items-center gap-6 ${isReversed ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'}`}>
                  <div className={`${isReversed ? 'order-2' : 'order-1'} overflow-hidden rounded-[2rem] border border-border bg-surface-alt`}>
                    <img src={image} alt={program.name} className="h-[340px] w-full object-cover md:h-[420px]" loading="lazy" />
                  </div>

                  <div className={`${isReversed ? 'order-1' : 'order-2'} rounded-[2rem] bg-surface-alt/60 p-6 md:p-8`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">{program.sdg.join(' • ')}</p>
                    <h2 className="mt-4 font-serif text-4xl text-ink">{program.name}</h2>
                    <p className="mt-4 text-base leading-7 text-muted">{program.description}</p>

                    <ul className="mt-6 space-y-3">
                      {program.services.map((service) => (
                        <li key={service} className="flex items-center gap-3 text-base text-ink">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <CircleCheck size={14} />
                          </span>
                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {program.sdg.map((tag) => (
                        <span key={tag} className="rounded-full border border-primary/20 bg-paper px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a href="#top" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Back to top
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
