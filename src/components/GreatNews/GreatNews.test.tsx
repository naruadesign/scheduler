import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { GreatNews } from './GreatNews'

describe('GreatNews', () => {
  it('renders all three cards', () => {
    renderWithProviders(<GreatNews />)
    expect(screen.getByRole('heading', { name: 'Own something great' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Find your next great business' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Work greatly' })).toBeInTheDocument()
  })
})
