import type { MoonPhase } from '../types'
import { MOON_IMAGES } from '../constants'

export function isMoonPhase(value: string): value is MoonPhase {
    return value in MOON_IMAGES
}