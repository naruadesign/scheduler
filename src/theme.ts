export const theme = {
  colors: {
    primary: '#048667',
    primaryHover: '#035a45',
    primaryDark: '#073b3a',
    primaryBg: '#f0f8f6',
    peacock: '#186e89',
    orange: '#cb4e13',
    black: '#000000',
    white: '#ffffff',
    text: '#222222',
    textSecondary: '#545454',
    border: '#c5c8cc',
    borderLight: '#f2f2f2',
    grey: '#f2f2f2',
    star: '#f5a623',
  },
  fonts: {
    body: "'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  radii: {
    sm: '8px',
    md: '16px',
    pill: '999px',
  },
  shadows: {
    card: '0 4px 16px rgba(0, 0, 0, 0.12)',
    menu: '0 8px 24px rgba(34, 47, 62, 0.15)',
  },
  layout: {
    maxWidth: '1200px',
    headerHeight: '72px',
  },
}

export type AppTheme = typeof theme
