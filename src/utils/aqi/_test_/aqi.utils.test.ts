import { pm25ToAQI, pm10ToAQI, simpleGasToAQI, getAqiText } from '../aqi.utils'
import { AQI_TEXTS } from '../../../constants'

describe('AQI Utils', () => {

    describe('pm25ToAQI', () => {
        it('debe convertir correctamente valores de PM2.5 a AQI', () => {
            expect(pm25ToAQI(0)).toBe(0)
            expect(pm25ToAQI(6)).toBeCloseTo(25)
            expect(pm25ToAQI(12)).toBe(50)
            expect(pm25ToAQI(24)).toBeGreaterThan(50)
            expect(pm25ToAQI(36)).toBeGreaterThan(50)
            expect(pm25ToAQI(56)).toBe(150)
        })
    })

    describe('pm10ToAQI', () => {
        it('debe convertir correctamente valores de PM10 a AQI', () => {
            expect(pm10ToAQI(0)).toBe(0)
            expect(pm10ToAQI(27)).toBeCloseTo(25)
            expect(pm10ToAQI(54)).toBe(50)
            expect(pm10ToAQI(100)).toBeGreaterThan(50)
            expect(pm10ToAQI(155)).toBe(100)
        })
    })

    describe('simpleGasToAQI', () => {
        it('debe convertir correctamente gases simples a AQI', () => {
            expect(simpleGasToAQI(0, 100)).toBe(0)
            expect(simpleGasToAQI(50, 100)).toBe(25)
            expect(simpleGasToAQI(100, 100)).toBe(50)
            expect(simpleGasToAQI(200, 100)).toBe(100)
        })
    })

    describe('getAqiText', () => {
        it('debe retornar el texto correcto según el valor de AQI', () => {
            AQI_TEXTS.forEach((item) => {
                expect(getAqiText(item.max)).toBe(item.text)
            })
        })

        it('debe retornar el texto del último rango si AQI supera todos los rangos', () => {
            const maxAqi = Math.max(...AQI_TEXTS.map(i => i.max))
            const lastText = AQI_TEXTS[AQI_TEXTS.length - 1].text
            expect(getAqiText(maxAqi + 10)).toBe(lastText)
        })
    })
})