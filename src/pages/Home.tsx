import { useState, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { getForecastByCoords, getWeatherByCoords } from '../services/weather.service';
import { getWeatherByCity } from '../services/weather.service';
import type { WeatherResponse } from '../services/weather.service';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';
import { WeatherCurrent } from '../components/weather/WeatherCurrent/WeatherCurrent';
import { WeatherDayInfo } from '../components/weather/WeatherDayInfo/WeatherDayInfo';
import { WeatherDetails } from '../components/weather/WeatherDetails/WeatherDetails';
import { WeatherExtras } from '../components/weather/WeatherExtras/WeatherExtras';
import { Div } from './Home.style';
import { LunarCalendar } from '../components/LunarCalendar/LunarCalendar';
import { HourlyForecast } from '../components/weather/HourlyForecast/HourlyForecast';
import { HourlyWeatherChart } from '../components/HourlyWeatherChart';
import { RainChanceChart } from '../components/weather/RainChanceChart/RainChanceChart';

const Home = () => {
  const [city, setCity] = useState('');
  const { loading, error, coords } = useGeolocation();
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [uiError, setUiError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<any>(null);

  const hourlyForecast = forecast?.forecastday?.[0]?.hour ?? [];


  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setCity('');
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (!coords) return;

    const fetchAllWeather = async () => {
      setIsFetching(true);
      setUiError(null);

      try {
        // 1️⃣ Clima actual
        const weatherData = await getWeatherByCoords(
          coords.latitude,
          coords.longitude
        );
        setWeather(weatherData);

        // 2️⃣ Forecast + luna
        const forecastData = await getForecastByCoords(
          coords.latitude,
          coords.longitude,
          7
        );
        setForecast(forecastData);

      } catch (error) {
        setUiError('Unable to get weather for your location');
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchAllWeather();
  }, [coords]);

  function getNextHours(forecast: any) {
    const now = new Date();

    return forecast.forecast.forecastday[0].hour
      .filter((h: any) => new Date(h.time) >= now)
      .slice(0, 12);
  }

  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
      setIsFetching(true);
      setUiError(null);

      const weatherData = await getWeatherByCoords(lat, lon);
      setWeather(weatherData);

      const forecastData = await getForecastByCoords(lat, lon, 7);
      setForecast(forecastData);

    } catch (error) {
      setUiError('Unable to get weather for selected location');
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };


  const currentHour = Number(
    weather?.location.localtime.split(' ')[1].split(':')[0]
  );    

  return (
    <Div>
      <h1 className='text-center'>Weather App</h1>
      <p>Check the weather anywhere</p>

      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);
          fetchWeatherByCoords(location.lat, location.lon);
        }}
      />

      {loading && <p>Getting your location...</p>}
      {error && <p>{error}</p>}

      {coords && (
        <p>Your current location: 
          Lat: {coords.latitude.toFixed(2)} - Lon:{' '}
          {coords.longitude.toFixed(2)}
        </p>
      )}

      {weather && (
        <div>
          <p>🌡️ Feels like: {Math.round(weather.current.feelslike_c)}°C</p>
        </div>
      )}

      {weather && (
        <>
          <WeatherCurrent weather={weather} />
          <WeatherDetails weather={weather} />
          <WeatherDayInfo weather={weather} />
          <WeatherExtras weather={weather} />
        </>
      )}

      {forecast && (
        <LunarCalendar
          days={forecast.forecast.forecastday.map((d: any) => ({
            date: d.date,
            moon_phase: d.astro.moon_phase,
            moon_illumination: d.astro.moon_illumination
          }))}
        />
      )}

      {forecast && (
        <HourlyForecast hours={getNextHours(forecast)} />
      )}

      {hourlyForecast.length > 0 && (
        <HourlyWeatherChart data={hourlyForecast} />
      )}

      {weather && (
        <RainChanceChart
          hours={weather.forecast.forecastday[0].hour.slice(
            currentHour,
            currentHour + 12
          )}
        />
      )}

      
    </Div>
  )
}

export default Home
