import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as constants from '../../../constants'
import { windRotation } from '../windRotation.utils'

describe('windRotation', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('llama a WIN_DEG con la dirección correcta', () => {
        const spy = vi.spyOn(constants, 'WIN_DEG').mockReturnValue(0)

        windRotation('N')

        expect(spy).toHaveBeenCalledWith('N')
    })

    it('calcula correctamente la rotación cuando WIN_DEG devuelve 90', () => {
        vi.spyOn(constants, 'WIN_DEG').mockReturnValue(90)

        const result = windRotation('E')

        expect(result).toBe(225)
    })

    it('calcula correctamente con otro valor', () => {
        vi.spyOn(constants, 'WIN_DEG').mockReturnValue(270)

        const result = windRotation('W')

        expect(result).toBe(405)
    })
})