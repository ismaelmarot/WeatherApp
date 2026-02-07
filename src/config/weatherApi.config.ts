export const WEATHER_API_CONFIG = {
    baseUrl: import.meta.env.VITE_WEATHER_BASE_URL,
    apiKey: import.meta.env.VITE_WEATHER_API_KEY,
    defaultDays: 7,
};

if (!WEATHER_API_CONFIG.apiKey) {
    throw new Error('Missing WeatherAPI key');
}

if (!WEATHER_API_CONFIG.baseUrl) {
    throw new Error('Missing WeatherAPI base URL');
}
