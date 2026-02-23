import { describe, it, expect, vi } from 'vitest'
import { getArrowCoordinates } from '../pressure.utils'

vi.mock('../../../constants', () => ({
    PRESSURE_RADIUS: 40,
    PRESSURE_MARKER_LENGTH: 10,
    PRESSURE_MARKER_OVERSHOOT: 5
}))


describe('getArrowCoordinates', () => {
    it('calcula coordenadas correctamente con percent = 0', () => {
        const result = getArrowCoordinates(0)

        expect(result.x1).toBeCloseTo(50)
        expect(result.y1).toBeCloseTo(50 + (40 - 10))
        expect(result.x2).toBeCloseTo(50)
        expect(result.y2).toBeCloseTo(50 + (40 + 5))
    })

    it('calcula coordenadas correctamente con percent = 0.25', () => {
        const result = getArrowCoordinates(0.25)

        expect(result.x1).toBeCloseTo(50 - (40 - 10))
        expect(result.y1).toBeCloseTo(50)
        expect(result.x2).toBeCloseTo(50 - (40 + 5))
        expect(result.y2).toBeCloseTo(50)
    })

    it('retorna siempre las propiedades correctas', () => {
        const result = getArrowCoordinates(0.5)

        expect(result).toHaveProperty('x1')
        expect(result).toHaveProperty('y1')
        expect(result).toHaveProperty('x2')
        expect(result).toHaveProperty('y2')
    })
})