export function pm25ToAQI(value: number): number {
    if (value <= 12) return (value / 12) * 50;
    if (value <= 35.4)
        return 50 + ((value - 12.1) / (35.4 - 12.1)) * 50;
    if (value <= 55.4)
        return 100 + ((value - 35.5) / (55.4 - 35.5)) * 50;
    return 150;
}

export function pm10ToAQI(value: number): number {
    if (value <= 54) return (value / 54) * 50;
    if (value <= 154)
        return 50 + ((value - 55) / (154 - 55)) * 50;
    return 100;
}

export function simpleGasToAQI(value: number, safeMax: number): number {
    return Math.min((value / safeMax) * 50, 100);
}
