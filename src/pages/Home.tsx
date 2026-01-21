import { useState, useEffect } from 'react';
import { getWeatherByCoords } from '../services/weather.service';
import type { WeatherResponse } from '../services/weather.service';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';
import { useGeolocation } from '../hooks/useGeolocation';
import { Div } from './Home.style';

const Home = () => {
  const [city, setCity] = useState('');
  const { loading, error, coords } = useGeolocation();
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCoords(
          coords.latitude,
          coords.longitude
        );
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, [coords]);


  return (
    <Div>
      <h1 className='text-center'>Weather App</h1>
      <p>Check the weather anywhere</p>

      <WeatherSearch value={city} onChange={setCity} />

      {loading && <p>Getting your location...</p>}
      {error && <p>{error}</p>}

      {coords && (
        <p>
          Lat: {coords.latitude.toFixed(2)} - Lon:{' '}
          {coords.longitude.toFixed(2)}
        </p>
      )}

      {weather && (
        <div>
          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>
          <p>{Math.round(weather.current.temp_c)}°C</p>
          <p>{weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
        </div>
      )}


    </Div>
  )
}

export default Home
