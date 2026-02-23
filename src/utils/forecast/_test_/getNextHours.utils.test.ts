import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getNextHours } from '../getNextHours.utils'

describe('getNextHours', () => {
    const mockNow = new Date('2026-02-23T12:00:00')

    beforeEach(() => {
        vi.useFakeTimers()
        vi.setSystemTime(mockNow)
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('devuelve [] si forecast no es válido', () => {
        expect(getNextHours(null)).toEqual([])
        expect(getNextHours({})).toEqual([])
    })

    it('filtra solo horas futuras incluyendo la actual', () => {
        const forecast = {
        forecast: {
            forecastday: [
            {
                hour: [
                { time: '2026-02-23T10:00:00' },
                { time: '2026-02-23T12:00:00' },
                { time: '2026-02-23T13:00:00' },
                { time: '2026-02-23T14:00:00' }
                ]
            }
            ]
        }
        }

        const result = getNextHours(forecast, 2)

        expect(result).toHaveLength(2)
        expect(result[0].time).toBe('2026-02-23T12:00:00')
        expect(result[1].time).toBe('2026-02-23T13:00:00')
    })

    it('usa count por defecto = 12', () => {
        const forecast = {
        forecast: {
            forecastday: [
            {
                hour: Array.from({ length: 20 }, (_, i) => ({
                time: `2026-02-23T${String(i + 12).padStart(2, '0')}:00:00`
                }))
            }
            ]
        }
        }

        const result = getNextHours(forecast)

        expect(result.length).toBeLessThanOrEqual(12)
    })
})