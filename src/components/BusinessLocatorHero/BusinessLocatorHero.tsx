import { Container } from '../shared'
import * as S from './BusinessLocatorHero.styles'

export function BusinessLocatorHero() {
  return (
    <S.Section>
      <Container>
        <S.Title>Find a Business</S.Title>
        <S.Subtitle>
          Search by city or ZIP code to see nearby businesses on Round Check, their current wait times and hours.
        </S.Subtitle>
      </Container>
    </S.Section>
  )
}
