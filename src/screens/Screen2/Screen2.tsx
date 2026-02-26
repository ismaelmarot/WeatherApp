import { useWeatherContext } from '../../context'
import { MobileScreenWithCard, WeatherCurrent } from '../../components'

export function Screen2() {
  const { weather } = useWeatherContext()

  if (!weather) return null

  return (
    <MobileScreenWithCard>
      <WeatherCurrent weather={weather} />
    </MobileScreenWithCard>
  )
}