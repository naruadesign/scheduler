import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryBg};
  padding: 40px 0;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 38px;
  }
`

export const Subtitle = styled.p`
  max-width: 60ch;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
`
