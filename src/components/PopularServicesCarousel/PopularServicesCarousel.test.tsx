import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { PopularServicesCarousel } from './PopularServicesCarousel'

describe('PopularServicesCarousel', () => {
  it('renders service cards', () => {
    renderWithProviders(<PopularServicesCarousel />)
    expect(screen.getByRole('heading', { name: 'Dental Checkup' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Home Repair Visit' })).toBeInTheDocument()
  })
})
