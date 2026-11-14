import { useEffect } from 'react'

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title ? `${title} | Ghiro A. Geronimo` : 'Ghiro A. Geronimo | Frontend Developer'
  }, [title])
  return null
}
