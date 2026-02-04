import type { WeatherResponse } from '../types';
import { WEATHER_API_CONFIG } from '../config/weatherApi.config';

const { baseUrl, apiKey, defaultDays } = WEATHER_API_CONFIG;

/* Weather by Coordinates */
export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const response = await fetch(
    `${baseUrl}/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&lang=es&aqi=yes`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Error fetching weather');
  }

  return response.json();
}

/* Weather by City */
export async function getWeatherByCity(
  city: string
): Promise<WeatherResponse> {
  const response = await fetch(
    `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=1&lang=es`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'City not found');
  }

  return response.json();
}

/* Forecast */
export async function getForecastByCoords(
  lat: number,
  lon: number,
  days = defaultDays
) {
  const response = await fetch(
    `${baseUrl}/forecast.json?key=${apiKey}&q=${lat},${lon}&days=${days}&lang=es`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Forecast error');
  }

  return response.json();
}
