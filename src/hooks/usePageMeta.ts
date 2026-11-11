import { useEffect } from 'react'
import { pageMeta } from '../data/content'

export function usePageMeta(page: keyof typeof pageMeta) {
  useEffect(() => {
    const meta = pageMeta[page]
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
