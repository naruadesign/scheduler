import { Container, SectionHeading } from '../shared'
import { CheckIcon } from '../shared/Icons'
import { serviceBenefits, servicesNote } from '../../data/services'
import * as S from './ServiceBenefits.styles'

export function ServiceBenefits() {
  return (
    <S.Section>
      <Container>
        <SectionHeading title="Why book with Round Check" align="left" />
        <S.Grid>
          {serviceBenefits.map((benefit) => (
            <S.Card key={benefit.title}>
              <S.IconBadge>
                <CheckIcon />
              </S.IconBadge>
              <S.CardTitle>{benefit.title}</S.CardTitle>
              <S.CardDescription>{benefit.description}</S.CardDescription>
            </S.Card>
          ))}
        </S.Grid>
        <S.Note>{servicesNote}</S.Note>
      </Container>
    </S.Section>
  )
}
