import type { PlaceholderBlockProps } from '../../types'
import { Block } from './PlaceholderBlock.style'

export function PlaceholderBlock({ label }: PlaceholderBlockProps) {
    return <Block>{label}</Block>;
}