const icons = import.meta.glob('../assets/weather-icons/svg/*.svg',
    {
        eager: true,
        import: 'default',
    }
) as Record<string, string>;

export function getWeatherIconPath(fileName: string): string {
    const entry = Object.entries(icons).find(([path]) =>
        path.endsWith(`/${fileName}`)
    );

    if (!entry) {
        console.warn(`Icon not found: ${fileName}`);
        return '';
    }

    return entry[1];
}

export const WEATHER_ICONS = {
    sunny: 'wi-day-sunny.svg',
    partlyCloudy: 'wi-day-cloudy.svg',
    cloudy: 'wi-cloudy.svg',
    rain: 'wi-rain.svg',
    storm: 'wi-thunderstorm.svg',
    snow: 'wi-snow.svg',
    fog: 'wi-fog.svg',
    nightClear: 'wi-night-clear.svg',
    };
