import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  Clock3,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Users,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { footerLinks, navLinks, pageIntroBreadcrumbs, socialLinks, contactDetails } from '../data/content'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { FlagshipPage } from '../pages/FlagshipPage'
import { GalleryPage } from '../pages/GalleryPage'
import { GetInvolvedPage } from '../pages/GetInvolvedPage'
import { HomePage } from '../pages/HomePage'
import { ImpactPage } from '../pages/ImpactPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProgramsPage } from '../pages/ProgramsPage'

const currentYear = new Date().getFullYear()
const brandName = 'Ali Raza Foundation'

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-paper/95 px-6 py-8 md:hidden"
        >
          <motion.nav
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex h-full flex-col"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-ink" aria-label="Ali Raza Foundation home">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-surface-alt font-serif text-base font-bold text-primary">
                  AR
                </span>
                <span className="font-serif text-lg font-bold tracking-tight sm:text-xl">{brandName}</span>
              </Link>
              <button type="button" aria-label="Close menu" onClick={onClose} className="rounded-full border border-border p-2">
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.04 }}>
                  <NavLink
                    to={link.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-3 text-base font-medium transition ${
                        isActive ? 'bg-primary text-paper' : 'text-ink hover:bg-surface-alt'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <Link to="/get-involved" onClick={onClose} className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 font-medium text-ink transition hover:bg-accent/90">
              Donate
            </Link>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function Layout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentPageKey = location.pathname.replace('/', '') || 'home'
  const breadcrumb = pageIntroBreadcrumbs[currentPageKey as keyof typeof pageIntroBreadcrumbs] || 'Home'

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled ? 'border-b border-border bg-paper/90 shadow-[0_8px_24px_rgba(17,29,23,0.06)] backdrop-blur-md' : 'bg-paper/80'
        }`}
      >
        <div className="page-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 text-ink" aria-label="Ali Raza Foundation home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-surface-alt font-serif text-lg font-bold text-primary">
              AR
            </span>
            <span className="hidden font-serif text-[1.6rem] font-bold tracking-tight sm:inline">{brandName}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-primary ${isActive ? 'text-primary' : 'text-ink/80'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-paper transition hover:bg-primary-dark">
              Donate
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex rounded-full border border-border p-2 text-ink lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/digital-empowerment" element={<FlagshipPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border bg-surface-alt/60">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-paper font-serif text-lg font-bold text-primary">
                AR
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-[1.8rem]">{brandName}</span>
            </div>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              We work with compassion and practical purpose to strengthen communities through education, health, digital empowerment, and sustainable care.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-ink">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quick.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-muted transition hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-ink">Programs</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.programs.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-muted transition hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-ink">Contact</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex items-start gap-2"><MapPin size={18} className="mt-1 shrink-0 text-primary" /> <span>{contactDetails.address}</span></li>
              <li className="flex items-center gap-2"><Phone size={18} className="text-primary" /> <span>{contactDetails.phone}</span></li>
              <li className="flex items-center gap-2"><Mail size={18} className="text-primary" /> <span>{contactDetails.email}</span></li>
              <li className="flex items-center gap-2"><Clock3 size={18} className="text-primary" /> <span>{contactDetails.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="page-shell flex flex-col items-center justify-between gap-4 py-5 text-sm text-muted md:flex-row">
            <p>© {currentYear} {brandName}. All rights reserved.</p>
            <div className="flex items-center gap-4 text-ink">
              {socialLinks.map((social) => {
                const Icon = social.label === 'Facebook' ? Globe : social.label === 'Instagram' ? MessageCircle : Users
                return (
                  <a key={social.label} href={social.href} aria-label={social.label} className="rounded-full border border-border bg-paper p-2 transition hover:border-primary hover:text-primary">
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>

      <button
        type="button"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-paper shadow-[0_18px_35px_rgba(15,92,77,0.25)] transition hover:translate-y-[-1px] hover:bg-primary-dark"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={18} />
      </button>

      <div className="page-shell hidden lg:block">
        <div className="float-right mt-[-22px] rounded-full border border-border bg-paper px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-shadow">
          {breadcrumb}
        </div>
      </div>
    </div>
  )
}
