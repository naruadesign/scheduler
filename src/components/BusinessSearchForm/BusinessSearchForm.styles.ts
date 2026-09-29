import styled from 'styled-components'

export const Section = styled.section`
  padding: 32px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`

export const InputWrap = styled.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const Input = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 12px 16px 12px 44px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const HelperText = styled.p`
  margin-top: 12px;
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
