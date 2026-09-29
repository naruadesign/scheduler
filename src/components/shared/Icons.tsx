import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Svg({ children, ...rest }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const ChevronDownIcon = (p: IconProps) => <Svg {...p}><path d="M6 9l6 6 6-6" /></Svg>
export const ChevronLeftIcon = (p: IconProps) => <Svg {...p}><path d="M15 6l-6 6 6 6" /></Svg>
export const ChevronRightIcon = (p: IconProps) => <Svg {...p}><path d="M9 6l6 6-6 6" /></Svg>
export const MenuIcon = (p: IconProps) => <Svg {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Svg>
export const CloseIcon = (p: IconProps) => <Svg {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>
export const SearchIcon = (p: IconProps) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></Svg>
export const PinIcon = (p: IconProps) => <Svg {...p}><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>
export const ClockIcon = (p: IconProps) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>
export const PhoneIcon = (p: IconProps) => <Svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></Svg>
export const StarIcon = (p: IconProps) => (
  <Svg {...p} fill="currentColor" strokeWidth="1"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" /></Svg>
)
export const CheckIcon = (p: IconProps) => <Svg {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></Svg>
export const ScissorsIcon = (p: IconProps) => (
  <Svg {...p}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.1 8.1L20 20M8.1 15.9L20 4" /></Svg>
)
export const PhoneAppIcon = (p: IconProps) => <Svg {...p}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></Svg>
export const NoteIcon = (p: IconProps) => <Svg {...p}><path d="M6 3h9l4 4v14H6z" /><path d="M9 12h7M9 16h7" /></Svg>

export type SocialName = 'Twitter' | 'Facebook' | 'Instagram' | 'YouTube' | 'Pinterest'


export function SocialIcon({ name, ...rest }: { name: SocialName } & IconProps) {
  switch (name) {
    case 'Twitter':
      return <Svg {...rest}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></Svg>
    case 'Facebook':
      return <Svg {...rest}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Svg>
    case 'Instagram':
      return <Svg {...rest}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></Svg>
    case 'YouTube':
      return <Svg {...rest}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><path d="M9.75 15.02l5.75-3.27-5.75-3.27z" /></Svg>
    case 'Pinterest':
      return (
        <Svg {...rest}>
          <circle cx="12" cy="12" r="10" />
          <path d="M10 17l2-9c.3-1.2 2.5-1.3 3 .3.4 1.400-.4 3.700-2.500 3.700" />
        </Svg>
      )
  }
}
