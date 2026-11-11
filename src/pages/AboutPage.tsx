import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '../components/SectionHeader'
import { aboutStory, strategicPillars, teamMembers, values } from '../data/content'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  usePageMeta('about')

  return (
    <div>
      <section className="page-shell py-10 md:py-12">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface-alt p-3">
          <img src={images.aboutHeader} alt="Community gathering and support" className="h-[360px] w-full rounded-[2rem] object-cover md:h-[460px]" loading="lazy" />
        </div>
      </section>

      <section className="page-shell pb-16 pt-6">
        <SectionHeader eyebrow="Our story" title="A foundation rooted in care and practical action" description="Ali Raza Mujtaba Foundation is guided by dignity, inclusion, and service." />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <p className="text-lg leading-8 text-muted">{aboutStory}</p>
          <div className="rounded-[2rem] border border-border bg-paper p-6 shadow-[0_18px_34px_rgba(21,30,29,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Mission in brief</p>
            <p className="mt-4 text-2xl font-serif text-ink">Service with compassion, growth with integrity.</p>
            <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              View programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt/70 py-20">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-paper p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Vision</p>
              <h2 className="mt-4 font-serif text-4xl text-ink">A more inclusive, resilient society.</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                Empowering communities through education, health, technology, and sustainable development to create a more inclusive, resilient, and prosperous society.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border bg-paper p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Mission</p>
              <h2 className="mt-4 font-serif text-4xl text-ink">Improving everyday lives with dignity.</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                To improve the quality of life of underprivileged communities by providing access to education, healthcare, digital empowerment, livelihood opportunities, and environmental sustainability initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader eyebrow="Our values" title="The principles shaping every act of service" align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {values.map((value) => (
            <div key={value.title} className="rounded-[2rem] border border-border bg-paper p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt text-primary">
                <BadgeCheck size={22} />
              </div>
              <h3 className="mt-5 font-serif text-3xl text-ink">{value.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt/70 py-20">
        <div className="page-shell">
          <SectionHeader eyebrow="Strategic pillars" title="How we work" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {strategicPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[2rem] border border-border bg-paper p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-3xl text-ink">{pillar.title}</h3>
                  <span className="rounded-full bg-surface-alt px-2 py-1 text-xs uppercase tracking-[0.2em] text-primary">{pillar.theme}</span>
                </div>
                <p className="mt-4 text-base leading-7 text-muted">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader eyebrow="Leadership" title="Trustees and team placeholders" description="Placeholder names are included here so they can be updated quickly in the content file." align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-[2rem] border border-border bg-paper">
              <div className="h-64 bg-surface-alt" />
              <div className="p-6">
                <h3 className="font-serif text-3xl text-ink">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-primary/80">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
