import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import { BusinessSearchForm } from './BusinessSearchForm'

describe('BusinessSearchForm', () => {
  it('calls onSearch with the trimmed query', async () => {
    const onSearch = vi.fn()
    renderWithProviders(<BusinessSearchForm onSearch={onSearch} />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('City or ZIP code'), '  Austin  ')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(onSearch).toHaveBeenCalledWith('Austin')
  })
})
