import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

export function renderWithProviders(ui: ReactElement, route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MemoryRouter>,
  )
}
