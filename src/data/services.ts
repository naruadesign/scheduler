export const servicesHero = {
  title: 'Get ready to book something GREAT®',
  subtitle: "From personal care to home repairs, wellness to fitness, Round Check has a business ready to book for whatever you need.",
  cta: 'Find businesses near me',
}

export const servicesCategories = [
  { title: 'Health & Wellness', description: 'Doctors, therapists, dentists and other health professionals ready to book.', linkLabel: 'Show me', tone: 'green' },
  { title: 'Home Services', description: 'Cleaning, repairs, landscaping and everything else your home needs.', linkLabel: 'Show me', tone: 'blue' },
  { title: 'Personal Care', description: 'Grooming, spa treatments and everyday self-care, all bookable in a few taps.', linkLabel: 'Show me', tone: 'green' },
  { title: 'Fitness & Recreation', description: 'Trainers, classes and coaching sessions to help you reach your goals.', linkLabel: 'Show me', tone: 'blue' },
  { title: 'Professional Services', description: 'Consultants, advisors and other experts for whatever project comes up.', linkLabel: 'Learn more', tone: 'grey' },
] as const

export interface PopularService {
  name: string
  tags: [string, string, string]
}

export const popularServices: PopularService[] = [
  { name: 'Dental Checkup', tags: ['routine', 'preventive', 'trusted'] },
  { name: 'House Cleaning', tags: ['flexible', 'recurring', 'thorough'] },
  { name: 'Personal Training Session', tags: ['energizing', 'one-on-one', 'goal-focused'] },
  { name: 'Massage Therapy', tags: ['relaxing', 'therapeutic', 'popular'] },
  { name: 'Tax Consultation', tags: ['seasonal', 'expert', 'reliable'] },
  { name: 'Dog Grooming', tags: ['gentle', 'quick', 'convenient'] },
  { name: 'Yoga Class', tags: ['calming', 'in-person', 'beginner-friendly'] },
  { name: 'Legal Consultation', tags: ['confidential', 'expert', 'by appointment'] },
  { name: 'Car Detailing', tags: ['thorough', 'convenient', 'affordable'] },
  { name: 'Physical Therapy', tags: ['restorative', 'guided', 'ongoing'] },
  { name: 'Financial Planning', tags: ['personalized', 'long-term', 'expert'] },
  { name: 'Photography Session', tags: ['creative', 'memorable', 'flexible'] },
  { name: 'Tutoring Session', tags: ['patient', 'one-on-one', 'subject-focused'] },
  { name: 'Interior Design Consultation', tags: ['creative', 'personalized', 'inspiring'] },
  { name: 'Life Coaching', tags: ['supportive', 'goal-focused', 'ongoing'] },
  { name: 'Home Repair Visit', tags: ['reliable', 'skilled', 'on-time'] },
]

export const serviceBenefits = [
  { title: 'Pre-appointment consultations', description: 'Talk through what you need with a specialist before your appointment.' },
  { title: 'Client Notes', description: 'Store your preferences in a profile so every visit with any business starts off right.' },
  { title: 'Consistent results', description: "Feel confident that you'll get consistent, quality service from any Round Check business, every time." },
]

export const servicesNote = 'Round Check does not list prices on its services pages, so none are shown here. Check with your local business for pricing.'
