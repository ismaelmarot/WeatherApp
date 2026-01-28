export function getNextHours(forecast: any, count = 12) {
    const now = new Date();

    return forecast.forecast.forecastday[0].hour
        .filter((h: any) => new Date(h.time) >= now)
        .slice(0, count);
}