import { useState, useEffect } from 'react';
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
  WeatherSearch,
  // Humidity, Wind, Pressure,
  AirQuality
} from '../components';
import { Container, AlertError } from './Home.style';
import { DailyRainChart } from '../components';

const Home = () => {
  const [city, setCity] = useState('');
  const { coords: geoCoords, loading, error } = useGeolocation();

  const [activeCoords, setActiveCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const { weather, forecast, isFetching, uiError, fetchByCoords } =
    useWeather(activeCoords);

  useEffect(() => {
    if (geoCoords && !activeCoords) {
      setActiveCoords(geoCoords);
    }
  }, [geoCoords]);

  const hourlyForecast = forecast?.forecast?.forecastday?.[0]?.hour ?? [];
  const nextHours = forecast ? getNextHours(forecast) : [];
  const currentHour = weather ? getCurrentHour(weather) : 0;

  return (
    <Container>
      <h1>Weather App</h1>
      
      {/* {weather && (
        <>
          <WeatherCurrent weather={weather} />
          <div style={{ display: 'flex', gap: '16px' }}>
            <Humidity value={weather.current.humidity} />

            <Wind
              speed={weather.current.wind_kph}
              degree={weather.current.wind_degree}
            />

            <Pressure value={weather.current.pressure_mb} />
          </div>

          <WeatherDetails weather={weather} />
          <WeatherDayInfo weather={weather} />
          <WeatherExtras weather={weather} />
        </>
      )} */}

      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);

          const coords = {
            latitude: location.lat,
            longitude: location.lon
          };

          setActiveCoords(coords);
          fetchByCoords(coords.latitude, coords.longitude);
        }}
      />

      {activeCoords && (
        <p>
          📍 Lat: {activeCoords.latitude.toFixed(2)} – Lon:{' '}
          {activeCoords.longitude.toFixed(2)}
        </p>
      )}

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

      {forecast && (
        <DailyRainChart
          hours={forecast.forecast.forecastday[0].hour}
        />
      )}

      caliad aire
      {weather?.current?.air_quality && (
        <AirQuality
          epaIndex={weather.current.air_quality['us-epa-index']}
          co={weather.current.air_quality.co}
          no2={weather.current.air_quality.no2}
          o3={weather.current.air_quality.o3}
          so2={weather.current.air_quality.so2}
          pm25={weather.current.air_quality.pm2_5}
          pm10={weather.current.air_quality.pm10}
        />
      )}



    </Container>
  );
};

export default Home;
