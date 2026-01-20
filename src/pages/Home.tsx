import { useState } from 'react';
import { WeatherSearch } from '../components/weather/WeatherSearch/WeatherSearch';
import { Div } from './Home.style';

const Home = () => {
  const [city, setCity] = useState('');

  return (
    <Div>
      <h1 className='text-center'>Weather App</h1>
      <p>Check the weather anywhere</p>

      <WeatherSearch value={city} onChange={setCity} />
    </Div>
  )
}

export default Home
