import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0;
`

export const Track = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }
`

export const Card = styled.article`
  flex: 0 0 220px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`

export const CardLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`
