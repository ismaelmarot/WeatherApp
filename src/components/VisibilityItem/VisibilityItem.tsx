import { Item, Label, Value } from './VisibilityItem.style'

type Props = {
    visibilityKm: number;
}

export function VisibilityItem({ visibilityKm }: Props) {
    return (
        <Item>
            <Label>Visibility</Label>
            <Value>{visibilityKm} km</Value>
        </Item>
    )
}
