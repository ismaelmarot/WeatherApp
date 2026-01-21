import { useState, useEffect } from 'react';
import { getWeatherByCoords } from '../services/weather.service';
import { getWeatherByCity } from '../services/weather.service';
import type { WeatherResponse } from '../services/weather.service';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';
import { useGeolocation } from '../hooks/useGeolocation';
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
