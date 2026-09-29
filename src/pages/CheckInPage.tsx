import { useEffect } from 'react'
import { CheckInHero } from '../components/CheckInHero'
import { CheckInIntro } from '../components/CheckInIntro'
import { CheckInSteps } from '../components/CheckInSteps'
import { CheckInQuestions } from '../components/CheckInQuestions'
import { websiteSteps, appSteps } from '../data/checkIn'

export function CheckInPage() {
  useEffect(() => {
    document.title = 'Online Check-In | Round Check'
  }, [])

  return (
    <>
      <CheckInHero />
      <CheckInIntro />
      <CheckInSteps title={websiteSteps.title} steps={websiteSteps.steps} />
      <CheckInSteps title={appSteps.title} steps={appSteps.steps} tinted />
      <CheckInQuestions />
    </>
  )
}
