import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { CheckInSteps } from './CheckInSteps'

describe('CheckInSteps', () => {
  it('renders every step in order', () => {
    renderWithProviders(<CheckInSteps title="How to check in" steps={['Step one.', 'Step two.']} />)
    expect(screen.getByRole('heading', { name: 'How to check in' })).toBeInTheDocument()
    expect(screen.getByText('Step one.')).toBeInTheDocument()
    expect(screen.getByText('Step two.')).toBeInTheDocument()
  })
})
