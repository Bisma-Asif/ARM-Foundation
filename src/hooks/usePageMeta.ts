import { useEffect } from 'react'
import { pageMeta } from '../data/content'

export function usePageMeta(page: keyof typeof pageMeta | string) {
  useEffect(() => {
    const normalizedPage = page in pageMeta ? page : page.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase())
    const meta = pageMeta[normalizedPage as keyof typeof pageMeta]

    if (!meta) {
      return
    }

    document.title = meta.title

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', meta.description)
  }, [page])
}
