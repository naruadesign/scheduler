import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 48px 0;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 42px;
  }
`

export const Subtitle = styled.p`
  max-width: 60ch;
  margin: 0 auto 24px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
`
