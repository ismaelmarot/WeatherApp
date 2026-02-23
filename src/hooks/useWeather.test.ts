import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor, act } from '@testing-library/react'
import { useWeather } from './useWeather.hook'
import * as weatherService from '../services/weather.service'

vi.mock('../services/weather.service', () => ({
    getWeatherByCoords: vi.fn(),
    getForecastByCoords: vi.fn(),
}))

describe('useWeather', () => {
    const mockWeather = { temp: 25 }
    const mockForecast = { days: [1, 2, 3] }

    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('does nothing if coords is null', () => {
        renderHook(() => useWeather(null))

        expect(weatherService.getWeatherByCoords).not.toHaveBeenCalled()
        expect(weatherService.getForecastByCoords).not.toHaveBeenCalled()
    })

    it('fetches weather and forecast when coords change', async () => {
        vi.mocked(weatherService.getWeatherByCoords).mockResolvedValue(mockWeather as any)
        vi.mocked(weatherService.getForecastByCoords).mockResolvedValue(mockForecast)

        const { result } = renderHook(() =>
            useWeather({ latitude: 10, longitude: 20 })
        )

        await waitFor(() => {
            expect(result.current.isFetching).toBe(false)
        })

        expect(weatherService.getWeatherByCoords).toHaveBeenCalledWith(10, 20)
        expect(weatherService.getForecastByCoords).toHaveBeenCalledWith(10, 20, 7)

        expect(result.current.weather).toEqual(mockWeather)
        expect(result.current.forecast).toEqual(mockForecast)
        expect(result.current.uiError).toBe(null)
    })

    it('handles error correctly', async () => {
        vi.mocked(weatherService.getWeatherByCoords).mockRejectedValue(
            new Error('API error')
        )

        const { result } = renderHook(() =>
            useWeather({ latitude: 10, longitude: 20 })
        )

        await waitFor(() => {
            expect(result.current.isFetching).toBe(false)
        })

        expect(result.current.uiError).toBe('Unable to get weather')
        expect(result.current.weather).toBe(null)
    })

    it('fetchByCoords works when called manually', async () => {
        vi.mocked(weatherService.getWeatherByCoords).mockResolvedValue(mockWeather as any)
        vi.mocked(weatherService.getForecastByCoords).mockResolvedValue(mockForecast)

        const { result } = renderHook(() => useWeather(null))

        await act(async () => {
            await result.current.fetchByCoords(50, 60)
        })

        expect(weatherService.getWeatherByCoords).toHaveBeenCalledWith(50, 60)
        expect(result.current.weather).toEqual(mockWeather)
    })
})