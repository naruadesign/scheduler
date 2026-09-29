import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { Header } from './Header'

// The desktop nav and actions are shown via a CSS media query, which jsdom's
// computed-style engine does not evaluate. `hidden: true` includes them so
// their content and behavior can still be tested.

describe('Header', () => {
  it('renders the logo and primary actions', () => {
    renderWithProviders(<Header />)
    expect(screen.getByLabelText('Round Check home')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /find a business/i, hidden: true }).length).toBeGreaterThan(0)
  })

  it('opens a nav dropdown on click', async () => {
    renderWithProviders(<Header />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /services/i, hidden: true }))
    expect(screen.getByRole('menuitem', { name: 'Online Check-In', hidden: true })).toBeInTheDocument()
  })

  it('opens the mobile menu on click', async () => {
    renderWithProviders(<Header />)
    const user = userEvent.setup()
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })
})
