import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { SocialProof } from './SocialProof'

describe('SocialProof', () => {
  it('renders the review stat and CTA', () => {
    renderWithProviders(<SocialProof />)
    expect(screen.getByText('870k+')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Find a Business' })).toHaveAttribute('href', '/find-a-business')
  })
})
