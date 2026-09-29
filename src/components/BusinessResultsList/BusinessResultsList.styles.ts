import styled from 'styled-components'

export const Section = styled.section`
  padding: 0 0 64px;
`

export const ResultsMeta = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 16px;
`

export const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const EmptyState = styled.p`
  padding: 32px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.textSecondary};
`
