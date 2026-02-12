import { windDeg } from '../constants'

export function windRotation(dir: string): number {
    const deg = windDeg(dir)
    return deg + 180 -45
}