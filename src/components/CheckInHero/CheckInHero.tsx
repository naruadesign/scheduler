import { Container, ButtonLink } from '../shared'
import { checkInHero } from '../../data/checkIn'
import * as S from './CheckInHero.styles'

export function CheckInHero() {
  return (
    <S.Section>
      <Container>
        <S.Title>{checkInHero.title}</S.Title>
        <S.Subtitle>{checkInHero.subtitle}</S.Subtitle>
        <ButtonLink to="/find-a-business" variant="inverse">
          {checkInHero.cta}
        </ButtonLink>
      </Container>
    </S.Section>
  )
}
