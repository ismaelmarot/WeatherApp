export type Cardinal = {
    label: 'N' | 'E' | 'S' | 'W';
    x: (size: number, center: number) => number;
    y: (size: number, center: number) => number;
};