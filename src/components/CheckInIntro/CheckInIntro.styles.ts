import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 16px;
`

export const Body = styled.p`
  max-width: 65ch;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
`
