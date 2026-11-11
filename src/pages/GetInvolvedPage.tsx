import { useState } from 'react'
import { ArrowRight, Check, HandCoins, HeartHandshake, Sparkles, Users } from 'lucide-react'
import { bankDetails, donationOptions, waysToHelp } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const helpIcons = [HandCoins, Users, Sparkles, HeartHandshake, Check]

export function GetInvolvedPage() {
  usePageMeta('getInvolved')
  const [selectedAmount, setSelectedAmount] = useState('PKR 1,000')

  return (
    <div className="page-shell py-10">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Get involved</p>
        <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">Your support can change a life.</h1>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {waysToHelp.map((item, index) => {
          const Icon = helpIcons[index] ?? HandCoins
          return (
            <div key={item} className="rounded-[2rem] border border-border bg-paper p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-ink">{item}</h3>
            </div>
          )
        })}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2.5rem] border border-border bg-surface-alt p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Make a donation</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">Choose a giving amount</h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {donationOptions.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setSelectedAmount(amount)}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                  selectedAmount === amount ? 'border-primary bg-primary text-paper' : 'border-border bg-paper text-ink'
                }`}
              >
                {amount}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-border bg-paper p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Selected giving</p>
            <p className="mt-3 font-serif text-4xl text-ink">{selectedAmount}</p>
            <div className="mt-6 space-y-4 text-base text-muted">
              <label className="block">
                Donation type
                <select className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary">
                  <option>Zakat</option>
                  <option>Sadaqah</option>
                  <option>General</option>
                </select>
              </label>
              <label className="block">
                Full name
                <input className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary" type="text" placeholder="Your name" />
              </label>
              <label className="block">
                Email
                <input className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper transition hover:bg-primary-dark">
              Continue donation <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-border bg-paper p-6 shadow-[0_18px_34px_rgba(22,31,28,0.05)] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Bank transfer details</p>
          <h3 className="mt-3 font-serif text-3xl text-ink">PLACEHOLDER account details</h3>
          <div className="mt-6 space-y-4 text-base text-muted">
            <div className="rounded-2xl border border-border bg-surface-alt p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Account title</p>
              <p className="mt-2 text-lg text-ink">{bankDetails.accountTitle}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-alt p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Bank</p>
              <p className="mt-2 text-lg text-ink">{bankDetails.bank}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-alt p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">IBAN</p>
              <p className="mt-2 text-lg text-ink">{bankDetails.iban}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-alt p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Account No.</p>
              <p className="mt-2 text-lg text-ink">{bankDetails.accountNo}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-border bg-surface-alt p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Transparency</p>
        <h2 className="mt-3 font-serif text-4xl text-ink">Where your funds go</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Donations are directed toward concrete program needs, guided by operational priorities, community feedback, and the responsible stewardship of resources. Each contribution helps support education, healthcare, livelihoods, digital skills, food security, and environmental care.
        </p>
      </section>
    </div>
  )
}
