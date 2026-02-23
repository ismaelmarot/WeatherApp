export function getCurrentHour(weather: any): number {
    return Number(weather?.location.localtime.split(' ')[1].split(':')[0])
}

export function formatHour(time: string, locale = 'es-AR'): string {
    return new Date(time).toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
    })
}

export function getNextHours(time: string, count: number = 3): number[] {
    const hour = Number(new Date(time).getHours())
    return Array.from({ length: count }, (_, i) => (hour + i + 1) % 24)
}
