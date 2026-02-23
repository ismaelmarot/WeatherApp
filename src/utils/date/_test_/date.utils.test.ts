import { getCurrentHour, formatHour, getNextHours } from '../date.utils'

describe('Date Utils', () => {

  describe('getCurrentHour', () => {
    it('devuelve la hora correcta desde el objeto weather', () => {
      const weather = { location: { localtime: '2026-02-23 14:45' } }
      expect(getCurrentHour(weather)).toBe(14)
    })

    it('devuelve NaN si el objeto no tiene localtime', () => {
      expect(getCurrentHour({})).toBeNaN()
      expect(getCurrentHour({ location: {} })).toBeNaN()
    })
  })

  describe('formatHour', () => {
    it('formatea correctamente la hora en español', () => {
      const dateStr = '2026-02-23T14:30:00'
      expect(formatHour(dateStr)).toBe('14:30')
    })

    it('formatea correctamente la hora en otro locale', () => {
      const dateStr = '2026-02-23T14:30:00'
      expect(formatHour(dateStr, 'en-US')).toBe('2:30 PM')
    })
  })

  describe('getNextHours', () => {
    it('genera las siguientes horas correctamente', () => {
      const time = '2026-02-23T22:00:00'
      expect(getNextHours(time, 3)).toEqual([23, 0, 1])
    })

    it('usa el valor por defecto count = 3', () => {
      const time = '2026-02-23T10:00:00'
      expect(getNextHours(time)).toEqual([11, 12, 13])
    })
  })

})