export interface NavLinkItem {
  label: string
  to: string
  /** true for links that leave this app (placeholder roundcheck.com pages this app hasn't built — that domain does not resolve) */
  external?: boolean
}

export interface NavGroup {
  label: string
  items: NavLinkItem[]
}

const SITE = 'https://www.roundcheck.com'

export const navGroups: NavGroup[] = [
  {
    label: 'Services',
    items: [
      { label: 'Services Overview', to: '/services' },
      { label: 'Health & Wellness', to: `${SITE}/services/health-and-wellness`, external: true },
      { label: 'Home Services', to: `${SITE}/services/home-services`, external: true },
      { label: 'Personal Care', to: `${SITE}/services/personal-care`, external: true },
      { label: 'Fitness & Recreation', to: `${SITE}/services/fitness-and-recreation`, external: true },
      { label: 'Professional Services', to: `${SITE}/services/professional-services`, external: true },
      { label: 'Online Check-In', to: '/online-check-in' },
      { label: 'Round Check App', to: `${SITE}/round-check-app`, external: true },
      { label: 'Client Notes', to: `${SITE}/client-notes`, external: true },
      { label: 'Blog', to: `${SITE}/blog`, external: true },
    ],
  },
]

export const secondaryLinks: NavLinkItem[] = [
  { label: 'Careers', to: 'https://jobs.roundcheck.com', external: true },
  { label: 'List Your Business', to: `${SITE}/list-your-business`, external: true },
]

export interface FooterColumn {
  title: string
  links: NavLinkItem[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'About',
    links: [
      { label: 'Overview', to: `${SITE}/about-us`, external: true },
      { label: 'Leadership', to: `${SITE}/about-us`, external: true },
      { label: 'Blog', to: `${SITE}/blog`, external: true },
      { label: 'Giving', to: `${SITE}/about-us`, external: true },
      { label: 'Latest News', to: `${SITE}/about-us`, external: true },
    ],
  },
  {
    title: 'Opportunities',
    links: [
      { label: 'Careers', to: 'https://jobs.roundcheck.com', external: true },
      { label: 'List Your Business', to: `${SITE}/list-your-business`, external: true },
      { label: 'Corporate Careers', to: `${SITE}/careers`, external: true },
      { label: 'Real Estate', to: `${SITE}/real-estate`, external: true },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Customer Service', to: `${SITE}/customer-service`, external: true },
      { label: 'Check Gift Card Balance', to: `${SITE}/gift-cards`, external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Use', to: `${SITE}/terms-of-use`, external: true },
      { label: 'Privacy Notice', to: `${SITE}/privacy-notice`, external: true },
      { label: 'Accessibility Notice', to: `${SITE}/accessibility-notice`, external: true },
      { label: 'Your Privacy Choices', to: `${SITE}/privacy-notice`, external: true },
      { label: 'Gift Card Terms & Conditions', to: `${SITE}/gift-cards`, external: true },
    ],
  },
]

export const legalBarLinks: NavLinkItem[] = [
  { label: 'Customer Service', to: `${SITE}/customer-service`, external: true },
  { label: 'Terms of Use', to: `${SITE}/terms-of-use`, external: true },
  { label: 'Privacy Notice', to: `${SITE}/privacy-notice`, external: true },
  { label: 'Accessibility Notice', to: `${SITE}/accessibility-notice`, external: true },
  { label: 'Your Privacy Choices', to: `${SITE}/privacy-notice`, external: true },
  { label: 'Gift Card Terms & Conditions', to: `${SITE}/gift-cards`, external: true },
]

export const socialLinks = [
  { name: 'Twitter', to: 'https://twitter.com/roundcheck' },
  { name: 'Facebook', to: 'https://www.facebook.com/RoundCheck' },
  { name: 'Instagram', to: 'https://www.instagram.com/roundcheck' },
  { name: 'YouTube', to: 'https://www.youtube.com/roundcheck' },
  { name: 'Pinterest', to: 'https://www.pinterest.com/roundcheck' },
] as const
