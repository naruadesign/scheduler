import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 32px;
  }
`
