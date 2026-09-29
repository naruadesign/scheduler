import { ButtonLink, Button } from '../shared'
import { ClockIcon, PhoneIcon, PinIcon } from '../shared/Icons'
import type { Business } from '../../data/businesses'
import * as S from './BusinessCard.styles'

interface BusinessCardProps {
  business: Business
}

export function BusinessCard({ business }: BusinessCardProps) {
  const busy = business.waitMinutes >= 30

  return (
    <S.Card>
      <S.TopRow>
        <div>
          <S.Name>{business.name}</S.Name>
          <S.CategoryBadge>{business.category}</S.CategoryBadge>
        </div>
        <S.WaitBadge $busy={busy}>{business.waitMinutes} min wait</S.WaitBadge>
      </S.TopRow>
      <S.InfoRow>
        <PinIcon width={16} height={16} />
        {business.address}, {business.city}, {business.state} {business.zip}
      </S.InfoRow>
      <S.InfoRow>
        <ClockIcon width={16} height={16} />
        {business.hours}
      </S.InfoRow>
      <S.InfoRow>
        <PhoneIcon width={16} height={16} />
        {business.phone}
      </S.InfoRow>
      <S.Actions>
        <ButtonLink to="/online-check-in" variant="primary">Check In</ButtonLink>
        <Button variant="secondary" type="button">Get Directions</Button>
      </S.Actions>
    </S.Card>
  )
}
