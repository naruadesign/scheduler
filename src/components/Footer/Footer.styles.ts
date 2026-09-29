import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrap = styled.footer`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 48px 0 0;
`

export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const AppBadges = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

export const AppBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
`

export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
`

export const ColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 32px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
`

export const ColumnLink = styled(Link)`
  display: block;
  padding: 6px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 24px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
`

export const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: underline;
    }
  }
`
