import styled from 'styled-components'

export const Section = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryBg}, ${({ theme }) => theme.colors.white});
  padding: 40px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 72px 0;
  }
`

export const Grid = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0px 32px;
  }
`

export const Tagline = styled.p`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

export const Headline = styled.h1`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 44px;
  }
`

export const Description = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
  max-width: 44ch;
`
