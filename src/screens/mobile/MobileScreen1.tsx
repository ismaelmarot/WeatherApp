import { useState } from 'react';
import { WeatherSearch } from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'
import { ScreenLayoutNoGlass } from '../../layouts'

export function MobileScreen1() {
  const [city, setCity] = useState('')
  const { fetchByCoords } = useWeatherContext()

  return (
    <ScreenLayoutNoGlass>
      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);
          fetchByCoords(location.lat, location.lon);
        }}
      />
    </ScreenLayoutNoGlass>
  )
}