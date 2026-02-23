import { MOON_IMAGES } from '../../constants'
import type { MoonPhase } from '../../types'

export function getMoonImage(phase: string): string {
    return MOON_IMAGES[phase as MoonPhase] ?? MOON_IMAGES['Full Moon']
}