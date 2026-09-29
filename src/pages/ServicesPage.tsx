import { useEffect } from 'react'
import { ServicesHero } from '../components/ServicesHero'
import { ServicesCategoryGrid } from '../components/ServicesCategoryGrid'
import { PopularServicesCarousel } from '../components/PopularServicesCarousel'
import { ServiceBenefits } from '../components/ServiceBenefits'

export function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | Round Check'
  }, [])

  return (
    <>
      <ServicesHero />
      <ServicesCategoryGrid />
      <PopularServicesCarousel />
      <ServiceBenefits />
    </>
  )
}
