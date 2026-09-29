import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'inverse'

const buttonStyles = css<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 32px;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      &:hover { background: ${theme.colors.primaryHover}; }
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      background: transparent;
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      &:hover { background: ${theme.colors.primaryBg}; }
    `}

  ${({ $variant, theme }) =>
    $variant === 'inverse' &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.primaryDark};
      &:hover { background: ${theme.colors.primaryBg}; }
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const StyledButton = styled.button<{ $variant: ButtonVariant }>`${buttonStyles}`
const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`${buttonStyles}`
const StyledAnchor = styled.a<{ $variant: ButtonVariant }>`${buttonStyles}`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', type = 'button', ...rest }: ButtonProps) {
  return <StyledButton $variant={variant} type={type} {...rest} />
}

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant
}

export function ButtonLink({ variant = 'primary', ...rest }: ButtonLinkProps) {
  return <StyledLink $variant={variant} {...rest} />
}

interface ExternalButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
}

/** A button-styled anchor, for links that leave this app (e.g. placeholder roundcheck.com pages this app hasn't built). */
export function ExternalButtonLink({ variant = 'primary', ...rest }: ExternalButtonLinkProps) {
  return <StyledAnchor $variant={variant} {...rest} />
}
