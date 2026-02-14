import { WeatherCurrent } from '../../../components'
import { useWeatherContext } from '../../../context/WeatherContext'
import { ScreenLayoutGlass } from '../../../layouts'

export function MobileScreen2() {
  const { weather } = useWeatherContext()

  if (!weather) return null

  return (
    <ScreenLayoutGlass>
      <WeatherCurrent weather={weather} />
    </ScreenLayoutGlass>
  )
}