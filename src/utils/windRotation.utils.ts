import { WIN_DEG } from '../constants'

export function windRotation(dir: string): number {
    const deg = WIN_DEG(dir)
    return deg + 180 -45
}