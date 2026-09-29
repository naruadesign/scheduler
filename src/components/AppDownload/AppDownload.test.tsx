import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { AppDownload } from './AppDownload'

describe('AppDownload', () => {
  it('shows a validation error for an invalid email', async () => {
    renderWithProviders(<AppDownload />)
    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(await screen.findByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a success message for a valid email', async () => {
    renderWithProviders(<AppDownload />)
    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Email Address'), 'person@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(await screen.findByText('Your email has been sent.')).toBeInTheDocument()
  })
})
