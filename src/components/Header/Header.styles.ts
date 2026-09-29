import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: ${({ theme }) => theme.layout.headerHeight};
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 800;
  font-size: 20px;
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 4px;
  flex: 1;
  margin: 0 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`

export const NavGroupWrapper = styled.div`
  position: relative;
`

export const NavGroupButton = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }

  svg {
    transition: transform 0.15s ease;
    transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  }
`

export const NavSecondaryLink = styled(Link)`
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 260px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ theme }) => theme.shadows.menu};
  padding: 8px;
`

export const DropdownLink = styled(Link)`
  display: block;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }
`

export const Actions = styled.div`
  display: none;
  align-items: center;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`

export const LogInLink = styled(Link)`
  padding: 10px 16px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`

export const MenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const MobilePanel = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const MobileGroupHeading = styled.p`
  margin-top: 16px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const MobileLink = styled(Link)`
  display: block;
  padding: 8px 0;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`

export const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`
