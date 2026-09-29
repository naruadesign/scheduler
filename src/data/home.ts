export const hero = {
  tagline: 'Book it. Show up. Get it done.',
  headline: 'Booking an appointment is easier with Online Check-In',
  description: 'Find a business near you and add your name to the waitlist from anywhere.',
  cta: 'Check in',
}

export interface BusinessCategory {
  title: string
  description: string
  linkLabel: string
  to: string
  tone: 'green' | 'blue' | 'grey'
}

export const businessCategories: BusinessCategory[] = [
  { title: 'Health & Wellness', description: 'Doctors, therapists, dentists and more.', linkLabel: 'Show me', to: '/services', tone: 'green' },
  { title: 'Home Services', description: 'Cleaning, repairs, landscaping and more.', linkLabel: 'Show me', to: '/services', tone: 'blue' },
  { title: 'Personal Care', description: 'Grooming, spa treatments and everyday care.', linkLabel: 'Show me', to: '/services', tone: 'green' },
  { title: 'Fitness & Recreation', description: 'Trainers, classes and coaching sessions.', linkLabel: 'Show me', to: '/services', tone: 'blue' },
  { title: 'Professional Services', description: 'Consultants, advisors and other experts.', linkLabel: 'Learn more', to: '/services', tone: 'grey' },
]

export const reviews = {
  stat: '870k+',
  statLabel: '5 star reviews on Google across all Round Check businesses',
  asOf: 'as of 08/01/2026',
  title: 'Experience the Round Check difference',
  subtitle: 'See why customers love booking with us!',
  cta: 'Find a Business',
}

export interface FeatureSlide {
  title: string
  description: string
  cta: string
  to: string
}

export const features = {
  title: 'A GREAT® appointment every time, on your schedule',
  subtitle: 'Book the appointment you need with a business that fits into your busy life.',
  slides: [
    {
      title: 'Online Check-In',
      description: 'Make the most of your time with Online Check-In—which lets you reserve your spot in line from anywhere.',
      cta: 'Check in',
      to: '/find-a-business',
    },
    {
      title: 'Client Notes',
      description: "Feel confident that you'll get the same great service from any Round Check business, every time.",
      cta: 'Learn more',
      to: '/services',
    },
  ] satisfies FeatureSlide[],
}

export const appDownload = {
  title: 'DOWNLOAD THE APP',
  subtitle: "Quick and easy check-in when you're on the go",
  body: 'Spend less time waiting and more time on what matters to you. With the Round Check app, you can check in with just a few taps, see business wait times and more.',
  emailLabel: 'Email Address',
  emailError: 'Please enter a valid email address.',
  success: 'Your email has been sent.',
}

export const greatNews = [
  { title: 'Own something great', description: "Discover what partnership looks like with a growing appointment booking platform.", linkLabel: 'Learn about partnering', to: 'https://www.roundcheck.com/partner-with-us', tone: 'green' },
  { title: 'Find your next great business', description: "From personal care to home services, explore businesses ready to book near you.", linkLabel: 'Browse businesses', to: 'https://www.roundcheck.com/find-a-business', tone: 'blue' },
  { title: 'Work greatly', description: 'Grow your career with Round Check, whether that\'s in operations, support or as a business partner.', linkLabel: 'Learn more', to: 'https://jobs.roundcheck.com', tone: 'grey' },
] as const

export const greatNewsHeading = 'Great news'
