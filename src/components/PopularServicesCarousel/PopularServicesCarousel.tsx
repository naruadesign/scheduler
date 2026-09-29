import { useRef } from 'react'
import { Container, SectionHeading } from '../shared'
import { ChevronLeftIcon, ChevronRightIcon } from '../shared/Icons'
import { popularServices } from '../../data/services'
import * as S from './PopularServicesCarousel.styles'

export function PopularServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollBy(amount: number) {
    trackRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <S.Section>
      <Container>
        <SectionHeading
          title="Popular services to book"
          subtitle="A look at some of the appointments people book on Round Check every day."
          align="left"
        />
        <S.Track ref={trackRef} role="list" aria-label="Popular services">
          {popularServices.map((service) => (
            <S.Card key={service.name} role="listitem">
              <S.CardTitle>{service.name}</S.CardTitle>
              <S.Tags>
                {service.tags.map((tag) => (
                  <S.Tag key={tag}>{tag}</S.Tag>
                ))}
              </S.Tags>
            </S.Card>
          ))}
        </S.Track>
        <S.Controls>
          <S.ControlButton type="button" aria-label="Scroll left" onClick={() => scrollBy(-200)}>
            <ChevronLeftIcon />
          </S.ControlButton>
          <S.ControlButton type="button" aria-label="Scroll right" onClick={() => scrollBy(200)}>
            <ChevronRightIcon />
          </S.ControlButton>
        </S.Controls>
      </Container>
    </S.Section>
  )
}
