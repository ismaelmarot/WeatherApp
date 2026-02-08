import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { WeatherResponse } from '../types';
import { useGeolocation } from '../hooks';
import { getWeatherByCoords, getForecastByCoords } from '../services/weather.service';

type WeatherContextType = {
  weather: WeatherResponse | null;
  forecast: any | null;
  isFetching: boolean;
  uiError: string | null;
  fetchByCoords: (lat: number, lon: number) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type WeatherProviderProps = { children: ReactNode };

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<any | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [uiError, setUiError] = useState<string | null>(null);

  const { coords: geoCoords } = useGeolocation();
  const [activeCoords, setActiveCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    if (geoCoords && !activeCoords) setActiveCoords(geoCoords);
  }, [geoCoords]);

  useEffect(() => {
    if (!activeCoords) return;
    fetchByCoords(activeCoords.latitude, activeCoords.longitude);
  }, [activeCoords]);

  const fetchByCoords = async (lat: number, lon: number) => {
    try {
      setIsFetching(true);
      setUiError(null);

      const weatherData = await getWeatherByCoords(lat, lon);
      setWeather(weatherData);

      const forecastData = await getForecastByCoords(lat, lon, 7);
      setForecast(forecastData);
    } catch (err) {
      setUiError('Unable to fetch weather');
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, forecast, isFetching, uiError, fetchByCoords }}>
      {children}
    </WeatherContext.Provider>
  );
}

// Custom hook for the context
export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error('useWeatherContext must be used within WeatherProvider');
  return context;
}
