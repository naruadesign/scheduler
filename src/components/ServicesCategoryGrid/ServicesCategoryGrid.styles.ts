import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  flex: 1;
`
