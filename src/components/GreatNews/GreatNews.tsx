import { Container, SectionHeading } from '../shared'
import { greatNews, greatNewsHeading } from '../../data/home'
import * as S from './GreatNews.styles'

export function GreatNews() {
  return (
    <S.Section>
      <Container>
        <SectionHeading title={greatNewsHeading} align="left" />
        <S.Grid>
          {greatNews.map((item) => (
            <S.Card key={item.title}>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardDescription>{item.description}</S.CardDescription>
              <S.CardLink href={item.to} target="_blank" rel="noreferrer">
                {item.linkLabel}
              </S.CardLink>
            </S.Card>
          ))}
        </S.Grid>
      </Container>
    </S.Section>
  )
}
