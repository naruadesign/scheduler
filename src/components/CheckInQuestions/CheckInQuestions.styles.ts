import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0 64px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 12px;
`

export const Body = styled.p`
  max-width: 60ch;
  margin: 0 auto 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
