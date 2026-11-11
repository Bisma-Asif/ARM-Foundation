import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { galleryItems } from '../data/content'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const categories = ['All', 'Education', 'Health', 'Women', 'Technology', 'Environment', 'Food', 'Community Support', 'Livelihoods']

export function GalleryPage() {
  usePageMeta('gallery')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? null : (current + 1) % filteredGallery.length)
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? null : (current - 1 + filteredGallery.length) % filteredGallery.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, filteredGallery.length])

  const selectedImage = activeIndex === null ? null : filteredGallery[activeIndex]

  return (
    <div className="page-shell py-10">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">Gallery</p>
        <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">Moments of care, learning, and change</h1>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              selectedCategory === category ? 'border-primary bg-primary text-paper' : 'border-border bg-paper text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
        {filteredGallery.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-5 block w-full overflow-hidden rounded-[2rem] border border-border bg-surface-alt text-left"
            aria-label={`Open ${item.title}`}
          >
            <img src={images[item.image as keyof typeof images]} alt={item.title} className="w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">{item.category}</p>
              <p className="mt-2 font-serif text-2xl text-ink">{item.title}</p>
            </div>
          </button>
        ))}
      </section>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f1d1a]/80 p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-paper">
            <button type="button" aria-label="Close gallery" onClick={() => setActiveIndex(null)} className="absolute right-4 top-4 z-10 rounded-full border border-border bg-paper/90 p-2 text-ink">
              <X size={18} />
            </button>
            <img src={images[selectedImage.image as keyof typeof images]} alt={selectedImage.title} className="max-h-[72vh] w-full object-cover" />
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">{selectedImage.category}</p>
                <p className="mt-2 font-serif text-3xl text-ink">{selectedImage.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous image" onClick={() => setActiveIndex((current) => current === null ? null : (current - 1 + filteredGallery.length) % filteredGallery.length)} className="rounded-full border border-border p-2">
                  <ArrowLeft size={18} />
                </button>
                <button type="button" aria-label="Next image" onClick={() => setActiveIndex((current) => current === null ? null : (current + 1) % filteredGallery.length)} className="rounded-full border border-border p-2">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
