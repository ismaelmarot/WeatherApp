export function getCurrentHour(weather: any): number {
  const localtime = weather?.location?.localtime
  if (!localtime) return NaN
  return Number(localtime.split(' ')[1].split(':')[0])
}

export function formatHour(time: string, locale = 'es-AR'): string {
  const is24h = locale === 'es-AR'
  return new Date(time).toLocaleTimeString(locale, {
    hour: is24h ? '2-digit' : 'numeric',
    minute: '2-digit',
    hour12: !is24h
  })
}

export function getNextHours(time: string, count: number = 3): number[] {
  const hour = new Date(time).getHours()
  return Array.from({ length: count }, (_, i) => (hour + i + 1) % 24)
}