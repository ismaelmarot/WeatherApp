import { Block } from './PlaceholderBlock.style'

type Props = {
    label: string;
};

export function PlaceholderBlock({ label }: Props) {
    return <Block>{label}</Block>;
}
