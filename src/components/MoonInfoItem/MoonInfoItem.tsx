import { Item, Label, Value } from './MoonInfoItem.style'

type Props = {
    label: string;
    value: string;
}

export function MoonInfoItem({ label, value }: Props) {
    return (
        <Item>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Item>
    )
}
