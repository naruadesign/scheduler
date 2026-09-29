import { Container } from '../shared'
import { checkInIntro } from '../../data/checkIn'
import * as S from './CheckInIntro.styles'

export function CheckInIntro() {
  return (
    <S.Section>
      <Container>
        <S.Title>{checkInIntro.title}</S.Title>
        <S.Body>{checkInIntro.body}</S.Body>
      </Container>
    </S.Section>
  )
}
