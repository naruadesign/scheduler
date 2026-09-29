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
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`

export const CardLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
