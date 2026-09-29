import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.article`
  padding: 20px;
`

export const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`

export const Note = styled.p`
  margin-top: 32px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.borderLight};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
