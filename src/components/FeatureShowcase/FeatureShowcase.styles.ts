import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryBg};
`

export const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`
