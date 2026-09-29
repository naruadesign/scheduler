import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryBg};
  padding: 48px 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Eyebrow = styled.p`
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`

export const Heading = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 12px;
`

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const Field = styled.div`
  flex: 1;
`

export const Input = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.orange};
  }
`

export const ErrorText = styled.p`
  margin-top: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.orange};
`

export const SuccessText = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

export const Badges = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`

export const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
`
