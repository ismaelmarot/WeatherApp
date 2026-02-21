import { useState } from 'react'
import { useWeatherContext } from '../../../context'
import { MobileScreenWithCard , WeatherSearch } from '../../../components'

export function MobileScreen1() {
  const [city, setCity] = useState('')
  const { fetchByCoords } = useWeatherContext()

  return (
    <MobileScreenWithCard>
      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);
          fetchByCoords(location.lat, location.lon);
        }}
      />
    </MobileScreenWithCard>
  )
}