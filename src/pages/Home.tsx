import { useState } from 'react';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';

const Home = () => {
  const [city, setCity] = useState('');

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <h1 className="text-center">Weather App</h1>
      <p>Check the weather anywhere</p>

      <WeatherSearch value={city} onChange={setCity} />
    </div>
  )
}

export default Home
