import { ButtonLink } from '../shared'
import { hero } from '../../data/home'
import * as S from './Hero.styles'

export function Hero() {
  return (
    <S.Section>
      <S.Grid>
        <div>
          <S.Tagline>{hero.tagline}</S.Tagline>
          <S.Headline>{hero.headline}</S.Headline>
          <S.Description>{hero.description}</S.Description>
          <ButtonLink to="/online-check-in" variant="primary">
            {hero.cta}
          </ButtonLink>
        </div>
      </S.Grid>
    </S.Section>
  )
}
