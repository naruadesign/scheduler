import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol, figure {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    list-style: none;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
  }

  button, input {
    font: inherit;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.peacock};
    outline-offset: 2px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sr-only:focus {
    position: fixed;
    top: 8px;
    left: 8px;
    width: auto;
    height: auto;
    padding: 12px 20px;
    margin: 0;
    clip: auto;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryDark};
    border-radius: ${({ theme }) => theme.radii.sm};
    z-index: 1000;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`
