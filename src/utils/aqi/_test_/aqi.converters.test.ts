import { COLORS_AIR_QUALITY_LEVELS, GENERAL_COLORS } from '../../../constants'
import { getAqiColor } from '../aqi.converters'

describe('getAqiColor', () => {
    it('debe retornar el color correcto para un status válido', () => {
        Object.entries(COLORS_AIR_QUALITY_LEVELS).forEach(([status, color]) => {
            expect(getAqiColor(status)).toBe(color)
            
            expect(getAqiColor(status.toUpperCase())).toBe(color)
            expect(getAqiColor(status.toLowerCase())).toBe(color)
        })
    })

    it('debe retornar GENERAL_COLORS.white si el status es undefined', () => {
        expect(getAqiColor()).toBe(GENERAL_COLORS.white)
    })

    it('debe retornar GENERAL_COLORS.white si el status no existe', () => {
        expect(getAqiColor('status-que-no-existe')).toBe(GENERAL_COLORS.white)
    })
})