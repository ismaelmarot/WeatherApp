import type { MoonImageProps } from '../../types'
import { ItemMoon, Image } from './MoonImage.style'
import { moonImages } from '../../utils/moonImages'

export function MoonImage({ phase }: MoonImageProps) {
    return (
        <ItemMoon>
            <Image
                src={moonImages[phase] ?? moonImages['Full Moon']}
                alt={phase}
            />
        </ItemMoon>
    )
}