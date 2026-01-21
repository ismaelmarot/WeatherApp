import { useState, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { getWeatherByCoords } from '../services/weather.service';
import { getWeatherByCity } from '../services/weather.service';
import type { WeatherResponse } from '../services/weather.service';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';
import { WeatherCurrent } from '../components/weather/WeatherCurrent/WeatherCurrent';
import { WeatherDayInfo } from '../components/weather/WeatherDayInfo/WeatherDayInfo';
import { WeatherDetails } from '../components/weather/WeatherDetails/WeatherDetails';
import { Div } from './Home.style';

const Home = () => {
  const [city, setCity] = useState('');
  const { loading, error, coords } = useGeolocation();
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [uiError, setUiError] = useState<string | null>(null);


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

    const fetchWeather = async () => {
      setIsFetching(true);
      setUiError(null);

      try {
        const data = await getWeatherByCoords(
          coords.latitude,
          coords.longitude
        );
        setWeather(data);
      } catch {
        setUiError('Unable to get weather for your location');
      } finally {
        setIsFetching(false);
      }
    };

    fetchWeather();
  }, [coords]);


  return (
    <Div>
      <h1 className='text-center'>Weather App</h1>
      <p>Check the weather anywhere</p>

      <WeatherSearch
        value={city}
        onChange={setCity}
        onSubmit={handleSearch}
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
          {/* <h2>{weather.location.name}</h2> */}

          {/* <p style={{ fontSize: '48px', margin: '8px 0' }}>
            {Math.round(weather.current.temp_c)}°C
          </p> */}

          <p>🌡️ Feels like: {Math.round(weather.current.feelslike_c)}°C</p>

          {/* <div style={{ marginTop: '16px' }}>
            <p>💧 Humedad: {weather.current.humidity}%</p>
            <p>💨 Viento: {weather.current.wind_kph} km/h</p>
            <p>☀️ UV: {weather.current.uv}</p>
          </div> */}
        </div>
      )}

      {weather && (
        <>
          <WeatherCurrent weather={weather} />
          <WeatherDetails weather={weather} />
          <WeatherDayInfo weather={weather} />
        </>
      )}

    </Div>
  )
}

export default Home
