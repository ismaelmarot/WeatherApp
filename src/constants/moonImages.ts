import type { MoonPhase } from '../types'
import {
    newMoon,
    fullMoon,
    firstQuarterMoon,
    lastQuarterMoon,
    waxingCrescentMoon,
    waxingGibbousMoon,
    waningCrescentMoon,
    waningGibbousMoon
} from '../assets/moon-phases'

export const MOON_IMAGES: Record<MoonPhase, string> = {
    'New Moon': newMoon,
    'Full Moon': fullMoon,
    'First Quarter': firstQuarterMoon,
    'Last Quarter': lastQuarterMoon,
    'Waxing Crescent': waxingCrescentMoon,
    'Waxing Gibbous': waxingGibbousMoon,
    'Waning Crescent': waningCrescentMoon,
    'Waning Gibbous': waningGibbousMoon,
};

export function getMoonImage(phase: string): string {
    return MOON_IMAGES[phase as MoonPhase] ?? MOON_IMAGES['Full Moon']
}
