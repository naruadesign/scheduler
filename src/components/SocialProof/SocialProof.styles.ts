import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 48px 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto 1fr auto;
    text-align: left;
  }
`

export const StatBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`

export const StatNumber = styled.p`
  font-size: 40px;
  font-weight: 800;
`

export const StatLabel = styled.p`
  max-width: 220px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
`

export const StatFootnote = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }
`

export const Subheading = styled.p`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.85);
`
