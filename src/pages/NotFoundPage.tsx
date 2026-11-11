import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page-shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="max-w-xl rounded-[2.5rem] border border-border bg-paper p-8 text-center shadow-[0_18px_34px_rgba(18,29,27,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">404</p>
        <h1 className="mt-4 font-serif text-5xl text-ink">This page is not here.</h1>
        <p className="mt-4 text-lg text-muted">The page you are looking for may have moved, but our mission remains the same.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper transition hover:bg-primary-dark">
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </div>
  )
}
