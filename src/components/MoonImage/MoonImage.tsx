import { moonImages } from '../../utils'
import type { MoonImageProps } from '../../types'
import { ItemMoon, Image } from './MoonImage.style'

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