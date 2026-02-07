import { ItemMoon, Label, Image } from './MoonImage.style'
import { moonImages } from '../../utils/moonImages'

type Props = {
    phase: string;
}

export function MoonImage({ phase }: Props) {
    return (
        <ItemMoon>
            <Label>Moon</Label>
            <Image
                src={moonImages[phase] ?? moonImages['Full Moon']}
                alt={phase}
            />
        </ItemMoon>
    )
}
