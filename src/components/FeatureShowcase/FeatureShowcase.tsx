import { Container, SectionHeading, ButtonLink } from '../shared'
import { ClockIcon, NoteIcon } from '../shared/Icons'
import { features } from '../../data/home'
import * as S from './FeatureShowcase.styles'

const icons = [ClockIcon, NoteIcon]

export function FeatureShowcase() {
  return (
    <S.Section>
      <Container>
        <SectionHeading title={features.title} subtitle={features.subtitle} />
        <S.Grid>
          {features.slides.map((slide, index) => {
            const Icon = icons[index % icons.length]
            return (
              <S.Card key={slide.title}>
                <S.IconBadge>
                  <Icon />
                </S.IconBadge>
                <S.CardTitle>{slide.title}</S.CardTitle>
                <S.CardDescription>{slide.description}</S.CardDescription>
                <ButtonLink to={slide.to} variant="secondary">
                  {slide.cta}
                </ButtonLink>
              </S.Card>
            )
          })}
        </S.Grid>
      </Container>
    </S.Section>
  )
}
