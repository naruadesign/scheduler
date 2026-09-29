import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`

export const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const Name = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const CategoryBadge = styled.span`
  align-self: flex-start;
  padding: 2px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.primaryBg};
`

export const WaitBadge = styled.span<{ $busy: boolean }>`
  flex: 0 0 auto;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, $busy }) => ($busy ? theme.colors.orange : theme.colors.primary)};
`

export const InfoRow = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
`
