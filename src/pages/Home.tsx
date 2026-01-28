import { useState } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { useWeather } from '../hooks/useWeather';
import { getNextHours } from '../utils/getNextOurs.utils';
import { getCurrentHour } from '../utils/getCurrentHour.utils';
import {
  HourlyForecast,
  HourlyWeatherChart,
  LunarCalendar,
  RainChanceChart,
  WeatherCurrent,
  WeatherDayInfo,
  WeatherDetails,
  WeatherExtras,
  WeatherSearch
} from '../components';
import { Container, AlertError } from './Home.style';

const Home = () => {
  const [city, setCity] = useState('');
  const { coords, loading, error } = useGeolocation();
  const { weather, forecast, isFetching, uiError, fetchByCoords } = useWeather(coords);

  const hourlyForecast = forecast?.forecast?.forecastday?.[0]?.hour ?? [];
  const nextHours = forecast ? getNextHours(forecast) : [];
  const currentHour = weather ? getCurrentHour(weather) : 0;

  return (
    <Container>
      <h1>Weather App</h1>

      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);
          fetchByCoords(location.lat, location.lon);
        }}
      />

      {isFetching && <p>Loading weather...</p>}
      {uiError && <AlertError>{uiError}</AlertError>}
      {loading && <p>Getting your location...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <>
          <WeatherCurrent weather={weather} />
          <WeatherDetails weather={weather} />
          <WeatherDayInfo weather={weather} />
          <WeatherExtras weather={weather} />
        </>
      )}

      {forecast && (
        <>
          <LunarCalendar
            days={forecast.forecast.forecastday.map((d: any) => ({
              date: d.date,
              moon_phase: d.astro.moon_phase,
              moon_illumination: d.astro.moon_illumination
            }))}
          />

          <HourlyForecast hours={nextHours} />
        </>
      )}

      {weather && (
        <RainChanceChart
          hours={weather.forecast.forecastday[0].hour.slice(
            currentHour,
            currentHour + 12
          )}
        />
      )}

      {hourlyForecast.length > 0 && (
        <HourlyWeatherChart data={hourlyForecast} />
      )}
    </Container>
  );
};

export default Home;
