import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container, SectionHeading } from '../shared'
import { ChevronLeftIcon, ChevronRightIcon } from '../shared/Icons'
import { businessCategories } from '../../data/home'
import * as S from './ServiceCategories.styles'

export function ServiceCategories() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollBy(amount: number) {
    trackRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <S.Section>
      <Container>
        <SectionHeading
          title="GREAT® appointments for every need"
          subtitle="Find and book the right business for whatever you need, whenever you need it."
        />
        <S.Track ref={trackRef} role="list" aria-label="Business categories">
          {businessCategories.map((category) => (
            <S.Card key={category.title} role="listitem">
              <S.CardTitle>{category.title}</S.CardTitle>
              <S.CardDescription>{category.description}</S.CardDescription>
              <S.CardLink as={Link} to={category.to}>
                {category.linkLabel}
              </S.CardLink>
            </S.Card>
          ))}
        </S.Track>
        <S.Controls>
          <S.ControlButton type="button" aria-label="Scroll left" onClick={() => scrollBy(-240)}>
            <ChevronLeftIcon />
          </S.ControlButton>
          <S.ControlButton type="button" aria-label="Scroll right" onClick={() => scrollBy(240)}>
            <ChevronRightIcon />
          </S.ControlButton>
        </S.Controls>
      </Container>
    </S.Section>
  )
}
