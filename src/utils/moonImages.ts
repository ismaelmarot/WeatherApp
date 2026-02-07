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

export const moonImages: Record<MoonPhase, string> = {
    'New Moon': newMoon,
    'Full Moon': fullMoon,
    'First Quarter': firstQuarterMoon,
    'Last Quarter': lastQuarterMoon,
    'Waxing Crescent': waxingCrescentMoon,
    'Waxing Gibbous': waxingGibbousMoon,
    'Waning Crescent': waningCrescentMoon,
    'Waning Gibbous': waningGibbousMoon,
}