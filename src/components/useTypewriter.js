import { useEffect, useState } from 'react'

export default function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(words[0]); return }
    const word = words[index]
    let delay = deleting ? 35 : 80
    if (!deleting && text === word) delay = 1400
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') { setDeleting(false); setIndex((index + 1) % words.length) }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return text
}
