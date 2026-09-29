import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { BusinessResultsList } from './BusinessResultsList'
import { businesses } from '../../data/businesses'

describe('BusinessResultsList', () => {
  it('renders a card per business', () => {
    renderWithProviders(<BusinessResultsList businesses={businesses.slice(0, 2)} query="" />)
    expect(screen.getByText(businesses[0].name)).toBeInTheDocument()
    expect(screen.getByText(businesses[1].name)).toBeInTheDocument()
  })

  it('shows an empty state when there are no matches', () => {
    renderWithProviders(<BusinessResultsList businesses={[]} query="nowhere" />)
    expect(screen.getByText(/no businesses matched/i)).toBeInTheDocument()
  })
})
