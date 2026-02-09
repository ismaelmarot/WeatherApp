import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'
import { useState } from 'react';
import { WeatherSearch } from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'

export function MobileScreen1() {
  const [city, setCity] = useState('');
  const { fetchByCoords } = useWeatherContext();

  return (
    <ScreenLayoutBase>
      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);
          fetchByCoords(location.lat, location.lon);
        }}
      />
    </ScreenLayoutBase>
  )
}