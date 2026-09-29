import { Container } from '../shared'
import { SocialIcon } from '../shared/Icons'
import { footerColumns, legalBarLinks, socialLinks } from '../../data/navigation'
import * as S from './Footer.styles'

const appBadges = [
  { label: 'Download on the App Store', href: 'https://apps.apple.com' },
  { label: 'Get it on Google Play', href: 'https://play.google.com' },
]

export function Footer() {
  return (
    <S.Wrap>
      <Container>
        <S.TopRow>
          <S.AppBadges>
            {appBadges.map((badge) => (
              <S.AppBadge key={badge.label} href={badge.href} target="_blank" rel="noreferrer">
                {badge.label}
              </S.AppBadge>
            ))}
          </S.AppBadges>
          <S.SocialRow aria-label="Round Check on social media">
            {socialLinks.map((social) => (
              <S.SocialLink key={social.name} href={social.to} target="_blank" rel="noreferrer" aria-label={social.name}>
                <SocialIcon name={social.name} />
              </S.SocialLink>
            ))}
          </S.SocialRow>
        </S.TopRow>

        <S.ColumnsGrid>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <S.ColumnTitle>{column.title}</S.ColumnTitle>
              {column.links.map((link) => (
                <S.ColumnLink
                  key={link.label}
                  to={link.to}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  {link.label}
                </S.ColumnLink>
              ))}
            </div>
          ))}
        </S.ColumnsGrid>

        <S.BottomBar>
          <span>&copy; {new Date().getFullYear()} Round Check, Inc. All rights reserved.</span>
          <S.LegalLinks>
            {legalBarLinks.map((link) => (
              <a key={link.label} href={link.to} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </S.LegalLinks>
        </S.BottomBar>
      </Container>
    </S.Wrap>
  )
}
