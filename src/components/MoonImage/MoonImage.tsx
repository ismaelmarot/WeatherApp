import { MOON_IMAGES } from '../../constants'
import type { MoonImageProps } from '../../types'
import { ItemMoon, Image } from './MoonImage.style'

export function MoonImage({ phase }: MoonImageProps) {
    return (
        <ItemMoon>
            <Image
                src={MOON_IMAGES[phase] ?? MOON_IMAGES['Full Moon']}
                alt={phase}
            />
        </ItemMoon>
    )
}