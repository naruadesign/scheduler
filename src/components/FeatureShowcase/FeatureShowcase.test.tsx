import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { FeatureShowcase } from './FeatureShowcase'

describe('FeatureShowcase', () => {
  it('renders both feature cards', () => {
    renderWithProviders(<FeatureShowcase />)
    expect(screen.getByText('Online Check-In')).toBeInTheDocument()
    expect(screen.getByText('Client Notes')).toBeInTheDocument()
  })
})
