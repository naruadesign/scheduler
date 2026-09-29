import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { ServicesCategoryGrid } from './ServicesCategoryGrid'

describe('ServicesCategoryGrid', () => {
  it('renders every category', () => {
    renderWithProviders(<ServicesCategoryGrid />)
    expect(screen.getByRole('heading', { name: 'Health & Wellness' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional Services' })).toBeInTheDocument()
  })
})
