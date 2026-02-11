import { WeatherCurrent } from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'
import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'

export function MobileScreen2() {
  const { weather } = useWeatherContext()

  if (!weather) return null

  return (
    <ScreenLayoutBase>
      <WeatherCurrent weather={weather} />
    </ScreenLayoutBase>
  )
}