// import { useEffect, useState } from 'react';
// import type { WeatherResponse } from '../services/weather.service';
// import { getForecastByCoords, getWeatherByCoords } from '../services/weather.service';

// export function useWeather(coords: { latitude: number; longitude: number } | null) {
//     const [weather, setWeather] = useState<WeatherResponse | null>(null);
//     const [forecast, setForecast] = useState<any>(null);
//     const [isFetching, setIsFetching] = useState(false);
//     const [uiError, setUiError] = useState<string | null>(null);

//     useEffect(() => {
//         if (!coords) return;

//         fetchByCoords(coords.latitude, coords.longitude);
//     }, [coords]);

//     const fetchByCoords = async (lat: number, lon: number) => {
//         try {
//         setIsFetching(true);
//         setUiError(null);

//         const weatherData = await getWeatherByCoords(lat, lon);
//         setWeather(weatherData);

//         const forecastData = await getForecastByCoords(lat, lon, 7);
//         setForecast(forecastData);
//         } catch {
//         setUiError('Unable to get weather');
//         } finally {
//         setIsFetching(false);
//         }
//     };

//     return {
//         weather,
//         forecast,
//         isFetching,
//         uiError,
//         fetchByCoords
//     };
// }


import { useState } from 'react';
import type { WeatherResponse } from '../services/weather.service';
import {
  getWeatherByCoords,
  getForecastByCoords
} from '../services/weather.service';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [uiError, setUiError] = useState<string | null>(null);

  const fetchByCoords = async (lat: number, lon: number) => {
    try {
      setIsFetching(true);
      setUiError(null);

      const weatherData = await getWeatherByCoords(lat, lon);
      const forecastData = await getForecastByCoords(lat, lon, 7);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch {
      setUiError('Unable to get weather');
    } finally {
      setIsFetching(false);
    }
  };

  return {
    weather,
    forecast,
    isFetching,
    uiError,
    fetchByCoords
  };
}
