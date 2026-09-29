import { Container, ExternalButtonLink } from '../shared'
import { checkInQuestions } from '../../data/checkIn'
import * as S from './CheckInQuestions.styles'

export function CheckInQuestions() {
  return (
    <S.Section>
      <Container>
        <S.Title>{checkInQuestions.title}</S.Title>
        <S.Body>{checkInQuestions.body}</S.Body>
        <ExternalButtonLink href={checkInQuestions.to} target="_blank" rel="noreferrer" variant="secondary">
          {checkInQuestions.cta}
        </ExternalButtonLink>
      </Container>
    </S.Section>
  )
}
