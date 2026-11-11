import { useState, type FormEvent } from 'react'
import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { contactDetails, faqItems } from '../data/content'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  usePageMeta('contact')
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-shell py-10">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Contact</p>
          <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">We would love to hear from you.</h1>
          <form onSubmit={handleSubmit} className="mt-8 rounded-[2.5rem] border border-border bg-paper p-6 shadow-[0_18px_32px_rgba(17,27,25,0.04)]">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-muted">
                Name
                <input required className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary" type="text" placeholder="Your name" />
              </label>
              <label className="text-sm text-muted">
                Email
                <input required className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-muted">
              Subject
              <input required className="mt-2 w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary" type="text" placeholder="How can we help?" />
            </label>
            <label className="mt-4 block text-sm text-muted">
              Message
              <textarea required className="mt-2 min-h-[150px] w-full rounded-2xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none focus:border-primary" placeholder="Tell us more..." />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper transition hover:bg-primary-dark">
              Send message <ArrowRight size={16} />
            </button>
            {submitted ? <p className="mt-4 text-sm font-medium text-primary">Your message has been sent successfully.</p> : null}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-border bg-surface-alt p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Contact info</p>
            <ul className="mt-5 space-y-4 text-base text-muted">
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-1 text-primary" /> {contactDetails.address}</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> {contactDetails.phone}</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> {contactDetails.email}</li>
              <li className="flex items-center gap-3"><Clock3 size={18} className="text-primary" /> {contactDetails.hours}</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface-alt">
            <img src={images.contactMap} alt="Map placeholder" className="h-[220px] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-border bg-surface-alt p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">FAQ</p>
        <div className="mt-6 space-y-4">
          {faqItems.map((item, index) => (
            <div key={item.question} className="rounded-[1.5rem] border border-border bg-paper">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-medium text-ink"
              >
                {item.question}
                <span className="text-primary">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index ? <p className="px-5 pb-5 text-base leading-7 text-muted">{item.answer}</p> : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
