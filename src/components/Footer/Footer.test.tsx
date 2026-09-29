import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer columns and legal text', () => {
    renderWithProviders(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })
})
