import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { BusinessCard } from './BusinessCard'
import { businesses } from '../../data/businesses'

describe('BusinessCard', () => {
  it('renders the business details', () => {
    renderWithProviders(<BusinessCard business={businesses[0]} />)
    expect(screen.getByText(businesses[0].name)).toBeInTheDocument()
    expect(screen.getByText(businesses[0].category)).toBeInTheDocument()
    expect(screen.getByText(`${businesses[0].waitMinutes} min wait`)).toBeInTheDocument()
  })
})
