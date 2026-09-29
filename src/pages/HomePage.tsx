import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { ServiceCategories } from '../components/ServiceCategories'
import { SocialProof } from '../components/SocialProof'
import { FeatureShowcase } from '../components/FeatureShowcase'
import { AppDownload } from '../components/AppDownload'
import { GreatNews } from '../components/GreatNews'

export function HomePage() {
  useEffect(() => {
    document.title = 'Book Appointments Near Me | Check In Online | Round Check'
  }, [])

  return (
    <>
      <Hero />
      <ServiceCategories />
      <SocialProof />
      <FeatureShowcase />
      <AppDownload />
      <GreatNews />
    </>
  )
}
