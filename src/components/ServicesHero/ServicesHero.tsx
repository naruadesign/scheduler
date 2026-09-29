import { Container, ButtonLink } from '../shared'
import { servicesHero } from '../../data/services'
import * as S from './ServicesHero.styles'

export function ServicesHero() {
  return (
    <S.Section>
      <Container>
        <S.Title>{servicesHero.title}</S.Title>
        <S.Subtitle>{servicesHero.subtitle}</S.Subtitle>
        <ButtonLink to="/find-a-business" variant="primary">
          {servicesHero.cta}
        </ButtonLink>
      </Container>
    </S.Section>
  )
}
