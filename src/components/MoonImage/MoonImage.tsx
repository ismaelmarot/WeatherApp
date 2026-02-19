import type { MoonPhase } from '../../types'
import { ItemMoon, Image } from './MoonImage.style'
import { moonImages } from '../../utils/moonImages'

type Props = {
    phase: MoonPhase;
}

export function MoonImage({ phase }: Props) {
    return (
        <ItemMoon>
            <Image
                src={moonImages[phase] ?? moonImages['Full Moon']}
                alt={phase}
            />
        </ItemMoon>
    )
}