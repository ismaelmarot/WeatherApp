import type { Cardinal } from '../types/CardinalDirections.type';

export const CARDINALS: Cardinal[] = [
    {
        label: 'N',
        x: (_, center) => center,
        y: () => 18,
    },
    {
        label: 'E',
        x: (size) => size - 13,
        y: (_, center) => center + 5,
    },
    {
        label: 'S',
        x: (_, center) => center,
        y: (size) => size - 6,
    },
    {
        label: 'W',
        x: () => 12,
        y: (_, center) => center + 5,
    },
];
