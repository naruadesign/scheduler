import { useEffect, useMemo, useState } from 'react'
import { BusinessLocatorHero } from '../components/BusinessLocatorHero'
import { BusinessSearchForm } from '../components/BusinessSearchForm'
import { BusinessResultsList } from '../components/BusinessResultsList'
import { businesses } from '../data/businesses'

export function BusinessLocatorPage() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = 'Find a Business | Round Check'
  }, [])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return businesses
    return businesses.filter((business) =>
      [business.city, business.state, business.zip].some((field) => field.toLowerCase().includes(term)),
    )
  }, [query])

  return (
    <>
      <BusinessLocatorHero />
      <BusinessSearchForm onSearch={setQuery} />
      <BusinessResultsList businesses={results} query={query} />
    </>
  )
}
