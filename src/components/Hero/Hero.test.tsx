import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tagline, headline and check-in CTA', () => {
    renderWithProviders(<Hero />)
    expect(screen.getByText('Book it. Show up. Get it done.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Check in' })).toHaveAttribute('href', '/online-check-in')
  })
})
