import { useState } from 'react';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';
import { useGeolocation } from '../hooks/useGeolocation';
import { Div } from './Home.style';

const Home = () => {
  const [city, setCity] = useState('');
  const { loading, error, coords } = useGeolocation();

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

    </Div>
  )
}

export default Home
