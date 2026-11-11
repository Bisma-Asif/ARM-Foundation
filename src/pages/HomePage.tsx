import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  HeartPulse,
  Leaf,
  Laptop2,
  PackageOpen,
  Quote,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '../components/SectionHeader'
import { StatCounter } from '../components/StatCounter'
import {
  homeHero,
  impactGoals,
  marqueeItems,
  programsPreview,
  strategicPillars,
  visionMission,
} from '../data/content'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const iconMap = {
  BookOpen,
  HeartPulse,
  Users,
  Laptop2,
  BriefcaseBusiness,
  Leaf,
  PackageOpen,
  ShieldCheck,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function HomePage() {
  usePageMeta('home')

  return (
    <div>
      <section className="page-shell py-10 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">{homeHero.eyebrow}</p>
            <h1 className="mt-4 max-w-xl text-[3rem] leading-[0.95] text-ink md:text-[4.5rem]">
              {homeHero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{homeHero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/programs" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-paper transition hover:bg-primary-dark">
                {homeHero.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-paper px-6 py-3.5 text-base font-medium text-primary transition hover:border-primary hover:bg-surface-alt">
                {homeHero.secondaryCta}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {homeHero.statChips.map((chip) => (
                <div key={chip.label} className="rounded-full border border-border bg-surface-alt px-4 py-2 text-sm text-ink">
                  <span className="font-semibold text-primary">{chip.value}</span> {chip.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -left-4 top-12 hidden h-20 w-20 rounded-full border border-primary/15 bg-surface-alt md:block" />
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
            <div className="arch-visual relative overflow-hidden rounded-[2.5rem] border border-border bg-surface-alt p-4 shadow-[0_18px_38px_rgba(24,32,30,0.08)]">
              <img src={images.heroMain} alt="Community learning together" className="h-[520px] w-full rounded-[2rem] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 left-4 w-[210px] rounded-2xl border border-border bg-paper/90 p-3 shadow-[0_16px_22px_rgba(19,23,22,0.08)] backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Community care</p>
              <p className="mt-2 font-serif text-2xl text-ink">92%</p>
              <p className="text-sm text-muted">of beneficiaries report stronger access to support.</p>
            </div>
            <div className="absolute -right-2 top-6 flex flex-col gap-3">
              <div className="rounded-full border border-border bg-paper px-3 py-2 text-sm text-ink shadow-sm">Health camps</div>
              <div className="rounded-full border border-border bg-paper px-3 py-2 text-sm text-ink shadow-sm">Digital literacy</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-alt/80 py-8">
        <div className="page-shell">
          <div className="flex flex-col items-center justify-center text-center">
            <Quote className="text-accent" size={34} />
            <p className="mt-5 font-serif text-3xl italic leading-snug text-primary md:text-5xl">{homeHero.quote}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-muted">{homeHero.quoteRef}</p>
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-surface-alt p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Vision</p>
            <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">We imagine a more inclusive tomorrow.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">{visionMission.vision}</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-paper p-8 shadow-[0_16px_34px_rgba(18,30,28,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Mission</p>
            <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Practical action, rooted in care.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">{visionMission.mission}</p>
          </div>
        </div>
      </section>

      <section className="page-shell py-4 md:py-8">
        <SectionHeader
          eyebrow="Core programs"
          title="A compassionate response across every stage of life"
          description="We focus on the everyday realities that shape dignity, opportunity, and wellbeing in underserved communities."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programsPreview.map((program, index) => {
            const Icon = iconMap[program.icon as keyof typeof iconMap]
            const isTall = index % 5 === 0 || index % 5 === 3

            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group overflow-hidden rounded-[2rem] border border-border bg-paper shadow-[0_14px_24px_rgba(20,27,26,0.04)] ${
                  isTall ? 'xl:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={images[program.image as keyof typeof images]}
                    alt={program.name}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123a31]/60 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-paper/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    <span>{program.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt text-primary">
                      <Icon size={22} />
                    </div>
                    <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl text-ink">{program.name}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{program.summary}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="bg-surface-alt/80 py-20">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-paper p-2">
              <img src={images.flagshipHero} alt="Ali Raza Mujtaba Digital Empowerment Program" className="h-[520px] w-full rounded-[1.5rem] object-cover" loading="lazy" />
            </div>

            <div>
              <SectionHeader
                eyebrow="Flagship initiative"
                title="Ali Raza Mujtaba Digital Empowerment Program"
                description="Education, livelihoods, and digital inclusion converge to create pathways for opportunity and confidence."
              />

              <ul className="mt-8 space-y-4">
                {[
                  'Cybersecurity awareness for schools',
                  'Free IT and AI training for youth',
                  'Women freelancing incubator',
                  'Digital literacy for societies',
                ].map((service) => (
                  <li key={service} className="flex items-start gap-3 rounded-2xl border border-border bg-paper px-4 py-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-primary">
                      <Check size={14} />
                    </span>
                    <span className="text-lg text-muted">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {['SDG 4', 'SDG 5', 'SDG 8', 'SDG 9'].map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/20 bg-paper px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to="/digital-empowerment" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper transition hover:bg-primary-dark">
                Explore the initiative
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeader
          eyebrow="Strategic pillars"
          title="Four commitments guiding every intervention"
          description="Our approach is shaped by long-term community wellbeing, dignity, and practical opportunity."
          align="center"
        />

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {strategicPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-border bg-paper p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-paper">
                  {index === 0 ? <BookOpen size={22} /> : index === 1 ? <Users size={22} /> : index === 2 ? <HeartPulse size={22} /> : <Leaf size={22} />}
                </div>
                <h3 className="mt-6 font-serif text-3xl text-ink">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt/75 py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="5-year goals"
            title="Targeted milestones for long-term impact"
            description="These goals reflect our ambition to expand opportunity, care, and resilience across underserved communities."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {impactGoals.map((goal) => (
              <div key={goal.label} className="rounded-[2rem] border border-border bg-paper p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{goal.description}</p>
                <div className="mt-4">
                  <StatCounter value={goal.value} suffix={goal.suffix} label={goal.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-primary py-7 text-paper">
        <div className="marquee-track flex min-w-max gap-8 whitespace-nowrap px-5 text-sm font-medium uppercase tracking-[0.22em]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="rounded-[2.5rem] border border-border bg-[linear-gradient(135deg,#0f5c4d,#114f40)] p-8 text-paper md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paper/80">Join our mission</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl text-paper md:text-5xl">Be part of the change.</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-primary transition hover:bg-surface-alt">
                Donate now
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-paper transition hover:bg-white/10">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
