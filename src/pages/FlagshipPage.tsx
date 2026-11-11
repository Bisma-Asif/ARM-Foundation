import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { flagshipInitiative } from '../data/content'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function FlagshipPage() {
  usePageMeta('flagship')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-shell py-10">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Flagship initiative</p>
          <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">{flagshipInitiative.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{flagshipInitiative.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {flagshipInitiative.sdg.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/20 bg-surface-alt px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface-alt p-3">
          <img src={images.flagshipHero} alt={flagshipInitiative.title} className="h-[460px] w-full rounded-[2rem] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-border bg-paper p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">What we provide</p>
          <ul className="mt-6 space-y-4">
            {flagshipInitiative.services.map((service) => (
              <li key={service} className="flex items-center gap-3 text-lg text-muted">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <Check size={16} />
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface-alt p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Journey</p>
          <div className="mt-6 flex flex-col gap-4">
            {flagshipInitiative.journey.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-border bg-paper p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-paper">
                  {index + 1}
                </span>
                <div>
                  <p className="font-serif text-2xl text-ink">{step}</p>
                  <p className="text-sm text-muted">{index === 0 ? 'Build foundational confidence' : index === 1 ? 'Practice with mentoring and guided sessions' : 'Convert skills into earning opportunities'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="text-primary" size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Gallery</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[images.flagshipGallery1, images.flagshipGallery2, images.flagshipGallery3].map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[2rem] border border-border bg-surface-alt">
              <img src={image} alt={`Program gallery ${index + 1}`} className="h-[280px] w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-border bg-surface-alt p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Enroll interest</p>
            <h2 className="mt-3 font-serif text-4xl text-ink">Join the next cohort</h2>
            <p className="mt-4 text-base leading-7 text-muted">Share a few details and we will contact you with upcoming sessions, eligibility, and learning pathways.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-paper p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-muted">
                Full name
                <input required className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none transition focus:border-primary" type="text" placeholder="Your name" />
              </label>
              <label className="text-sm text-muted">
                Email
                <input required className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none transition focus:border-primary" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-muted">
              Interest area
              <select className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none transition focus:border-primary">
                <option>Digital literacy</option>
                <option>IT and AI training</option>
                <option>Women freelancing incubator</option>
                <option>School cybersecurity awareness</option>
              </select>
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper transition hover:bg-primary-dark">
              Enroll interest <ArrowRight size={16} />
            </button>
            {submitted ? <p className="mt-4 text-sm font-medium text-primary">Thanks! Your interest has been recorded.</p> : null}
          </form>
        </div>
      </section>
    </div>
  )
}
