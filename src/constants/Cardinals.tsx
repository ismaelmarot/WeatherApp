import type { Cardinal } from '../types/CardinalDirections.type';

export const CARDINALS: Cardinal[] = [
    {
        label: 'N',
        x: (_, center) => center,
        y: () => 16,
    },
    {
        label: 'E',
        x: (size) => size - 12,
        y: (_, center) => center + 5,
    },
    {
        label: 'S',
        x: (_, center) => center,
        y: (size) => size - 6,
    },
    {
        label: 'W',
        x: () => 9,
        y: (_, center) => center + 5,
    },
];
