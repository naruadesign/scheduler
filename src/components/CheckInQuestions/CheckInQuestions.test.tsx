import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { CheckInQuestions } from './CheckInQuestions'

describe('CheckInQuestions', () => {
  it('renders the customer service link', () => {
    renderWithProviders(<CheckInQuestions />)
    expect(screen.getByRole('link', { name: 'Customer Service' })).toHaveAttribute(
      'href',
      'https://www.roundcheck.com/customer-service',
    )
  })
})
