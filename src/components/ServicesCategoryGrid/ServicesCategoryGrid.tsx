import { Container, ButtonLink } from '../shared'
import { servicesCategories } from '../../data/services'
import * as S from './ServicesCategoryGrid.styles'

export function ServicesCategoryGrid() {
  return (
    <S.Section>
      <Container>
        <S.Grid role="list">
          {servicesCategories.map((category) => (
            <S.Card key={category.title} role="listitem">
              <S.CardTitle>{category.title}</S.CardTitle>
              <S.CardDescription>{category.description}</S.CardDescription>
              <ButtonLink to="/online-check-in" variant="secondary">
                {category.linkLabel}
              </ButtonLink>
            </S.Card>
          ))}
        </S.Grid>
      </Container>
    </S.Section>
  )
}
