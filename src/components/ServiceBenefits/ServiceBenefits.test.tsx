import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { ServiceBenefits } from './ServiceBenefits'

describe('ServiceBenefits', () => {
  it('renders benefits and the pricing note', () => {
    renderWithProviders(<ServiceBenefits />)
    expect(screen.getByText('Client Notes')).toBeInTheDocument()
    expect(screen.getByText(/does not list prices/i)).toBeInTheDocument()
  })
})
