import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getWeatherByCoords } from './weather.service'

describe('weather.service', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('calls fetch and returns data', async () => {
        const mockData = { temp: 30 }

        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue({
                ok: true,
                json: async () => mockData,
            })
        )

        const result = await getWeatherByCoords(10, 20)

        expect(fetch).toHaveBeenCalled()
        expect(result).toEqual(mockData)
    })

    it('throws error if response not ok', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue({
                ok: false,
            })
        )

        await expect(getWeatherByCoords(10, 20))
        .rejects
        .toThrow()
    })
})