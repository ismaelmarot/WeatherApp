import { useState } from 'react'
import { useWeatherContext } from '../../../context'
import { WeatherSearch } from '../../../components'
import { CardMobile, ScreenMobile } from '../../../styles'

export function MobileScreen1() {
  const [city, setCity] = useState('')
  const { fetchByCoords } = useWeatherContext()

  return (
    <ScreenMobile>
      <CardMobile>
        <WeatherSearch
          value={city}
          onChange={setCity}
          onSelect={(location) => {
            setCity(location.name);
            fetchByCoords(location.lat, location.lon);
          }}
        />
      </CardMobile>
    </ScreenMobile>
  )
}