import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { WeatherSearch } from './WeatherSearch'

vi.mock('../../constants', async (importOriginal) => {
  const actual = await importOriginal<any>()

  return {
    ...actual,
  }
})

describe('WeatherSearch', () => {
    const mockOnChange = vi.fn()
    const mockOnSelect = vi.fn()

    const mockResults = [
        {
            id: 1,
            name: 'Madrid',
            region: 'Madrid',
            country: 'Spain',
        },
    ]

    beforeEach(() => {
        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResults),
            } as Response)
        ) as any
    })

    test('does not fetch when value length is less than 2', () => {
        render(
        <WeatherSearch
            value="M"
            onChange={mockOnChange}
            onSelect={mockOnSelect}
        />
        )

        expect(globalThis.fetch).not.toHaveBeenCalled()
    })

    test('fetches and displays results when value length >= 2', async () => {
        render(
            <WeatherSearch
                value="Ma"
                onChange={mockOnChange}
                onSelect={mockOnSelect}
            />
        )

        await waitFor(() => {
            expect(globalThis.fetch).toHaveBeenCalled()
        })

        expect(await screen.findByText('Madrid')).toBeInTheDocument()

        expect(screen.getByText('Madrid, Spain')).toBeInTheDocument()
    })

    test('calls onSelect and hides list when clicking a result', async () => {
        render(
            <WeatherSearch
                value="Ma"
                onChange={mockOnChange}
                onSelect={mockOnSelect}
            />
        )

        const item = await screen.findByText('Madrid')
        fireEvent.click(item)

        expect(mockOnSelect).toHaveBeenCalledWith(mockResults[0])

        await waitFor(() => {
            expect(screen.queryByText('Madrid')).not.toBeInTheDocument()
        })
    })
})