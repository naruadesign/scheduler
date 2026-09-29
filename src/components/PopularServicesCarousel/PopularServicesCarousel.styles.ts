import styled from 'styled-components'

export const Section = styled.section`
  padding: 48px 0;
  background: ${({ theme }) => theme.colors.primaryBg};
`

export const Track = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
`

export const Card = styled.article`
  flex: 0 0 180px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Tag = styled.li`
  font-size: 11px;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-transform: capitalize;
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
`
