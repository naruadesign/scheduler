import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { CheckInHero } from './CheckInHero'

describe('CheckInHero', () => {
  it('renders the title and CTA', () => {
    renderWithProviders(<CheckInHero />)
    expect(screen.getByRole('heading', { name: 'Online Check-In' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Find a business' })).toHaveAttribute('href', '/find-a-business')
  })
})
