import { Container } from '../shared'
import { BusinessCard } from '../BusinessCard'
import type { Business } from '../../data/businesses'
import * as S from './BusinessResultsList.styles'

interface BusinessResultsListProps {
  businesses: Business[]
  query: string
}

export function BusinessResultsList({ businesses, query }: BusinessResultsListProps) {
  return (
    <S.Section>
      <Container>
        <S.ResultsMeta aria-live="polite">
          {businesses.length} business{businesses.length === 1 ? '' : 'es'} found{query ? ` for "${query}"` : ' near you'}
        </S.ResultsMeta>
        {businesses.length === 0 ? (
          <S.EmptyState>No businesses matched your search. Try a different city, state or ZIP code.</S.EmptyState>
        ) : (
          <S.Grid role="list">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </S.Grid>
        )}
      </Container>
    </S.Section>
  )
}
