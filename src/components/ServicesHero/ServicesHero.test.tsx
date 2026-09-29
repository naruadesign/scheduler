import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { ServicesHero } from './ServicesHero'

describe('ServicesHero', () => {
  it('renders the heading and CTA', () => {
    renderWithProviders(<ServicesHero />)
    expect(screen.getByRole('heading', { name: /get ready to book something great®/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Find businesses near me' })).toHaveAttribute('href', '/find-a-business')
  })
})
