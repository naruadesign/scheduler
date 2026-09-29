import { useEffect, useRef, useState } from 'react'
import { Container, Button, ButtonLink } from '../shared'
import { ChevronDownIcon, MenuIcon, CloseIcon } from '../shared/Icons'
import { navGroups, secondaryLinks } from '../../data/navigation'
import * as S from './Header.styles'

function isExternal(to: string) {
  return to.startsWith('http')
}

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const [user, setUser] = useState<{name:string} | null>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenGroup(null)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenGroup(null)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <S.Bar>
      <Container>
        <S.Inner>
          <S.LogoLink to="/" aria-label="Round Check home">
            Round<span>Check</span>
          </S.LogoLink>

          <S.DesktopNav ref={navRef} aria-label="Primary">
            {navGroups.map((group) => (
              <S.NavGroupWrapper key={group.label}>
                <S.NavGroupButton
                  type="button"
                  $open={openGroup === group.label}
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup((current) => (current === group.label ? null : group.label))}
                >
                  {group.label}
                  <ChevronDownIcon width={16} height={16} />
                </S.NavGroupButton>
                {openGroup === group.label && (
                  <S.Dropdown role="menu">
                    {group.items.map((item) => (
                      <S.DropdownLink
                        key={item.label}
                        to={item.to}
                        role="menuitem"
                        target={isExternal(item.to) ? '_blank' : undefined}
                        rel={isExternal(item.to) ? 'noreferrer' : undefined}
                        onClick={() => setOpenGroup(null)}
                      >
                        {item.label}
                      </S.DropdownLink>
                    ))}
                  </S.Dropdown>
                )}
              </S.NavGroupWrapper>
            ))}
            {secondaryLinks.map((link) => (
              <S.NavSecondaryLink
                key={link.label}
                to={link.to}
                target={isExternal(link.to) ? '_blank' : undefined}
                rel={isExternal(link.to) ? 'noreferrer' : undefined}
              >
                {link.label}
              </S.NavSecondaryLink>
            ))}
          </S.DesktopNav>

          <S.Actions>
            {user ? 
              <span>Welcome {user.name}!</span>
              :
              <button onClick={() => setUser({"name":"Hawckins"})}>Log In</button>
            }
            <ButtonLink to="/find-a-business" variant="primary">Find a Business</ButtonLink>
          </S.Actions>

          <S.MenuToggle
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </S.MenuToggle>
        </S.Inner>

        <S.MobilePanel $open={mobileOpen} id="mobile-nav">
          {navGroups.map((group) => (
            <div key={group.label}>
              <S.MobileGroupHeading>{group.label}</S.MobileGroupHeading>
              {group.items.map((item) => (
                <S.MobileLink
                  key={item.label}
                  to={item.to}
                  target={isExternal(item.to) ? '_blank' : undefined}
                  rel={isExternal(item.to) ? 'noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </S.MobileLink>
              ))}
            </div>
          ))}
          <S.MobileGroupHeading>More</S.MobileGroupHeading>
          {secondaryLinks.map((link) => (
            <S.MobileLink
              key={link.label}
              to={link.to}
              target={isExternal(link.to) ? '_blank' : undefined}
              rel={isExternal(link.to) ? 'noreferrer' : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </S.MobileLink>
          ))}
          <S.MobileActions>
            <Button variant="secondary" onClick={() => setMobileOpen(false)}>Sign In</Button>
            <ButtonLink to="/find-a-business" variant="primary" onClick={() => setMobileOpen(false)}>
              Find a Business
            </ButtonLink>
          </S.MobileActions>
        </S.MobilePanel>
      </Container>
    </S.Bar>
  )
}
