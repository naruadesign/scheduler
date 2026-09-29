import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { CheckInIntro } from './CheckInIntro'

describe('CheckInIntro', () => {
  it('renders the intro copy', () => {
    renderWithProviders(<CheckInIntro />)
    expect(screen.getByText('Fast, convenient and—GREAT®')).toBeInTheDocument()
  })
})
