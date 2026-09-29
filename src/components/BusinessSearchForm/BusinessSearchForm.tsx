import { useState, type FormEvent } from 'react'
import { Button } from '../shared'
import { SearchIcon } from '../shared/Icons'
import * as S from './BusinessSearchForm.styles'

interface BusinessSearchFormProps {
  onSearch: (query: string) => void
}

export function BusinessSearchForm({ onSearch }: BusinessSearchFormProps) {
  const [query, setQuery] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(query.trim())
  }

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit} role="search">
        <S.InputWrap>
          <SearchIcon width={18} height={18} />
          <S.Input
            type="text"
            placeholder="City or ZIP code"
            aria-label="City or ZIP code"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </S.InputWrap>
        <Button type="submit" variant="primary">Search</Button>
      </S.Form>
      <S.HelperText>Sample data for demonstration — try "Austin", "Seattle" or "55401".</S.HelperText>
    </S.Section>
  )
}
