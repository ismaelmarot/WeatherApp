import { useState, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { useWeather } from '../hooks/useWeather';
import { getNextHours } from '../utils/getNextOurs.utils';
import { getCurrentHour } from '../utils/getCurrentHour.utils';
import {
  // HourlyForecast,
  // HourlyWeatherChart,
  // LunarCalendar,
  // RainChanceChart,
  // WeatherDayInfo,
  // WeatherExtras,
  WeatherCurrent,
  // WeatherDetails,
  WeatherSearch,
  // Humidity, Wind, Pressure,
  // AirQuality,
  // RainChance,
  CoordinatesInfo,
  UvIndex,
  PressureGauge,
  Humidity,
  PressureValue,
  Wind,
  LunarCalendar,
  HourlyForecast,
  RainChanceChart,
  HourlyWeatherChart,
  AirQuality,
  RainChance,
  WeatherDayInfo,
  WeatherExtras,
  MoonImage,
  MoonInfoItem,
  VisibilityItem,
  WindItem,
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

  const astro = weather?.forecast?.forecastday?.[0]?.astro;

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
        <CoordinatesInfo
          latitude={activeCoords.latitude}
          longitude={activeCoords.longitude}
        />
      )}

      {isFetching && <p>Loading weather...</p>}
      {uiError && <AlertError>{uiError}</AlertError>}
      {loading && <p>Getting your location...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <WeatherCurrent weather={weather} />
      )}
      
      {weather && (
          <UvIndex value={weather.current.uv} />
      )}

      {weather?.current?.humidity != null && (
        <Humidity value={weather.current.humidity} />
      )}

      {weather?.current?.pressure_mb != null && ( 
        <PressureValue value={weather.current.pressure_mb} />
      )}
      
      {weather && (
        <PressureGauge value={weather.current.pressure_mb} />  
      )}

      {weather?.current?.wind_kph != null &&
        weather?.current?.wind_degree != null && (
          <Wind 
            speed={weather.current.wind_kph} 
            degree={weather.current.wind_degree} 
          />
      )}

      {forecast?.forecast?.forecastday?.length > 0 && (
        <LunarCalendar
          days={forecast.forecast.forecastday.map((d: any) => ({
            date: d.date,
            moon_phase: d.astro.moon_phase,
            moon_illumination: d.astro.moon_illumination
          }))}
        />
      )}

      {nextHours?.length > 0 && (
        <HourlyForecast hours={nextHours} />
      )}

      {weather?.forecast?.forecastday?.[0]?.hour && (
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

      { forecast && (
        <DailyRainChart hours={forecast.forecast.forecastday[0].hour} />
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

      {forecast && weather && (
        <RainChance
          chance={forecast.forecast.forecastday[0].day.daily_chance_of_rain}
          isRainingNow={weather.current.precip_mm > 0}
        />
      )}


      {weather && (
        <WeatherDayInfo weather={weather} />
      )}



      {weather && (
        <VisibilityItem visibilityKm={weather.current.vis_km} />
      )}

      {weather && (
        <WindItem
          windKph={weather.current.wind_kph}
          windDir={weather.current.wind_dir}
        />
      )}

      {weather && (
        <MoonImage phase={astro.moon_phase} />
      )}

      {weather && (
        <MoonInfoItem
          label="Moon phase"
          value={astro.moon_phase}
        />
      )}

      {weather && (
        <MoonInfoItem
          label="Moon light"
          value={`${astro.moon_illumination}%`}
        />
      )}

      {weather && (
        <MoonInfoItem
          label="Moonrise"
          value={astro.moonrise}
        />
      )}

      {weather && (
        <MoonInfoItem
          label="Moonset"
          value={astro.moonset}
        />
      )}



    </Container>
  );
};

export default Home;
