import styled from 'styled-components'

export const Section = styled.section<{ $tinted: boolean }>`
  padding: 48px 0;
  background: ${({ theme, $tinted }) => ($tinted ? theme.colors.primaryBg : theme.colors.white)};
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 24px;
  text-align: center;
`

export const List = styled.ol`
  display: grid;
  gap: 20px;
  counter-reset: step;
  max-width: 640px;
  margin: 0 auto;
`

export const Step = styled.li`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

export const StepNumber = styled.span`
  flex: 0 0 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
`

export const StepText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  padding-top: 4px;
`
