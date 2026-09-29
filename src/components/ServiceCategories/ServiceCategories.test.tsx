import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { ServiceCategories } from './ServiceCategories'

describe('ServiceCategories', () => {
  it('renders every category card', () => {
    renderWithProviders(<ServiceCategories />)
    expect(screen.getByText('GREAT® appointments for every need')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Health & Wellness' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional Services' })).toBeInTheDocument()
  })
})
