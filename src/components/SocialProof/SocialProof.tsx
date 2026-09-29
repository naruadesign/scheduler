import { Container, ButtonLink } from '../shared'
import { StarIcon } from '../shared/Icons'
import { reviews } from '../../data/home'
import * as S from './SocialProof.styles'

export function SocialProof() {
  return (
    <S.Section>
      <Container>
        <S.Grid>
          <S.StatBlock>
            <StarIcon width={40} height={40} color="#f5a623" />
            <div>
              <S.StatNumber>{reviews.stat}</S.StatNumber>
              <S.StatLabel>{reviews.statLabel}</S.StatLabel>
              <S.StatFootnote>{reviews.asOf}</S.StatFootnote>
            </div>
          </S.StatBlock>
          <div>
            <S.Heading>{reviews.title}</S.Heading>
            <S.Subheading>{reviews.subtitle}</S.Subheading>
          </div>
          <ButtonLink to="/find-a-business" variant="inverse">
            {reviews.cta}
          </ButtonLink>
        </S.Grid>
      </Container>
    </S.Section>
  )
}
