import type { MoonPhase } from '../types'
import { moonImages } from './moonImages'

export function isMoonPhase(value: string): value is MoonPhase {
    return value in moonImages
}
