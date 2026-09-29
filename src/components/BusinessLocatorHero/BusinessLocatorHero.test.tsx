import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { BusinessLocatorHero } from './BusinessLocatorHero'

describe('BusinessLocatorHero', () => {
  it('renders the heading', () => {
    renderWithProviders(<BusinessLocatorHero />)
    expect(screen.getByRole('heading', { name: 'Find a Business' })).toBeInTheDocument()
  })
})
