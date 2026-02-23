import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useGeolocation } from './useGeolocation.hook'

describe('useGeolocation', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('returns initial loading state', () => {
        const mockGeolocation = {
        getCurrentPosition: vi.fn(),
        }

        Object.defineProperty(navigator, 'geolocation', {
        value: mockGeolocation,
        configurable: true,
        })

        const { result } = renderHook(() => useGeolocation())

        expect(result.current.loading).toBe(true)
        expect(result.current.error).toBe(null)
        expect(result.current.coords).toBe(null)
    })

    it('handles success case', async () => {
        const mockGeolocation = {
        getCurrentPosition: vi.fn((success) =>
            success({
            coords: { latitude: 10, longitude: 20 },
            })
        ),
        }

        Object.defineProperty(navigator, 'geolocation', {
        value: mockGeolocation,
        configurable: true,
        })

        const { result } = renderHook(() => useGeolocation())

        await waitFor(() => {
        expect(result.current.loading).toBe(false)
        })

        expect(result.current.coords).toEqual({
        latitude: 10,
        longitude: 20,
        })

        expect(result.current.error).toBe(null)
    })

    it('handles error case', async () => {
        const mockGeolocation = {
            getCurrentPosition: vi.fn((_, error) => error()),
        }

        Object.defineProperty(navigator, 'geolocation', {
            value: mockGeolocation,
            configurable: true,
        })

        const { result } = renderHook(() => useGeolocation())

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toBe('Unable to retrieve your location')
        expect(result.current.coords).toBe(null)
    })

    it('handles unsupported geolocation', async () => {
        Object.defineProperty(navigator, 'geolocation', {
            value: undefined,
            configurable: true,
        })

        const { result } = renderHook(() => useGeolocation())

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toBe(
        "Geolocation is not supported by your browser"
        )
        expect(result.current.coords).toBe(null)
    })
})